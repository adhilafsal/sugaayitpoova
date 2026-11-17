const fs = require('fs');

let html = fs.readFileSync('suggayitt povaa.html', 'utf8');

// 1. Update modal markup
const oldModal = `<div id="discoverModal" class="auth-modal-backdrop hidden" onclick="closeDiscoverOnBackdrop(event)">
    <div class="discover-modal-card large-modal">
      <button type="button" class="auth-close-btn" onclick="closeDiscoverModal()" aria-label="Close">×</button>
      <div id="discoverModalContent"></div>
    </div>
  </div>`;

const newModal = `<!-- DISCOVER COMPACT POPUP MODAL (DARK LIQUID GLASS) -->
  <div id="discoverModal" class="compact-modal-backdrop hidden" onclick="closeDiscoverOnBackdrop(event)">
    <div class="compact-discover-modal" role="dialog" aria-modal="true" onclick="event.stopPropagation()">
      <button type="button" class="compact-modal-close-btn" onclick="closeDiscoverModal()" aria-label="Close">×</button>
      <div id="discoverModalContent" class="compact-modal-inner"></div>
    </div>
  </div>`;

if (html.includes(oldModal)) {
  html = html.replace(oldModal, newModal);
  console.log('Replaced old modal markup with compact modal!');
} else {
  // Regex replace for CRLF variations
  const reg = /<div id="discoverModal"[\s\S]*?id="discoverModalContent"><\/div>\s*<\/div>\s*<\/div>/;
  if (reg.test(html)) {
    html = html.replace(reg, newModal);
    console.log('Replaced old modal with regex!');
  } else {
    console.warn('Could not match oldModal in suggayitt povaa.html');
  }
}

// 2. Add imageMapping.js script tag
if (!html.includes('imageMapping.js')) {
  html = html.replace('<script src="discoverData.js"></script>', '<script src="imageMapping.js"></script>\n  <script src="discoverData.js"></script>');
  console.log('Added imageMapping.js script tag!');
}

fs.writeFileSync('suggayitt povaa.html', html, 'utf8');
console.log('suggayitt povaa.html successfully updated!');
