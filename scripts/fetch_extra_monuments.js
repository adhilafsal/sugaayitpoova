const https = require('https');
const fs = require('fs');

const USER_AGENT = 'SuggayittEducational/2.0 (contact@suggayitt.com)';

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          resolve(JSON.parse(d));
        } catch (e) {
          reject(new Error(d.slice(0, 100)));
        }
      });
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status: ' + res.statusCode));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  const items = [
    { title: 'Qutb_Minar', dest: 'images/discover/history/qutub-minar.jpg' },
    { title: 'Ajanta_Caves', dest: 'images/discover/history/ajanta-caves.jpg' },
    { title: 'Ellora_Caves', dest: 'images/discover/history/ellora-caves.jpg' },
    { title: 'Konark_Sun_Temple', dest: 'images/discover/history/konark-sun-temple.jpg' }
  ];

  for (const item of items) {
    await sleep(1500);
    try {
      const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${item.title}&prop=pageimages&piprop=original|thumbnail&pithumbsize=800&format=json`;
      const res = await fetchJson(url);
      const page = Object.values(res.query.pages)[0];
      const imgUrl = (page.thumbnail && page.thumbnail.source) || (page.original && page.original.source);
      console.log(item.title, 'found URL:', imgUrl);
      if (imgUrl) {
        await sleep(1000);
        await download(imgUrl, item.dest);
        console.log('Saved to', item.dest, 'Size:', fs.statSync(item.dest).size);
      }
    } catch (e) {
      console.log(item.title, 'Error:', e.message);
    }
  }
}
run();
