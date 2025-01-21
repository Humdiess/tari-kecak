# cara penggunaan : 
# 1. Taruh file gambar (JPG atau PNG) yang ingin diubah ke format WebP di folder yang sama dengan file ini.
# 2. Jalankan file ini dengan perintah py png-to-webp.py.
# 3. File gambar akan diubah ke format WebP dan disimpan di folder yang sama dengan file ini.
# 4. Selesai.

import os
from PIL import Image

def convert_images_to_webp(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            image_path = os.path.join(directory, filename)
            image = Image.open(image_path)
            webp_path = os.path.splitext(image_path)[0] + ".webp"
            image.save(webp_path, "WEBP")
            print(f"Converted {filename} to {webp_path}")

if __name__ == "__main__":
    current_directory = os.path.dirname(os.path.abspath(__file__))
    convert_images_to_webp(current_directory)