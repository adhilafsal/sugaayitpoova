const fs = require('fs');
const https = require('https');

const USER_AGENT = 'SuggayittPovaaEducationalBot/1.0 (info@suggayitt.com)';

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

download(
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/NIRMAL_PURJA_%22NIMS%22.jpg/960px-NIRMAL_PURJA_%22NIMS%22.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
  'images/discover/mountaineers/nirmal-purja.jpg'
).then(() => {
  const stat = fs.statSync('images/discover/mountaineers/nirmal-purja.jpg');
  console.log('Downloaded successfully! Size:', stat.size);
}).catch(console.error);
