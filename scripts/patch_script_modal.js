const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');

const newModalCode = `// COMPACT DISCOVER & LEARN POPUP MODALS
function openBioModal(mountaineerId) {
  const list = typeof discoverMountaineers !== 'undefined' ? discoverMountaineers : [];
  const m = list.find(item => item.id === mountaineerId);
  if (!m || !discoverModal || !discoverModalContent) return;

  const isMl = currentLang === 'ml';
  const name = isMl ? m.nameMl : m.nameEn;
  const fullName = isMl ? m.fullNameMl : m.fullNameEn;
  const nationality = isMl ? m.nationalityMl : m.nationalityEn;
  const birthplace = isMl ? m.birthplaceMl : m.birthplaceEn;
  const shortBio = isMl ? m.shortBioMl : m.shortBioEn;
  const keyAchieve = isMl ? m.keyAchievementMl : m.keyAchievementEn;
  const earlyLife = isMl ? m.earlyLifeMl : m.earlyLifeEn;
  const edu = isMl ? m.educationMl : m.educationEn;
  const expeditions = isMl ? m.majorExpeditionsMl : m.majorExpeditionsEn;
  const achievements = isMl ? m.historicAchievementsMl : m.historicAchievementsEn;
  const awards = isMl ? m.awardsMl : m.awardsEn;
  const legacy = isMl ? m.contributionsMl : m.contributionsEn;
  const facts = isMl ? m.interestingFactsMl : m.interestingFactsEn;

  discoverModalContent.innerHTML = \`
    <div class="compact-modal-header">
      <img src="\${m.portrait}" alt="\${m.nameEn}" class="compact-modal-thumb" onerror="this.src='images/discover/mountaineers/nirmal-purja.jpg'">
      <div class="compact-modal-meta">
        <span class="compact-badge">🧗‍♂️ \${nationality}</span>
        <h3>\${name}</h3>
        <p class="compact-sub">\${birthplace}</p>
      </div>
    </div>

    <div class="compact-modal-body">
      <!-- 1. Full Name, Nationality & Birthplace -->
      <div class="compact-info-block">
        <h4>👤 1. \${isMl ? 'പേരും വ്യക്തിവിവരങ്ങളും' : 'Mountaineer Identity & Introduction'}</h4>
        <p><strong>\${isMl ? 'മുഴുവൻ പേര്:' : 'Full Name:'}</strong> \${fullName}</p>
        <p style="margin-top: 0.25rem;"><strong>\${isMl ? 'രാജ്യവും പൗരത്വവും:' : 'Country & Nationality:'}</strong> \${nationality}</p>
        <p style="margin-top: 0.25rem;"><strong>\${isMl ? 'ജനനസ്ഥലവും തീയതിയും:' : 'Birthplace & Date:'}</strong> \${birthplace}</p>
        <p style="margin-top: 0.35rem; color: #FFD600; font-weight: 600;">\${shortBio}</p>
      </div>

      <!-- 2. Early Life & Background -->
      <div class="compact-info-block">
        <h4>🌱 2. \${isMl ? 'ആദ്യകാല ജീവിതവും പശ്ചാത്തലവും' : 'Early Life & Background'}</h4>
        <p>\${earlyLife}</p>
        \${edu ? \`<p style="margin-top: 0.35rem; font-size: 0.84rem; color: rgba(226, 232, 240, 0.8);"><strong>\${isMl ? 'വിദ്യാഭ്യാസം/പരിശീലനം:' : 'Education/Training:'}</strong> \${edu}</p>\` : ''}
      </div>

      <!-- 3. Major Mountaineering Achievements -->
      <div class="compact-info-block">
        <h4>🏆 3. \${isMl ? 'പ്രധാന പർവ്വത നേട്ടങ്ങൾ' : 'Major Mountaineering Achievements'}</h4>
        <p style="color: #FFD600; font-weight: 700; margin-bottom: 0.4rem;">★ \${keyAchieve}</p>
        <ul>
          \${achievements.map(a => \`<li>\${a}</li>\`).join('')}
        </ul>
      </div>

      <!-- 4. Important Expeditions -->
      <div class="compact-info-block">
        <h4>🗺️ 4. \${isMl ? 'ശ്രദ്ധേയമായ പര്യവേക്ഷണങ്ങൾ' : 'Important Expeditions'}</h4>
        <ul>
          \${expeditions.map(e => \`<li>\${e}</li>\`).join('')}
        </ul>
      </div>

      <!-- 5. Awards and Recognitions -->
      <div class="compact-info-block">
        <h4>🎖️ 5. \${isMl ? 'പുരസ്കാരങ്ങളും അംഗീകാരങ്ങളും' : 'Awards & Recognitions'}</h4>
        <ul>
          \${awards.map(aw => \`<li>\${aw}</li>\`).join('')}
        </ul>
      </div>

      <!-- 6. Legacy & Contribution to Mountaineering -->
      <div class="compact-info-block">
        <h4>⭐ 6. \${isMl ? 'പർവ്വതാരോഹണ രംഗത്തെ സംഭാവനകൾ' : 'Legacy & Contribution to Mountaineering'}</h4>
        <p>\${legacy}</p>
      </div>

      <!-- 7. Interesting Facts -->
      <div class="compact-info-block">
        <h4>💡 7. \${isMl ? 'രസകരമായ വസ്തുതകൾ' : 'Interesting Facts'}</h4>
        <ul>
          \${facts.map(f => \`<li>\${f}</li>\`).join('')}
        </ul>
      </div>
    </div>
  \`;

  discoverModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function openHistoryModal(placeId) {
  const places = typeof discoverHistoryPlaces !== 'undefined' ? discoverHistoryPlaces : [];
  const pl = places.find(item => item.id === placeId);
  if (!pl || !discoverModal || !discoverModalContent) return;

  const isMl = currentLang === 'ml';
  const name = isMl ? pl.nameMl : pl.nameEn;
  const state = isMl ? pl.stateMl : pl.stateEn;
  const loc = isMl ? pl.locationMl : pl.locationEn;
  const origin = isMl ? pl.originMl : pl.originEn;
  const ancient = isMl ? pl.ancientHistoryMl : pl.ancientHistoryEn;
  const dynasties = isMl ? pl.dynastiesMl : pl.dynastiesEn;
  const monuments = isMl ? pl.monumentsMl : pl.monumentsEn;
  const traditions = isMl ? pl.traditionsMl : pl.traditionsEn;
  const rel = isMl ? pl.religiousSignificanceMl : pl.religiousSignificanceEn;
  const events = isMl ? pl.keyEventsMl : pl.keyEventsEn;
  const facts = isMl ? pl.interestingFactsMl : pl.interestingFactsEn;

  const monumentList = Array.isArray(monuments) ? monuments : monuments.split(/[,;•.]\\s+/).filter(Boolean);
  const factList = Array.isArray(facts) ? facts : facts.split(/[,;•.]\\s+/).filter(Boolean);
  const eventList = Array.isArray(events) ? events : events.split(/[,;•.]\\s+/).filter(Boolean);

  discoverModalContent.innerHTML = \`
    <div class="compact-modal-header">
      <img src="\${pl.image}" alt="\${pl.nameEn}" class="compact-modal-thumb" onerror="this.src='images/discover/history/hampi.jpg'">
      <div class="compact-modal-meta">
        <span class="compact-badge">🏛️ \${state}</span>
        <h3>\${name}</h3>
        <p class="compact-sub">📍 \${loc}</p>
      </div>
    </div>

    <div class="compact-modal-body">
      <!-- 1. Place Name & Identity -->
      <div class="compact-info-block">
        <h4>📍 1. \${isMl ? 'സ്ഥലനാമവും പ്രാഥമിക വിവരവും' : 'Place Name & Identity'}</h4>
        <p><strong>\${isMl ? 'പൈതൃക കേന്ദ്രം:' : 'Heritage Destination:'}</strong> \${name} (\${state})</p>
        <p style="margin-top: 0.25rem;"><strong>\${isMl ? 'ഭൂമിശാസ്ത്ര സ്ഥാനം:' : 'Geographical Location:'}</strong> \${loc}</p>
      </div>

      <!-- 2. Location & Historical Period -->
      <div class="compact-info-block">
        <h4>⏳ 2. \${isMl ? 'ചരിത്ര കാലഘട്ടവും സ്ഥാനവും' : 'Location & Historical Period'}</h4>
        <p>\${ancient}</p>
      </div>

      <!-- 3. Brief Historical Introduction -->
      <div class="compact-info-block">
        <h4>📜 3. \${isMl ? 'ചരിത്ര ആമുഖവും ഉത്ഭവവും' : 'Brief Historical Introduction & Origin'}</h4>
        <p>\${origin}</p>
      </div>

      <!-- 4. Important Kings, Rulers or Dynasties -->
      <div class="compact-info-block">
        <h4>👑 4. \${isMl ? 'പ്രധാന രാജവംശങ്ങളും ഭരണാധികാരികളും' : 'Important Kings, Rulers & Dynasties'}</h4>
        <p><strong>\${isMl ? 'ഭരണ രാജവംശങ്ങൾ:' : 'Associated Dynasties:'}</strong> \${dynasties}</p>
      </div>

      <!-- 5. Important Historical Monuments -->
      <div class="compact-info-block">
        <h4>🏛️ 5. \${isMl ? 'പ്രധാന ചരിത്ര സ്മാരകങ്ങൾ' : 'Important Historical Monuments'}</h4>
        \${monumentList.length > 1 ? \`
          <ul>
            \${monumentList.map(m => \`<li>\${m}</li>\`).join('')}
          </ul>
        \` : \`<p>\${monuments}</p>\`}
      </div>

      <!-- 6. Cultural and Religious Significance -->
      <div class="compact-info-block">
        <h4>🕉️ 6. \${isMl ? 'സാംസ്കാരിക-ആത്മീയ പ്രാധാന്യം' : 'Cultural & Religious Significance'}</h4>
        <p>\${traditions}</p>
        \${rel ? \`<p style="margin-top: 0.35rem; color: #38bdf8;"><strong>\${isMl ? 'ആത്മീയ പാരമ്പര്യം:' : 'Spiritual Heritage:'}</strong> \${rel}</p>\` : ''}
      </div>

      <!-- 7. Major Historical Events -->
      <div class="compact-info-block">
        <h4>⚔️ 7. \${isMl ? 'പ്രധാന ചരിത്ര സംഭവങ്ങൾ' : 'Major Historical Events'}</h4>
        \${eventList.length > 1 ? \`
          <ul>
            \${eventList.map(ev => \`<li>\${ev}</li>\`).join('')}
          </ul>
        \` : \`<p>\${events}</p>\`}
      </div>

      <!-- 8. Interesting Historical Facts -->
      <div class="compact-info-block">
        <h4>💡 8. \${isMl ? 'രസകരമായ ചരിത്ര വസ്തുതകൾ' : 'Interesting Historical Facts'}</h4>
        \${factList.length > 1 ? \`
          <ul>
            \${factList.map(f => \`<li>\${f}</li>\`).join('')}
          </ul>
        \` : \`<p>\${facts}</p>\`}
      </div>
    </div>
  \`;

  discoverModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function openPeakModal(peakId) {
  const peaks = typeof discover14Peaks !== 'undefined' ? discover14Peaks : [];
  const seven = typeof discoverSevenSummits !== 'undefined' ? discoverSevenSummits.mountains : [];
  const p = peaks.find(x => x.id === peakId) || seven.find(x => x.id === peakId);
  if (!p || !discoverModal || !discoverModalContent) return;

  const isMl = currentLang === 'ml';
  const name = isMl ? p.nameMl : p.nameEn;
  const country = isMl ? p.countryMl : p.countryEn;
  const range = p.rangeEn ? (isMl ? p.rangeMl : p.rangeEn) : (isMl ? p.continentMl : p.continentEn);
  const firstAscent = isMl ? p.firstAscentMl : p.firstAscentEn;
  const difficulty = isMl ? p.difficultyMl : p.difficultyEn;
  const history = isMl ? p.historyMl : p.historyEn;
  const facts = isMl ? p.factsMl : p.factsEn;
  const expeditions = isMl ? p.famousExpeditionsMl : p.famousExpeditionsEn;

  discoverModalContent.innerHTML = \`
    <div class="compact-modal-header">
      <img src="\${p.image}" alt="\${p.nameEn}" class="compact-modal-thumb" onerror="this.src='images/discover/peaks/mount-everest.jpg'">
      <div class="compact-modal-meta">
        <span class="compact-badge">🏔️ \${p.elevation}</span>
        <h3>\${name}</h3>
        <p class="compact-sub">📍 \${country} • \${range}</p>
      </div>
    </div>

    <div class="compact-modal-body">
      <div class="compact-info-block">
        <h4>🏔️ 1. \${isMl ? 'കൊടുമുടിയുടെ പേരും സ്ഥാനവും' : 'Peak Identity & Elevation'}</h4>
        <p><strong>\${isMl ? 'കൊടുമുടി:' : 'Mountain Peak:'}</strong> \${name}</p>
        <p style="margin-top: 0.25rem;"><strong>\${isMl ? 'ഉയരം:' : 'Elevation:'}</strong> \${p.elevation}</p>
        <p style="margin-top: 0.25rem;"><strong>\${isMl ? 'രാജ്യവും മലനിരയും:' : 'Country & Range:'}</strong> \${country} (\${range})</p>
      </div>

      <div class="compact-info-block">
        <h4>🏁 2. \${isMl ? 'ആദ്യത്തെ ചരിത്ര വിജയം' : 'First Successful Ascent'}</h4>
        <p>\${firstAscent}</p>
      </div>

      <div class="compact-info-block">
        <h4>⚠️ 3. \${isMl ? 'കയറ്റത്തിന്റെ കാഠിന്യവും വെല്ലുവിളികളും' : 'Climbing Difficulty & Terrain'}</h4>
        <p>\${difficulty}</p>
      </div>

      \${history ? \`
      <div class="compact-info-block">
        <h4>📜 4. \${isMl ? 'ചരിത്ര പശ്ചാത്തലം' : 'Historical Background'}</h4>
        <p>\${history}</p>
      </div>\` : ''}

      \${expeditions ? \`
      <div class="compact-info-block">
        <h4>🗺️ 5. \${isMl ? 'പ്രശസ്ത പര്യവേക്ഷണങ്ങൾ' : 'Famous Expeditions'}</h4>
        <p>\${expeditions}</p>
      </div>\` : ''}

      <div class="compact-info-block">
        <h4>💡 6. \${isMl ? 'പ്രധാന വസ്തുതകൾ' : 'Key Mountain Facts'}</h4>
        <p>\${facts}</p>
      </div>
    </div>
  \`;

  discoverModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function openDiscoverModal(itemId) {
  const mount = (typeof discoverMountaineers !== 'undefined' ? discoverMountaineers : []).find(m => m.id === itemId);
  if (mount) {
    openBioModal(itemId);
    return;
  }
  const peak = (typeof discover14Peaks !== 'undefined' ? discover14Peaks : []).find(p => p.id === itemId || p.id === itemId.replace('-summit', ''));
  if (peak) {
    openPeakModal(peak.id);
    return;
  }
  const place = (typeof discoverHistoryPlaces !== 'undefined' ? discoverHistoryPlaces : []).find(h => h.id === itemId);
  if (place) {
    openHistoryModal(itemId);
    return;
  }
}

function closeDiscoverModal() {
  if (discoverModal) {
    discoverModal.classList.add('hidden');
  }
  document.body.style.overflow = '';
}

function closeDiscoverOnBackdrop(event) {
  if (event.target === discoverModal) {
    closeDiscoverModal();
  }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && discoverModal && !discoverModal.classList.contains('hidden')) {
    closeDiscoverModal();
  }
});
`;

// Replace from `// FULL 14-POINT ARTICLE MODALS` to `function closeDiscoverOnBackdrop(event) { ... }`
const startIdx = script.indexOf('// FULL 14-POINT ARTICLE MODALS');
const endMarker = 'function getUserProfileStore()';
const endIdx = script.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  script = script.slice(0, startIdx) + newModalCode + '\n\n' + script.slice(endIdx);
  fs.writeFileSync('script.js', script, 'utf8');
  console.log('Successfully replaced modal functions in script.js!');
} else {
  console.warn('Could not find startIdx or endIdx in script.js', startIdx, endIdx);
}
