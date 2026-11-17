const https = require('https');
const fs = require('fs');

const query = 'Kailasa temple Ellora';
const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size&format=json`;

https.get(url, { headers: { 'User-Agent': 'SuggayittEducational/2.0 (contact@suggayitt.com)' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    try {
      const j = JSON.parse(d);
      const pages = Object.values(j.query.pages);
      const valid = pages.find(p => p.imageinfo[0].url.endsWith('.jpg') && p.imageinfo[0].size > 50000);
      if (valid) {
        console.log('Found Ellora:', valid.title, valid.imageinfo[0].url);
        const stream = fs.createWriteStream('images/discover/history/ellora-caves.jpg');
        https.get(valid.imageinfo[0].url, { headers: { 'User-Agent': 'SuggayittEducational/2.0' } }, dl => {
          dl.pipe(stream);
          stream.on('finish', () => console.log('Saved ellora-caves.jpg! Size:', fs.statSync('images/discover/history/ellora-caves.jpg').size));
        });
      }
    } catch (e) {
      console.log('Error:', e.message);
    }
  });
});
