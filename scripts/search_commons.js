const https = require('https');
const fs = require('fs');
const path = require('path');
const USER_AGENT = 'SuggayittPovaaEducationalPlatform/1.0 (contact@suggayitt.com)';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function searchAndDownload(query, dest) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json`;
  const res = await fetchJson(url);
  const pages = Object.values(res.query ? res.query.pages : {});
  // find a jpg/png
  const hit = pages.find(p => p.imageinfo && p.imageinfo[0] && p.imageinfo[0].thumburl && (p.title.endsWith('.jpg') || p.title.endsWith('.JPG') || p.title.endsWith('.png')));
  if (hit) {
    const imgUrl = hit.imageinfo[0].thumburl;
    console.log(`Found for "${query}": ${hit.title} -> ${imgUrl}`);
    await download(imgUrl, dest);
    console.log(`Saved to ${dest}`);
  } else {
    console.error(`No image found for ${query}`);
  }
}

async function run() {
  await searchAndDownload('Gasherbrum II mountain', 'images/discover/peaks/gasherbrum-ii.jpg');
  await searchAndDownload('Edakkal caves Wayanad', 'images/discover/history/wayanad.jpg');
  await searchAndDownload('Mullayanagiri Chikmagalur peak', 'images/discover/history/chikmagalur.jpg');
}

run();
