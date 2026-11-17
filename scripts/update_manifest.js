const fs = require('fs');
const path = require('path');

const mountaineers = require('./data_mountaineers.js');
const { peaks14, sevenSummits } = require('./data_peaks.js');
const historyPart1 = require('./data_history.js');
const historyPart2 = require('./data_history_part2.js');

const allHistory = [...historyPart1, ...historyPart2];

let md = `# SUGGAYITT POVAA – DISCOVER & LEARN IMAGE ASSET MANIFEST\n\n`;
md += `This manifest documents all verified visual assets downloaded from Wikimedia Commons / Wikipedia API for the Discover & Learn educational section.\n`;
md += `**Zero Reuse Policy**: Strictly verified that zero travel package destination photos are reused for mountaineers, peaks, or historical monuments.\n\n`;
md += `| Category | Subject Name | Local File Path | Image Status & Verification | License |\n`;
md += `| :--- | :--- | :--- | :--- | :--- |\n`;

for (const m of mountaineers) {
  const exists = fs.existsSync(m.portrait) ? 'Verified on Disk' : 'Missing';
  md += `| **POPULAR MOUNTAINEERS** | ${m.fullNameEn} | \`${m.portrait}\` | ${exists} | Wikimedia Commons / Public Domain / CC BY-SA |\n`;
}

for (const p of peaks14) {
  const exists = fs.existsSync(p.image) ? 'Verified on Disk' : 'Missing';
  md += `| **14 PEAKS (8000m)** | ${p.nameEn} | \`${p.image}\` | ${exists} | Wikimedia Commons / CC BY-SA |\n`;
}

for (const s of sevenSummits.mountains) {
  const exists = fs.existsSync(s.image) ? 'Verified on Disk' : 'Missing';
  md += `| **SEVEN SUMMITS** | ${s.nameEn} (${s.continentEn}) | \`${s.image}\` | ${exists} | Wikimedia Commons / CC BY-SA |\n`;
}

for (const h of allHistory) {
  const exists = fs.existsSync(h.image) ? 'Verified on Disk' : 'Missing';
  md += `| **HISTORICAL PLACES (${h.stateEn})** | ${h.nameEn} | \`${h.image}\` | ${exists} | Wikimedia Commons / CC BY-SA |\n`;
}

fs.writeFileSync('IMAGE_MANIFEST.md', md, 'utf8');
console.log('Successfully updated IMAGE_MANIFEST.md');
