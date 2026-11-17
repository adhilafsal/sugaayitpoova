const fs = require('fs');
const path = require('path');

const mountaineers = require('./data_mountaineers.js');
const { peaks14, nimsdaiProjectPossible, sevenSummits } = require('./data_peaks.js');
const historyPart1 = require('./data_history.js');
const historyPart2 = require('./data_history_part2.js');
const mountainKnowledge = require('./data_knowledge.js');

const allHistory = [...historyPart1, ...historyPart2];

console.log(`Mountaineers count: ${mountaineers.length}`);
console.log(`14 Peaks count: ${peaks14.length}`);
console.log(`Seven Summits count: ${sevenSummits.mountains.length}`);
console.log(`History Places count: ${allHistory.length}`);
console.log(`Knowledge Gears count: ${mountainKnowledge.gears.length}`);

// Generate discoverData.js
let fileContent = `/* =========================================================
   SUGGAYITT POVAA - DISCOVER & LEARN (അറിയാം, പഠിക്കാം)
   Comprehensive Educational Knowledge Platform
   Four Main Categories:
   1. Popular Mountaineers (12 Profiles)
   2. Peaks (14 Eight-Thousanders & Seven Summits)
   3. Historical Background (34 Historic Indian Places)
   4. Mountain Knowledge (6 Topics)
   ========================================================= */

const discoverMountaineers = ${JSON.stringify(mountaineers, null, 2)};

const discover14Peaks = ${JSON.stringify(peaks14, null, 2)};

const nimsdaiProjectPossible = ${JSON.stringify(nimsdaiProjectPossible, null, 2)};

const discoverSevenSummits = ${JSON.stringify(sevenSummits, null, 2)};

const discoverHistoryPlaces = ${JSON.stringify(allHistory, null, 2)};

const discoverMountainKnowledge = ${JSON.stringify(mountainKnowledge, null, 2)};

// Universal discoverData list for search autocomplete, database, and legacy backwards compatibility
const discoverData = [
  ...discoverMountaineers.map(m => ({
    id: m.id,
    category: 'mountaineers',
    type: 'mountaineer',
    titleEn: m.nameEn,
    titleMl: m.nameMl,
    subtitleEn: m.nationalityEn + ' • ' + m.keyAchievementEn,
    subtitleMl: m.nationalityMl + ' • ' + m.keyAchievementMl,
    image: m.portrait,
    badgeEn: 'Mountaineer',
    badgeMl: 'പർവ്വതാരോഹകൻ',
    shortEn: m.shortBioEn,
    shortMl: m.shortBioMl,
    keyFactEn: m.keyAchievementEn,
    keyFactMl: m.keyAchievementMl,
    timelineEn: m.birthplaceEn,
    timelineMl: m.birthplaceMl,
    fullStoryEn: [m.earlyLifeEn, m.journeyEn, m.challengesEn, m.contributionsEn],
    fullStoryMl: [m.earlyLifeMl, m.journeyMl, m.challengesMl, m.contributionsMl],
    takeawaysEn: m.historicAchievementsEn,
    takeawaysMl: m.historicAchievementsMl
  })),
  ...discover14Peaks.map(p => ({
    id: p.id,
    category: 'peaks',
    type: 'peak14',
    titleEn: p.nameEn,
    titleMl: p.nameMl,
    subtitleEn: p.elevation + ' • ' + p.countryEn,
    subtitleMl: p.elevation + ' • ' + p.countryMl,
    image: p.image,
    badgeEn: '8000m Peak #' + p.rank,
    badgeMl: '8000m കൊടുമുടി #' + p.rank,
    shortEn: p.historyEn.slice(0, 160) + '...',
    shortMl: p.historyMl.slice(0, 160) + '...',
    keyFactEn: 'First ascent: ' + p.firstAscentEn,
    keyFactMl: 'ആദ്യ വിജയം: ' + p.firstAscentMl,
    timelineEn: p.elevation,
    timelineMl: p.elevation,
    fullStoryEn: [p.historyEn, p.famousExpeditionsEn, p.difficultyEn],
    fullStoryMl: [p.historyMl, p.famousExpeditionsMl, p.difficultyMl],
    takeawaysEn: p.factsEn,
    takeawaysMl: p.factsMl
  })),
  ...discoverSevenSummits.mountains.map(s => ({
    id: s.id + '-summit',
    category: 'peaks',
    type: 'seven-summit',
    titleEn: s.nameEn + ' (' + s.continentEn + ')',
    titleMl: s.nameMl + ' (' + s.continentMl + ')',
    subtitleEn: s.elevation + ' • ' + s.countryEn,
    subtitleMl: s.elevation + ' • ' + s.countryMl,
    image: s.image,
    badgeEn: 'Seven Summits',
    badgeMl: 'സെവൻ സമ്മിറ്റ്സ്',
    shortEn: s.factsEn,
    shortMl: s.factsMl,
    keyFactEn: 'Continent: ' + s.continentEn + ' • ' + s.elevation,
    keyFactMl: 'ഭൂഖണ്ഡം: ' + s.continentMl + ' • ' + s.elevation,
    timelineEn: s.firstAscentEn,
    timelineMl: s.firstAscentMl,
    fullStoryEn: [s.factsEn, s.difficultyEn],
    fullStoryMl: [s.factsMl, s.difficultyMl],
    takeawaysEn: [s.factsEn],
    takeawaysMl: [s.factsMl]
  })),
  ...discoverHistoryPlaces.map(h => ({
    id: h.id,
    category: 'history',
    type: 'history-place',
    titleEn: h.nameEn,
    titleMl: h.nameMl,
    subtitleEn: h.stateEn + ' • ' + h.locationEn,
    subtitleMl: h.stateMl + ' • ' + h.locationMl,
    image: h.image,
    badgeEn: h.stateEn,
    badgeMl: h.stateMl,
    shortEn: h.originEn,
    shortMl: h.originMl,
    keyFactEn: 'Dynasties: ' + h.dynastiesEn,
    keyFactMl: 'രാജവംശങ്ങൾ: ' + h.dynastiesMl,
    timelineEn: h.stateEn,
    timelineMl: h.stateMl,
    fullStoryEn: [h.ancientHistoryEn, h.architectureEn, h.traditionsEn],
    fullStoryMl: [h.ancientHistoryMl, h.architectureMl, h.traditionsMl],
    takeawaysEn: h.interestingFactsEn,
    takeawaysMl: h.interestingFactsMl
  }))
];

if (typeof window !== 'undefined') {
  window.discoverMountaineers = discoverMountaineers;
  window.discover14Peaks = discover14Peaks;
  window.nimsdaiProjectPossible = nimsdaiProjectPossible;
  window.discoverSevenSummits = discoverSevenSummits;
  window.discoverHistoryPlaces = discoverHistoryPlaces;
  window.discoverMountainKnowledge = discoverMountainKnowledge;
  window.discoverData = discoverData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    discoverMountaineers,
    discover14Peaks,
    nimsdaiProjectPossible,
    discoverSevenSummits,
    discoverHistoryPlaces,
    discoverMountainKnowledge,
    discoverData
  };
}
`;

fs.writeFileSync('discoverData.js', fileContent, 'utf8');
console.log('Successfully re-generated discoverData.js! File size:', fs.statSync('discoverData.js').size);
