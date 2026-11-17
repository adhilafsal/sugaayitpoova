const fs = require('fs');
const path = require('path');
const https = require('https');

const USER_AGENT = 'SuggayittPovaaEducationalBot/1.0 (info@suggayitt.com)';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function test() {
  const titles = ['Nirmal_Purja', 'Tenzing_Norgay', 'Edmund_Hillary', 'Reinhold_Messner'];
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${titles.join('|')}&prop=pageimages&pithumbsize=600&format=json`;
  const res = await fetchJson(url);
  console.log(JSON.stringify(res, null, 2));
}

test();
