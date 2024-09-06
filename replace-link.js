const fs = require('fs');

// Hàm đệ quy để tìm và thay thế URL trong bất kỳ trường nào của JSON
const replaceUrls = (obj) => {
  let changedLinksCount = 0;

  const traverseAndReplace = (item) => {
    if (typeof item === 'object' && item !== null) {
      for (let key in item) {
        if (typeof item[key] === 'string' && item[key].startsWith('https://vizionplatformprod.blob.core.windows.net/')) {
          // Thay thế URL
          const originalUrl = item[key];
          const pathOnly = originalUrl.replace(
            'https://vizionplatformprod.blob.core.windows.net/',
            '/assets/aaa-resource/'
          ) + '.jpeg';  // Thêm .jpeg vào cuối URL

          // In ra URL đã thay đổi
          console.log(`Original URL: ${originalUrl}`);
          console.log(`Updated URL: ${pathOnly}`);

          // Cập nhật URL trong object
          item[key] = pathOnly;

          changedLinksCount++;
        } else if (typeof item[key] === 'object' || Array.isArray(item[key])) {
          // Đệ quy nếu giá trị là object hoặc array
          traverseAndReplace(item[key]);
        }
      }
    }
  };

  traverseAndReplace(obj);
  return changedLinksCount;
};

// Đọc file JSON
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Chuyển đổi dữ liệu JSON thành object
  const jsonData = JSON.parse(data);

  // Thay thế URL và đếm số lượng link đã thay đổi
  const changedLinksCount = replaceUrls(jsonData);

  // In ra số lượng link đã thay đổi
  console.log(`Total changed links: ${changedLinksCount}`);

  // Ghi lại dữ liệu JSON đã được cập nhật vào file mới
  fs.writeFile('updated_data.json', JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File has been updated successfully: updated_data.json');
  });
});
