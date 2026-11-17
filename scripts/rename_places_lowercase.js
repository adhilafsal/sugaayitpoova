const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const placesDir = 'images/places';
const files = fs.readdirSync(placesDir);

files.forEach(file => {
  if (!file.endsWith('.jpg')) return;
  const lower = file.toLowerCase();
  if (file !== lower) {
    const origPath = path.join(placesDir, file).replace(/\\/g, '/');
    const tmpPath = path.join(placesDir, file + '.tmp').replace(/\\/g, '/');
    const lowerPath = path.join(placesDir, lower).replace(/\\/g, '/');
    
    console.log(`Renaming: ${origPath} -> ${lowerPath}`);
    execSync(`git mv "${origPath}" "${tmpPath}"`);
    execSync(`git mv "${tmpPath}" "${lowerPath}"`);
  }
});
console.log('All destination image renames completed!');
