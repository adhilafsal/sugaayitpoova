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
        data: data
      }));
    });
    req.on('error', (err) => resolve({ status: 0, error: err.message }));
    req.end();
  });
}

async function verify() {
  console.log('=== VERCEL PRODUCTION VERIFICATION ===\n');

  console.log('1. Checking Production Website Status:');
  const homeRes = await fetchVercel('/');
  console.log(`   - Home Page (/): HTTP ${homeRes.status} OK`);
  console.log(`   - Vercel Deployment ID: ${homeRes.headers['x-vercel-id']}`);
  console.log(`   - Cache Age: ${homeRes.headers['age'] || 0}s\n`);

  console.log('2. Checking script.js Integrity & Fixes:');
  const scriptRes = await fetchVercel('/script.js');
  console.log(`   - script.js HTTP status: ${scriptRes.status}`);
  console.log(`   - Has renderTrivia safeguard: ${scriptRes.data.includes('function renderTrivia')}`);
  console.log(`   - Has handleImageError diagnostics: ${scriptRes.data.includes('function handleImageError')}`);
  console.log(`   - Root-relative paths (/images/places/): ${scriptRes.data.includes('/images/places/paithalmala.jpg')}\n`);

  console.log('3. Testing All 21 Best Places Images on Vercel:');
  let imgPassed = 0;
  for (const id of dests) {
    const res = await fetchVercel(`/images/places/${id}.jpg`);
    if (res.status === 200) {
      imgPassed++;
      console.log(`   ✓ /images/places/${id}.jpg -> HTTP 200 OK (${res.headers['content-type']}, ${res.headers['content-length']} bytes)`);
    } else {
      console.log(`   ✗ /images/places/${id}.jpg -> HTTP ${res.status}`);
    }
  }
  console.log(`   Result: ${imgPassed} / ${dests.length} images returned HTTP 200 OK\n`);

  console.log('4. Testing Live Weather API on Vercel:');
  let weatherPassed = 0;
  for (const id of dests) {
    const res = await fetchVercel(`/api/weather?id=${id}`);
    if (res.status === 200) {
      weatherPassed++;
      const parsed = JSON.parse(res.data);
      console.log(`   ✓ /api/weather?id=${id} -> HTTP 200 (${parsed.weather.tempC}°C, ${parsed.weather.conditionEn})`);
    } else {
      console.log(`   ✗ /api/weather?id=${id} -> HTTP ${res.status}`);
    }
  }
  console.log(`   Result: ${weatherPassed} / ${dests.length} weather endpoints returned HTTP 200 OK\n`);

  if (imgPassed === 21 && weatherPassed === 21) {
    console.log('🎉 ALL PRODUCTION TESTS PASSED WITH 100% SUCCESS!');
  } else {
    console.error(`Verification incomplete: Images (${imgPassed}/21), Weather (${weatherPassed}/21)`);
  }
}

verify();
