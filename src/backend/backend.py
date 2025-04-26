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


if __name__ == '__main__':
    app.run(debug=True)
