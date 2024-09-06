# Node.js URL Replacement Tool

#Eng version

This project contains two Node.js scripts for reading a JSON file, replacing specific URLs, and generating output files with the modified links. It provides two different ways of processing and saving the results: one generates a plain text file, and the other creates a new JSON file with the updated links.

## Features
- Recursively scans a JSON file for URLs starting with `https://vizionplatformprod.blob.core.windows.net/`.
- Replaces URLs with new formats:
  - In `insert-link.js`, the URLs are replaced with `https://platformfiles.vizion.space/` and `.jpeg` is appended at the end.
  - In `replace-link.js`, the URLs are replaced with `/assets/aaa-resource/` and `.jpeg` is appended.
- Outputs:
  - `insert-link.js`: Generates a text file (`data.txt`) listing all the modified URLs and the total number of changes.
  - `replace-link.js`: Creates an updated JSON file (`updated_data.json`) with the modified URLs.

## File Descriptions

### 1. insert-link.js
This script:
- Reads `data.json`, scans for specific URLs, and replaces them.
- Outputs the modified URLs and the total number of changed URLs to a text file (`data.txt`).

#### Usage
1. Place your JSON file as `data.json` in the root directory.
2. Run the script:
   ```bash
   node insert-link.js
   node replace-link.js

#Vie version

Dự án này bao gồm hai script Node.js để đọc tệp JSON, thay thế các URL cụ thể và tạo các tệp đầu ra với các liên kết đã được sửa đổi. Nó cung cấp hai cách khác nhau để xử lý và lưu kết quả: một cái tạo ra tệp văn bản thuần (`.txt`), và cái còn lại tạo ra tệp JSON mới với các liên kết đã cập nhật.

## Tính Năng
- Quét đệ quy tệp JSON để tìm các URL bắt đầu bằng `https://vizionplatformprod.blob.core.windows.net/`.
- Thay thế các URL bằng các định dạng mới:
  - Trong `insert-link.js`, các URL được thay thế bằng `https://platformfiles.vizion.space/` và `.jpeg` được thêm vào cuối.
  - Trong `replace-link.js`, các URL được thay thế bằng `/assets/aaa-resource/` và `.jpeg` được thêm vào.
- Đầu ra:
  - `insert-link.js`: Tạo một tệp văn bản (`data.txt`) liệt kê tất cả các URL đã được sửa đổi và tổng số thay đổi.
  - `replace-link.js`: Tạo một tệp JSON cập nhật (`updated_data.json`) với các URL đã sửa đổi.

## Mô Tả Các Tệp

### 1. insert-link.js
Script này:
- Đọc tệp `data.json`, quét các URL cụ thể và thay thế chúng.
- Xuất các URL đã sửa đổi và tổng số URL đã thay đổi vào một tệp văn bản (`data.txt`).

#### Cách Sử Dụng
1. Đặt tệp JSON của bạn dưới tên `data.json` trong thư mục gốc.
2. Chạy script:
   ```bash
   node insert-link.js
   node replace-link.js
