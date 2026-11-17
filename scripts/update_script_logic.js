const fs = require('fs');

const scriptPath = 'script.js';
let content = fs.readFileSync(scriptPath, 'utf8');

const startMarker = "function renderDiscover() {";
const endMarker = "function getUserProfileStore() {";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find start or end markers in script.js!");
  process.exit(1);
}

const before = content.slice(0, startIndex);
const after = content.slice(endIndex);

const newLogic = `// --- DISCOVER & LEARN (4 MAIN CATEGORIES) CONTROLLER ---
let currentDiscoverTab = 'hub';
let currentPeaksSubTab = '14peaks';
let currentHistoryState = 'all';
let currentKnowledgeTopic = 'gears';

function switchDiscoverTab(tabId) {
  currentDiscoverTab = tabId;
  document.querySelectorAll('.discover-nav-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dtab === tabId);
  });

  const hubSec = document.getElementById('discoverSection-hub');
  const mountSec = document.getElementById('discoverSection-mountaineers');
  const peaksSec = document.getElementById('discoverSection-peaks');
  const histSec = document.getElementById('discoverSection-history');
  const knowSec = document.getElementById('discoverSection-knowledge');

  if (hubSec) hubSec.classList.toggle('hidden', tabId !== 'hub');
  if (mountSec) mountSec.classList.toggle('hidden', tabId !== 'mountaineers');
  if (peaksSec) peaksSec.classList.toggle('hidden', tabId !== 'peaks');
  if (histSec) histSec.classList.toggle('hidden', tabId !== 'history');
  if (knowSec) knowSec.classList.toggle('hidden', tabId !== 'knowledge');

  if (tabId === 'mountaineers') renderMountaineersSection();
  else if (tabId === 'peaks') renderPeaksSection();
  else if (tabId === 'history') renderHistorySection();
  else if (tabId === 'knowledge') renderKnowledgeSection();
}

function renderDiscover() {
  switchDiscoverTab(currentDiscoverTab);
}

// 1. POPULAR MOUNTAINEERS
function renderMountaineersSection() {
  const spotlightContainer = document.getElementById('nimsdaiSpotlight');
  const gridContainer = document.getElementById('mountaineersGrid');
  const list = typeof discoverMountaineers !== 'undefined' ? discoverMountaineers : [];

  // Nimsdai Purja Spotlight
  const nims = list.find(m => m.id === 'nirmal-purja');
  if (nims && spotlightContainer) {
    const title = currentLang === 'ml' ? nims.fullNameMl : nims.fullNameEn;
    const sub = currentLang === 'ml' ? nims.keyAchievementMl : nims.keyAchievementEn;
    const bio = currentLang === 'ml' ? nims.journeyMl : nims.journeyEn;
    const readBtn = currentLang === 'ml' ? 'നിംസ്ദായുടെ പൂർണ്ണ ജീവചരിത്രം വായിക്കാം →' : 'Read Full Nimsdai Biography & Timeline →';

    spotlightContainer.innerHTML = \`
      <div class="nimsdai-spotlight-grid">
        <div class="nimsdai-photo-wrap">
          <img src="\${nims.portrait}" alt="Nirmal Purja Nimsdai" class="nimsdai-photo">
        </div>
        <div>
          <div class="nimsdai-badges-row">
            <span class="nims-badge-pill gold">⭐ \${currentLang === 'ml' ? 'പ്രത്യേക ഫീച്ചർ' : 'Special Feature'}</span>
            <span class="nims-badge-pill">🎖️ Gurkha & British SBS</span>
            <span class="nims-badge-pill">⏱️ 14 Peaks in 189 Days</span>
            <span class="nims-badge-pill">❄️ K2 Winter First Ascent</span>
          </div>
          <h2 class="nimsdai-lead-title">\${title}</h2>
          <div class="nimsdai-lead-sub">\${sub}</div>
          <p style="font-size: 0.94rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65; margin-bottom: 1.2rem;">
            \${bio}
          </p>
          <div class="nimsdai-stats-strip">
            <div class="nims-stat-box">
              <strong>14</strong>
              <span>\${currentLang === 'ml' ? '8000m കൊടുമുടികൾ' : '8000m Summits'}</span>
            </div>
            <div class="nims-stat-box">
              <strong>189</strong>
              <span>\${currentLang === 'ml' ? 'ദിവസങ്ങൾ (6 മാസം 6 ദിവസം)' : 'Days (Record Speed)'}</span>
            </div>
            <div class="nims-stat-box">
              <strong>K2 Winter</strong>
              <span>\${currentLang === 'ml' ? 'ചരിത്രത്തിലെ ആദ്യ വിജയം' : 'Historic 1st Winter'}</span>
            </div>
            <div class="nims-stat-box">
              <strong>Netflix & Book</strong>
              <span>14 Peaks: Nothing Is Impossible</span>
            </div>
          </div>
          <button type="button" class="btn-store-link" style="margin-top: 1rem; padding: 0.75rem 1.6rem; font-size: 0.92rem;" onclick="openBioModal('nirmal-purja')">
            \${readBtn}
          </button>
        </div>
      </div>
    \`;
  }

  // 12 Mountaineers Cards Grid
  if (gridContainer) {
    gridContainer.innerHTML = list.map(m => {
      const name = currentLang === 'ml' ? m.nameMl : m.nameEn;
      const nat = currentLang === 'ml' ? m.nationalityMl : m.nationalityEn;
      const achieve = currentLang === 'ml' ? m.keyAchievementMl : m.keyAchievementEn;
      const short = currentLang === 'ml' ? m.shortBioMl : m.shortBioEn;
      const btnText = currentLang === 'ml' ? 'പൂർണ്ണ ജീവചരിത്രം വായിക്കാം →' : 'View Full Biography →';

      return \`
        <div class="mountaineer-card" onclick="openBioModal('\${m.id}')">
          <div>
            <div class="mountaineer-thumb-wrap">
              <img src="\${m.portrait}" alt="\${m.nameEn}" class="mountaineer-thumb" onerror="this.src='images/discover/mountaineers/nirmal-purja.jpg'">
              <span class="mountaineer-nat-tag">📍 \${nat}</span>
            </div>
            <h3>\${name}</h3>
            <div class="mountaineer-achievement">🏆 \${achieve}</div>
            <p class="mountaineer-bio-snip">\${short}</p>
          </div>
          <div>
            <button type="button" class="btn-bio-read" onclick="event.stopPropagation(); openBioModal('\${m.id}')">
              \${btnText}
            </button>
          </div>
        </div>
      \`;
    }).join('');
  }
}

// 2. PEAKS (A. 14 PEAKS & B. 7 PEAKS)
function switchPeaksSubTab(subTabId) {
  currentPeaksSubTab = subTabId;
  document.querySelectorAll('.peaks-subnav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.ptab === subTabId);
  });
  const view14 = document.getElementById('peaksSubView-14peaks');
  const view7 = document.getElementById('peaksSubView-7summits');
  if (view14) view14.classList.toggle('hidden', subTabId !== '14peaks');
  if (view7) view7.classList.toggle('hidden', subTabId !== '7summits');
  renderPeaksSection();
}

function renderPeaksSection() {
  const view14 = document.getElementById('peaksSubView-14peaks');
  const view7 = document.getElementById('peaksSubView-7summits');

  // Subsection A: 14 Peaks
  if (view14 && currentPeaksSubTab === '14peaks') {
    const peaks = typeof discover14Peaks !== 'undefined' ? discover14Peaks : [];
    const nimsPossible = typeof nimsdaiProjectPossible !== 'undefined' ? nimsdaiProjectPossible : null;

    let html = \`
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">8,000m+ Death Zone</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">\${currentLang === 'ml' ? 'ലോകത്തിലെ 14 എണ്ണായിരം മീറ്റർ കൊടുമുടികൾ' : 'The 14 Eight-Thousanders of Planet Earth'}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.88); line-height: 1.6;">
          \${currentLang === 'ml' 
            ? 'സമുദ്രനിരപ്പിൽ നിന്ന് 8,000 മീറ്ററിലധികം ഉയരമുള്ള കൊടുമുടികളെയാണ് എണ്ണായിരം മീറ്ററുകൾ അഥവാ "ഡെത്ത് സോൺ" കൊടുമുടികൾ എന്ന് വിളിക്കുന്നത്. ഈ ഉയരത്തിൽ അന്തരീക്ഷ ഓക്സിജൻ്റെ അളവ് മൂന്നിലൊന്നായി ചുരുങ്ങുന്നു. ലോകത്തിൽ ആകെയുള്ള 14 എണ്ണായിരം മീറ്റർ കൊടുമുടികളും ഏഷ്യയിലെ ഹിമാലയം, കാറക്കോറം മലനിരകളിലാണ് സ്ഥിതി ചെയ്യുന്നത്.'
            : 'The 14 Peaks challenge encompasses all fourteen mountains on Earth standing taller than 8,000 meters (26,247 feet) above sea level. Located exclusively in the Himalayan and Karakoram ranges of Asia, their summits pierce the biological "Death Zone" where atmospheric oxygen is insufficient to sustain human life long-term.'}
        </p>
      </div>

      <div class="peaks-grid">
        \${peaks.map(p => {
          const name = currentLang === 'ml' ? p.nameMl : p.nameEn;
          const country = currentLang === 'ml' ? p.countryMl : p.countryEn;
          const ascent = currentLang === 'ml' ? p.firstAscentMl : p.firstAscentEn;
          const diff = currentLang === 'ml' ? p.difficultyMl : p.difficultyEn;
          const hist = currentLang === 'ml' ? p.historyMl : p.historyEn;

          return \`
            <div class="peak-card" onclick="openPeakModal('\${p.id}')">
              <div class="peak-thumb-wrap">
                <img src="\${p.image}" alt="\${p.nameEn}" class="peak-thumb" onerror="this.src='images/discover/peaks/mount-everest.jpg'">
                <span class="peak-rank-tag">#\${p.rank} • \${p.elevation}</span>
              </div>
              <h3>\${name}</h3>
              <div class="peak-meta-row">
                <span>📍 \${country}</span>
              </div>
              <p class="peak-detail-snip"><strong>\${currentLang === 'ml' ? 'ആദ്യ വിജയം:' : 'First Ascent:'}</strong> \${ascent}</p>
              <p class="peak-detail-snip" style="color: #fca5a5;"><strong>\${currentLang === 'ml' ? 'കാഠിന്യം:' : 'Difficulty:'}</strong> \${diff}</p>
              <button type="button" class="btn-bio-read" style="margin-top: 0.8rem;" onclick="event.stopPropagation(); openPeakModal('\${p.id}')">
                \${currentLang === 'ml' ? 'വിശദ വിവരങ്ങൾ കാണുക →' : 'View Mountain Profile →'}
              </button>
            </div>
          \`;
        }).join('')}
      </div>
    \`;

    // Dedicated Project Possible explanation & timeline table
    if (nimsPossible) {
      html += \`
        <div class="project-possible-box">
          <div class="possible-header">
            <span class="discover-badge" style="border-color: #FFD600; color: #FFD600;">⚡ Historic Record</span>
            <h2 style="font-size: 1.8rem; color: #ffffff; margin: 0.5rem 0;">\${currentLang === 'ml' ? nimsPossible.titleMl : nimsPossible.titleEn}</h2>
            <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
              \${currentLang === 'ml' ? nimsPossible.overviewMl : nimsPossible.overviewEn}
            </p>
          </div>

          <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 14px; padding: 1.3rem; margin-bottom: 1.5rem;">
            <h4 style="color: #FFD600; font-size: 1.1rem; margin-bottom: 0.6rem;">
              \${currentLang === 'ml' ? '14 കൊടുമുടികൾ: സാധാരണ ദൗത്യങ്ങളും പ്രൊജക്റ്റ് പോസിബിളും തമ്മിലുള്ള വ്യത്യാസം' : 'General 14 Peaks Challenge vs. Project Possible'}
            </h4>
            <p style="font-size: 0.92rem; color: rgba(226, 232, 240, 0.9); line-height: 1.6; margin-bottom: 0.75rem;">
              <strong>\${currentLang === 'ml' ? 'പരമ്പരാഗത ശൈലി:' : 'Traditional Mountaineering:'}</strong> \${currentLang === 'ml' ? nimsPossible.comparison.generalMl : nimsPossible.comparison.generalEn}
            </p>
            <p style="font-size: 0.92rem; color: rgba(226, 232, 240, 0.9); line-height: 1.6;">
              <strong>\${currentLang === 'ml' ? 'നിംസ്ദായുടെ റെക്കോർഡ്:' : 'Nimsdai Purja Record:'}</strong> \${currentLang === 'ml' ? nimsPossible.comparison.nimsdaiMl : nimsPossible.comparison.nimsdaiEn}
            </p>
          </div>

          <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 0.8rem;">
            📅 \${currentLang === 'ml' ? 'നിർമൽ പുർജയുടെ 14 സമ്മിറ്റ് തീയതികൾ (2019 ടൈംലൈൻ)' : 'Verified Summit Dates & Expedition Timeline (2019)'}
          </h4>
          <div style="overflow-x: auto;">
            <table class="possible-timeline-table">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Peak & Elevation</th>
                  <th>Verified Summit Date</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                \${nimsPossible.verifiedTimeline.map(item => \`
                  <tr>
                    <td><span class="nims-badge-pill" style="font-size: 0.72rem;">\${item.phase}</span></td>
                    <td><strong>\${item.peak}</strong></td>
                    <td style="color: #FFD600; font-weight: 700;">\${item.date}</td>
                    <td>\${item.country}</td>
                  </tr>
                \`).join('')}
              </tbody>
            </table>
          </div>

          <div style="margin-top: 1.6rem;">
            <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.6rem;">
              🤝 \${currentLang === 'ml' ? 'നേപ്പാളി ഷെർപ്പ സംഘം (സഹയാത്രികർ):' : 'The Legendary Nepali Climbing Team:'}
            </h4>
            <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
              \${nimsPossible.teamMembers.map(tm => \`
                <span class="nims-badge-pill" style="padding: 0.4rem 0.85rem; font-size: 0.82rem;">
                  \${tm.name} <span style="color: #38bdf8;">(\${tm.role})</span>
                </span>
              \`).join('')}
            </div>
          </div>
        </div>
      \`;
    }

    view14.innerHTML = html;
  }

  // Subsection B: 7 Peaks (Seven Summits)
  if (view7 && currentPeaksSubTab === '7summits') {
    const summitsData = typeof discoverSevenSummits !== 'undefined' ? discoverSevenSummits : null;
    if (!summitsData) return;

    let html = \`
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">The Seven Continents</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">\${currentLang === 'ml' ? 'സെവൻ സമ്മിറ്റ്സ് ചലഞ്ച്' : 'The Seven Summits Challenge'}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.88); line-height: 1.6;">
          \${currentLang === 'ml' ? summitsData.overviewMl : summitsData.overviewEn}
        </p>
      </div>

      <!-- Bass vs Messner Comparison -->
      <div class="seven-summits-comparison">
        <h3 style="color: #FFD600; font-size: 1.35rem; margin-bottom: 0.6rem;">
          \${currentLang === 'ml' ? summitsData.comparisonAnalysis.titleMl : summitsData.comparisonAnalysis.titleEn}
        </h3>
        <p style="font-size: 0.93rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
          \${currentLang === 'ml' ? summitsData.comparisonAnalysis.textMl : summitsData.comparisonAnalysis.textEn}
        </p>

        <div class="comparison-dual-grid">
          <div class="list-box">
            <h4>🧗‍♂️ BASS LIST (1985)</h4>
            <p style="font-size: 0.82rem; color: rgba(226, 232, 240, 0.7); margin-bottom: 0.5rem;">Defines Australia as the mainland continent (Mount Kosciuszko).</p>
            <ol>
              <li>Asia: Mount Everest (8,848.86 m)</li>
              <li>South America: Aconcagua (6,961 m)</li>
              <li>North America: Denali (6,190 m)</li>
              <li>Africa: Mount Kilimanjaro (5,895 m)</li>
              <li>Europe: Mount Elbrus (5,642 m)</li>
              <li>Antarctica: Vinson Massif (4,892 m)</li>
              <li><strong style="color: #FFD600;">Australia: Mount Kosciuszko (2,228 m)</strong></li>
            </ol>
          </div>

          <div class="list-box">
            <h4>🏔️ MESSNER LIST (1986)</h4>
            <p style="font-size: 0.82rem; color: rgba(226, 232, 240, 0.7); margin-bottom: 0.5rem;">Defines Oceania as the true continent (Carstensz Pyramid / Puncak Jaya).</p>
            <ol>
              <li>Asia: Mount Everest (8,848.86 m)</li>
              <li>South America: Aconcagua (6,961 m)</li>
              <li>North America: Denali (6,190 m)</li>
              <li>Africa: Mount Kilimanjaro (5,895 m)</li>
              <li>Europe: Mount Elbrus (5,642 m)</li>
              <li>Antarctica: Vinson Massif (4,892 m)</li>
              <li><strong style="color: #FFD600;">Oceania: Carstensz Pyramid (4,884 m)</strong></li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Seven Summits Mountains Grid -->
      <div class="peaks-grid">
        \${summitsData.mountains.map(m => {
          const name = currentLang === 'ml' ? m.nameMl : m.nameEn;
          const cont = currentLang === 'ml' ? m.continentMl : m.continentEn;
          const country = currentLang === 'ml' ? m.countryMl : m.countryEn;
          const ascent = currentLang === 'ml' ? m.firstAscentMl : m.firstAscentEn;
          const diff = currentLang === 'ml' ? m.difficultyMl : m.difficultyEn;
          const facts = currentLang === 'ml' ? m.factsMl : m.factsEn;

          return \`
            <div class="peak-card" onclick="openPeakModal('\${m.id}')">
              <div class="peak-thumb-wrap">
                <img src="\${m.image}" alt="\${m.nameEn}" class="peak-thumb" onerror="this.src='images/discover/peaks/mount-everest.jpg'">
                <span class="peak-rank-tag">\${cont} • \${m.elevation}</span>
              </div>
              <h3>\${name}</h3>
              <div class="peak-meta-row">
                <span>📍 \${country}</span>
              </div>
              <p class="peak-detail-snip"><strong>\${currentLang === 'ml' ? 'ആദ്യ വിജയം:' : 'First Ascent:'}</strong> \${ascent}</p>
              <p class="peak-detail-snip" style="color: #fca5a5;"><strong>\${currentLang === 'ml' ? 'കാഠിന്യം:' : 'Difficulty:'}</strong> \${diff}</p>
              <p class="peak-detail-snip">\${facts}</p>
              <button type="button" class="btn-bio-read" style="margin-top: 0.8rem;" onclick="event.stopPropagation(); openPeakModal('\${m.id}')">
                \${currentLang === 'ml' ? 'വിശദ വിവരങ്ങൾ കാണുക →' : 'View Mountain Profile →'}
              </button>
            </div>
          \`;
        }).join('')}
      </div>
    \`;

    view7.innerHTML = html;
  }
}

// 3. HISTORICAL BACKGROUND
function filterHistory(stateName) {
  currentHistoryState = stateName;
  renderHistorySection();
}

function renderHistorySection() {
  const filterBar = document.getElementById('historyStateFilterBar');
  const gridContainer = document.getElementById('historyGrid');
  const places = typeof discoverHistoryPlaces !== 'undefined' ? discoverHistoryPlaces : [];

  const states = [
    { id: 'all', en: 'All Places (34)', ml: 'എല്ലാ സ്ഥലങ്ങളും (34)' },
    { id: 'Kerala', en: 'Kerala (6)', ml: 'കേരളം (6)' },
    { id: 'Karnataka', en: 'Karnataka (4)', ml: 'കർണാടക (4)' },
    { id: 'Tamil Nadu', en: 'Tamil Nadu (5)', ml: 'തമിഴ്‌നാട് (5)' },
    { id: 'Rajasthan', en: 'Rajasthan (4)', ml: 'രാജസ്ഥാൻ (4)' },
    { id: 'Himachal Pradesh', en: 'Himachal Pradesh (4)', ml: 'ഹിമാചൽ പ്രദേശ് (4)' },
    { id: 'Jammu & Kashmir / Ladakh', en: 'J&K / Ladakh (5)', ml: 'ജമ്മു-കശ്മീർ / ലഡാക്ക് (5)' },
    { id: 'Other', en: 'Other Historic Hubs (6)', ml: 'മറ്റ് പൈതൃക കേന്ദ്രങ്ങൾ (6)' }
  ];

  if (filterBar) {
    filterBar.innerHTML = states.map(st => {
      const label = currentLang === 'ml' ? st.ml : st.en;
      const isActive = (currentHistoryState === st.id) || (st.id === 'Jammu & Kashmir / Ladakh' && (currentHistoryState === 'Jammu & Kashmir' || currentHistoryState === 'Ladakh'));
      return \`
        <button type="button" class="history-state-btn \${isActive ? 'active' : ''}" onclick="filterHistory('\${st.id}')">
          \${label}
        </button>
      \`;
    }).join('');
  }

  const filtered = places.filter(p => {
    if (currentHistoryState === 'all') return true;
    if (currentHistoryState === 'Other') return ['Uttar Pradesh', 'National Capital Territory', 'Meghalaya', 'West Bengal', 'Sikkim'].includes(p.state);
    if (currentHistoryState === 'Jammu & Kashmir / Ladakh') return ['Jammu & Kashmir', 'Ladakh'].includes(p.state);
    return p.state === currentHistoryState;
  });

  if (gridContainer) {
    gridContainer.innerHTML = filtered.map(place => {
      const name = currentLang === 'ml' ? place.nameMl : place.nameEn;
      const state = currentLang === 'ml' ? place.stateMl : place.stateEn;
      const loc = currentLang === 'ml' ? place.locationMl : place.locationEn;
      const origin = currentLang === 'ml' ? place.originMl : place.originEn;
      const btnText = currentLang === 'ml' ? 'ചരിത്ര പശ്ചാത്തലം വായിക്കാം →' : 'Read Historical Background →';

      return \`
        <div class="history-card" onclick="openHistoryModal('\${place.id}')">
          <div>
            <div class="history-thumb-wrap">
              <img src="\${place.image}" alt="\${place.nameEn}" class="history-thumb" onerror="this.src='images/discover/history/hampi.jpg'">
              <span class="history-state-tag">\${state}</span>
            </div>
            <h3>\${name}</h3>
            <div class="history-loc-text">📍 \${loc}</div>
            <p class="history-origin-snip">\${origin}</p>
          </div>
          <div>
            <button type="button" class="btn-bio-read" onclick="event.stopPropagation(); openHistoryModal('\${place.id}')">
              \${btnText}
            </button>
          </div>
        </div>
      \`;
    }).join('');
  }
}

// 4. MOUNTAIN KNOWLEDGE
function switchKnowledgeTopic(topicKey) {
  currentKnowledgeTopic = topicKey;
  renderKnowledgeSection();
}

function renderKnowledgeSection() {
  const tabsBar = document.getElementById('knowledgeTabsBar');
  const contentArea = document.getElementById('knowledgeTopicContent');
  const knowData = typeof discoverMountainKnowledge !== 'undefined' ? discoverMountainKnowledge : null;
  if (!knowData || !contentArea) return;

  const topics = [
    { key: 'gears', icon: '🎒', en: 'A. Trekking Gears (18 Items)', ml: 'A. ട്രെക്കിംഗ് ഉപകരണങ്ങൾ (18)' },
    { key: 'geography', icon: '🏔️', en: 'B. Mountain Geography & Types', ml: 'B. പർവ്വത ഭൂമിശാസ്ത്രം' },
    { key: 'weather', icon: '💨', en: 'C. Weather & Jet Streams', ml: 'C. കാലാവസ്ഥയും കാറ്റുകളും' },
    { key: 'altitude', icon: '🩺', en: 'D. Altitude Sickness (AMS/HAPE)', ml: 'D. ആൾട്ടിറ്റ്യൂഡ് സിക്ക്നസ്' },
    { key: 'safety', icon: '🛡️', en: 'E. Safety & Leave No Trace', ml: 'E. സുരക്ഷയും പരിസ്ഥിതിയും' },
    { key: 'firstaid', icon: '🩹', en: 'F. Mountain First Aid', ml: 'F. പ്രഥമശുശ്രൂഷകൾ' }
  ];

  if (tabsBar) {
    tabsBar.innerHTML = topics.map(t => {
      const label = currentLang === 'ml' ? t.ml : t.en;
      return \`
        <button type="button" class="knowledge-tab-btn \${currentKnowledgeTopic === t.key ? 'active' : ''}" onclick="switchKnowledgeTopic('\${t.key}')">
          \${t.icon} \${label}
        </button>
      \`;
    }).join('');
  }

  // TOPIC A: GEARS
  if (currentKnowledgeTopic === 'gears') {
    contentArea.innerHTML = \`
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">Equipment Mastery</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">\${currentLang === 'ml' ? 'ട്രെക്കിംഗ് & മൗണ്ടനീയറിംഗ് ഗിയറുകൾ' : 'Trekking and Mountaineering Equipment Guide'}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.88); line-height: 1.6;">
          \${currentLang === 'ml' 
            ? 'ഹിമാലയൻ മലനിരകളിലും പശ്ചിമഘട്ടത്തിലും സുരക്ഷിതമായി യാത്ര ചെയ്യാൻ ആവശ്യമായ 18 സുപ്രധാന ഉപകരണങ്ങളുടെ സമഗ്ര വിവരണം. ഉപകരണങ്ങൾ എന്തിനു വേണം, എങ്ങനെ പ്രവർത്തിക്കുന്നു, എങ്ങനെ ശരിയായി തിരഞ്ഞെടുക്കണം എന്ന് ഇവിടെ വിശദീകരിച്ചിരിക്കുന്നു.'
            : 'Detailed guide to the 18 essential pieces of equipment required for safe, self-sufficient wilderness trekking, camping, and high-altitude mountaineering. Connect directly to our Adventure Store for tested equipment.'}
        </p>
      </div>

      <div class="gears-knowledge-grid">
        \${knowData.gears.map(g => {
          const name = currentLang === 'ml' ? g.nameMl : g.nameEn;
          const what = currentLang === 'ml' ? g.whatMl : g.whatEn;
          const why = currentLang === 'ml' ? g.whyMl : g.whyEn;
          const howWorks = currentLang === 'ml' ? g.howItWorksMl : g.howItWorksEn;
          const howChoose = currentLang === 'ml' ? g.howToChooseMl : g.howToChooseEn;
          const whenUse = currentLang === 'ml' ? g.whenToUseMl : g.whenToUseEn;
          const rec = currentLang === 'ml' ? g.beginnerRecommendationMl : g.beginnerRecommendationEn;
          const mistakes = currentLang === 'ml' ? g.commonMistakesMl : g.commonMistakesEn;

          let storeBtn = '';
          if (g.storeItemId) {
            storeBtn = \`
              <button type="button" class="btn-store-link" onclick="openPage('store')">
                🛒 \${currentLang === 'ml' ? 'സ്റ്റോറിൽ കാണുക' : 'View in Adventure Store'}
              </button>
            \`;
          }

          return \`
            <div class="gear-know-card">
              <div>
                <h4>⚙️ \${name}</h4>
                <div class="gear-detail-row"><strong>\${currentLang === 'ml' ? 'എന്താണ്:' : 'What it is:'}</strong> \${what}</div>
                <div class="gear-detail-row"><strong>\${currentLang === 'ml' ? 'എന്തിനു വേണം:' : 'Why needed:'}</strong> \${why}</div>
                <div class="gear-detail-row"><strong>\${currentLang === 'ml' ? 'പ്രവർത്തനം:' : 'How it works:'}</strong> \${howWorks}</div>
                <div class="gear-detail-row"><strong>\${currentLang === 'ml' ? 'തിരഞ്ഞെടുക്കാൻ:' : 'How to choose:'}</strong> \${howChoose}</div>
                <div class="gear-detail-row"><strong>\${currentLang === 'ml' ? 'എപ്പോൾ ഉപയോഗിക്കണം:' : 'When to use:'}</strong> \${whenUse}</div>
                <div class="gear-detail-row" style="color: #6ee7b7;"><strong>💡 \${currentLang === 'ml' ? 'തുടക്കക്കാർക്ക്:' : 'Beginners:'}</strong> \${rec}</div>
                <div class="gear-detail-row" style="color: #fca5a5;"><strong>⚠️ \${currentLang === 'ml' ? 'സാധാരണ തെറ്റുകൾ:' : 'Common Mistakes:'}</strong> \${mistakes}</div>
              </div>
              \${storeBtn}
            </div>
          \`;
        }).join('')}
      </div>
    \`;
  }

  // TOPIC B: GEOGRAPHY
  else if (currentKnowledgeTopic === 'geography') {
    const geo = knowData.geography;
    contentArea.innerHTML = \`
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">Tectonics & Geology</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">\${currentLang === 'ml' ? geo.titleMl : geo.titleEn}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
          \${currentLang === 'ml' ? geo.overviewMl : geo.overviewEn}
        </p>
      </div>

      <div class="gears-knowledge-grid">
        \${geo.types.map(t => \`
          <div class="gear-know-card">
            <h4>🌋 \${currentLang === 'ml' ? t.nameMl : t.nameEn}</h4>
            <p style="font-size: 0.9rem; color: rgba(226, 232, 240, 0.9); line-height: 1.6; margin-bottom: 1rem;">
              \${currentLang === 'ml' ? t.descriptionMl : t.descriptionEn}
            </p>
            <div style="background: rgba(255, 255, 255, 0.05); padding: 0.8rem; border-radius: 10px; font-size: 0.85rem;">
              <strong style="color: #FFD600;">\${currentLang === 'ml' ? 'ഉദാഹരണങ്ങൾ:' : 'Examples:'}</strong>
              <div style="color: #e2e8f0; margin-top: 0.3rem;">\${currentLang === 'ml' ? t.examplesMl : t.examplesEn}</div>
            </div>
          </div>
        \`).join('')}
      </div>
    \`;
  }

  // TOPIC C: WEATHER
  else if (currentKnowledgeTopic === 'weather') {
    const w = knowData.weather;
    contentArea.innerHTML = \`
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">Alpine Meteorology</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">\${currentLang === 'ml' ? w.titleMl : w.titleEn}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
          \${currentLang === 'ml' ? 'ഉയരം കൂടുംതോറും മാറുന്ന വായുമർദ്ദവും അതിശക്തമായ കാറ്റുകളും മലനിരകളിലെ കാലാവസ്ഥയെ നിർണ്ണയിക്കുന്നു.' : 'Understanding atmospheric pressure drops, jet streams, katabatic winds, and adiabatic lapse rate cooling in alpine mountains.'}
        </p>
      </div>

      <div class="gears-knowledge-grid">
        \${w.concepts.map(c => \`
          <div class="gear-know-card">
            <h4>💨 \${currentLang === 'ml' ? c.nameMl : c.nameEn}</h4>
            <p style="font-size: 0.92rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
              \${currentLang === 'ml' ? c.detailsMl : c.detailsEn}
            </p>
          </div>
        \`).join('')}
      </div>
    \`;
  }

  // TOPIC D: ALTITUDE SICKNESS
  else if (currentKnowledgeTopic === 'altitude') {
    const alt = knowData.altitudeSickness;
    contentArea.innerHTML = \`
      <!-- Medical Disclaimer -->
      <div class="medical-disclaimer-banner">
        <strong>⚠️ \${currentLang === 'ml' ? 'മെഡിക്കൽ മുന്നറിയിപ്പ്:' : 'RESPONSIBLE MEDICAL DISCLAIMER:'}</strong>
        \${currentLang === 'ml' ? alt.medicalDisclaimerMl : alt.medicalDisclaimer}
      </div>

      <div class="gears-knowledge-grid" style="margin-bottom: 2rem;">
        \${alt.conditions.map(c => \`
          <div class="gear-know-card" style="border-top: 3px solid \${c.code === 'AMS' ? '#FFD600' : '#ef4444'};">
            <span class="discover-badge" style="align-self: flex-start; \${c.code !== 'AMS' ? 'border-color: #ef4444; color: #fca5a5;' : ''}">\${c.code}</span>
            <h4 style="margin: 0.4rem 0;">\${currentLang === 'ml' ? c.nameMl : c.nameEn}</h4>
            <div style="font-size: 0.8rem; font-weight: 700; color: \${c.code === 'AMS' ? '#38bdf8' : '#ef4444'}; margin-bottom: 0.75rem;">
              \${currentLang === 'ml' ? c.severityMl : c.severity}
            </div>
            <div class="gear-detail-row"><strong>\${currentLang === 'ml' ? 'ലക്ഷണങ്ങൾ:' : 'Symptoms:'}</strong> \${currentLang === 'ml' ? c.symptomsMl : c.symptomsEn}</div>
            <div class="gear-detail-row"><strong>\${currentLang === 'ml' ? 'കാരണം:' : 'Cause:'}</strong> \${currentLang === 'ml' ? c.causeMl : c.causeEn}</div>
            <div class="gear-detail-row" style="color: #6ee7b7;"><strong>\${currentLang === 'ml' ? 'ചികിത്സ:' : 'Management:'}</strong> \${c.managementEn}</div>
          </div>
        \`).join('')}
      </div>

      <div style="background: rgba(255, 214, 0, 0.08); border-left: 4px solid #FFD600; padding: 1.5rem; border-radius: 0 14px 14px 0;">
        <h4 style="color: #FFD600; font-size: 1.15rem; margin-bottom: 0.6rem;">
          🛡️ \${currentLang === 'ml' ? 'ആൾട്ടിറ്റ്യൂഡ് സുരക്ഷയുടെ മൂന്ന് സുവർണ്ണ നിയമങ്ങൾ' : 'The Three Golden Rules of High-Altitude Safety'}
        </h4>
        <ul style="padding-left: 1.3rem; color: rgba(226, 232, 240, 0.95); font-size: 0.94rem; line-height: 1.7;">
          \${(currentLang === 'ml' ? alt.goldenRulesMl : alt.goldenRulesEn).map(r => \`<li>• \${r}</li>\`).join('')}
        </ul>
      </div>
    \`;
  }

  // TOPIC E: SAFETY & LNT
  else if (currentKnowledgeTopic === 'safety') {
    const s = knowData.safety;
    contentArea.innerHTML = \`
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">Wilderness Ethics</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">\${currentLang === 'ml' ? s.titleMl : s.titleEn}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
          \${currentLang === 'ml' ? 'പ്രകൃതിക്ക് യാതൊരു ദോഷവും വരാത്ത രീതിയിൽ യാത്ര ചെയ്യാനുള്ള അന്താരാഷ്ട്ര ലീവ് നോ ട്രേസ് (LNT) നിയമങ്ങളും കാട്ടിൽ വഴിതെറ്റിയാൽ ചെയ്യേണ്ട കാര്യങ്ങളും.' : 'International Leave No Trace (LNT) 7 principles and emergency lost-in-the-mountains survival protocols.'}
        </p>
      </div>

      <!-- S.T.O.P. Protocol Card -->
      <div style="background: linear-gradient(135deg, rgba(20, 26, 42, 0.95), rgba(9, 12, 20, 0.98)); border: 1px solid rgba(255, 214, 0, 0.4); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem;">
        <h3 style="color: #FFD600; font-size: 1.3rem; margin-bottom: 0.6rem;">
          🛑 \${currentLang === 'ml' ? s.lostProtocol.titleMl : s.lostProtocol.titleEn}
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem;">
          \${s.lostProtocol.steps.map(st => \`
            <div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
              <strong style="color: #FFD600; font-size: 1.1rem; display: block; margin-bottom: 0.3rem;">\${st.letter} – \${st.word}</strong>
              <p style="font-size: 0.88rem; color: rgba(226, 232, 240, 0.88); line-height: 1.5; margin: 0;">\${st.actionEn}</p>
            </div>
          \`).join('')}
        </div>
      </div>

      <h3 style="color: #ffffff; font-size: 1.4rem; margin-bottom: 1.2rem;">
        🌿 \${currentLang === 'ml' ? 'ലീവ് നോ ട്രേസ് (LNT) 7 തത്ത്വങ്ങൾ' : 'The 7 Leave No Trace Principles'}
      </h3>
      <div class="gears-knowledge-grid">
        \${s.lntPrinciples.map(p => \`
          <div class="gear-know-card">
            <h4>\${currentLang === 'ml' ? p.titleMl : p.titleEn}</h4>
            <p style="font-size: 0.9rem; color: rgba(226, 232, 240, 0.88); line-height: 1.6;">\${p.descEn}</p>
          </div>
        \`).join('')}
      </div>
    \`;
  }

  // TOPIC F: FIRST AID
  else if (currentKnowledgeTopic === 'firstaid') {
    const fa = knowData.firstAid;
    contentArea.innerHTML = \`
      <div class="medical-disclaimer-banner">
        <strong>⚠️ \${currentLang === 'ml' ? 'പ്രഥമശുശ്രൂഷാ മുന്നറിയിപ്പ്:' : 'WILDERNESS FIRST AID DISCLAIMER:'}</strong>
        \${currentLang === 'ml' ? fa.disclaimerMl : fa.disclaimer}
      </div>

      <div class="gears-knowledge-grid">
        \${fa.emergencies.map(em => \`
          <div class="gear-know-card">
            <h4>🩹 \${currentLang === 'ml' ? em.conditionMl : em.conditionEn}</h4>
            <div class="gear-detail-row"><strong>\${currentLang === 'ml' ? 'ലക്ഷണങ്ങൾ:' : 'Signs:'}</strong> \${em.signsEn}</div>
            <div class="gear-detail-row" style="color: #6ee7b7;"><strong>\${currentLang === 'ml' ? 'ചികിത്സാ നടപടികൾ:' : 'Wilderness Treatment:'}</strong> \${em.treatmentEn}</div>
          </div>
        \`).join('')}
      </div>
    \`;
  }
}

// FULL 14-POINT ARTICLE MODALS
function openBioModal(mountaineerId) {
  const list = typeof discoverMountaineers !== 'undefined' ? discoverMountaineers : [];
  const m = list.find(item => item.id === mountaineerId);
  if (!m || !discoverModal || !discoverModalContent) return;

  const name = currentLang === 'ml' ? m.fullNameMl : m.fullNameEn;
  const birthplace = currentLang === 'ml' ? m.birthplaceMl : m.birthplaceEn;
  const earlyLife = currentLang === 'ml' ? m.earlyLifeMl : m.earlyLifeEn;
  const edu = currentLang === 'ml' ? m.educationMl : m.educationEn;
  const journey = currentLang === 'ml' ? m.journeyMl : m.journeyEn;
  const expeditions = currentLang === 'ml' ? m.majorExpeditionsMl : m.majorExpeditionsEn;
  const achievements = currentLang === 'ml' ? m.historicAchievementsMl : m.historicAchievementsEn;
  const awards = currentLang === 'ml' ? m.awardsMl : m.awardsEn;
  const challenges = currentLang === 'ml' ? m.challengesMl : m.challengesEn;
  const contributions = currentLang === 'ml' ? m.contributionsMl : m.contributionsEn;
  const facts = currentLang === 'ml' ? m.interestingFactsMl : m.interestingFactsEn;

  discoverModalContent.innerHTML = \`
    <div class="bio-article-header">
      <img src="\${m.portrait}" alt="\${m.nameEn}" class="bio-article-portrait" onerror="this.src='images/discover/mountaineers/nirmal-purja.jpg'">
      <div>
        <span class="discover-badge">📍 \${currentLang === 'ml' ? m.nationalityMl : m.nationalityEn}</span>
        <h2 style="font-size: 2rem; color: #ffffff; margin: 0.4rem 0;">\${name}</h2>
        <p style="color: #FFD600; font-weight: 700; font-size: 1.05rem; margin-bottom: 0.8rem;">
          🏆 \${currentLang === 'ml' ? m.keyAchievementMl : m.keyAchievementEn}
        </p>
        <p style="font-size: 0.88rem; color: rgba(226, 232, 240, 0.85); line-height: 1.5;">
          <strong>\${currentLang === 'ml' ? 'ജന്മസ്ഥലം:' : 'Birthplace & Roots:'}</strong> \${birthplace}
        </p>
        <p style="font-size: 0.88rem; color: rgba(226, 232, 240, 0.85); line-height: 1.5; margin-top: 0.4rem;">
          <strong>\${currentLang === 'ml' ? 'വിദ്യാഭ്യാസം & പരിശീലനം:' : 'Education & Training:'}</strong> \${edu}
        </p>
      </div>
    </div>

    <div class="bio-section-block">
      <h4>🌱 1. \${currentLang === 'ml' ? 'ആദ്യകാല ജീവിതം' : 'Early Life & Childhood'}</h4>
      <p>\${earlyLife}</p>
    </div>

    <div class="bio-section-block">
      <h4>🧗‍♂️ 2. \${currentLang === 'ml' ? 'പർവ്വതാരോഹണ യാത്ര' : 'Mountaineering Journey'}</h4>
      <p>\${journey}</p>
    </div>

    <div class="bio-section-block">
      <h4>🗺️ 3. \${currentLang === 'ml' ? 'പ്രധാന പര്യവേഷണങ്ങൾ' : 'Major Expeditions'}</h4>
      <ul>\${expeditions.map(e => \`<li>• \${e}</li>\`).join('')}</ul>
    </div>

    <div class="bio-section-block">
      <h4>🏆 4. \${currentLang === 'ml' ? 'ചരിത്ര നേട്ടങ്ങൾ' : 'Historic Achievements'}</h4>
      <ul>\${achievements.map(a => \`<li>• \${a}</li>\`).join('')}</ul>
    </div>

    <div class="bio-section-block">
      <h4>🎖️ 5. \${currentLang === 'ml' ? 'അവാർഡുകളും അംഗീകാരങ്ങളും' : 'Awards & Recognition'}</h4>
      <ul>\${awards.map(aw => \`<li>• \${aw}</li>\`).join('')}</ul>
    </div>

    <div class="bio-section-block">
      <h4>⛈️ 6. \${currentLang === 'ml' ? 'പ്രതിസന്ധികളും വെല്ലുവിളികളും' : 'Challenges & Difficulties'}</h4>
      <p>\${challenges}</p>
    </div>

    <div class="bio-section-block">
      <h4>🌟 7. \${currentLang === 'ml' ? 'പർവ്വതാരോഹണ രംഗത്തെ സംഭാവനകൾ' : 'Contributions to Mountaineering'}</h4>
      <p>\${contributions}</p>
    </div>

    <div class="bio-section-block">
      <h4>💡 8. \${currentLang === 'ml' ? 'രസകരമായ വസ്തുതകൾ' : 'Interesting Facts'}</h4>
      <ul>\${facts.map(f => \`<li>• \${f}</li>\`).join('')}</ul>
    </div>

    <div class="bio-section-block">
      <h4>📅 9. \${currentLang === 'ml' ? 'ചരിത്ര ടൈംലൈൻ' : 'Historical Timeline'}</h4>
      <ul class="timeline-list">
        \${m.timeline.map(t => \`
          <li class="timeline-item">
            <span class="timeline-year">\${t.year}</span>
            <div class="timeline-text">\${currentLang === 'ml' ? t.eventMl : t.eventEn}</div>
          </li>
        \`).join('')}
      </ul>
    </div>

    <div class="bio-section-block">
      <h4>📚 10. \${currentLang === 'ml' ? 'റഫറൻസുകൾ' : 'References & Sources'}</h4>
      <ul>
        \${m.sources.map(s => \`<li>• <a href="\${s.url}" target="_blank" style="color: #38bdf8; text-decoration: underline;">\${s.name}</a></li>\`).join('')}
      </ul>
    </div>
  \`;

  discoverModal.classList.remove('hidden');
}

function openPeakModal(peakId) {
  const peaks14 = typeof discover14Peaks !== 'undefined' ? discover14Peaks : [];
  const summits = typeof discoverSevenSummits !== 'undefined' ? discoverSevenSummits.mountains : [];
  const p = peaks14.find(item => item.id === peakId) || summits.find(item => item.id === peakId);
  if (!p || !discoverModal || !discoverModalContent) return;

  const name = currentLang === 'ml' ? p.nameMl : p.nameEn;
  const country = currentLang === 'ml' ? p.countryMl : p.countryEn;
  const ascent = currentLang === 'ml' ? p.firstAscentMl : p.firstAscentEn;
  const diff = currentLang === 'ml' ? p.difficultyMl : p.difficultyEn;
  const hist = currentLang === 'ml' ? (p.historyMl || p.factsMl) : (p.historyEn || p.factsEn);
  const facts = Array.isArray(p.factsEn) 
    ? (currentLang === 'ml' ? p.factsMl : p.factsEn) 
    : [currentLang === 'ml' ? p.factsMl : p.factsEn];

  discoverModalContent.innerHTML = \`
    <div class="bio-article-header">
      <img src="\${p.image}" alt="\${p.nameEn}" class="bio-article-portrait" onerror="this.src='images/discover/peaks/mount-everest.jpg'">
      <div>
        <span class="discover-badge">🏔️ \${p.elevation}</span>
        <h2 style="font-size: 2rem; color: #ffffff; margin: 0.4rem 0;">\${name}</h2>
        <p style="color: #38bdf8; font-weight: 700; font-size: 1rem; margin-bottom: 0.8rem;">📍 \${country}</p>
        <p style="font-size: 0.88rem; color: rgba(226, 232, 240, 0.85); line-height: 1.5;">
          <strong>\${currentLang === 'ml' ? 'ആദ്യ വിജയം:' : 'First Ascent:'}</strong> \${ascent}
        </p>
        <p style="font-size: 0.88rem; color: #fca5a5; line-height: 1.5; margin-top: 0.4rem;">
          <strong>\${currentLang === 'ml' ? 'കാഠിന്യം:' : 'Climbing Difficulty:'}</strong> \${diff}
        </p>
      </div>
    </div>

    <div class="bio-section-block">
      <h4>📜 \${currentLang === 'ml' ? 'ചരിത്ര പശ്ചാത്തലം' : 'Historical Background'}</h4>
      <p>\${hist}</p>
    </div>

    <div class="bio-section-block">
      <h4>💡 \${currentLang === 'ml' ? 'പ്രധാന വസ്തുതകൾ' : 'Key Mountain Facts'}</h4>
      <ul>\${facts.map(f => \`<li>• \${f}</li>\`).join('')}</ul>
    </div>
  \`;

  discoverModal.classList.remove('hidden');
}

function openHistoryModal(placeId) {
  const places = typeof discoverHistoryPlaces !== 'undefined' ? discoverHistoryPlaces : [];
  const pl = places.find(item => item.id === placeId);
  if (!pl || !discoverModal || !discoverModalContent) return;

  const name = currentLang === 'ml' ? pl.nameMl : pl.nameEn;
  const state = currentLang === 'ml' ? pl.stateMl : pl.stateEn;
  const loc = currentLang === 'ml' ? pl.locationMl : pl.locationEn;
  const origin = currentLang === 'ml' ? pl.originMl : pl.originEn;
  const ancient = currentLang === 'ml' ? pl.ancientHistoryMl : pl.ancientHistoryEn;
  const dynasties = currentLang === 'ml' ? pl.dynastiesMl : pl.dynastiesEn;
  const monuments = currentLang === 'ml' ? pl.monumentsMl : pl.monumentsEn;
  const traditions = currentLang === 'ml' ? pl.traditionsMl : pl.traditionsEn;
  const rel = currentLang === 'ml' ? pl.religiousSignificanceMl : pl.religiousSignificanceEn;
  const arch = currentLang === 'ml' ? pl.architectureMl : pl.architectureEn;
  const events = currentLang === 'ml' ? pl.keyEventsMl : pl.keyEventsEn;
  const facts = currentLang === 'ml' ? pl.interestingFactsMl : pl.interestingFactsEn;
  const tourism = currentLang === 'ml' ? pl.tourismDevelopmentMl : pl.tourismDevelopmentEn;

  discoverModalContent.innerHTML = \`
    <div class="bio-article-header">
      <img src="\${pl.image}" alt="\${pl.nameEn}" class="bio-article-portrait" onerror="this.src='images/discover/history/hampi.jpg'">
      <div>
        <span class="discover-badge">🏛️ \${state}</span>
        <h2 style="font-size: 2rem; color: #ffffff; margin: 0.4rem 0;">\${name}</h2>
        <p style="color: #38bdf8; font-weight: 700; font-size: 1rem; margin-bottom: 0.8rem;">📍 \${loc}</p>
        <p style="font-size: 0.9rem; color: rgba(226, 232, 240, 0.9); line-height: 1.6;">
          <strong>\${currentLang === 'ml' ? 'പേരിന്റെ ഉത്ഭവം:' : 'Name Origin:'}</strong> \${origin}
        </p>
      </div>
    </div>

    <div class="bio-section-block">
      <h4>📜 1. \${currentLang === 'ml' ? 'പുരാതന ചരിത്രം' : 'Ancient History'}</h4>
      <p>\${ancient}</p>
    </div>

    <div class="bio-section-block">
      <h4>👑 2. \${currentLang === 'ml' ? 'രാജവംശങ്ങളും ഭരണാധികാരികളും' : 'Kingdoms, Rulers & Dynasties'}</h4>
      <p>\${dynasties}</p>
    </div>

    <div class="bio-section-block">
      <h4>🏰 3. \${currentLang === 'ml' ? 'ചരിത്ര സ്മാരകങ്ങൾ' : 'Historical Monuments'}</h4>
      <ul>\${monuments.map(m => \`<li>• \${m}</li>\`).join('')}</ul>
    </div>

    <div class="bio-section-block">
      <h4>🎨 4. \${currentLang === 'ml' ? 'സാംസ്കാരിക പാരമ്പര്യം' : 'Cultural Traditions'}</h4>
      <p>\${traditions}</p>
    </div>

    <div class="bio-section-block">
      <h4>🕉️ 5. \${currentLang === 'ml' ? 'മതപരവും ആത്മീയവുമായ പ്രാധാന്യം' : 'Religious & Spiritual Significance'}</h4>
      <p>\${rel}</p>
    </div>

    <div class="bio-section-block">
      <h4>🏛️ 6. \${currentLang === 'ml' ? 'വാസ്തുവിദ്യയും പൈതൃകവും' : 'Architecture & Heritage'}</h4>
      <p>\${arch}</p>
    </div>

    <div class="bio-section-block">
      <h4>📅 7. \${currentLang === 'ml' ? 'പ്രധാന ചരിത്ര സംഭവങ്ങൾ' : 'Historical Events'}</h4>
      <ul>\${events.map(ev => \`<li>• \${ev}</li>\`).join('')}</ul>
    </div>

    <div class="bio-section-block">
      <h4>💡 8. \${currentLang === 'ml' ? 'രസകരമായ വസ്തുതകൾ' : 'Interesting Historical Facts'}</h4>
      <ul>\${facts.map(f => \`<li>• \${f}</li>\`).join('')}</ul>
    </div>

    <div class="bio-section-block">
      <h4>✈️ 9. \${currentLang === 'ml' ? 'ടൂറിസം വികസനം' : 'Tourism Development'}</h4>
      <p>\${tourism}</p>
    </div>

    <div class="bio-section-block">
      <h4>📚 10. \${currentLang === 'ml' ? 'റഫറൻസുകൾ' : 'Historical References'}</h4>
      <p style="font-size: 0.85rem; color: rgba(226, 232, 240, 0.75);">\${pl.referencesEn}</p>
    </div>
  \`;

  discoverModal.classList.remove('hidden');
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
  if (discoverModal) discoverModal.classList.add('hidden');
}

function closeDiscoverOnBackdrop(event) {
  if (event.target === discoverModal) {
    closeDiscoverModal();
  }
}

`;

fs.writeFileSync(scriptPath, before + newLogic + after, 'utf8');
console.log('Successfully updated script.js with complete Discover logic!');
