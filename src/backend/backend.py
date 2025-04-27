from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from PIL import Image
import io
import base64 
from flask import send_file
import requests


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})



@app.route('/histogram', methods=['POST'])
def process_image():
    file = request.files['image']
    image = Image.open(file.stream).convert("RGB")
    image_np = np.array(image)
    
    gray = cv2.cvtColor(image_np, cv2.COLOR_RGB2GRAY)
    hist = cv2.calcHist([gray], [0], None, [256], [0, 256])
    hist = hist.flatten().tolist()

    return jsonify({
        "histogram": hist
    })



@app.route('/frequency', methods=['POST'])
def frequency_domain():
    file = request.files['image']
    image = Image.open(file.stream).convert("L")
    image_np = np.array(image)

    fourier_transform = np.fft.fft2(image_np)
    f_shift = np.fft.fftshift(fourier_transform)
    magnitude_spectrum = 20 * np.log(np.abs(f_shift) + 1)

    magnitude_spectrum = cv2.normalize(magnitude_spectrum, None, 0, 255, cv2.NORM_MINMAX)
    magnitude_spectrum = magnitude_spectrum.astype(np.uint8)

   
    spectrum_image = Image.fromarray(magnitude_spectrum)

    buffer = io.BytesIO()
    spectrum_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "frequency_image": base64_img
    })



@app.route('/morphology', methods=['POST'])
def morphology():
    file = request.files['image']
    kernel_type = request.form.get('kernelType', 'rect')
    kernel_size = int(request.form.get('kernelSize', 5))
    operation = request.form.get('operation', 'erosion')

    image = Image.open(file.stream).convert("L")
    image_np = np.array(image)

    shape_map = {
        'rect': cv2.MORPH_RECT,
        'ellipse': cv2.MORPH_ELLIPSE,
        'cross': cv2.MORPH_CROSS
    }

    if kernel_type not in shape_map:
        return jsonify({"error": "Invalid kernel type"}), 400

    if operation not in ['erosion', 'dilation', 'opening', 'closing']:
        return jsonify({"error": "Invalid operation"}), 400

    kernel_shape = shape_map[kernel_type]
    kernel = cv2.getStructuringElement(kernel_shape, (kernel_size, kernel_size))

    if operation == 'erosion':
        processed = cv2.erode(image_np, kernel, iterations=1)
    elif operation == 'dilation':
        processed = cv2.dilate(image_np, kernel, iterations=1)
    elif operation == 'opening':
        processed = cv2.morphologyEx(image_np, cv2.MORPH_OPEN, kernel)
    elif operation == 'closing':
        processed = cv2.morphologyEx(image_np, cv2.MORPH_CLOSE, kernel)
    else:
        return 'Invalid operation', 400
    
    processed_image = Image.fromarray(processed)
    buffer = io.BytesIO()
    processed_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "processed": base64_img
    })



@app.route('/flip', methods=['POST'])
def flip_image():
    file = request.files['image']
    flip_type = int(request.form.get('flipType', 0))
    image = Image.open(file.stream).convert("RGB")
    image_np = np.array(image)

    if flip_type == 0:
        flipped = cv2.flip(image_np, 0)
    elif flip_type == 1:
        flipped = cv2.flip(image_np, 1)
    elif flip_type == 99:  
        flipped = image_np
    else:
        return jsonify({"error": "Invalid flip type"}), 400

    flipped_image = Image.fromarray(flipped)
    buffer = io.BytesIO()
    flipped_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "flipped_image": base64_img
    })


@app.route('/edge', methods=['POST'])
def edge_detect():
    file = request.files['image']
    image = Image.open(file.stream).convert("RGB")
    image_np = np.array(image)

    
    gray = cv2.cvtColor(image_np, cv2.COLOR_RGB2GRAY)

    edges = cv2.Canny(gray, threshold1=100, threshold2=200)

    edges_rgb = cv2.cvtColor(edges, cv2.COLOR_GRAY2RGB)

    edge_image = Image.fromarray(edges_rgb)
    buffer = io.BytesIO()
    edge_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "edge_image": base64_img
    })


