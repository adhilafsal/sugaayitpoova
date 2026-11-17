const https = require('https');

const pages = [
  'Nirmal_Purja', 'Tenzing_Norgay', 'Edmund_Hillary', 'Reinhold_Messner',
  'Bachendri_Pal', 'Junko_Tabei', 'Kami_Rita', 'Ang_Rita_Sherpa',
  'Nawang_Gombu_Sherpa', 'George_Mallory', 'Jerzy_Kukuczka', 'Alison_Hargreaves',
  'Gerlinde_Kaltenbrunner'
];

async function check() {
  for (const page of pages) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${page}&prop=pageimages&piprop=original|name&format=json`;
    await new Promise(r => {
      https.get(url, { headers: { 'User-Agent': 'SuggayittPovaa/1.0' } }, res => {
        let d = '';
        res.on('data', c => d += c);
        res.on('end', () => {
          try {
            const j = JSON.parse(d);
            const p = Object.values(j.query.pages)[0];
            console.log(page, '-> Image:', p.pageimage || (p.original ? p.original.source : 'None'));
          } catch (e) {
            console.log(page, 'Error:', e.message);
          }
          r();
        });
      });
    });
  }
}
check();
