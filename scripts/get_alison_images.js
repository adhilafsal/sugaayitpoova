const https = require('https');

const url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Alison_Hargreaves&prop=images&format=json';
https.get(url, { headers: { 'User-Agent': 'SuggayittEducational/2.0 (contact@suggayitt.com)' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log(d);
  });
});
