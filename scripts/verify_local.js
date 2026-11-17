const http = require('http');

const dests = [
  'paithalmala', 'ramakkalmedu', 'vattavada', 'kolukkumalai', 'kurishumala',
  'netravati', 'chikmagalur', 'mysore', 'hyderabad', 'matheran',
  'harihar', 'kedarkantha', 'brahmatal', 'hampta', 'delhi',
  'kashmir', 'ladakh', 'manali', 'munnar', 'spiti', 'meghalaya'
];

function fetchStatus(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:8080${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', (err) => resolve({ status: 0, error: err.message }));
  });
}

async function run() {
  console.log('--- TESTING 21 DESTINATION IMAGES (LOCAL) ---');
  let imgErrors = 0;
  for (const id of dests) {
    const res = await fetchStatus(`/images/places/${id}.jpg`);
    if (res.status !== 200) {
      console.error(`FAIL: /images/places/${id}.jpg returned HTTP ${res.status}`);
      imgErrors++;
    }
  }
  console.log(`Images verified: ${dests.length - imgErrors}/${dests.length} returned HTTP 200`);

  console.log('\n--- TESTING 21 WEATHER API ENDPOINTS (LOCAL) ---');
  let weatherErrors = 0;
  for (const id of dests) {
    const res = await fetchStatus(`/api/weather?id=${id}`);
    if (res.status !== 200) {
      console.error(`FAIL: /api/weather?id=${id} returned HTTP ${res.status}`);
      weatherErrors++;
    } else {
      const parsed = JSON.parse(res.data);
      if (!parsed.success || !parsed.weather) {
        console.error(`FAIL: /api/weather?id=${id} invalid payload`);
        weatherErrors++;
      }
    }
  }
  console.log(`Weather verified: ${dests.length - weatherErrors}/${dests.length} returned HTTP 200`);

  console.log('\n--- TESTING SCRIPT.JS (LOCAL) ---');
  const scriptRes = await fetchStatus('/script.js');
  console.log(`script.js HTTP status: ${scriptRes.status}`);

  if (imgErrors === 0 && weatherErrors === 0 && scriptRes.status === 200) {
    console.log('\nALL LOCAL CHECKS PASSED PERFECTLY!');
  } else {
    process.exit(1);
  }
}

run();
