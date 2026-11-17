const https = require('https');
const fs = require('fs');

const url = 'https://upload.wikimedia.org/wikipedia/en/f/fc/Kailash_temple_%28Ellora_cave_no_15%29_at_Verul.png';
const file = fs.createWriteStream('images/discover/history/ellora-caves.jpg');

https.get(url, { headers: { 'User-Agent': 'SuggayittEducational/2.0 (contact@suggayitt.com)' } }, res => {
  if (res.statusCode !== 200) {
    console.error('Failed to download Ellora:', res.statusCode);
    return;
  }
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Saved ellora-caves.jpg! Size:', fs.statSync('images/discover/history/ellora-caves.jpg').size);
  });
});
