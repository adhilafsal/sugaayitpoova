const fs = require('fs');
const path = require('path');
const https = require('https');

const USER_AGENT = 'SuggayittPovaaEducationalPlatform/1.0 (contact@suggayitt.com)';

const PATCH_ASSETS = [
  { category: 'peaks', id: 'annapurna-1', name: 'Annapurna I (8,091m)', wiki: 'Annapurna', filename: 'annapurna-i.jpg' },
  { category: 'history', id: 'thanjavur', name: 'Thanjavur (Brihadisvara Temple)', wiki: 'Brihadisvara_Temple', filename: 'thanjavur.jpg' },
  { category: 'history', id: 'shimla', name: 'Shimla (Viceregal Lodge / Rashtrapati Niwas)', wiki: 'Rashtrapati_Niwas', filename: 'shimla.jpg' },
  { category: 'history', id: 'darjeeling', name: 'Darjeeling Himalayan Railway (Toy Train)', wiki: 'Batasia_Loop', filename: 'darjeeling.jpg' }
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function patch() {
  const titles = PATCH_ASSETS.map(a => a.wiki).join('|');
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=pageimages|info&inprop=url&pithumbsize=900&format=json`;
  const data = await fetchJson(apiUrl);
  const pages = (data.query && data.query.pages) || {};

  for (const item of PATCH_ASSETS) {
    let page = Object.values(pages).find(p => p.title.toLowerCase() === item.wiki.replace(/_/g, ' ').toLowerCase());
    if (!page) {
      const norm = (data.query.normalized || []).find(n => n.from.toLowerCase() === item.wiki.toLowerCase());
      if (norm) page = Object.values(pages).find(p => p.title.toLowerCase() === norm.to.toLowerCase());
    }
    if (page && page.thumbnail && page.thumbnail.source) {
      const dest = path.join('images', 'discover', item.category, item.filename);
      console.log(`Downloading ${item.name} to ${dest} from ${page.thumbnail.source}`);
      await download(page.thumbnail.source, dest);
      console.log(`Successfully patched ${item.name}`);
    } else {
      console.error(`Still no thumbnail for ${item.wiki}`);
    }
  }
}

patch();
