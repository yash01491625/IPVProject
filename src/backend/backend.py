from flask import Flask, request, make_response
from flask_cors import CORS
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/process', methods=['POST'])
def process_image():
    if 'image' not in request.files:
        return 'No image uploaded', 400
    
    file = request.files['image']
    if file.filename == '':
        return 'No selected image', 400

    operation = request.form.get('operation', 'erosion')
    kernel_size = int(request.form.get('kernelSize', 5))

    # Ensure kernel size is odd and between 1-21
    kernel_size = max(1, min(21, kernel_size))
    kernel_size = kernel_size + 1 if kernel_size % 2 == 0 else kernel_size

    img_bytes = file.read()
    nparr = np.frombuffer(img_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    kernel = np.ones((kernel_size, kernel_size), np.uint8)

    if operation == 'erosion':
        processed = cv2.erode(img, kernel, iterations=1)
    elif operation == 'dilation':
        processed = cv2.dilate(img, kernel, iterations=1)
    elif operation == 'opening':
        processed = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)
    elif operation == 'closing':
        processed = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)
    else:
        return 'Invalid operation', 400

    _, encoded_image = cv2.imencode('.png', processed)
    response = make_response(encoded_image.tobytes())
    response.headers.set('Content-Type', 'image/png')
    return response

if __name__ == '__main__':
    app.run(debug=True)