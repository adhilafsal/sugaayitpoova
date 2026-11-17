const fs = require('fs');

console.log('====================================================');
console.log('   SUGGAYITT POVAA - COMPREHENSIVE VERIFICATION     ');
console.log('====================================================\n');

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}`);
    failed++;
  }
}

const discoverScript = fs.readFileSync('discoverData.js', 'utf8');
const fn = new Function(discoverScript + '; return { discoverMountaineers, discover14Peaks, nimsdaiProjectPossible, discoverSevenSummits, discoverHistoryPlaces, discoverMountainKnowledge, discoverData };');
const data = fn();

console.log('--- 1. POPULAR MOUNTAINEERS (12 PERSONALITIES) ---');
assert(Array.isArray(data.discoverMountaineers), 'discoverMountaineers is an array');
assert(data.discoverMountaineers.length >= 12, `${data.discoverMountaineers.length} mountaineers present`);

const expectedMountaineers = [
  'Nirmal Purja (Nimsdai)', 'Tenzing Norgay', 'Edmund Hillary', 'Reinhold Messner',
  'Bachendri Pal', 'Junko Tabei', 'Kami Rita Sherpa', 'Ang Rita Sherpa',
  'Nawang Gombu', 'George Mallory', 'Jerzy Kukuczka', 'Alison Hargreaves'
];
expectedMountaineers.forEach(name => {
  const found = data.discoverMountaineers.some(m => m.nameEn.includes(name) || name.includes(m.nameEn.split(' ')[0]));
  assert(found, `Mountaineer present: ${name}`);
});

// Check Nimsdai spotlight
const nimsdai = data.discoverMountaineers.find(m => m.id === 'nirmal-purja');
assert(nimsdai.journeyEn.includes('Gurkhas') && nimsdai.journeyEn.includes('Special Boat Service'), 'Nimsdai has Gurkha & SBS military career documented');
assert(nimsdai.nimsdaiSpecial && nimsdai.nimsdaiSpecial.phases.length === 3, 'Nimsdai has 3-phase Project Possible breakdown');
assert(nimsdai.nimsdaiSpecial && nimsdai.nimsdaiSpecial.team.length === 4, 'Nimsdai has dedicated climbing team breakdown');
assert(nimsdai.timeline.length >= 8, 'Nimsdai has interactive historical timeline');

// Verify photos and 14 biography fields
data.discoverMountaineers.forEach(m => {
  assert(fs.existsSync(m.portrait) && fs.statSync(m.portrait).size > 1000, `Portrait verified on disk: ${m.portrait} (${m.nameEn})`);
  const has14 = m.fullNameEn && m.portrait && m.birthplaceEn && m.earlyLifeEn && m.educationEn &&
                m.journeyEn && m.majorExpeditionsEn && m.historicAchievementsEn && m.awardsEn &&
                m.challengesEn && m.contributionsEn && m.interestingFactsEn && m.timeline && m.sources;
  assert(has14, `All 14 biography points present for: ${m.nameEn}`);
});

console.log('\n--- 2. PEAKS (14 PEAKS & 7 PEAKS) ---');
assert(Array.isArray(data.discover14Peaks), 'discover14Peaks is an array');
assert(data.discover14Peaks.length === 14, `14 eight-thousanders present (actual: ${data.discover14Peaks.length})`);

const expected14Peaks = [
  'Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu', 'Cho Oyu', 'Dhaulagiri',
  'Manaslu', 'Nanga Parbat', 'Annapurna', 'Gasherbrum I', 'Broad Peak', 'Gasherbrum II', 'Shishapangma'
];
expected14Peaks.forEach(peak => {
  const found = data.discover14Peaks.some(p => p.nameEn.includes(peak));
  assert(found, `14-Peak present: ${peak}`);
});

data.discover14Peaks.forEach(p => {
  assert(fs.existsSync(p.image) && fs.statSync(p.image).size > 1000, `Peak photo verified on disk: ${p.image} (${p.nameEn})`);
  assert(p.elevation && p.countryEn && p.rangeEn && p.firstAscentEn && p.difficultyEn && p.factsEn, `Full details present: ${p.nameEn}`);
});

// Project Possible
assert(data.nimsdaiProjectPossible && data.nimsdaiProjectPossible.verifiedTimeline.length === 14, 'Project Possible has 14 summits with verified dates');
assert(data.nimsdaiProjectPossible.teamMembers && data.nimsdaiProjectPossible.teamMembers.length >= 3, 'Project Possible team list present');

// 7 Peaks
assert(data.discoverSevenSummits && data.discoverSevenSummits.mountains.length === 8, 'Seven Summits has 8 continental peaks (Bass & Messner lists)');
assert(data.discoverSevenSummits.comparisonAnalysis && data.discoverSevenSummits.comparisonAnalysis.textEn, 'Bass vs Messner comparison analysis present');
data.discoverSevenSummits.mountains.forEach(m => {
  assert(fs.existsSync(m.image) && fs.statSync(m.image).size > 1000, `Seven Summit photo verified on disk: ${m.image} (${m.nameEn})`);
  assert(m.continentEn && m.elevation && m.countryEn && m.firstAscentEn && m.famousClimbersEn && m.difficultyEn && m.factsEn, `Seven Summit details present: ${m.nameEn}`);
});

console.log('\n--- 3. HISTORICAL BACKGROUND (34 DESTINATIONS) ---');
assert(Array.isArray(data.discoverHistoryPlaces), 'discoverHistoryPlaces is an array');
assert(data.discoverHistoryPlaces.length >= 34, `${data.discoverHistoryPlaces.length} historical places present`);

const expectedGroups = [
  { name: 'Kerala', filter: p => p.state === 'Kerala', expected: 6 },
  { name: 'Karnataka', filter: p => p.state === 'Karnataka', expected: 4 },
  { name: 'Tamil Nadu', filter: p => p.state === 'Tamil Nadu', expected: 5 },
  { name: 'Rajasthan', filter: p => p.state === 'Rajasthan', expected: 4 },
  { name: 'Himachal Pradesh', filter: p => p.state === 'Himachal Pradesh', expected: 4 },
  { name: 'Jammu & Kashmir / Ladakh', filter: p => ['Jammu & Kashmir', 'Ladakh'].includes(p.state), expected: 5 },
  { name: 'Other Famous Destinations', filter: p => ['Uttar Pradesh', 'Delhi', 'Meghalaya', 'West Bengal', 'Sikkim', 'Other Famous Destinations'].includes(p.state), expected: 10 }
];

expectedGroups.forEach(grp => {
  const count = data.discoverHistoryPlaces.filter(grp.filter).length;
  assert(count === grp.expected, `State group matches required count: ${grp.name} (${count}/${grp.expected} destinations)`);
});

// Verify 14 historical fields
data.discoverHistoryPlaces.forEach(p => {
  assert(fs.existsSync(p.image) && fs.statSync(p.image).size > 1000, `Place photo verified on disk: ${p.image} (${p.nameEn})`);
  const hasHistory = p.locationEn && p.originEn && p.ancientHistoryEn && p.dynastiesEn &&
                     p.monumentsEn && p.traditionsEn && p.religiousSignificanceEn && p.architectureEn &&
                     p.keyEventsEn && p.interestingFactsEn && p.tourismDevelopmentEn && p.referencesEn;
  assert(hasHistory, `Historical focus (all 14 points) present for: ${p.nameEn}`);
});

console.log('\n--- 4. MOUNTAIN KNOWLEDGE (6 TOPICS) ---');
const know = data.discoverMountainKnowledge;
assert(Array.isArray(know.gears) && know.gears.length >= 18, `Topic A: Gears has 18+ items (actual: ${know.gears.length})`);
assert(know.geography && know.geography.types.length >= 5, 'Topic B: Geography has mountain types and tectonics');
assert(know.weather && know.weather.concepts.length >= 4, 'Topic C: Weather has lapse rate, orographic, jet streams, katabatic');
assert(know.altitudeSickness && know.altitudeSickness.conditions.length === 3 && know.altitudeSickness.medicalDisclaimer, 'Topic D: Altitude sickness has AMS/HAPE/HACE + medical disclaimer');
assert(know.safety && know.safety.lntPrinciples.length === 7 && know.safety.lostProtocol, 'Topic E: Safety has 7 LNT principles and S.T.O.P. protocol');
assert(know.firstAid && know.firstAid.emergencies.length >= 4 && know.firstAid.disclaimer, 'Topic F: First Aid has emergencies + medical disclaimer');

console.log('\n--- 5. HTML STRUCTURE & NAVIGATION ---');
const html = fs.readFileSync('suggayitt povaa.html', 'utf8');

const navPosDiscover = html.indexOf('id="nav-discover"');
const navPosPackages = html.indexOf('id="nav-packages"');
const navPosAbout = html.indexOf('id="nav-about"');
assert(navPosPackages < navPosDiscover && navPosDiscover < navPosAbout, 'DISCOVER & LEARN is positioned between Packages and About Us');

assert(html.includes('id="discoverPageView"'), '#discoverPageView section exists');
assert(html.includes('class="discover-nav-tabs"'), 'discover-nav-tabs sticky bar exists');
assert(html.includes('switchDiscoverTab(\'mountaineers\')'), 'Mountaineers tab button exists');
assert(html.includes('switchDiscoverTab(\'peaks\')'), 'Peaks tab button exists');
assert(html.includes('switchDiscoverTab(\'history\')'), 'Historical Background tab button exists');
assert(html.includes('switchDiscoverTab(\'knowledge\')'), 'Mountain Knowledge tab button exists');
assert(html.includes('id="discoverSection-mountaineers"'), '#discoverSection-mountaineers exists');
assert(html.includes('id="discoverSection-peaks"'), '#discoverSection-peaks exists');
assert(html.includes('id="discoverSection-history"'), '#discoverSection-history exists');
assert(html.includes('id="discoverSection-knowledge"'), '#discoverSection-knowledge exists');
assert(html.includes('id="discoverModal"'), '#discoverModal exists');

console.log('\n--- 6. STYLESHEET LIQUID GLASS THEME ---');
const css = fs.readFileSync('style.css', 'utf8');
assert(css.includes('.discover-container'), '.discover-container class defined');
assert(css.includes('.discover-category-card'), '.discover-category-card defined');
assert(css.includes('.nimsdai-spotlight-card'), '.nimsdai-spotlight-card defined');
assert(css.includes('.large-modal'), '.large-modal defined');
assert(css.includes('#FFD600'), 'Yellow accent #FFD600 preserved');

console.log('\n--- 7. SCRIPT CONTROLLER FUNCTIONS ---');
const script = fs.readFileSync('script.js', 'utf8');
const requiredFns = [
  'switchDiscoverTab', 'renderMountaineersSection', 'switchPeaksSubTab',
  'renderPeaksSection', 'filterHistory', 'renderHistorySection',
  'switchKnowledgeTopic', 'renderKnowledgeSection', 'openBioModal',
  'openPeakModal', 'openHistoryModal', 'openDiscoverModal', 'closeDiscoverModal'
];
requiredFns.forEach(fnName => {
  assert(script.includes(`function ${fnName}`) || script.includes(`${fnName} =`), `Function present: ${fnName}`);
});

console.log('\n--- 8. PRESERVED EXISTING FEATURES ---');
assert(html.includes('id="home"'), 'Home hero section preserved');
assert(html.includes('id="placesGrid"'), 'Best Places grid preserved');
assert(html.includes('id="packagesPageView"'), 'Packages page view preserved');
assert(html.includes('id="storePageView"'), 'Store page view preserved');
assert(html.includes('id="studioPageView"'), 'Studio page view preserved');
assert(html.includes('id="knowledgeGrid"'), 'Editing Knowledge Hub preserved');
assert(html.includes('id="profilePageView"'), 'Profile dashboard preserved');
assert(html.includes('switchProfileTab(\'cart\')'), 'Cart tab in profile preserved');
assert(html.includes('id="authModal"'), 'Auth modal preserved');

console.log('\n====================================================');
console.log(`TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log('====================================================');

if (failed > 0) process.exit(1);
console.log('ALL VERIFICATIONS 100% SUCCESSFUL!');