@app.route('/extract', methods=['POST'])
def extract_features():
    try:
        file = request.files['image']
        img = Image.open(file.stream).convert("RGB")
        img_np = np.array(img)
        img_bgr = cv2.cvtColor(img_np, cv2.COLOR_RGB2BGR)
        gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)
        
        if gray.shape[1] % 2 != 0:  
            gray = gray[:, :-1] 
        
        h, w = gray.shape
        edges = cv2.Canny(gray, 100, 200)
        edge_count = np.sum(edges > 0)

        _, thresh = cv2.threshold(gray, 127, 255, 0)
        contours, _ = cv2.findContours(thresh, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
        largest_area = max([cv2.contourArea(c) for c in contours], default=0)

        aspect_ratio = w / h
        brightness = np.mean(gray)

        half = w // 2
        left = gray[:, :half]
        right = cv2.flip(gray[:, half:], 1)
        symmetry = np.sum(np.abs(left - right)) / (h * half)

        return jsonify({
            "edge_count": int(edge_count),
            "aspect_ratio": round(aspect_ratio, 2),
            "brightness": round(brightness, 2),
            "largest_area": int(largest_area),
            "symmetry": round(symmetry, 2)
        })

    except Exception as e:
        print(f"Error processing image: {str(e)}")
        return jsonify({"error": str(e)}), 500


@app.route('/extract-two', methods=['POST'])
def extract_human_features():
    try:
        file = request.files['image']
        img = Image.open(file.stream).convert("RGB")
        img_np = np.array(img)
        img_bgr = cv2.cvtColor(img_np, cv2.COLOR_RGB2BGR)
        gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)

        classifiers = {
            "frontal_faces": 'haarcascade_frontalface_default.xml',
            "profile_faces": 'haarcascade_profileface.xml',
            "eyes": 'haarcascade_eye.xml',
            "eyes_with_glasses": 'haarcascade_eye_tree_eyeglasses.xml',
            "smiles": 'haarcascade_smile.xml',
            "full_bodies": 'haarcascade_fullbody.xml',
            "upper_bodies": 'haarcascade_upperbody.xml',
            "lower_bodies": 'haarcascade_lowerbody.xml'
        }

        features_to_highlight = {
            "frontal_faces": (0, 255, 0),  
            "profile_faces": (0, 255, 0),  
            "full_bodies": (255, 0, 0),    
        }

        results = {}
        detection_flags = {"faces_or_bodies": False}
        detected_features = {}  
        
        for key, file_name in classifiers.items():
            cascade = cv2.CascadeClassifier(cv2.data.haarcascades + file_name)
            detections = cascade.detectMultiScale(gray, 1.1, 4)
            results[key] = len(detections)
            detected_features[key] = detections

            if key in ["frontal_faces", "profile_faces", "full_bodies", "upper_bodies", "lower_bodies"] and len(detections) > 0:
                detection_flags["faces_or_bodies"] = True

        for feature, color in features_to_highlight.items():
            if feature in detected_features:
                for (x, y, w, h) in detected_features[feature]:
                    thickness = 2
                    cv2.rectangle(img_bgr, (x, y), (x + w, y + h), color, thickness)
                    
                    cv2.putText(img_bgr, feature.replace('_', ' '), 
                                (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 1)

        classification = "Human" if detection_flags["faces_or_bodies"] else "Not Human"

        _, buffer = cv2.imencode('.jpg', img_bgr)
        img_bytes = buffer.tobytes()
        img_base64 = base64.b64encode(img_bytes).decode('utf-8')

        return jsonify({
            "classification": classification,
            "marked_image_base64": img_base64
        })

    except Exception as e:
        print(f"Error processing image: {str(e)}")
        return jsonify({"error": str(e)}), 500



@app.route('/smooth', methods=['POST'])
def smooth_image():
    file = request.files['image']
    blur_type = request.form.get('blurType', 'gaussian').lower()  # Default to Gaussian
    kernel_size = int(request.form.get('kernelSize', 5))  # Default kernel size is 5

    try:
        # Open and convert the image to numpy array
        image = Image.open(file.stream).convert("RGB")
        image_np = np.array(image)
    except Exception as e:
        return jsonify({"error": f"Invalid image file: {str(e)}"}), 400


    # Apply smoothing based on selected blur type
    if blur_type == 'average':
        smoothed = cv2.blur(image_np, (kernel_size, kernel_size))  # Box filter
    elif blur_type == 'gaussian':
        smoothed = cv2.GaussianBlur(image_np, (kernel_size, kernel_size), 0)  # Gaussian filter
    elif blur_type == 'median':
        smoothed = cv2.medianBlur(image_np, kernel_size)  # Median filter
    else:
        return jsonify({"error": "Invalid blur type. Choose from 'average', 'gaussian', 'median', 'bilateral'."}), 400

    # Convert the result to an image
    smoothed_image = Image.fromarray(smoothed)
    buffer = io.BytesIO()
    smoothed_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "smoothed_image": base64_img
    })

