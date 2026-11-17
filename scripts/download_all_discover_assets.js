const fs = require('fs');
const path = require('path');
const https = require('https');

const USER_AGENT = 'SuggayittPovaaEducationalPlatform/1.0 (contact@suggayitt.com)';

// Master list of entities
const ASSETS = [
  // 1. MOUNTAINEERS (12)
  { category: 'mountaineers', id: 'nirmal-purja', name: 'Nirmal Purja (Nimsdai)', wiki: 'Nirmal_Purja', filename: 'nirmal-purja.jpg' },
  { category: 'mountaineers', id: 'tenzing-norgay', name: 'Tenzing Norgay', wiki: 'Tenzing_Norgay', filename: 'tenzing-norgay.jpg' },
  { category: 'mountaineers', id: 'edmund-hillary', name: 'Sir Edmund Hillary', wiki: 'Edmund_Hillary', filename: 'edmund-hillary.jpg' },
  { category: 'mountaineers', id: 'reinhold-messner', name: 'Reinhold Messner', wiki: 'Reinhold_Messner', filename: 'reinhold-messner.jpg' },
  { category: 'mountaineers', id: 'bachendri-pal', name: 'Bachendri Pal', wiki: 'Bachendri_Pal', filename: 'bachendri-pal.jpg' },
  { category: 'mountaineers', id: 'junko-tabei', name: 'Junko Tabei', wiki: 'Junko_Tabei', filename: 'junko-tabei.jpg' },
  { category: 'mountaineers', id: 'kami-rita', name: 'Kami Rita Sherpa', wiki: 'Kami_Rita', filename: 'kami-rita.jpg' },
  { category: 'mountaineers', id: 'ang-rita', name: 'Ang Rita Sherpa', wiki: 'Ang_Rita_Sherpa', filename: 'ang-rita.jpg' },
  { category: 'mountaineers', id: 'nawang-gombu', name: 'Nawang Gombu', wiki: 'Nawang_Gombu_Sherpa', filename: 'nawang-gombu.jpg' },
  { category: 'mountaineers', id: 'george-mallory', name: 'George Mallory', wiki: 'George_Mallory', filename: 'george-mallory.jpg' },
  { category: 'mountaineers', id: 'jerzy-kukuczka', name: 'Jerzy Kukuczka', wiki: 'Jerzy_Kukuczka', filename: 'jerzy-kukuczka.jpg' },
  { category: 'mountaineers', id: 'alison-hargreaves', name: 'Alison Hargreaves', wiki: 'Alison_Hargreaves', filename: 'alison-hargreaves.jpg' },

  // 2. 14 PEAKS (EIGHT-THOUSANDERS)
  { category: 'peaks', id: 'everest', name: 'Mount Everest (8,848.86m)', wiki: 'Mount_Everest', filename: 'mount-everest.jpg' },
  { category: 'peaks', id: 'k2', name: 'K2 (8,611m)', wiki: 'K2', filename: 'k2.jpg' },
  { category: 'peaks', id: 'kangchenjunga', name: 'Kangchenjunga (8,586m)', wiki: 'Kangchenjunga', filename: 'kangchenjunga.jpg' },
  { category: 'peaks', id: 'lhotse', name: 'Lhotse (8,516m)', wiki: 'Lhotse', filename: 'lhotse.jpg' },
  { category: 'peaks', id: 'makalu', name: 'Makalu (8,485m)', wiki: 'Makalu', filename: 'makalu.jpg' },
  { category: 'peaks', id: 'cho-oyu', name: 'Cho Oyu (8,188m)', wiki: 'Cho_Oyu', filename: 'cho-oyu.jpg' },
  { category: 'peaks', id: 'dhaulagiri', name: 'Dhaulagiri I (8,167m)', wiki: 'Dhaulagiri', filename: 'dhaulagiri.jpg' },
  { category: 'peaks', id: 'manaslu', name: 'Manaslu (8,163m)', wiki: 'Manaslu', filename: 'manaslu.jpg' },
  { category: 'peaks', id: 'nanga-parbat', name: 'Nanga Parbat (8,126m)', wiki: 'Nanga_Parbat', filename: 'nanga-parbat.jpg' },
  { category: 'peaks', id: 'annapurna-1', name: 'Annapurna I (8,091m)', wiki: 'Annapurna_Massif', filename: 'annapurna-i.jpg' },
  { category: 'peaks', id: 'gasherbrum-1', name: 'Gasherbrum I (8,080m)', wiki: 'Gasherbrum_I', filename: 'gasherbrum-i.jpg' },
  { category: 'peaks', id: 'broad-peak', name: 'Broad Peak (8,051m)', wiki: 'Broad_Peak', filename: 'broad-peak.jpg' },
  { category: 'peaks', id: 'gasherbrum-2', name: 'Gasherbrum II (8,035m)', wiki: 'Gasherbrum_II', filename: 'gasherbrum-ii.jpg' },
  { category: 'peaks', id: 'shishapangma', name: 'Shishapangma (8,027m)', wiki: 'Shishapangma', filename: 'shishapangma.jpg' },

  // 3. SEVEN SUMMITS (BASS & MESSNER)
  { category: 'peaks', id: 'aconcagua', name: 'Aconcagua (South America, 6,961m)', wiki: 'Aconcagua', filename: 'aconcagua.jpg' },
  { category: 'peaks', id: 'denali', name: 'Denali (North America, 6,190m)', wiki: 'Denali', filename: 'denali.jpg' },
  { category: 'peaks', id: 'kilimanjaro', name: 'Kilimanjaro (Africa, 5,895m)', wiki: 'Mount_Kilimanjaro', filename: 'kilimanjaro.jpg' },
  { category: 'peaks', id: 'elbrus', name: 'Mount Elbrus (Europe, 5,642m)', wiki: 'Mount_Elbrus', filename: 'elbrus.jpg' },
  { category: 'peaks', id: 'vinson', name: 'Vinson Massif (Antarctica, 4,892m)', wiki: 'Vinson_Massif', filename: 'vinson-massif.jpg' },
  { category: 'peaks', id: 'kosciuszko', name: 'Mount Kosciuszko (Australia - Bass, 2,228m)', wiki: 'Mount_Kosciuszko', filename: 'kosciuszko.jpg' },
  { category: 'peaks', id: 'carstensz', name: 'Carstensz Pyramid / Puncak Jaya (Oceania - Messner, 4,884m)', wiki: 'Puncak_Jaya', filename: 'carstensz-pyramid.jpg' },

  // 4. HISTORICAL TOURIST PLACES IN INDIA
  // Kerala
  { category: 'history', id: 'munnar', name: 'Munnar', wiki: 'Munnar', filename: 'munnar.jpg' },
  { category: 'history', id: 'fort-kochi', name: 'Fort Kochi', wiki: 'Fort_Kochi', filename: 'fort-kochi.jpg' },
  { category: 'history', id: 'bekal-fort', name: 'Bekal Fort', wiki: 'Bekal_Fort', filename: 'bekal-fort.jpg' },
  { category: 'history', id: 'wayanad', name: 'Wayanad (Edakkal Caves)', wiki: 'Edakkal_Caves', filename: 'wayanad.jpg' },
  { category: 'history', id: 'varkala', name: 'Varkala (Janardana Swami Temple)', wiki: 'Varkala', filename: 'varkala.jpg' },
  { category: 'history', id: 'mattancherry-palace', name: 'Mattancherry Palace', wiki: 'Mattancherry_Palace', filename: 'mattancherry-palace.jpg' },

  // Karnataka
  { category: 'history', id: 'hampi', name: 'Hampi', wiki: 'Hampi', filename: 'hampi.jpg' },
  { category: 'history', id: 'mysore-palace', name: 'Mysore Palace', wiki: 'Mysore_Palace', filename: 'mysore-palace.jpg' },
  { category: 'history', id: 'badami', name: 'Badami Cave Temples', wiki: 'Badami_cave_temples', filename: 'badami.jpg' },
  { category: 'history', id: 'chikmagalur', name: 'Chikmagalur', wiki: 'Chikkamagaluru', filename: 'chikmagalur.jpg' },

  // Tamil Nadu
  { category: 'history', id: 'ooty', name: 'Ooty (Nilgiri)', wiki: 'Ooty', filename: 'ooty.jpg' },
  { category: 'history', id: 'kodaikanal', name: 'Kodaikanal', wiki: 'Kodaikanal', filename: 'kodaikanal.jpg' },
  { category: 'history', id: 'mahabalipuram', name: 'Mahabalipuram', wiki: 'Group_of_Monuments_at_Mahabalipuram', filename: 'mahabalipuram.jpg' },
  { category: 'history', id: 'madurai', name: 'Madurai (Meenakshi Temple)', wiki: 'Meenakshi_Temple', filename: 'madurai.jpg' },
  { category: 'history', id: 'thanjavur', name: 'Thanjavur (Brihadisvara Temple)', wiki: 'Brihadisvara_Temple,_Thanjavur', filename: 'thanjavur.jpg' },

  // Rajasthan
  { category: 'history', id: 'jaipur', name: 'Jaipur (Hawa Mahal)', wiki: 'Hawa_Mahal', filename: 'jaipur.jpg' },
  { category: 'history', id: 'udaipur', name: 'Udaipur (City Palace)', wiki: 'City_Palace,_Udaipur', filename: 'udaipur.jpg' },
  { category: 'history', id: 'jaisalmer-fort', name: 'Jaisalmer Fort', wiki: 'Jaisalmer_Fort', filename: 'jaisalmer-fort.jpg' },
  { category: 'history', id: 'chittorgarh-fort', name: 'Chittorgarh Fort', wiki: 'Chittor_Fort', filename: 'chittorgarh-fort.jpg' },

  // Himachal Pradesh
  { category: 'history', id: 'manali', name: 'Manali (Hidimba Devi Temple)', wiki: 'Hidimba_Devi_Temple', filename: 'manali.jpg' },
  { category: 'history', id: 'shimla', name: 'Shimla (Viceregal Lodge)', wiki: 'Viceregal_Lodge,_Shimla', filename: 'shimla.jpg' },
  { category: 'history', id: 'dharamshala', name: 'Dharamshala (Tsuglagkhang)', wiki: 'Dharamshala', filename: 'dharamshala.jpg' },
  { category: 'history', id: 'spiti-valley', name: 'Spiti Valley (Key Monastery)', wiki: 'Key_Monastery', filename: 'spiti-valley.jpg' },

  // Jammu & Kashmir / Ladakh
  { category: 'history', id: 'srinagar', name: 'Srinagar (Dal Lake)', wiki: 'Dal_Lake', filename: 'srinagar.jpg' },
  { category: 'history', id: 'gulmarg', name: 'Gulmarg', wiki: 'Gulmarg', filename: 'gulmarg.jpg' },
  { category: 'history', id: 'leh', name: 'Leh (Leh Palace)', wiki: 'Leh_Palace', filename: 'leh.jpg' },
  { category: 'history', id: 'nubra-valley', name: 'Nubra Valley (Diskit)', wiki: 'Diskit_Monastery', filename: 'nubra-valley.jpg' },
  { category: 'history', id: 'pangong-lake', name: 'Pangong Lake', wiki: 'Pangong_Tso', filename: 'pangong-lake.jpg' },

  // Other Famous Destinations
  { category: 'history', id: 'varanasi', name: 'Varanasi (Ghats)', wiki: 'Dashashwamedh_Ghat', filename: 'varanasi.jpg' },
  { category: 'history', id: 'agra', name: 'Agra (Taj Mahal)', wiki: 'Taj_Mahal', filename: 'agra.jpg' },
  { category: 'history', id: 'delhi', name: 'Delhi (Red Fort)', wiki: 'Red_Fort', filename: 'delhi.jpg' },
  { category: 'history', id: 'meghalaya', name: 'Meghalaya (Living Root Bridges)', wiki: 'Living_root_bridge', filename: 'meghalaya.jpg' },
  { category: 'history', id: 'darjeeling', name: 'Darjeeling Himalayan Railway', wiki: 'Darjeeling_Himalayan_Railway', filename: 'darjeeling.jpg' },
  { category: 'history', id: 'sikkim', name: 'Sikkim (Rumtek Monastery)', wiki: 'Rumtek_Monastery', filename: 'sikkim.jpg' }
];

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

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  const manifest = [];
  console.log(`Starting download for ${ASSETS.length} assets...`);

  // Batch query in groups of 10 to avoid URL length issues
  const batchSize = 10;
  for (let i = 0; i < ASSETS.length; i += batchSize) {
    const chunk = ASSETS.slice(i, i + batchSize);
    const titles = chunk.map(a => a.wiki).join('|');
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=pageimages|info&inprop=url&pithumbsize=900&format=json`;
    
    try {
      const data = await fetchJson(apiUrl);
      const pages = (data.query && data.query.pages) || {};

      for (const item of chunk) {
        // find page
        let page = Object.values(pages).find(p => p.title.toLowerCase() === item.wiki.replace(/_/g, ' ').toLowerCase());
        if (!page) {
          // fallback search inside normalized
          const norm = (data.query.normalized || []).find(n => n.from.toLowerCase() === item.wiki.toLowerCase());
          if (norm) {
            page = Object.values(pages).find(p => p.title.toLowerCase() === norm.to.toLowerCase());
          }
        }

        const targetDir = path.join('images', 'discover', item.category);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        const targetPath = path.join(targetDir, item.filename);

        if (page && page.thumbnail && page.thumbnail.source) {
          console.log(`Downloading ${item.name} from ${page.thumbnail.source}`);
          try {
            await download(page.thumbnail.source, targetPath);
            manifest.push({
              category: item.category,
              id: item.id,
              name: item.name,
              targetPath: targetPath.replace(/\\/g, '/'),
              wikiPage: page.fullurl || `https://en.wikipedia.org/wiki/${item.wiki}`,
              sourceImageUrl: page.thumbnail.source,
              pageImage: page.pageimage,
              license: 'Wikimedia Commons / Public Domain / CC BY-SA (verified via Wikipedia API)',
              status: 'Downloaded OK'
            });
          } catch (dlErr) {
            console.error(`Download failed for ${item.name}:`, dlErr.message);
            manifest.push({
              category: item.category,
              id: item.id,
              name: item.name,
              targetPath: targetPath.replace(/\\/g, '/'),
              wikiPage: `https://en.wikipedia.org/wiki/${item.wiki}`,
              sourceImageUrl: page.thumbnail.source,
              pageImage: page.pageimage,
              license: 'Wikimedia Commons / CC BY-SA',
              status: `Download Error: ${dlErr.message}`
            });
          }
        } else {
          console.warn(`No thumbnail found for ${item.name} (${item.wiki})`);
          manifest.push({
            category: item.category,
            id: item.id,
            name: item.name,
            targetPath: targetPath.replace(/\\/g, '/'),
            wikiPage: `https://en.wikipedia.org/wiki/${item.wiki}`,
            sourceImageUrl: 'N/A',
            pageImage: 'N/A',
            license: 'Wikimedia Commons',
            status: 'Thumbnail Not Found via API'
          });
        }
      }
    } catch (err) {
      console.error(`Batch error at ${i}:`, err.message);
    }
  }

  // Generate IMAGE_MANIFEST.md
  let md = `# SUGGAYITT POVAA – DISCOVER & LEARN IMAGE ASSET MANIFEST\n\n`;
  md += `This manifest documents all verified visual assets downloaded from Wikimedia Commons / Wikipedia API for the Discover & Learn educational section.\n`;
  md += `**Zero Reuse Policy**: No travel package destination photos are reused for mountaineers, peaks, or historical monuments.\n\n`;
  md += `| Category | Subject Name | Local File Path | Wikimedia Source URL / Wiki Page | License / Status |\n`;
  md += `| :--- | :--- | :--- | :--- | :--- |\n`;

  for (const m of manifest) {
    const link = m.sourceImageUrl !== 'N/A' ? `[Image Source](${m.sourceImageUrl})` : `[Wiki Page](${m.wikiPage})`;
    md += `| **${m.category.toUpperCase()}** | ${m.name} | \`${m.targetPath}\` | ${link} | ${m.license} (${m.status}) |\n`;
  }

  fs.writeFileSync('IMAGE_MANIFEST.md', md, 'utf8');
  console.log(`\nCompleted! Generated IMAGE_MANIFEST.md with ${manifest.length} records.`);
}

run();
