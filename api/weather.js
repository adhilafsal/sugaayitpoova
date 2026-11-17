const WEATHER_DATA = {
  paithalmala: { altitudeFt: 4500, tempC: 18, conditionEn: "Cool Mountain Breeze & Light Fog", conditionMl: "തണുത്ത മലങ്കാറ്റും മൂടൽമഞ്ഞും", icon: "🌤️", humidity: 78, windKmH: 18 },
  ramakkalmedu: { altitudeFt: 3500, tempC: 22, conditionEn: "High-Velocity Gale Winds", conditionMl: "ശക്തമായ വേഗതയിലുള്ള കാറ്റ്", icon: "💨", humidity: 65, windKmH: 42 },
  vattavada: { altitudeFt: 6200, tempC: 14, conditionEn: "Crisp High-Altitude Fog", conditionMl: "തണുത്തുറഞ്ഞ കോടമഞ്ഞ്", icon: "☁️", humidity: 82, windKmH: 16 },
  kolukkumalai: { altitudeFt: 7130, tempC: 11, conditionEn: "Chilly Misty Clouds", conditionMl: "തണുത്ത കോടമഞ്ഞ്", icon: "☁️", humidity: 85, windKmH: 22 },
  kurishumala: { altitudeFt: 3800, tempC: 20, conditionEn: "Misty Rolling Meadows", conditionMl: "മനോഹരമായ പുൽമേടുകളും കോടയും", icon: "🌤️", humidity: 75, windKmH: 15 },
  netravati: { altitudeFt: 4980, tempC: 17, conditionEn: "Misty Mountain Winds", conditionMl: "തണുത്ത കാറ്റും കോടമഞ്ഞും", icon: "🌤️", humidity: 80, windKmH: 20 },
  chikmagalur: { altitudeFt: 6330, tempC: 15, conditionEn: "Pleasant Hill Climate", conditionMl: "സുഖകരമായ മലയോര കാലാവസ്ഥ", icon: "🌤️", humidity: 74, windKmH: 18 },
  mysore: { altitudeFt: 2500, tempC: 25, conditionEn: "Pleasant & Clear", conditionMl: "തെളിഞ്ഞ കാലാവസ്ഥ", icon: "☀️", humidity: 62, windKmH: 12 },
  hyderabad: { altitudeFt: 1778, tempC: 28, conditionEn: "Warm & Sunny", conditionMl: "ചൂടുള്ള കാലാവസ്ഥ", icon: "☀️", humidity: 55, windKmH: 10 },
  matheran: { altitudeFt: 2625, tempC: 23, conditionEn: "Fresh Forest Air", conditionMl: "ശുദ്ധമായ വനവായു", icon: "🌤️", humidity: 68, windKmH: 14 },
  harihar: { altitudeFt: 3676, tempC: 22, conditionEn: "Rocky Escarpment Winds", conditionMl: "പാറക്കെട്ടുകളിലെ കാറ്റ്", icon: "💨", humidity: 60, windKmH: 24 },
  kedarkantha: { altitudeFt: 12500, tempC: -3, conditionEn: "Sub-Zero Snowfall & Crisp Winds", conditionMl: "മൈനസ് ഡിഗ്രി മഞ്ഞുവീഴ്ച", icon: "❄️", humidity: 40, windKmH: 28 },
  brahmatal: { altitudeFt: 12250, tempC: -2, conditionEn: "Alpine Lake Snow Winds", conditionMl: "തടാകക്കരയിലെ മഞ്ഞുകാറ്റ്", icon: "❄️", humidity: 42, windKmH: 26 },
  hampta: { altitudeFt: 14100, tempC: -5, conditionEn: "Freezing Pass Blizzard Conditions", conditionMl: "കഠിനമായ തണുപ്പും മഞ്ഞും", icon: "❄️", humidity: 38, windKmH: 32 },
  delhi: { altitudeFt: 700, tempC: 24, conditionEn: "Clear Plains Weather", conditionMl: "തെളിഞ്ഞ സമതല കാലാവസ്ഥ", icon: "☀️", humidity: 58, windKmH: 11 },
  kashmir: { altitudeFt: 5200, tempC: 8, conditionEn: "Chilly Valley Weather", conditionMl: "തണുത്ത താഴ്‌വര കാലാവസ്ഥ", icon: "☁️", humidity: 70, windKmH: 12 },
  ladakh: { altitudeFt: 11500, tempC: 2, conditionEn: "Dry High-Altitude Sun & Cold Winds", conditionMl: "തണുത്ത കാറ്റും തെളിഞ്ഞ വെയിലും", icon: "☀️", humidity: 25, windKmH: 25 },
  manali: { altitudeFt: 6725, tempC: 10, conditionEn: "Cold Mountain Air", conditionMl: "തണുത്ത മലങ്കാറ്റ്", icon: "☁️", humidity: 72, windKmH: 16 },
  munnar: { altitudeFt: 8661, tempC: 9, conditionEn: "Chilly Tea Garden Fog", conditionMl: "തോട്ടങ്ങളിലെ തണുത്ത മഞ്ഞ്", icon: "☁️", humidity: 88, windKmH: 19 },
  spiti: { altitudeFt: 12500, tempC: -1, conditionEn: "Cold Desert Breeze", conditionMl: "ശീത മരുഭൂമി കാറ്റ്", icon: "❄️", humidity: 30, windKmH: 27 },
  meghalaya: { altitudeFt: 4900, tempC: 16, conditionEn: "Misty Cloud Formations & Drizzle", conditionMl: "മേഘങ്ങളും ചാറ്റൽമഴയും", icon: "🌧️", humidity: 92, windKmH: 15 }
};

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  // Extract destination id from query parameter or URL path
  const parsed = new URL(req.url, 'http://localhost');
  const idFromParam = parsed.searchParams.get('id') || (req.query && req.query.id);
  const pathParts = parsed.pathname.split('/').filter(Boolean);
  const lastPart = pathParts[pathParts.length - 1];
  const idFromPath = (lastPart && lastPart !== 'weather') ? lastPart : null;
  const placeId = (idFromParam || idFromPath || '').toLowerCase();

  const w = WEATHER_DATA[placeId];
  if (!w) {
    res.statusCode = 404;
    res.end(JSON.stringify({ success: false, error: 'Destination weather not available' }));
    return;
  }

  res.statusCode = 200;
  res.end(JSON.stringify({
    success: true,
    weather: {
      placeId,
      ...w
    }
  }));
};
