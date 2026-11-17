const handler = require('../api/weather.js');
const dests = [
  'paithalmala', 'ramakkalmedu', 'vattavada', 'kolukkumalai', 'kurishumala',
  'netravati', 'chikmagalur', 'mysore', 'hyderabad', 'matheran',
  'harihar', 'kedarkantha', 'brahmatal', 'hampta', 'delhi',
  'kashmir', 'ladakh', 'manali', 'munnar', 'spiti', 'meghalaya'
];

let failed = 0;
dests.forEach(id => {
  const req = { method: 'GET', url: `/api/weather/${id}`, query: {} };
  let status = 200, body = '';
  const res = {
    setHeader: () => {},
    writeHead: (s) => { status = s; },
    set statusCode(s) { status = s; },
    get statusCode() { return status; },
    end: (b) => { body = b; }
  };
  handler(req, res);
  const parsed = JSON.parse(body || '{}');
  if (!parsed.success || !parsed.weather || parsed.weather.placeId !== id) {
    console.error('Failed for:', id, status, body);
    failed++;
  }
});

// Also test query parameter format (?id=munnar)
{
  const req = { method: 'GET', url: `/api/weather?id=munnar`, query: { id: 'munnar' } };
  let status = 200, body = '';
  const res = {
    setHeader: () => {},
    writeHead: (s) => { status = s; },
    set statusCode(s) { status = s; },
    get statusCode() { return status; },
    end: (b) => { body = b; }
  };
  handler(req, res);
  const parsed = JSON.parse(body || '{}');
  if (!parsed.success || !parsed.weather || parsed.weather.placeId !== 'munnar') {
    console.error('Query param test failed for munnar:', status, body);
    failed++;
  }
}

if (failed === 0) {
  console.log('SUCCESS: All 21 destinations + query param test passed HTTP 200 OK!');
} else {
  console.error(`FAILED: ${failed} tests failed.`);
  process.exit(1);
}