@app.route('/sharpen', methods=['POST'])
def sharpen_image():
    file = request.files.get('image')
    if not file:
        return jsonify({"error": "No image file provided."}), 400

    try:
        image = Image.open(file.stream).convert("RGB")
        image_np = np.array(image)
    except Exception as e:
        return jsonify({"error": f"Invalid image file: {str(e)}"}), 400

    # Define the sharpening kernel
    kernel = np.array([
        [0, -1, 0],
        [-1, 5, -1],
        [0, -1, 0]
    ])

    sharpened = cv2.filter2D(image_np, -1, kernel)

    sharpened_image = Image.fromarray(sharpened)
    buffer = io.BytesIO()
    sharpened_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "sharpened_image": base64_img
    })


@app.route('/bitplane', methods=['POST'])
def bit_plane_extraction():
    file = request.files.get('image')
    if not file:
        return jsonify({"error": "No image file provided."}), 400

    try:
        image = Image.open(file.stream).convert("L")
        image_np = np.array(image)
    except Exception as e:
        return jsonify({"error": f"Invalid image file: {str(e)}"}), 400

    bit_planes = []
    for i in range(8):
        bit_plane = ((image_np >> i) & 1) * 255
        bit_planes.append(bit_plane)

    bit_plane_images = []
    for i in range(2, 8):
        buffer = io.BytesIO()
        Image.fromarray(bit_planes[i]).save(buffer, format="PNG")
        bit_plane_images.append(base64.b64encode(buffer.getvalue()).decode("utf-8"))

    return jsonify({
        "bit_planes": bit_plane_images
    })

@app.route('/bitwise', methods=['POST'])
def bitwise_operations():
    operation = request.form.get('operation', 'and').lower()
    file = request.files.get('image')

    # Constant image: a white rectangle on black background
    constant_img = np.zeros((300, 300, 3), dtype=np.uint8)
    constant_img = cv2.rectangle(constant_img, (50, 50), (250, 250), (255, 255, 255), -1)

    if operation == 'not':
        processed = cv2.bitwise_not(constant_img)
    elif not file:
        return jsonify({"error": "Image file required for AND, OR, XOR operations"}), 400

    try:
        image = Image.open(file.stream).convert("RGB")
        image_np = np.array(image)
        image_np = cv2.resize(image_np, (300, 300))
    except Exception as e:
        return jsonify({"error": f"Invalid image file: {str(e)}"}), 400

    if operation == 'and':
        processed = cv2.bitwise_and(constant_img, image_np)
    elif operation == 'or':
        processed = cv2.bitwise_or(constant_img, image_np)
    elif operation == 'xor':
        processed = cv2.bitwise_xor(constant_img, image_np)
    else:
        return jsonify({"error": "Invalid operation. Choose from 'and', 'or', 'xor', 'not'."}), 400

    processed_image = Image.fromarray(processed)
    buffer = io.BytesIO()
    processed_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "bitwise_image": base64_img
    })


