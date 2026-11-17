const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');
const target = "if (currentHistoryState === 'Other') return ['Uttar Pradesh', 'National Capital Territory', 'Meghalaya', 'West Bengal', 'Sikkim'].includes(p.state);";
const replacement = "if (currentHistoryState === 'Other') return ['Uttar Pradesh', 'Delhi', 'National Capital Territory', 'Meghalaya', 'West Bengal', 'Sikkim'].includes(p.state);";

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync('script.js', code, 'utf8');
  console.log('Successfully patched Other states filter in script.js!');
} else {
  console.log('Target string not found in script.js');
}
