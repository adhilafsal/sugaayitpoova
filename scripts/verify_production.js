const https = require('https');

const dests = [
  'paithalmala', 'ramakkalmedu', 'vattavada', 'kolukkumalai', 'kurishumala',
  'netravati', 'chikmagalur', 'mysore', 'hyderabad', 'matheran',
  'harihar', 'kedarkantha', 'brahmatal', 'hampta', 'delhi',
  'kashmir', 'ladakh', 'manali', 'munnar', 'spiti', 'meghalaya'
];

function fetchVercel(path) {
  return new Promise((resolve) => {
    const opts = {
      hostname: 'suggaayitpoova.vercel.app',
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    };
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        data: data.slice(0, 500)
      }));
    });
    req.on('error', (err) => resolve({ status: 0, error: err.message }));
    req.end();
  });
}

async function verify() {
  console.log('--- CHECKING VERCEL DEPLOYMENT STATUS ---');
  const homeRes = await fetchVercel('/');
  console.log(`Home page HTTP status: ${homeRes.status}`);
  console.log(`Vercel deployment ID / age: ${homeRes.headers['x-vercel-id']} | Age: ${homeRes.headers['age'] || 0}s`);

  const scriptRes = await fetchVercel('/script.js');
  console.log(`script.js HTTP status: ${scriptRes.status}`);
  const hasTriviaSafe = scriptRes.data.includes('renderTrivia') && scriptRes.data.includes('window.renderTrivia');
  console.log(`script.js has renderTrivia safeguard: ${hasTriviaSafe}`);

  console.log('\n--- TESTING ALL 21 BEST PLACES IMAGES ON VERCEL ---');
  let imgPassed = 0;
  for (const id of dests) {
    const res = await fetchVercel(`/images/places/${id}.jpg`);
    if (res.status === 200) {
      imgPassed++;
      console.log(`  ✓ ${id}.jpg -> HTTP 200 OK (${res.headers['content-type']}, ${res.headers['content-length']} bytes)`);
    } else {
      console.log(`  ✗ ${id}.jpg -> HTTP ${res.status}`);
    }
  }
  console.log(`Images Passed: ${imgPassed} / ${dests.length}`);

  console.log('\n--- TESTING WEATHER API ENDPOINTS ON VERCEL ---');
  let weatherPassed = 0;
  for (const id of ['paithalmala', 'munnar', 'ladakh', 'kedarkantha']) {
    const res = await fetchVercel(`/api/weather/${id}`);
    console.log(`  /api/weather/${id} -> HTTP ${res.status}: ${res.data.slice(0, 100)}`);
    if (res.status === 200) weatherPassed++;
  }

  return { imgPassed, weatherPassed };
}

verify();
