from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)  # This will allow all domains. For production, you can configure it more tightly.

@app.route('/process', methods=['POST'])
def process_image():
    file = request.files['image']
    in_memory_file = file.read()
    npimg = np.frombuffer(in_memory_file, np.uint8)
    img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

    height, width = img.shape[:2]

    return jsonify({ "height": height, "width": width })

if __name__ == '__main__':
    app.run(debug=True)