def apply_thresholding(image, method='otsu'):
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    if method == 'simple':
        _, thresholded_image = cv2.threshold(gray_image, 127, 255, cv2.THRESH_BINARY)
    elif method == 'adaptive':
        thresholded_image = cv2.adaptiveThreshold(
            gray_image, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2
        )
    elif method == 'otsu':
        _, thresholded_image = cv2.threshold(gray_image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    else:
        raise ValueError("Invalid thresholding method")
    
    return thresholded_image

@app.route('/threshold', methods=['POST'])
def threshold():
    file = request.files.get('image')
    method = request.form.get('method', 'otsu').lower()

    valid_methods = ['simple', 'adaptive', 'otsu']

    if not file:
        return jsonify({"error": "No image file provided."}), 400

    if method not in valid_methods:
        return jsonify({"error": "Invalid method. Choose from 'simple', 'adaptive', 'otsu'."}), 400

    try:
        image = Image.open(file.stream).convert("RGB")
        image_np = np.array(image)
    except Exception as e:
        return jsonify({"error": f"Invalid image file: {str(e)}"}), 400

    try:
        processed = apply_thresholding(image_np, method)
    except Exception as e:
        return jsonify({"error": f"Thresholding failed: {str(e)}"}), 400

    processed_image = Image.fromarray(processed)
    buffer = io.BytesIO()
    processed_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "processed": base64_img
    })


@app.route('/filter', methods=['POST'])
def apply_filter():
    file = request.files.get('image')
    filter_type = request.form.get('filterType', 'sharpen').lower()

    if not file:
        return jsonify({"error": "No image file provided."}), 400

    try:
        image = Image.open(file.stream).convert("RGB")
        image_np = np.array(image)
    except Exception as e:
        return jsonify({"error": f"Invalid image file: {str(e)}"}), 400

    kernels = {
        'sharpen': np.array([
            [0, -1, 0],
            [-1, 5, -1],
            [0, -1, 0]
        ]),
        'edge': np.array([
            [-1, -1, -1],
            [-1, 8, -1],
            [-1, -1, -1]
        ]),
        'emboss': np.array([
            [-2, -1, 0],
            [-1, 1, 1],
            [0, 1, 2]
        ]),
        'outline': np.array([
            [0, -1, 0],
            [-1, 4, -1],
            [0, -1, 0]
        ]),
        'easter': np.array([
            [-2, 0, -1, 0, 1],
            [0, -1, 2, -1, 0],
            [-1, 2, 3, 2, -1],
            [0, -1, 2, -1, 0],
            [1, 0,-1, 0, -2],
        ]),
            'blur': np.array([
            [0.0625, 0.125, 0.0625],
            [0.125,  0.25,  0.125],
            [0.0625, 0.125, 0.0625]
        ]),
        'starburst': np.array([
            [-1, -1,  0, -1, -1],
            [-1,  0,  1,  0, -1],
            [ 0,  1,  8,  1,  0],
            [-1,  0,  1,  0, -1],
            [-1, -1,  0, -1, -1]
        ])/8,
        'glow': np.array([
            [0,  0, -1,  0,  0],
            [0, -1, -1, -1,  0],
            [-1, -1, 16, -1, -1],
            [0, -1, -1, -1,  0],
            [0,  0, -1,  0,  0]
        ])/2,
        'motion': np.array([
            [1, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0],
            [0, 0, 0, 0, 1]
        ])/5,
        'crystallize': np.array([
            [-1, -1, -1, -1, -1],
            [-1,  2,  2,  2, -1],
            [-1,  2,  8,  2, -1],
            [-1,  2,  2,  2, -1],
            [-1, -1, -1, -1, -1]
        ])/8
    }

    if filter_type not in kernels:
        return jsonify({"error": "Invalid filter type. Choose from 'sharpen', 'edge', 'emboss', 'outline'."}), 400

    kernel = kernels[filter_type]
    processed = cv2.filter2D(image_np, -1, kernel)

    processed_image = Image.fromarray(processed)
    buffer = io.BytesIO()
    processed_image.save(buffer, format="PNG")
    base64_img = base64.b64encode(buffer.getvalue()).decode("utf-8")

    return jsonify({
        "processed": base64_img
    })

if __name__ == '__main__':
    app.run(debug=True)
