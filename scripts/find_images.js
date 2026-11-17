const https = require('https');
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

async function findImages(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=images&format=json`;
  const res = await fetchJson(url);
  const page = Object.values(res.query.pages)[0];
  console.log(`Images for ${title}:`, (page.images || []).map(img => img.title).slice(0, 8));
}

async function test() {
  await findImages('Gasherbrum II');
  await findImages('Wayanad');
  await findImages('Chikkamagaluru');
}

test();
