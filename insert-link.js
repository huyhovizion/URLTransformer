const fs = require('fs');

// Hàm đệ quy để tìm và thay thế URL trong bất kỳ trường nào của JSON
const replaceUrls = (obj) => {
  let changedLinksCount = 0;
  let result = ''; // Chuỗi lưu kết quả để ghi vào file

  const traverseAndReplace = (item) => {
    if (typeof item === 'object' && item !== null) {
      for (let key in item) {
        if (typeof item[key] === 'string' && item[key].startsWith('https://vizionplatformprod.blob.core.windows.net/')) {
          // Thay thế URL
          const originalUrl = item[key];
          const newUrl = originalUrl.replace(
            'https://vizionplatformprod.blob.core.windows.net/',
            'https://platformfiles.vizion.space/'
          ) + '.jpeg';

          // Ghi kết quả vào chuỗi
          result += `"${newUrl}",\n`;

          // Cập nhật URL trong object
          item[key] = newUrl;

          changedLinksCount++;
        } else {
          // Đệ quy nếu giá trị là object hoặc array
          traverseAndReplace(item[key]);
        }
      }
    }
  };

  traverseAndReplace(obj);
  return { result, changedLinksCount };
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
  const { result, changedLinksCount } = replaceUrls(jsonData);

  // Thêm số lượng link đã thay đổi vào cuối file
  const finalResult = result + `Total changed links: ${changedLinksCount}\n`;

  // Ghi kết quả vào file data.txt
  fs.writeFile('data.txt', finalResult, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Results have been saved to data.txt');
  });
});
