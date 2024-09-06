# Node.js URL Replacement Tool

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
