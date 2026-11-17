const fs = require('fs');
const path = require('path');

const gerlinde = {
  id: "gerlinde-kaltenbrunner",
  featured: false,
  nameEn: "Gerlinde Kaltenbrunner",
  nameMl: "ഗെർലിൻഡെ കാൽട്ടൻബ്രണ്ണർ",
  fullNameEn: "Gerlinde Kaltenbrunner (National Geographic Explorer of the Year)",
  fullNameMl: "ഗെർലിൻഡെ കാൽട്ടൻബ്രണ്ണർ",
  portrait: "images/discover/mountaineers/gerlinde-kaltenbrunner.jpg",
  nationalityEn: "Austrian",
  nationalityMl: "ഓസ്ട്രിയൻ",
  birthplaceEn: "Spital am Pyhrn, Upper Austria (Born Dec 13, 1970)",
  birthplaceMl: "സ്പിറ്റൽ ആം പൈഹ്രൻ, ഓസ്ട്രിയ (ജനനം: 13 ഡിസംബർ 1970)",
  shortBioEn: "First woman in history to climb all 14 eight-thousanders without supplementary oxygen or high-altitude porters, celebrated globally for pure alpine ethics.",
  shortBioMl: "കൃത്രിമ ഓക്സിജൻ ഉപയോഗിക്കാതെ ലോകത്തിലെ 14 എണ്ണായിരം മീറ്റർ കൊടുമുടികളും കീഴടക്കിയ ചരിത്രത്തിലെ ആദ്യ വനിതാ പർവ്വതാരോഹക.",
  keyAchievementEn: "First woman to summit all 14 eight-thousanders without supplemental oxygen (1998–2011).",
  keyAchievementMl: "കൃത്രിമ ഓക്സിജൻ ഇല്ലാതെ 14 കൊടുമുടികളും പൂർത്തിയാക്കിയ ലോകത്തിലെ ആദ്യ വനിത (1998–2011).",
  earlyLifeEn: "Grew up in the Austrian Alps in Spital am Pyhrn. She developed a profound love for rock and ice climbing through local parish climbing trips led by Dr. Erich Tischler.",
  earlyLifeMl: "ഓസ്ട്രിയൻ ആൽപ്സ് പർവ്വതനിരകളുടെ താഴ്വരയിലാണ് ഗെർലിൻഡെ വളർന്നത്. കുട്ടിക്കാലത്ത് തന്നെ പ്രാദേശിക ക്ലൈംബിങ് സംഘങ്ങളിലൂടെ പർവ്വതാരോഹണം ആരംഭിച്ചു.",
  educationEn: "Trained as a certified nurse in Austria before pursuing full-time professional high-altitude mountaineering.",
  educationMl: "ഓസ്ട്രിയയിൽ നഴ്സിങ് വിദ്യാഭ്യാസം പൂർത്തിയാക്കിയ ശേഷമാണ് മുഴുവൻ സമയ പർവ്വതാരോഹണത്തിലേക്ക് കടന്നത്.",
  journeyEn: "Started her Himalayan career with Broad Peak in 1994. In 1998, she summited Cho Oyu without supplementary oxygen, beginning her historic quest to conquer all 14 eight-thousanders in clean alpine style. She concluded the quest on August 23, 2011, by reaching the summit of K2 via the treacherous North Pillar.",
  journeyMl: "1994-ൽ ബ്രോഡ് പീക്കിലൂടെ ഹിമാലയൻ യാത്ര തുടങ്ങി. 1998-ൽ ചോ ഒയു കീഴടക്കി. 2011 ഓഗസ്റ്റ് 23-ന് അതീവ ദുർഘടമായ നോർത്ത് പില്ലർ വഴി കെ2 കൊടുമുടി കീഴടക്കി 14 കൊടുമുടികളും പൂർത്തിയാക്കി.",
  majorExpeditionsEn: [
    "Cho Oyu (1998) – First 8,000m peak without supplementary oxygen.",
    "Makalu (2001), Manaslu (2002), Nanga Parbat (2003), Annapurna I (2004), Gasherbrum I & II (2004).",
    "Shishapangma (2005), Kangchenjunga (2006), Broad Peak (2007), Dhaulagiri (2008), Lhotse (2009), Mount Everest (2010).",
    "K2 (August 23, 2011) – 14th summit via difficult North Pillar without bottled oxygen."
  ],
  majorExpeditionsMl: [
    "ചോ ഒയു (1998) - കൃത്രിമ ഓക്സിജൻ ഇല്ലാതെ ആദ്യ 8000 മീറ്റർ കൊടുമുടി.",
    "മക്കാലു, മനസ്ലു, നംഗ പർബത്, അന്നപൂർണ, ഗാഷർബ്രം 1 & 2.",
    "ശിഷപാംഗ്മ, കാഞ്ചൻജംഗ, ബ്രോഡ് പീക്ക്, ധവളഗിരി, ലോത്സെ, എവറസ്റ്റ്.",
    "കെ2 (2011 ഓഗസ്റ്റ് 23) - നോർത്ത് പില്ലർ വഴി 14-ാമത്തെ കൊടുമുടി."
  ],
  historicAchievementsEn: [
    "First woman to climb all fourteen 8,000m peaks without supplemental oxygen.",
    "Completed K2 from the North Pillar route in China after six previous grueling attempts.",
    "Maintained strict alpine style, carrying her own gear and tents on death-zone pushes."
  ],
  historicAchievementsMl: [
    "കൃത്രിമ ഓക്സിജൻ ഇല്ലാതെ 14 കൊടുമുടികളും പൂർത്തിയാക്കിയ ആദ്യ വനിത.",
    "ആറ് പരാജയങ്ങൾക്ക് ശേഷം ചൈനീസ് നോർത്ത് പില്ലർ വഴി കെ2 കീഴടക്കി.",
    "ഡെത്ത് സോണിൽ സ്വന്തം ടെന്റും ഉപകരണങ്ങളും വഹിച്ച് ആൽപൈൻ ശൈലി കാത്തുസൂക്ഷിച്ചു."
  ],
  awardsEn: [
    "National Geographic Explorer of the Year (2012).",
    "King Albert I Memorial Foundation Award for mountaineering ethics.",
    "Decoration of Honour for Services to the Republic of Austria."
  ],
  awardsMl: [
    "നാഷണൽ ജിയോഗ്രാഫിക് എക്സ്പ്ലോറർ ഓഫ് ദി ഇയർ (2012).",
    "കിങ് ആൽബർട്ട് 1 മെമ്മോറിയൽ അവാർഡ്.",
    "ഓസ്ട്രിയൻ റിപ്പബ്ലിക്കിന്റെ പരമോന്നത ബഹുമതി."
  ],
  challengesEn: "Survived a catastrophic avalanche on Dhaulagiri in 2007 that took the lives of two companions. In 2010 on K2, her climbing partner Fredrik Ericsson fell to his death, forcing an agonizing retreat. She returned in 2011 with unwavering mental resolve to succeed.",
  challengesMl: "2007-ൽ ധവളഗിരിയിലെ കഠിനമായ ഹിമപാതത്തിൽ നിന്ന് തലനാരിഴയ്ക്ക് രക്ഷപ്പെട്ടു. 2010-ൽ കെ2-വിൽ ഒപ്പമുണ്ടായിരുന്ന ക്ലൈംബർ ഫ്രെഡ്രിക് എറിക്സൺ മരിച്ചതിനെ തുടർന്ന് ദൗത്യം ഉപേക്ഷിക്കേണ്ടി വന്നെങ്കിലും 2011-ൽ വീണ്ടും എത്തി വിജയം നേടി.",
  contributionsEn: "Exemplified ethical alpine mountaineering, demonstrating that human potential can overcome the world's highest peaks without relying on oxygen cylinders, establishing a benchmark of integrity for the entire global mountaineering community.",
  contributionsMl: "ഓക്സിജൻ സിലിണ്ടറുകളുടെ സഹായമില്ലാതെ ഹിമാലയൻ കൊടുമുടികൾ കീഴടക്കാമെന്ന് ലോകത്തിന് കാണിച്ചു കൊടുത്തു.",
  interestingFactsEn: [
    "Spent over 15 years completing the 14 eight-thousanders.",
    "Refused oxygen even when turning back within 100 meters of summits.",
    "Practices daily meditation and yoga as part of high-altitude mental preparation."
  ],
  interestingFactsMl: [
    "14 കൊടുമുടികൾ പൂർത്തിയാക്കാൻ 15 വർഷത്തിലേറെ എടുത്തു.",
    "കൊടുമുടിക്ക് 100 മീറ്റർ അടുത്തെത്തിയിട്ടും ഓക്സിജൻ ഉപയോഗിക്കാതെ പിന്മാറാൻ മടിച്ചില്ല.",
    "മാനസിക ഏകാഗ്രതയ്ക്കായി യോഗയും ധ്യാനവും ശീലിക്കുന്നു."
  ],
  timeline: [
    { year: "1970", eventEn: "Born in Upper Austria", eventMl: "ജനനം" },
    { year: "1994", eventEn: "Himalayan Debut on Broad Peak", eventMl: "ഹിമാലയൻ തുടക്കം" },
    { year: "1998", eventEn: "Cho Oyu Summit without oxygen", eventMl: "ചോ ഒയു വിജയം" },
    { year: "2004", eventEn: "Annapurna I & Gasherbrum Summits", eventMl: "അന്നപൂർണ വിജയം" },
    { year: "2010", eventEn: "Mount Everest Summit without O2", eventMl: "എവറസ്റ്റ് വിജയം" },
    { year: "2011", eventEn: "K2 Summit via North Pillar completing 14 peaks", eventMl: "കെ2 വിജയം & 14 കൊടുമുടികൾ" },
    { year: "2012", eventEn: "National Geographic Explorer of the Year", eventMl: "നാഷണൽ ജിയോഗ്രാഫിക് അവാർഡ്" }
  ],
  sources: [
    { name: "Gerlinde Kaltenbrunner official expedition archives", url: "https://www.gerlinde-kaltenbrunner.at" },
    { name: "National Geographic Society", url: "https://www.nationalgeographic.org" }
  ]
};

const filePath = path.join(__dirname, 'data_mountaineers.js');
let mountaineers = require(filePath);
if (!mountaineers.some(m => m.id === 'gerlinde-kaltenbrunner')) {
  mountaineers.push(gerlinde);
  const out = `// 13 Legendary Mountaineers Data\nconst mountaineers = ${JSON.stringify(mountaineers, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = mountaineers;\n}\n`;
  fs.writeFileSync(filePath, out, 'utf8');
  console.log('Added Gerlinde Kaltenbrunner! Total mountaineers:', mountaineers.length);
} else {
  console.log('Gerlinde already present.');
}
