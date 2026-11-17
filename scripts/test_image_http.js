const http = require('http');
const fs = require('fs');

async function checkUrl(url) {
  try {
    const res = await fetch(url);
    const buf = await res.arrayBuffer();
    return {
      status: res.status,
      ok: res.ok,
      size: buf.byteLength,
      contentType: res.headers.get('content-type')
    };
  } catch (err) {
    return { status: 0, ok: false, error: err.message };
  }
}

async function run() {
  console.log('===========================================================');
  console.log('   SUGGAYITT POVAA - LIVE HTTP IMAGE AUDIT & VERIFICATION  ');
  console.log('===========================================================\n');

  const baseUrl = 'http://localhost:8080';
  let totalChecked = 0;
  let totalPassed = 0;
  let totalFailed = 0;

  // 1. Check all 21 destinations
  console.log('--- Checking 21 Destination Photographs ---');
  const places = [
    'paithalmala', 'ramakkalmedu', 'vattavada', 'kolukkumalai', 'kurishumala',
    'netravati', 'chikmagalur', 'mysore', 'hyderabad', 'matheran',
    'harihar', 'kedarkantha', 'brahmatal', 'hampta', 'delhi',
    'kashmir', 'ladakh', 'manali', 'munnar', 'spiti', 'meghalaya'
  ];

  for (const p of places) {
    totalChecked++;
    const path = `/images/places/${p}.jpg`;
    const res = await checkUrl(`${baseUrl}${path}`);
    if (res.ok && res.size > 1000) {
      console.log(`[PASS] Destination: ${p.padEnd(15)} -> ${path} (${res.size} bytes, ${res.contentType})`);
      totalPassed++;
    } else {
      console.error(`[FAIL] Destination: ${p} -> Status ${res.status}, Size ${res.size}`);
      totalFailed++;
    }
  }

  // 2. Check 8 Gear Store Products
  console.log('\n--- Checking 8 Gear Store Products ---');
  const gears = ['shoes', 'rucksack', 'jacket', 'thermals', 'pole', 'headlamp', 'poncho', 'sunglasses'];
  for (const g of gears) {
    totalChecked++;
    const path = `/images/${g}.jpg`;
    const res = await checkUrl(`${baseUrl}${path}`);
    if (res.ok && res.size > 1000) {
      console.log(`[PASS] Gear Item:   ${g.padEnd(15)} -> ${path} (${res.size} bytes)`);
      totalPassed++;
    } else {
      console.error(`[FAIL] Gear Item:   ${g} -> Status ${res.status}`);
      totalFailed++;
    }
  }

  // 3. Check Popular Mountaineers
  console.log('\n--- Checking Popular Mountaineers ---');
  const mountaineers = [
    'nirmal-purja', 'tenzing-norgay', 'edmund-hillary', 'reinhold-messner',
    'bachendri-pal', 'junko-tabei', 'kami-rita', 'ang-rita',
    'nawang-gombu', 'george-mallory', 'jerzy-kukuczka', 'alison-hargreaves',
    'gerlinde-kaltenbrunner'
  ];
  for (const m of mountaineers) {
    totalChecked++;
    const path = `/images/discover/mountaineers/${m}.jpg`;
    const res = await checkUrl(`${baseUrl}${path}`);
    if (res.ok && res.size > 1000) {
      console.log(`[PASS] Mountaineer: ${m.padEnd(25)} -> (${res.size} bytes)`);
      totalPassed++;
    } else {
      console.error(`[FAIL] Mountaineer: ${m} -> Status ${res.status}`);
      totalFailed++;
    }
  }

  // 4. Check 14 Peaks & 7 Summits
  console.log('\n--- Checking 14 Peaks & 7 Summits ---');
  const peaks = [
    'mount-everest', 'k2', 'kangchenjunga', 'lhotse', 'makalu', 'cho-oyu',
    'dhaulagiri', 'manaslu', 'nanga-parbat', 'annapurna-i', 'gasherbrum-i',
    'broad-peak', 'gasherbrum-ii', 'shishapangma', 'aconcagua', 'denali',
    'kilimanjaro', 'elbrus', 'vinson-massif', 'kosciuszko', 'carstensz-pyramid'
  ];
  for (const pk of peaks) {
    totalChecked++;
    const path = `/images/discover/peaks/${pk}.jpg`;
    const res = await checkUrl(`${baseUrl}${path}`);
    if (res.ok && res.size > 1000) {
      console.log(`[PASS] Peak/Summit: ${pk.padEnd(20)} -> (${res.size} bytes)`);
      totalPassed++;
    } else {
      console.error(`[FAIL] Peak/Summit: ${pk} -> Status ${res.status}`);
      totalFailed++;
    }
  }

  // 5. Check Historical Places
  console.log('\n--- Checking Historical Places ---');
  const historyList = [
    'munnar', 'wayanad', 'fort-kochi', 'mattancherry-palace', 'bekal-fort',
    'varkala', 'hampi', 'badami', 'mysore-palace', 'chikmagalur', 'ooty',
    'kodaikanal', 'madurai', 'thanjavur', 'mahabalipuram', 'jaipur', 'udaipur',
    'jaisalmer-fort', 'chittorgarh-fort', 'manali', 'shimla', 'dharamshala',
    'spiti-valley', 'srinagar', 'gulmarg', 'leh', 'nubra-valley', 'pangong-lake',
    'varanasi', 'agra', 'delhi', 'meghalaya', 'darjeeling', 'sikkim',
    'qutub-minar', 'ajanta-caves', 'ellora-caves', 'konark-sun-temple'
  ];
  for (const h of historyList) {
    totalChecked++;
    const path = `/images/discover/history/${h}.jpg`;
    const res = await checkUrl(`${baseUrl}${path}`);
    if (res.ok && res.size > 1000) {
      console.log(`[PASS] Heritage:    ${h.padEnd(25)} -> (${res.size} bytes)`);
      totalPassed++;
    } else {
      console.error(`[FAIL] Heritage:    ${h} -> Status ${res.status}`);
      totalFailed++;
    }
  }

  // 6. Check Branding Assets
  console.log('\n--- Checking Branding Assets ---');
  for (const b of ['logo.png', 'favicon.png']) {
    totalChecked++;
    const path = `/${b}`;
    const res = await checkUrl(`${baseUrl}${path}`);
    if (res.ok && res.size > 100) {
      console.log(`[PASS] Brand Asset: ${b.padEnd(20)} -> (${res.size} bytes)`);
      totalPassed++;
    } else {
      console.error(`[FAIL] Brand Asset: ${b} -> Status ${res.status}`);
      totalFailed++;
    }
  }

  console.log('\n===========================================================');
  console.log(`TOTAL HTTP IMAGES AUDITED: ${totalChecked}`);
  console.log(`PASSED: ${totalPassed} | FAILED: ${totalFailed}`);
  console.log('===========================================================');

  if (totalFailed > 0) process.exit(1);
}

run();
