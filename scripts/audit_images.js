const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      results.push(fullPath.replace(/\\/g, '/'));
    }
  });
  return results;
}

const diskFiles = getFiles('images');
['logo.png', 'favicon.png'].forEach(f => {
  if (fs.existsSync(f)) diskFiles.push(f);
});
console.log('Total files found on disk:', diskFiles.length);

const exactFileSet = new Set(diskFiles);
const lowerToExactMap = new Map();
diskFiles.forEach(f => {
  lowerToExactMap.set(f.toLowerCase(), f);
});

const filesToAudit = ['script.js', 'discoverData.js', 'imageMapping.js', 'imageMapping.json', 'index.html', 'suggayitt povaa.html', 'style.css'];

const imageRegex = /['"]([^'"]+\.(?:jpg|jpeg|png|webp|gif|svg|ico))['"]/gi;

filesToAudit.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  let match;
  let mismatches = [];
  let notFound = [];
  let exactCount = 0;
  while ((match = imageRegex.exec(content)) !== null) {
    const ref = match[1];
    if (ref.startsWith('http://') || ref.startsWith('https://')) continue;
    let norm = ref.replace(/^\.\//, '').replace(/^\//, '');
    if (exactFileSet.has(norm)) {
      exactCount++;
    } else if (lowerToExactMap.has(norm.toLowerCase())) {
      mismatches.push({ ref, exact: lowerToExactMap.get(norm.toLowerCase()) });
    } else {
      notFound.push(ref);
    }
  }
  console.log(`\n=== File: ${file} ===`);
  console.log(`Exact matches: ${exactCount}`);
  console.log(`Casing mismatches: ${mismatches.length}`);
  if (mismatches.length > 0) {
    console.log('Mismatches details:');
    mismatches.forEach(m => console.log(`   REF: "${m.ref}"  --> EXACT ON DISK: "${m.exact}"`));
  }
  console.log(`Not found on disk: ${notFound.length}`);
  if (notFound.length > 0) {
    console.log('Not found details:', notFound);
  }
});
