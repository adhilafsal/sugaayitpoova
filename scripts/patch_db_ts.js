const fs = require('fs');
let code = fs.readFileSync('db.ts', 'utf8');

const target = 'if (checkDiscover.count === 0) {';
const replacement = 'if (checkDiscover.count < 60) {\n    db.exec("DELETE FROM discover_items");';

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync('db.ts', code, 'utf8');
  console.log('Successfully updated db.ts checkDiscover condition!');
} else {
  console.log('Target not found in db.ts');
}
