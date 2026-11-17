const https = require('https');

const query = 'Alison Hargreaves';
const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;

https.get(url, { headers: { 'User-Agent': 'SuggayittEducational/2.0 (contact@suggayitt.com)' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    try {
      const j = JSON.parse(d);
      if (j.query && j.query.pages) {
        for (const p of Object.values(j.query.pages)) {
          console.log(p.title, p.imageinfo[0].url);
        }
      } else {
        console.log('No results found for query', query);
      }
    } catch (e) {
      console.log('Error:', e.message);
    }
  });
});
