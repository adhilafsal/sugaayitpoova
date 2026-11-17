// SECTION TWO: PEAKS (14 PEAKS & SEVEN SUMMITS)

const peaks14 = [
  {
    rank: 1,
    id: "everest",
    nameEn: "Mount Everest (Sagarmatha / Chomolungma)",
    nameMl: "എവറസ്റ്റ് കൊടുമുടി (സാഗർമാതാ / ചോമോലുങ്മ)",
    elevation: "8,848.86 m (29,031.7 ft)",
    countryEn: "Nepal / China (Tibet Autonomous Region)",
    countryMl: "നേപ്പാൾ / ചൈന (ടിബറ്റ്)",
    rangeEn: "Mahalangur Himal, Himalayas",
    rangeMl: "മഹാലംഗൂർ ഹിമാൽ, ഹിമാലയം",
    image: "images/discover/peaks/mount-everest.jpg",
    firstAscentEn: "May 29, 1953 by Sir Edmund Hillary (NZ) and Tenzing Norgay (Nepal)",
    firstAscentMl: "1953 മെയ് 29 – എഡ്മണ്ട് ഹിലാരിയും ടെൻസിങ് നോർഗെയും",
    famousExpeditionsEn: "1924 Mallory & Irvine, 1953 British Expedition, 1978 Messner-Habeler oxygenless climb, 1996 disaster.",
    famousExpeditionsMl: "1924 മല്ലോറി-ഇർവിൻ ദൗത്യം, 1953 ബ്രിട്ടീഷ് വിജയം, 1978 മെസ്നറുടെ ഓക്സിജൻ രഹിത വിജയം, 1996 ദുരന്തം.",
    difficultyEn: "Extremely High (Death Zone above 8,000m, Khumbu Icefall crevasse danger, hurricane-force jet streams, acute hypoxia).",
    difficultyMl: "അതീവ കഠിനം (8,000 മീറ്ററിന് മുകളിലെ ഡെത്ത് സോൺ, ഖുംബു ഐസ്ഫാൾ, ഓക്സിജൻ ദൗർലഭ്യം).",
    historyEn: "Identified as Earth's highest peak by the Great Trigonometrical Survey of India in 1852 under Radhanath Sikdar, designated Peak XV, and renamed in 1865 after Surveyor General Sir George Everest. Revered for millennia as Chomolungma ('Goddess Mother of the World') in Tibet and Sagarmatha ('Goddess of the Sky') in Nepal.",
    historyMl: "1852-ൽ രാധാനാഥ് സിക്ദറുടെ നേതൃത്വത്തിലുള്ള സർവേയിലൂടെയാണ് ഭൂമിയിലെ ഏറ്റവും ഉയർന്ന കൊടുമുടിയാണെന്ന് കണ്ടെത്തിയത്. ടിബറ്റിൽ 'ചോമോലുങ്മ' എന്നും നേപ്പാളിൽ 'സാഗർമാതാ' എന്നും അറിയപ്പെടുന്നു.",
    factsEn: [
      "Tectonic plate collision between the Indian and Eurasian plates causes Everest to grow by approximately 4 mm per year.",
      "The 'Death Zone' begins at 8,000 meters where available oxygen is roughly 33% of sea level value, meaning human cellular survival without auxiliary oxygen is strictly limited to 24–48 hours.",
      "Over 300 climbers have lost their lives on Everest; many bodies remain frozen in place serving as landmarks."
    ],
    factsMl: [
      "ഇന്ത്യൻ-യൂറേഷ്യൻ ടെക്റ്റോണിക് പ്ലേറ്റുകളുടെ കൂട്ടിയിടി കാരണം എവറസ്റ്റ് പ്രതിവർഷം 4 മില്ലിമീറ്റർ വീതം ഉയരുന്നു.",
      "8,000 മീറ്ററിന് മുകളിലുള്ള 'ഡെത്ത് സോണിൽ' അന്തരീക്ഷ ഓക്സിജൻ മൂന്നിലൊന്നായി ചുരുങ്ങുന്നു.",
      "മുന്നൂറിലധികം ആളുകൾ ഇവിടെ ജീവൻ വെടിഞ്ഞിട്ടുണ്ട്."
    ]
  },
  {
    rank: 2,
    id: "k2",
    nameEn: "K2 (Mount Godwin-Austen / Chogori)",
    nameMl: "കെ2 കൊടുമുടി (ചൊഗോരി)",
    elevation: "8,611 m (28,251 ft)",
    countryEn: "Pakistan (Gilgit-Baltistan) / China (Xinjiang)",
    countryMl: "പാകിസ്ഥാൻ (ഗിൽഗിത്-ബാൾട്ടിസ്ഥാൻ) / ചൈന",
    rangeEn: "Baltoro Muztagh, Karakoram",
    rangeMl: "ബാൾട്ടോറോ മുസ്താഗ്, കാറക്കോറം",
    image: "images/discover/peaks/k2.jpg",
    firstAscentEn: "July 31, 1954 by Lino Lacedelli and Achille Compagnoni (Italy, led by Ardito Desio)",
    firstAscentMl: "1954 ജൂലൈ 31 – ലിനോ ലാസെഡെല്ലി, അക്കില്ലെ കോംപഗ്നോണി (ഇറ്റലി)",
    famousExpeditionsEn: "1939 Wiessner American attempt, 1954 Italian first ascent, 1986 Black Summer disaster, 2021 first winter ascent by 10 Nepali climbers.",
    famousExpeditionsMl: "1954 ഇറ്റാലിയൻ ആദ്യ വിജയം, 1986 ബ്ലാക്ക് സമ്മർ ദുരന്തം, 2021-ലെ ആദ്യ ശീതകാല വിജയം.",
    difficultyEn: "The World's Most Dangerous: 'The Savage Mountain' claims one life for every four successful summits. Features the vertical ice couloir known as the 'Bottleneck' beneath a precarious 100m overhanging serac.",
    difficultyMl: "ലോകത്തിലെ ഏറ്റവും അപകടകരമായ കൊടുമുടി: ഓരോ 4 സമ്മിറ്റിലും ഒരാൾ മരണപ്പെടുന്നു. 'ബോട്ടിൽനെക്ക്' എന്ന ലംബമായ ഐസ് ചുരമാണ് പ്രധാന വില്ലൻ.",
    historyEn: "Designated 'K2' (second peak of the Karakoram) by Thomas Montgomerie during the 1856 survey because it had no single recognized local name visible from a distance, though local Balti people call it Chogori ('King of Mountains'). Renowned for its terrifying pyramidal geometry and unrelenting steepness from base to summit.",
    historyMl: "1856-ൽ തോമസ് മോണ്ട്ഗോമറി കാറക്കോറം മലനിരകളിലെ രണ്ടാമത്തെ കൊടുമുടിയായി കെ2 എന്ന് അടയാളപ്പെടുത്തി. ബാൾട്ടി ഭാഷയിൽ 'ചൊഗോരി' (കൊടുമുടികളുടെ രാജാവ്) എന്നറിയപ്പെടുന്നു.",
    factsEn: [
      "Unlike Everest, K2 has no gentle ridge approach; every face requires sustained vertical technical ice and rock climbing.",
      "Remained the only 8,000er never summited in winter until a historic 10-man team led by Nirmal Purja and Mingma G stood on top on January 16, 2021.",
      "The Bottleneck is an 80-degree ice gully exposed to falling blocks of ice the size of trucks from the summit serac."
    ],
    factsMl: [
      "എവറസ്റ്റിനെപ്പോലെ സാധാരണ വഴികളില്ല; താഴെ മുതൽ മുകൾ വരെ കുത്തനെയുള്ള പാറകളും മഞ്ഞുമാണ്.",
      "2021 ജനുവരി 16-ന് നിർമൽ പുർജയുടെ നേതൃത്വത്തിലുള്ള 10 നേപ്പാളി സംഘം ആദ്യമായി ശൈത്യകാലത്ത് കീഴടക്കുന്നതുവരെ ശൈത്യകാലത്ത് അപ്രാപ്യമായിരുന്നു.",
      "ബോട്ടിൽനെക്ക് മേഖലയിൽ വലിപ്പമേറിയ മഞ്ഞുമലകൾ എപ്പോൾ വേണമെങ്കിലും ഇടിഞ്ഞുവീഴാം."
    ]
  },
  {
    rank: 3,
    id: "kangchenjunga",
    nameEn: "Kangchenjunga (The Five Treasures of Snow)",
    nameMl: "കാഞ്ചൻജംഗ",
    elevation: "8,586 m (28,169 ft)",
    countryEn: "India (Sikkim) / Nepal",
    countryMl: "ഇന്ത്യ (സിക്കിം) / നേപ്പാൾ",
    rangeEn: "Kangchenjunga Himal, Eastern Himalayas",
    rangeMl: "കിഴക്കൻ ഹിമാലയം",
    image: "images/discover/peaks/kangchenjunga.jpg",
    firstAscentEn: "May 25, 1955 by Joe Brown and George Band (UK)",
    firstAscentMl: "1955 മെയ് 25 – ജോ ബ്രൗൺ, ജോർജ്ജ് ബാൻഡ് (ബ്രിട്ടൻ)",
    famousExpeditionsEn: "1905 Aleister Crowley expedition, 1955 British first ascent, 1977 Indian Army ascent led by Col Narinder Kumar.",
    famousExpeditionsMl: "1905 ക്രൗളി പര്യവേഷണം, 1955 ബ്രിട്ടീഷ് വിജയം, 1977 കേണൽ നരീന്ദർ കുമാറിന്റെ ഇന്ത്യൻ ആർമി വിജയം.",
    difficultyEn: "Extremely Treacherous (Eastern Himalaya receives immense early monsoons causing relentless blizzards, unstable cornices, and huge avalanches).",
    difficultyMl: "അതീവ ദുർഘടം (ശക്തമായ വർഷകാല കൊടുങ്കാറ്റുകളും വൻ ഹിമപാതങ്ങളും).",
    historyEn: "Until 1852, Kangchenjunga was believed to be the highest mountain in the world. Revered by the people of Sikkim as a sacred deity embodying five treasures: gold, silver, gems, grain, and sacred scriptures. In deference to the Chogyal of Sikkim, first ascent climbers stopped just a few feet short of the actual summit, a sacred tradition honoured by ethical climbers today.",
    historyMl: "1852 വരെ ലോകത്തിലെ ഏറ്റവും ഉയർന്ന മലയായി കരുതിയിരുന്നു. സിക്കിമിലെ ജനങ്ങൾ പുണ്യഭൂമിയായി ആരാധിക്കുന്നു. കൊടുമുടിയുടെ നെറുകയിൽ ചവിട്ടാതെ ഏതാനും അടി താഴെ നിന്നു പ്രാർത്ഥിക്കുന്ന ആചാരം ഇന്നും നിലനിൽക്കുന്നു.",
    factsEn: [
      "Highest mountain in India, situated right on the border between Sikkim and Eastern Nepal.",
      "Has five distinct high summits, hence its Tibetan name meaning 'The Five Treasures of Great Snow'.",
      "One of the lowest death-zone survival rates due to severe remoteness and ferocious moisture-laden storms."
    ],
    factsMl: [
      "ഇന്ത്യയിലെ ഏറ്റവും ഉയർന്ന കൊടുമുടി (സിക്കിമിലാണ് സ്ഥിതി ചെയ്യുന്നത്).",
      "അഞ്ച് വ്യത്യസ്ത കൊടുമുടികൾ ഉള്ളതിനാലാണ് 'ഹിമത്തിന്റെ അഞ്ച് നിധികൾ' എന്നർത്ഥം വരുന്ന പേര് ലഭിച്ചത്."
    ]
  },
  {
    rank: 4,
    id: "lhotse",
    nameEn: "Lhotse (South Peak)",
    nameMl: "ലോത്സെ",
    elevation: "8,516 m (27,940 ft)",
    countryEn: "Nepal / China (Tibet Autonomous Region)",
    countryMl: "നേപ്പാൾ / ചൈന (ടിബറ്റ്)",
    rangeEn: "Mahalangur Himal, Himalayas",
    rangeMl: "മഹാലംഗൂർ ഹിമാൽ, ഹിമാലയം",
    image: "images/discover/peaks/lhotse.jpg",
    firstAscentEn: "May 18, 1956 by Ernst Reiss and Fritz Luchsinger (Switzerland)",
    firstAscentMl: "1956 മെയ് 18 – ഏണസ്റ്റ് റെയ്സ്, ഫ്രിറ്റ്സ് ലുച്ചിംഗർ (സ്വിറ്റ്സർലാൻഡ്)",
    famousExpeditionsEn: "1956 Swiss first ascent, 1989 tragic death of Jerzy Kukuczka on the South Face, 1996 first ski descent.",
    famousExpeditionsMl: "1956 സ്വിസ് വിജയം, 1989 ജെർസി കുകുച്ച്കയുടെ വീഴ്ച, സ്കീയിംഗ് ദൗത്യങ്ങൾ.",
    difficultyEn: "Very High (Shares standard route with Everest up to Yellow Band; the summit push branches into the narrow, steep 40-degree Lhotse Couloir packed with blue ice and rockfall).",
    difficultyMl: "വളരെ ഉയർന്ന കാഠിന്യം (40 ഡിഗ്രി ചരിവുള്ള ലംബമായ ലോത്സെ കൂളോയർ).",
    historyEn: "Connected directly to Mount Everest via the South Col (7,986m). In Tibetan, 'Lhotse' literally translates to 'South Peak'. Its South Face is a gargantuan vertical wall of rock and ice rising 3,200 meters (10,500 ft) in just 2.25 km, known as one of the ultimate death-defying climbing challenges on Earth.",
    historyMl: "സൗത്ത് കോൾ വഴി എവറസ്റ്റുമായി നേരിട്ട് ബന്ധപ്പെട്ടിരിക്കുന്നു. ടിബറ്റൻ ഭാഷയിൽ 'തെക്കൻ കൊടുമുടി' എന്നാണർത്ഥം. ഇതിന്റെ സൗത്ത് ഫേസ് ലോകത്തിലെ ഏറ്റവും ഭയാനകമായ 3,200 മീറ്റർ ലംബമായ മതിൽക്കെട്ടാണ്.",
    factsEn: [
      "Climbers heading to Lhotse share Everest Base Camp and Camps I, II, and III before splitting left toward Lhotse Face.",
      "The South Face defeated the greatest climbers in the world, including Messner, and claimed Polish legend Jerzy Kukuczka in 1989.",
      "Contains secondary peaks Lhotse Middle (8,414m) and Lhotse Shar (8,383m)."
    ],
    factsMl: [
      "എവറസ്റ്റ് ബേസ് ക്യാമ്പും ക്യാമ്പ് 3 വരെ ഒരേ പാതയുമാണ് ഉപയോഗിക്കുന്നത്.",
      "3,200 മീറ്റർ ഉയരമുള്ള ഇതിന്റെ സൗത്ത് ഫേസ് കീഴടക്കാൻ ശ്രമിക്കവെയാണ് പോളിഷ് ഇതിഹാസം ജെർസി കുകുച്ച്ക മരണപ്പെട്ടത്."
    ]
  },
  {
    rank: 5,
    id: "makalu",
    nameEn: "Makalu (The Great Black)",
    nameMl: "മകാലു",
    elevation: "8,485 m (27,838 ft)",
    countryEn: "Nepal / China (Tibet Autonomous Region)",
    countryMl: "നേപ്പാൾ / ചൈന (ടിബറ്റ്)",
    rangeEn: "Mahalangur Himal, Himalayas",
    rangeMl: "മഹാലംഗൂർ ഹിമാൽ",
    image: "images/discover/peaks/makalu.jpg",
    firstAscentEn: "May 15, 1955 by Lionel Terray and Jean Couzy (France, led by Jean Franco)",
    firstAscentMl: "1955 മെയ് 15 – ലയണൽ ടെറെ, ജീൻ കൗസി (ഫ്രാൻസ്)",
    famousExpeditionsEn: "1955 French first ascent, 2009 first winter ascent by Denis Urubko and Simone Moro.",
    famousExpeditionsMl: "1955 ഫ്രഞ്ച് ആദ്യ വിജയം, 2009 ശൈത്യകാല വിജയം.",
    difficultyEn: "Extremely Technical (Isolated pyramid structure exposed to wind tunnels; knife-edge summit ridge and technical rock climbing at extreme altitude).",
    difficultyMl: "അതീവ സാങ്കേതികം (കഠിനമായ പാറക്കെട്ടുകളും അതിശക്തമായ കാറ്റും).",
    historyEn: "Located 19 km southeast of Mount Everest. Named from the Sanskrit word 'Maha-Kala', an epithet for Lord Shiva meaning 'The Great Black' or 'Great Time', reflecting its dark, menacing granite face. Widely feared by mountaineers for its unforgiving isolation and exposure.",
    historyMl: "എവറസ്റ്റിന് 19 കി.മീ തെക്കുകിഴക്കായി സ്ഥിതി ചെയ്യുന്നു. ശിവന്റെ നാമമായ 'മഹാകാല' എന്ന സംസ്കൃത പദത്തിൽ നിന്നാണ് പേര് വന്നത്.",
    factsEn: [
      "A perfect four-sided pyramid peak with razor-sharp snow ridges.",
      "One of the most physically demanding 8,000m peaks with steep mixed granite and ice climbing in the final 500 meters.",
      "Surrounded by the Makalu-Barun National Park, home to rare snow leopards and red pandas."
    ],
    factsMl: [
      "നാല് മുഖങ്ങളുള്ള കൃത്യമായ പിരമിഡ് ആകൃതിയിലുള്ള കൊടുമുടി.",
      "അവസാന 500 മീറ്റർ കഠിനമായ ഗ്രാനൈറ്റ് പാറകളും മഞ്ഞുപാളികളും നിറഞ്ഞതാണ്."
    ]
  },
  {
    rank: 6,
    id: "cho-oyu",
    nameEn: "Cho Oyu (Turquoise Goddess)",
    nameMl: "ചോ ഒയു (ടർകോയ്സ് ദേവി)",
    elevation: "8,188 m (26,864 ft)",
    countryEn: "Nepal / China (Tibet Autonomous Region)",
    countryMl: "നേപ്പാൾ / ചൈന (ടിബറ്റ്)",
    rangeEn: "Mahalangur Himal, Himalayas",
    rangeMl: "മഹാലംഗൂർ ഹിമാൽ",
    image: "images/discover/peaks/cho-oyu.jpg",
    firstAscentEn: "October 19, 1954 by Herbert Tichy, Sepp Jöchler (Austria), and Pasang Dawa Lama (Nepal)",
    firstAscentMl: "1954 ഒക്ടോബർ 19 – ഹെർബർട്ട് ടിച്ചി, സെപ് ജോച്ച്ലർ, പാസാങ് ദാവ ലാമ",
    famousExpeditionsEn: "1954 Austrian post-monsoon lightweight ascent, 1985 Polish winter ascent.",
    famousExpeditionsMl: "1954 ഓസ്ട്രിയൻ വിജയം, 1985 പോളിഷ് ശൈത്യകാല വിജയം.",
    difficultyEn: "Moderate among Eight-Thousanders (Widely considered the easiest 8,000m peak due to gentle northwest slopes, though still extremely dangerous due to altitude and severe cold).",
    difficultyMl: "താരതമ്യേന കുറഞ്ഞ കാഠിന്യം (8000 മീറ്റർ കൊടുമുടികളിൽ ഏറ്റവും കൂടുതൽ പേർ വിജയകരമായി കയറിയത്).",
    historyEn: "Stands on the border of Nepal and Tibet, 20 km west of Everest. In Tibetan, 'Cho Oyu' translates to 'Turquoise Goddess'. Near the mountain lies Nangpa La pass (5,716m), a historical glaciated trade route used for centuries by Sherpa traders driving yaks between Nepal and Tibet.",
    historyMl: "ടിബറ്റൻ ഭാഷയിൽ 'ടർകോയ്സ് ദേവി' എന്നാണർത്ഥം. നേപ്പാളും ടിബറ്റും തമ്മിലുള്ള പുരാതന വ്യാപാര പാതയായ നങ്പ ലാ ചുരം ഇതിന് സമീപമാണ്.",
    factsEn: [
      "Statistically has the lowest fatality-to-summit ratio among all 14 eight-thousanders.",
      "Commonly chosen as the first 8,000-meter peak by aspiring high-altitude mountaineers.",
      "The summit plateau is vast and flat; climbers must traverse hundreds of meters to locate the true highest point."
    ],
    factsMl: [
      "14 എണ്ണായിരം മീറ്റർ കൊടുമുടികളിൽ അപകടസാധ്യത ഏറ്റവും കുറഞ്ഞ കൊടുമുടി.",
      "വിശാലമായ പരന്ന കൊടുമുടിത്തട്ടാണ് ഇതിനുള്ളത്."
    ]
  },
  {
    rank: 7,
    id: "dhaulagiri",
    nameEn: "Dhaulagiri I (The Dazzling White Mountain)",
    nameMl: "ധവളഗിരി I",
    elevation: "8,167 m (26,795 ft)",
    countryEn: "Nepal",
    countryMl: "നേപ്പാൾ",
    rangeEn: "Dhaulagiri Himal, Himalayas",
    rangeMl: "ധവളഗിരി ഹിമാൽ",
    image: "images/discover/peaks/dhaulagiri.jpg",
    firstAscentEn: "May 13, 1960 by Kurt Diemberger, Peter Diener, Albin Schelbert, Ernst Forrer (Swiss-Austrian team)",
    firstAscentMl: "1960 മെയ് 13 – കുർട്ട് ഡയംബർഗർ അടങ്ങുന്ന സ്വിസ്-ഓസ്ട്രിയൻ സംഘം",
    famousExpeditionsEn: "1960 Swiss first ascent supported by a glacier airplane, 1985 Polish first winter ascent.",
    famousExpeditionsMl: "1960 സ്വിസ് വിമാന സഹായത്തോടെയുള്ള ആദ്യ വിജയം, 1985 ശൈത്യകാല വിജയം.",
    difficultyEn: "High (Steep pyramidal faces, massive avalanches, fierce weather systems sweeping from Kali Gandaki gorge).",
    difficultyMl: "ഉയർന്ന കാഠിന്യം (വൻ ഹിമപാതങ്ങളും കഠിനമായ കൊടുങ്കാറ്റും).",
    historyEn: "From Sanskrit 'Dhavala' (dazzling white) and 'Giri' (mountain). For over 30 years (1808–1838), European cartographers surveyed Dhaulagiri as the highest mountain on Earth before Kangchenjunga and Everest were measured. It dramatically towers 7,000 meters above the Kali Gandaki River canyon, the deepest gorge on the planet.",
    historyMl: "സംസ്കൃതത്തിൽ 'ധവളം' (വെളുത്ത) 'ഗിരി' (മല) എന്നതിൽ നിന്നാണ് പേര്. 1808 മുതൽ 1838 വരെ ഭൂമിയിലെ ഏറ്റവും വലിയ മലയെന്നാണ് യൂറോപ്യന്മാർ കരുതിയിരുന്നത്. ലോകത്തിലെ ഏറ്റവും ആഴമേറിയ കാളി ഗണ്ഡകി താഴ്‌വരയ്ക്ക് മുകളിലാണ് ഇത് ഉയർന്നു നിൽക്കുന്നത്.",
    factsEn: [
      "Faces Annapurna across the world's deepest canyon, the Kali Gandaki Gorge, separating two giant eight-thousanders by only 34 km.",
      "The 1960 expedition used a Pilatus Porter light aircraft nicknamed 'Yeti' which made the highest landing of an airplane in history at 5,700m before crashing on takeoff.",
      "Its South Face is a gargantuan 4,000m sheer vertical precipice."
    ],
    factsMl: [
      "ലോകത്തിലെ ഏറ്റവും ആഴമേറിയ കാളി ഗണ്ഡകി ചുരത്തിന് അഭിമുഖമായി സ്ഥിതി ചെയ്യുന്നു.",
      "1960-ലെ ആദ്യ വിജയത്തിൽ 'യതി' എന്ന ചെറുവിമാനം ഉപയോഗിച്ച് ചരിത്രത്തിലെ ഏറ്റവും ഉയർന്ന വിമാന ലാൻഡിംഗ് (5,700 മീറ്റർ) നടത്തി."
    ]
  },
  {
    rank: 8,
    id: "manaslu",
    nameEn: "Manaslu (Mountain of the Spirit)",
    nameMl: "മനസ്ലു (ആത്മാവിന്റെ പർവ്വതം)",
    elevation: "8,163 m (26,781 ft)",
    countryEn: "Nepal",
    countryMl: "നേപ്പാൾ",
    rangeEn: "Mansiri Himal, Gorkha, Himalayas",
    rangeMl: "മാൻസിരി ഹിമാൽ, നേപ്പാൾ",
    image: "images/discover/peaks/manaslu.jpg",
    firstAscentEn: "May 9, 1956 by Toshio Imanishi (Japan) and Gyalzen Norbu (Nepal)",
    firstAscentMl: "1956 മെയ് 9 – തോഷിയോ ഇമാനിഷി (ജപ്പാൻ), ഗ്യാൽസെൻ നോർബു (നേപ്പാൾ)",
    famousExpeditionsEn: "1956 Japanese first ascent, 1972 catastrophic avalanche claiming 15 climbers, 1984 Polish winter ascent.",
    famousExpeditionsMl: "1956 ജാപ്പനീസ് വിജയം, 1972-ലെ ദുരന്തം, 1984 ശൈത്യകാല വിജയം.",
    difficultyEn: "High (Severe avalanche risk on the northeast face, technical corniced summit ridge with knife-edge exposure).",
    difficultyMl: "ഉയർന്ന കാഠിന്യം (വലിയ തോതിലുള്ള ഹിമപാത സാധ്യതയും ഇടുങ്ങിയ റിഡ്ജും).",
    historyEn: "Derived from the Sanskrit word 'Manasa' meaning intellect or soul ('Mountain of the Spirit'). Just as the British lay claim to Everest and the French to Annapurna, Manaslu has always been cherished as 'The Japanese Mountain' due to their pioneering attempts throughout the 1950s.",
    historyMl: "സംസ്കൃതത്തിലെ 'മാനസം' (മനസ്സ്/ആത്മാവ്) എന്ന വാക്കിൽ നിന്നാണ് മനസ്ലു ഉണ്ടായത്. ജാപ്പനീസ് പർവ്വതാരോഹകരുടെ ചരിത്രപരമായ വിജയങ്ങളാൽ 'ജാപ്പനീസ് പർവ്വതം' എന്നും അറിയപ്പെടുന്നു.",
    factsEn: [
      "In 1954, local villagers in Sama resisted Japanese climbers, believing the mountaineers had angered the gods and caused avalanches that destroyed a monastery.",
      "Recent surveys showed many climbers stopped short at the false summit; reaching the true summit requires navigating an exposed razor-sharp snow ridge.",
      "Surrounded by ancient Tibetan Buddhist monasteries and remote cultural villages."
    ],
    factsMl: [
      "1954-ൽ വിദേശികൾ മലകയറിയപ്പോൾ ദൈവകോപത്താൽ ആശ്രമം തകർന്നു എന്ന് വിശ്വസിച്ച് നാട്ടുകാർ മലകയറ്റം തടഞ്ഞിരുന്നു.",
      "യഥാർത്ഥ കൊടുമുടിയിലെത്താൻ അതീവ അപകടകരമായ കത്തിയുടെ വായ്ത്തല പോലെയുള്ള മഞ്ഞുപാതയിലൂടെ നടക്കണം."
    ]
  },
  {
    rank: 9,
    id: "nanga-parbat",
    nameEn: "Nanga Parbat (The Killer Mountain / Diamir)",
    nameMl: "നംഗ പർവ്വത് (കില്ലർ മൗണ്ടൻ / ഡയാമിർ)",
    elevation: "8,126 m (26,660 ft)",
    countryEn: "Pakistan (Gilgit-Baltistan)",
    countryMl: "പാകിസ്ഥാൻ (ഗിൽഗിത്-ബാൾട്ടിസ്ഥാൻ)",
    rangeEn: "Diamir, Western Himalayas",
    rangeMl: "പടിഞ്ഞാറൻ ഹിമാലയം",
    image: "images/discover/peaks/nanga-parbat.jpg",
    firstAscentEn: "July 3, 1953 by Hermann Buhl (Austria) in a solo, oxygenless final push",
    firstAscentMl: "1953 ജൂലൈ 3 – ഹെർമൻ ബുൾ (ഓസ്ട്രിയ, സോളോ വിജയം)",
    famousExpeditionsEn: "1895 Mummery disaster, 1934 & 1937 German disasters, 1953 Buhl epic solo, 1970 Messner brothers tragedy on the Rupal Face.",
    famousExpeditionsMl: "1953 ഹെർമൻ ബുളിന്റെ സോളോ വിജയം, 1970 മെസ്നർ സഹോദരന്മാരുടെ റൂപൽ ഫേസ് ദുരന്തം.",
    difficultyEn: "Notoriously Deadly (Rupal Face is Earth's highest mountain wall rising 4,600m vertically; lethal avalanches, ferocious weather).",
    difficultyMl: "അതീവ ഭയാനകം ('കില്ലർ മൗണ്ടൻ' എന്ന് വിളിപ്പേര്. 4,600 മീറ്റർ ലംബമായ റൂപൽ ഫേസ്).",
    historyEn: "Sanskrit for 'Naked Mountain'; locally known in Shina as Diamir ('King of Gods'). Nicknamed 'The Killer Mountain' after 31 people died attempting to climb it before its first ascent. In 1953, Austrian climber Hermann Buhl pulled off the single greatest mountaineering feat in history by climbing the final 1,300m solo without oxygen, surviving a standing night bivouac at 8,000m.",
    historyMl: "സംസ്കൃതത്തിൽ 'നഗ്നമായ പർവ്വതം' എന്നാണർത്ഥം. പ്രാദേശികമായി 'ഡയാമിർ' (ദൈവങ്ങളുടെ രാജാവ്) എന്ന് വിളിക്കുന്നു. ആദ്യ വിജയത്തിന് മുമ്പ് 31 പേർ കൊല്ലപ്പെട്ടതിനാലാണ് 'കില്ലർ മൗണ്ടൻ' എന്ന പേര് വീണത്.",
    factsEn: [
      "The Rupal Face is the largest rock and ice wall on planet Earth, rising 4,600 meters (15,000 feet) sheer from base camp to summit.",
      "Hermann Buhl stood on a narrow ledge for hours during a freezing night without a sleeping bag or tent at 8,000 meters and survived.",
      "Western anchor of the entire Himalayan mountain range."
    ],
    factsMl: [
      "ഭൂമിയിലെ ഏറ്റവും വലിയ ലംബമായ മതിൽക്കെട്ടാണ് ഇതിന്റെ റൂപൽ ഫേസ് (4,600 മീറ്റർ ഉയരം).",
      "1953-ൽ ഹെർമൻ ബുൾ ടെന്റോ സ്ലീപ്പിംഗ് ബാഗോ ഇല്ലാതെ 8,000 മീറ്റർ ഉയരത്തിൽ നിന്നുകൊണ്ട് രാത്രി കഴിച്ചുകൂട്ടി ചരിത്രം സൃഷ്ടിച്ചു."
    ]
  },
  {
    rank: 10,
    id: "annapurna-1",
    nameEn: "Annapurna I (Goddess of the Harvests)",
    nameMl: "അന്നപൂർണ്ണ I (ധാന്യദേവത)",
    elevation: "8,091 m (26,545 ft)",
    countryEn: "Nepal",
    countryMl: "നേപ്പാൾ",
    rangeEn: "Annapurna Massif, Central Himalayas",
    rangeMl: "അന്നപൂർണ്ണ ഹിമാൽ, നേപ്പാൾ",
    image: "images/discover/peaks/annapurna-i.jpg",
    firstAscentEn: "June 3, 1950 by Maurice Herzog and Louis Lachenal (France)",
    firstAscentMl: "1950 ജൂൺ 3 – മോറിസ് ഹെർസോഗ്, ലൂയിസ് ലാഷെനൽ (ഫ്രാൻസ്)",
    famousExpeditionsEn: "1950 French historic first ascent, 1970 Chris Bonington South Face expedition, 1987 first winter ascent by Kukuczka & Hajzer.",
    famousExpeditionsMl: "1950 ഫ്രഞ്ച് ചരിത്ര വിജയം, 1970 ക്രിസ് ബോണിംഗ്ടൺ ദൗത്യം, 1987 ശൈത്യകാല വിജയം.",
    difficultyEn: "Statistically Most Lethal (Historical fatality rate of over 30%; extreme avalanche hazards on the North Face).",
    difficultyMl: "സ്ഥിതിവിവരക്കണക്കുകൾ പ്രകാരം ഏറ്റവും അപകടകരം (30% മരണനിരക്ക്, ഭീകരമായ മഞ്ഞുവീഴ്ചകൾ).",
    historyEn: "Named from Sanskrit meaning 'Provider of Nourishment' or 'Goddess of Harvests'. Annapurna I was the very first 8,000-meter peak in human history ever summited by humankind (June 3, 1950). The French climbers reached the top without bottled oxygen or mapped routes, but both suffered catastrophic frostbite and amputations during their harrowing descent.",
    historyMl: "സംസ്കൃതത്തിൽ 'ധാന്യങ്ങൾ നൽകുന്ന ദേവി' എന്നാണ് അർത്ഥം. മനുഷ്യൻ ആദ്യമായി കീഴടക്കിയ 8,000 മീറ്റർ കൊടുമുടിയാണിത് (1950 ജൂൺ 3). ആദ്യ വിജയത്തിൽ ഫ്രഞ്ച് യാത്രികർക്ക് കൈകാലുകളിലെ വിരലുകൾ നഷ്ടപ്പെട്ടു.",
    factsEn: [
      "Historically held the highest death-to-summit ratio (approximately 32%) of any eight-thousander.",
      "The 1950 descent was so brutal that doctor Jacques Oudot amputated Herzog and Lachenal's frostbitten fingers and toes in remote mountain caves without anesthesia.",
      "Maurice Herzog's memoir 'Annapurna' sold over 11 million copies, becoming the most famous mountaineering book in history."
    ],
    factsMl: [
      "ചരിത്രത്തിൽ ഏറ്റവും കൂടുതൽ മരണനിരക്കുള്ള 8000 മീറ്റർ കൊടുമുടികളിൽ ഒന്ന്.",
      "തിരിച്ചിറക്കത്തിൽ ഫ്രഞ്ച് പർവ്വതാരോഹകരുടെ അഴുകിയ വിരലുകൾ ഡോക്ടർക്ക് അനസ്തേഷ്യയില്ലാതെ ഗുഹകളിൽ വെച്ച് മുറിച്ചുമാറ്റേണ്ടി വന്നു."
    ]
  },
  {
    rank: 11,
    id: "gasherbrum-1",
    nameEn: "Gasherbrum I (Hidden Peak / K5)",
    nameMl: "ഗാഷർബ്രം I (ഹിഡൻ പീക്ക് / കെ5)",
    elevation: "8,080 m (26,509 ft)",
    countryEn: "Pakistan (Gilgit-Baltistan) / China (Xinjiang)",
    countryMl: "പാകിസ്ഥാൻ / ചൈന",
    rangeEn: "Gasherbrum Group, Baltoro Karakoram",
    rangeMl: "ബാൾട്ടോറോ കാറക്കോറം",
    image: "images/discover/peaks/gasherbrum-i.jpg",
    firstAscentEn: "July 5, 1958 by Pete Schoening and Andy Kauffman (USA, led by Nick Clinch)",
    firstAscentMl: "1958 ജൂലൈ 5 – പീറ്റ് ഷോണിംഗ്, ആൻഡി കോഫ്മാൻ (അമേരിക്ക)",
    famousExpeditionsEn: "1958 American first ascent, 1975 Messner and Habeler first pure alpine-style ascent without oxygen.",
    famousExpeditionsMl: "1958 അമേരിക്കൻ വിജയം, 1975 മെസ്നറുടെ ആൽപൈൻ ശൈലി വിജയം.",
    difficultyEn: "Very High (Isolated behind the Baltoro Glacier, long glacier approaches, massive serac fall hazards).",
    difficultyMl: "വളരെ ഉയർന്ന കാഠിന്യം (വിദൂരമായ കാറക്കോറം മഞ്ഞുപാളികൾ).",
    historyEn: "Referred to by local Balti people as 'Rgasha' (beautiful) and 'Brum' (mountain) meaning 'Shining Mountain'. Later dubbed 'Hidden Peak' by William Martin Conway in 1892 because its summit is completely concealed behind the surrounding massif until climbers reach the head of the Baltoro Glacier.",
    historyMl: "ബാൾട്ടി ഭാഷയിൽ 'തിളങ്ങുന്ന പർവ്വതം' എന്നാണ് അർത്ഥം. ചുറ്റുമുള്ള വലിയ മലനിരകൾ കാരണം മുന്നോട്ട് എത്തുന്നതുവരെ കാണാൻ കഴിയാത്തതിനാൽ 'ഹിഡൻ പീക്ക്' എന്നും വിളിക്കുന്നു.",
    factsEn: [
      "Only 8,000-meter peak in history first summited by an American expedition (July 5, 1958).",
      "Reinhold Messner and Peter Habeler made history here in 1975 by completing the first alpine-style ascent of an 8,000m peak without porters, camps, or fixed ropes.",
      "Forms a formidable horseshoe basin of peaks alongside Gasherbrum II, III, and IV."
    ],
    factsMl: [
      "ഒരു അമേരിക്കൻ പര്യവേഷണ സംഘം ആദ്യമായി കീഴടക്കിയ ഏക 8,000 മീറ്റർ കൊടുമുടി.",
      "1975-ൽ മെസ്നറും ഹാബെലറും ഇവിടെയാണ് ആദ്യമായി ശുദ്ധമായ ആൽപൈൻ ശൈലിയിൽ മലകയറിയത്."
    ]
  },
  {
    rank: 12,
    id: "broad-peak",
    nameEn: "Broad Peak (Faichan Kangri / K3)",
    nameMl: "ബ്രോഡ് പീക്ക് (കെ3)",
    elevation: "8,051 m (26,414 ft)",
    countryEn: "Pakistan (Gilgit-Baltistan) / China (Xinjiang)",
    countryMl: "പാകിസ്ഥാൻ / ചൈന",
    rangeEn: "Gasherbrum Group, Karakoram",
    rangeMl: "കാറക്കോറം",
    image: "images/discover/peaks/broad-peak.jpg",
    firstAscentEn: "June 9, 1957 by Marcus Schmuck, Fritz Wintersteller, Kurt Diemberger, and Hermann Buhl (Austria)",
    firstAscentMl: "1957 ജൂൺ 9 – മാർക്കസ് ഷ്മുക്ക്, കുർട്ട് ഡയംബർഗർ, ഹെർമൻ ബുൾ അടങ്ങുന്ന ഓസ്ട്രിയൻ സംഘം",
    famousExpeditionsEn: "1957 Austrian lightweight first ascent without high-altitude porters or oxygen; 2013 Polish winter first ascent.",
    famousExpeditionsMl: "1957 ഓസ്ട്രിയൻ വിജയം, 2013 പോളിഷ് ശൈത്യകാല വിജയം.",
    difficultyEn: "High (Long summit ridge exceeding 1.5 km over 8,000m, false summit trap, extreme gale-force Karakoram winds).",
    difficultyMl: "ഉയർന്ന കാഠിന്യം (8,000 മീറ്ററിന് മുകളിലൂടെ ഒന്നര കിലോമീറ്ററിലധികം നീളുന്ന ഇടുങ്ങിയ മലനിര).",
    historyEn: "Originally designated K3 in 1856. Martin Conway renamed it 'Broad Peak' in 1892 due to its immense summit crest measuring over 1.5 kilometers (almost a mile) wide. Climbers frequently mistake the forepeak for the true summit, requiring a mentally devastating additional hour of technical ridge-walking.",
    historyMl: "1856-ൽ കെ3 എന്ന് നാമകരണം ചെയ്തു. ഒന്നര കിലോമീറ്ററിലധികം വീതിയുള്ള വിശാലമായ കൊടുമുടിത്തട്ട് ഉള്ളതിനാലാണ് 'ബ്രോഡ് പീക്ക്' എന്ന് പേരിട്ടത്.",
    factsEn: [
      "Stands directly opposite K2 across the Godwin-Austen Glacier, offering an awe-inspiring panorama of K2's south face.",
      "Legendary climber Hermann Buhl died just weeks after summiting Broad Peak when an ice cornice collapsed on nearby Chogolisa.",
      "Features a notoriously deceptive 'false summit' that has broken the morale of hundreds of climbers."
    ],
    factsMl: [
      "കെ2 കൊടുമുടിക്ക് നേരെ എതിർവശത്തായി സ്ഥിതി ചെയ്യുന്നു.",
      "ബ്രോഡ് പീക്ക് കീഴടക്കി ദിവസങ്ങൾക്ക് ശേഷം സമീപത്തെ ചോംഗോലിസ കൊടുമുടിയിൽ വെച്ച് ഹെർമൻ ബുൾ ഹിമപാതത്തിൽ മരണമടഞ്ഞു."
    ]
  },
  {
    rank: 13,
    id: "gasherbrum-2",
    nameEn: "Gasherbrum II (K4)",
    nameMl: "ഗാഷർബ്രം II (കെ4)",
    elevation: "8,035 m (26,362 ft)",
    countryEn: "Pakistan (Gilgit-Baltistan) / China (Xinjiang)",
    countryMl: "പാകിസ്ഥാൻ / ചൈന",
    rangeEn: "Gasherbrum Group, Karakoram",
    rangeMl: "കാറക്കോറം",
    image: "images/discover/peaks/gasherbrum-ii.jpg",
    firstAscentEn: "July 7, 1956 by Fritz Moravec, Josef Larch, and Hans Willenpart (Austria)",
    firstAscentMl: "1956 ജൂലൈ 7 – ഫ്രിറ്റ്സ് മൊറാവെക്, ജോസഫ് ലാർച്ച്, ഹാൻസ് വില്ലൻപാർട്ട് (ഓസ്ട്രിയ)",
    famousExpeditionsEn: "1956 Austrian first ascent, 2011 first winter ascent by Simone Moro, Denis Urubko, and Cory Richards.",
    famousExpeditionsMl: "1956 ഓസ്ട്രിയൻ വിജയം, 2011 ശൈത്യകാല വിജയം.",
    difficultyEn: "Moderate to High (Banana Ridge route is technically manageable, but traversing the crevassed Gasherbrum Glacier requires immense vigilance).",
    difficultyMl: "മിതമായ കാഠിന്യം (താരതമ്യേന സാങ്കേതിക ബുദ്ധിമുട്ടുകൾ കുറവാണെങ്കിലും മഞ്ഞുവിള്ളലുകൾ അപകടകരമാണ്).",
    historyEn: "Designated K4 in 1856. Part of the great Gasherbrum horseshoe encircling the South Gasherbrum Glacier. Often regarded alongside Cho Oyu as one of the safer and more approachable eight-thousanders, making it a favorite for intermediate high-altitude climbers.",
    historyMl: "1856-ൽ കെ4 എന്ന് നാമകരണം ചെയ്യപ്പെട്ടു. കാറക്കോറത്തിലെ താരതമ്യേന കയറാൻ എളുപ്പമുള്ള കൊടുമുടികളിൽ ഒന്നായി കണക്കാക്കപ്പെടുന്നു.",
    factsEn: [
      "In 2011, Simone Moro, Denis Urubko, and Cory Richards made the first-ever winter ascent of Gasherbrum II, surviving a colossal avalanche on the descent.",
      "Often climbed in rapid succession with Gasherbrum I by elite teams.",
      "Features the iconic 'Banana Ridge' snow ramp."
    ],
    factsMl: [
      "2011-ൽ സൈമൺ മോറോ അടങ്ങുന്ന സംഘം കാറക്കോറത്തിലെ കൊടുമുടികളിൽ ആദ്യമായി ശൈത്യകാലത്ത് ഇതിന്റെ മുകളിലെത്തി.",
      "ബനാന റിഡ്ജ് എന്ന പ്രശസ്തമായ മഞ്ഞുപാത ഇതിലൂടെയാണ്."
    ]
  },
  {
    rank: 14,
    id: "shishapangma",
    nameEn: "Shishapangma (Gosainthān)",
    nameMl: "ശിഷപാംഗ്മ (ഗോസായ്ന്താൻ)",
    elevation: "8,027 m (26,335 ft)",
    countryEn: "China (Tibet Autonomous Region)",
    countryMl: "ചൈന (ടിബറ്റ് സ്വയംഭരണ പ്രദേശം)",
    rangeEn: "Jugal Himal, Himalayas",
    rangeMl: "ജുഗൽ ഹിമാൽ, ഹിമാലയം",
    image: "images/discover/peaks/shishapangma.jpg",
    firstAscentEn: "May 2, 1964 by a 10-climber Chinese expedition led by Xǔ Jìng",
    firstAscentMl: "1964 മെയ് 2 – സൂ ജിങ്ങിന്റെ നേതൃത്വത്തിലുള്ള ചൈനീസ് സംഘം",
    famousExpeditionsEn: "1964 Chinese first ascent, 1999 Alex Lowe avalanche tragedy, 2019 Nimsdai Purja's final summit of Project Possible.",
    famousExpeditionsMl: "1964 ചൈനീസ് വിജയം, 1999 അലക്സ് ലോ ദുരന്തം, 2019 നിർമൽ പുർജയുടെ ചരിത്ര വിജയം.",
    difficultyEn: "Moderate to High (Lowest of the 14, but prone to lethal avalanches on the slopes leading to the central and main summit ridge).",
    difficultyMl: "മിതമായ കാഠിന്യം (14 കൊടുമുടികളിൽ ഏറ്റവും ഉയരം കുറഞ്ഞതാണെങ്കിലും മഞ്ഞുവീഴ്ചകൾ അപകടം വിതയ്ക്കുന്നു).",
    historyEn: "The only 8,000-meter peak entirely situated inside Chinese (Tibetan) territory. In Tibetan, 'Shisha Pangma' means 'Crest Above the Grassy Plains', while its Sanskrit name is Gosainthān ('Place of the Saint'). Because Tibet was strictly closed to foreign travelers for decades, it was the very last of the 14 eight-thousanders to be climbed by humankind (1964).",
    historyMl: "പൂർണ്ണമായും ടിബറ്റിന്റെ അതിർത്തിക്കുള്ളിൽ സ്ഥിതി ചെയ്യുന്ന ഏക 8000 മീറ്റർ കൊടുമുടി. വിദേശികൾക്ക് ടിബറ്റിൽ പ്രവേശനം ഇല്ലാതിരുന്നതിനാൽ മനുഷ്യൻ ഏറ്റവും അവസാനം കീഴടക്കിയ 8000 മീറ്റർ കൊടുമുടിയാണിത് (1964).",
    factsEn: [
      "Final peak climbed by Nirmal Purja on October 29, 2019, to complete his record-breaking 14-peaks challenge in 189 days.",
      "Famed American alpinist Alex Lowe was tragically killed here by a massive avalanche in October 1999; his body was discovered 16 years later in 2016.",
      "Has a Central Peak (8,008m) and Main Summit (8,027m) connected by a narrow snow crest."
    ],
    factsMl: [
      "2019 ഒക്ടോബർ 29-ന് നിർമൽ പുർജ തന്റെ പ്രൊജക്റ്റ് പോസിബിളിന്റെ 14-ാമത്തെ കൊടുമുടിയായി കീഴടക്കിയത് ശിഷപാംഗ്മയാണ്.",
      "1999-ൽ പ്രശസ്ത അമേരിക്കൻ പർവ്വതാരോഹകൻ അലക്സ് ലോ ഇവിടെ ഹിമപാതത്തിൽ കൊല്ലപ്പെട്ടു."
    ]
  }
];

// Nimsdai Project Possible Special Dataset
const nimsdaiProjectPossible = {
  titleEn: "Project Possible 14/7 – Nirmal Purja's Historic 2019 Feat",
  titleMl: "പ്രൊജക്റ്റ് പോസിബിൾ 14/7 – നിർമൽ പുർജയുടെ ചരിത്ര നേട്ടം",
  overviewEn: "In 2019, Nepali mountaineer Nirmal 'Nimsdai' Purja MBE shattered the greatest physical endurance barrier in alpine history. Before him, the record to climb all 14 peaks above 8,000 meters was 7 years, 10 months, and 6 days (held by South Korean Kim Chang-ho) and 16 years (Reinhold Messner). Nimsdai climbed every single one in just 6 months and 6 days (189 days total).",
  overviewMl: "2019-ൽ നിർമൽ പുർജ ലോകത്തിലെ 14 എണ്ണായിരം മീറ്റർ കൊടുമുടികളും വെറും 6 മാസവും 6 ദിവസവും (189 ദിവസം) കൊണ്ട് കീഴടക്കി ചരിത്രം സൃഷ്ടിച്ചു. മുമ്പ് ഇതിനായി കൊറിയൻ താരം കിം ചാങ്-ഹോ 7 വർഷവും 10 മാസവും എടുത്തിരുന്നു.",
  significanceEn: "Beyond speed, Project Possible fundamentally reshaped the global image of Sherpas and Nepali high-altitude climbers. Nimsdai funded the mission himself, remortgaging his home, and led a 100% Nepali climbing team to demonstrate to the world that indigenous climbers are the world's greatest expedition leaders.",
  significanceMl: "നേപ്പാളി ഷെർപ്പകളുടെ കഴിവ് ലോകത്തിന് മുന്നിൽ തെളിയിക്കുക എന്നതായിരുന്നു ഇതിന്റെ പ്രധാന ലക്ഷ്യം. സ്വന്തം വീട് പണയപ്പെടുത്തിയാണ് നിംസ്ദായ് ഇതിന് തുടക്കമിട്ടത്.",
  comparison: {
    generalEn: "Climbing all 14 peaks is considered the 'Holy Grail' of mountaineering. Historically, climbers dedicated 10 to 20 years of their lives, facing immense attrition, high mortality, and funding crises.",
    generalMl: "14 കൊടുമുടികളും കീഴടക്കുക എന്നത് ഒരു പർവ്വതാരോഹകന്റെ ജീവിതകാല സ്വപ്നമാണ്. സാധാരണയായി 10 മുതൽ 20 വർഷം വരെ ഇതിനായി വേണ്ടിവരുന്നു.",
    nimsdaiEn: "Nimsdai unified military precision from his British Special Forces SBS background, superhuman physical conditioning, and high-altitude Sherpa brotherhood to summit all 14 within 6 months across 3 countries (Nepal, Pakistan, China).",
    nimsdaiMl: "ബ്രിട്ടീഷ് സ്പെഷ്യൽ ഫോഴ്സ് പരിശീലനവും കഠിനമായ കായികക്ഷമതയും ഷെർപ്പകളുടെ സഹായവും ഒത്തുചേർന്നപ്പോൾ വെറും 6 മാസം കൊണ്ട് ഈ അസാധ്യ ദൗത്യം അദ്ദേഹം പൂർത്തിയാക്കി."
  },
  teamMembers: [
    { name: "Nirmal Purja (Nimsdai)", role: "Expedition Leader & Lead Climber" },
    { name: "Mingma David Sherpa", role: "Key Climbing Partner & Logistics Leader" },
    { name: "Geljen Sherpa", role: "Summit Operator & Oxygen Logistics" },
    { name: "Lakpa Dendi Sherpa", role: "High-Altitude Route Fixer" },
    { name: "Gesman Tamang", role: "Karakoram & Tibet Summit Specialist" },
    { name: "Halung Sherpa", role: "Base Camp & High-Altitude Support" }
  ],
  verifiedTimeline: [
    { peak: "Annapurna I (8,091m)", date: "April 23, 2019", country: "Nepal", phase: "Phase 1" },
    { peak: "Dhaulagiri I (8,167m)", date: "May 12, 2019", country: "Nepal", phase: "Phase 1" },
    { peak: "Kangchenjunga (8,586m)", date: "May 15, 2019", country: "Nepal", phase: "Phase 1" },
    { peak: "Mount Everest (8,848m)", date: "May 22, 2019", country: "Nepal", phase: "Phase 1" },
    { peak: "Lhotse (8,516m)", date: "May 22, 2019", country: "Nepal", phase: "Phase 1" },
    { peak: "Makalu (8,485m)", date: "May 24, 2019", country: "Nepal", phase: "Phase 1" },
    { peak: "Nanga Parbat (8,126m)", date: "July 3, 2019", country: "Pakistan", phase: "Phase 2" },
    { peak: "Gasherbrum I (8,080m)", date: "July 15, 2019", country: "Pakistan", phase: "Phase 2" },
    { peak: "Gasherbrum II (8,035m)", date: "July 18, 2019", country: "Pakistan", phase: "Phase 2" },
    { peak: "K2 (8,611m)", date: "July 24, 2019", country: "Pakistan", phase: "Phase 2" },
    { peak: "Broad Peak (8,051m)", date: "July 26, 2019", country: "Pakistan", phase: "Phase 2" },
    { peak: "Cho Oyu (8,188m)", date: "September 23, 2019", country: "China/Tibet", phase: "Phase 3" },
    { peak: "Manaslu (8,163m)", date: "September 27, 2019", country: "Nepal", phase: "Phase 3" },
    { peak: "Shishapangma (8,027m)", date: "October 29, 2019", country: "China/Tibet", phase: "Phase 3" }
  ]
};

// SECTION B: SEVEN SUMMITS (BASS & MESSNER LISTS)
const sevenSummits = {
  overviewEn: "The Seven Summits is the premier continental mountaineering challenge: summiting the highest mountain on each of Earth's seven traditional continents. First achieved by American businessman Richard Bass on April 30, 1985.",
  overviewMl: "ഭൂമിയിലെ ഏഴ് ഭൂഖണ്ഡങ്ങളിലെയും ഏറ്റവും ഉയർന്ന കൊടുമുടികൾ കീഴടക്കുന്ന സാഹസിക വെല്ലുവിളിയാണ് 'സെവൻ സമ്മിറ്റ്സ്'. 1985 ഏപ്രിൽ 30-ന് റിച്ചാർഡ് ബാസ് ആണ് ഇത് ആദ്യമായി പൂർത്തിയാക്കിയത്.",
  comparisonAnalysis: {
    titleEn: "Bass List vs Messner List – Why Are They Different?",
    titleMl: "ബാസ് ലിസ്റ്റും മെസ്നർ ലിസ്റ്റും – എന്തുകൊണ്ടാണ് ഇവ വ്യത്യാസപ്പെട്ടിരിക്കുന്നത്?",
    textEn: "The debate centers entirely on the definition of the Australian/Oceanian continent. Richard Bass considered mainland Australia as the continent, selecting Mount Kosciuszko (2,228m), an easy hiking peak that can be walked up without technical gear. Legendary alpinist Reinhold Messner argued that geologically and culturally, the continent is Oceania / Australasia, making Carstensz Pyramid (Puncak Jaya, 4,884m) on the island of New Guinea the true continental summit. Carstensz requires technical rock climbing and remote jungle expeditions, making the Messner List far more respected by professional mountaineers.",
    textMl: "ഓസ്‌ട്രേലിയ/ഓഷ്യാനിയ ഭൂഖണ്ഡത്തിന്റെ നിർവചനത്തിലാണ് ഈ രണ്ട് പട്ടികകളും തമ്മിലുള്ള വ്യത്യാസം. റിച്ചാർഡ് ബാസ് ഓസ്‌ട്രേലിയൻ വൻകരയിലെ മൗണ്ട് കൊസിയോസ്കോ (2,228 മീറ്റർ) തിരഞ്ഞെടുത്തു. എന്നാൽ റെയിൻഹോൾഡ് മെസ്നർ ന്യൂഗിനിയ ദ്വീപിലെ കാർസ്റ്റൻസ് പിരമിഡ് (4,884 മീറ്റർ) ആണ് യഥാർത്ഥ കൊടുമുടി എന്ന് വാദിച്ചു. കാർസ്റ്റൻസ് കീഴടക്കാൻ കഠിനമായ പാറക്കെട്ടുകൾ കയറേണ്ടതുണ്ട്."
  },
  mountains: [
    {
      id: "everest",
      nameEn: "Mount Everest",
      nameMl: "എവറസ്റ്റ്",
      continentEn: "Asia",
      continentMl: "ഏഷ്യ",
      elevation: "8,848.86 m",
      countryEn: "Nepal / China",
      countryMl: "നേപ്പാൾ / ചൈന",
      image: "images/discover/peaks/mount-everest.jpg",
      firstAscentEn: "May 29, 1953 (Hillary & Norgay)",
      firstAscentMl: "1953 മെയ് 29",
      famousClimbersEn: "Tenzing Norgay, Edmund Hillary, Reinhold Messner, Nirmal Purja",
      famousClimbersMl: "ടെൻസിങ് നോർഗെ, എഡ്മണ്ട് ഹിലാരി, മെസ്നർ",
      difficultyEn: "Extreme (Highest point on Earth)",
      difficultyMl: "അതീവ കഠിനം",
      factsEn: "Highest peak in Asia and on planet Earth. Common to both lists.",
      factsMl: "ഏഷ്യയിലെയും ഭൂമിയിലെയും ഏറ്റവും ഉയർന്ന കൊടുമുടി.",
      lists: ["bass", "messner"]
    },
    {
      id: "aconcagua",
      nameEn: "Aconcagua",
      nameMl: "അക്കോൺകാഗ്വ",
      continentEn: "South America",
      continentMl: "തെക്കേ അമേരിക്ക",
      elevation: "6,961 m (22,838 ft)",
      countryEn: "Argentina (Mendoza Province)",
      countryMl: "അർജന്റീന",
      image: "images/discover/peaks/aconcagua.jpg",
      firstAscentEn: "January 14, 1897 by Matthias Zurbriggen (Switzerland)",
      firstAscentMl: "1897 ജനുവരി 14 – മത്യാസ് സുർബ്രിഗൻ",
      famousClimbersEn: "Matthias Zurbriggen, Edward FitzGerald",
      famousClimbersMl: "മത്യാസ് സുർബ്രിഗൻ",
      difficultyEn: "High (Non-technical normal route, but extreme altitude, sub-zero winds, and acute mountain sickness).",
      difficultyMl: "ഉയർന്ന കാഠിന്യം (സാങ്കേതിക ബുദ്ധിമുട്ടുകൾ കുറവാണെങ്കിലും കൊടും തണുപ്പും ഉയരവും).",
      factsEn: "Highest peak in South America, the Western Hemisphere, and the Southern Hemisphere. Often called the 'Colossus of America'.",
      factsMl: "തെക്കേ അമേരിക്കയിലെയും പടിഞ്ഞാറൻ അർദ്ധഗോളത്തിലെയും ഏറ്റവും ഉയർന്ന കൊടുമുടി.",
      lists: ["bass", "messner"]
    },
    {
      id: "denali",
      nameEn: "Denali (Mount McKinley)",
      nameMl: "ഡെനാലി (മക്കിൻലി കൊടുമുടി)",
      continentEn: "North America",
      continentMl: "വടക്കേ അമേരിക്ക",
      elevation: "6,190 m (20,310 ft)",
      countryEn: "United States (Alaska)",
      countryMl: "യുണൈറ്റഡ് സ്റ്റേറ്റ്സ് (അലാസ്ക)",
      image: "images/discover/peaks/denali.jpg",
      firstAscentEn: "June 7, 1913 by Hudson Stuck, Harry Karstens, Walter Harper, Robert Tatum",
      firstAscentMl: "1913 ജൂൺ 7 – ഹഡ്സൺ സ്റ്റക്ക് സംഘം",
      famousClimbersEn: "Hudson Stuck, Bradford Washburn, Art Davidson",
      famousClimbersMl: "ഹഡ്സൺ സ്റ്റക്ക്",
      difficultyEn: "Extremely High (Located near Arctic Circle; temperatures drop to -50°C; climbers must pull 40kg sleds up glaciers without porters).",
      difficultyMl: "അതീവ കഠിനം (മൈനസ് 50 ഡിഗ്രി തണുപ്പ്, സ്വന്തമായി സ്ലെഡ്ജുകൾ വലിച്ച് കയറണം).",
      factsEn: "Has the greatest vertical relief of any mountain in the world, rising 5,500m (18,000 ft) directly from its base plain. Native Koyukon name means 'The Tall One'.",
      factsMl: "താഴ്‌വരയിൽ നിന്ന് കൊടുമുടിയിലേക്കുള്ള ലംബമായ ഉയരം (5,500 മീറ്റർ) ലോകത്ത് ഏറ്റവും കൂടുതലുള്ള മല.",
      lists: ["bass", "messner"]
    },
    {
      id: "kilimanjaro",
      nameEn: "Mount Kilimanjaro (Uhuru Peak)",
      nameMl: "കിളിമഞ്ചാരോ (ഉഹുറു പീക്ക്)",
      continentEn: "Africa",
      continentMl: "ആഫ്രിക്ക",
      elevation: "5,895 m (19,341 ft)",
      countryEn: "Tanzania",
      countryMl: "ടാൻസാനിയ",
      image: "images/discover/peaks/kilimanjaro.jpg",
      firstAscentEn: "October 6, 1889 by Hans Meyer (Germany) and Ludwig Purtscheller (Austria)",
      firstAscentMl: "1889 ഒക്ടോബർ 6 – ഹാൻസ് മേയർ, ലുഡ്‌വിഗ് പർട്ഷെല്ലർ",
      famousClimbersEn: "Hans Meyer, Yohani Kinyala Lauwo",
      famousClimbersMl: "ഹാൻസ് മേയർ",
      difficultyEn: "Moderate (Trekker-friendly, no technical climbing ropes, but rapid altitude gain causes high rate of altitude sickness).",
      difficultyMl: "മിതമായ കാഠിന്യം (റോപ്പുകളോ ഉപകരണങ്ങളോ ഇല്ലാതെ നടന്നു കയറാം).",
      factsEn: "The highest free-standing mountain in the world (not part of any mountain range). A dormant stratovolcano with three volcanic cones: Kibo, Mawenzi, and Shira.",
      factsMl: "ഒരു പർവ്വതനിരയുടെയും ഭാഗമല്ലാതെ തനിച്ചു നിൽക്കുന്ന ലോകത്തിലെ ഏറ്റവും ഉയർന്ന മല. ഇതൊരു അഗ്നിപർവ്വതമാണ്.",
      lists: ["bass", "messner"]
    },
    {
      id: "elbrus",
      nameEn: "Mount Elbrus",
      nameMl: "എൽബ്രസ് കൊടുമുടി",
      continentEn: "Europe",
      continentMl: "യൂറോപ്പ്",
      elevation: "5,642 m (18,510 ft)",
      countryEn: "Russia (Kabardino-Balkaria / Karachay-Cherkessia)",
      countryMl: "റഷ്യ",
      rangeEn: "Caucasus Mountains",
      rangeMl: "കോക്കസസ് മലനിരകൾ",
      image: "images/discover/peaks/elbrus.jpg",
      firstAscentEn: "July 22, 1829 by Killar Khashirov (Circassian guide for Russian military expedition)",
      firstAscentMl: "1829 ജൂലൈ 22 – കില്ലാർ ഖാഷിറോവ്",
      famousClimbersEn: "Florence Craufurd Grove, Douglas Freshfield",
      famousClimbersMl: "കില്ലാർ ഖാഷിറോവ്",
      difficultyEn: "Moderate to High (Glaciated slopes require crampons and ice axes; sudden violent blizzards with zero visibility on the saddle).",
      difficultyMl: "മിതമായത് മുതൽ കഠിനം വരെ (മഞ്ഞുപാളികളും അപ്രതീക്ഷിത കൊടുങ്കാറ്റുകളും).",
      factsEn: "A dormant double-coned volcano in the Caucasus. Taller than Mont Blanc (4,808m), solidifying its position as Europe's highest peak.",
      factsMl: "യൂറോപ്പിലെ ഏറ്റവും ഉയർന്ന കൊടുമുടി. മോണ്ട് ബ്ലാങ്കിനേക്കാൾ ഉയർന്നതാണ്.",
      lists: ["bass", "messner"]
    },
    {
      id: "vinson",
      nameEn: "Vinson Massif (Mount Vinson)",
      nameMl: "വിൻസൺ മാസിഫ്",
      continentEn: "Antarctica",
      continentMl: "അന്റാർട്ടിക്ക",
      elevation: "4,892 m (16,050 ft)",
      countryEn: "Antarctica (Sentinel Range)",
      countryMl: "അന്റാർട്ടിക്ക",
      image: "images/discover/peaks/vinson-massif.jpg",
      firstAscentEn: "December 18, 1966 by Nicholas Clinch and American Alpine Club team",
      firstAscentMl: "1966 ഡിസംബർ 18 – നിക്കോളാസ് ക്ലിഞ്ച് അടങ്ങുന്ന അമേരിക്കൻ സംഘം",
      famousClimbersEn: "Nicholas Clinch, Pete Schoening",
      famousClimbersMl: "നിക്കോളാസ് ക്ലിഞ്ച്",
      difficultyEn: "Extremely Challenging (Complete polar isolation, -40°C temperatures, catastrophic winds, reached only via ski-planes).",
      difficultyMl: "അതീവ വെല്ലുവിളി നിറഞ്ഞത് (അന്റാർട്ടിക്കയിലെ കൊടും തണുപ്പും ആരും എത്താത്ത ഒറ്റപ്പെടലും).",
      factsEn: "Discovered in 1958 by US Navy aircraft. Located just 1,200 km from the South Pole. Climbers experience 24 hours of continuous daylight during summer.",
      factsMl: "ദക്ഷിണധ്രുവത്തിൽ നിന്ന് 1,200 കി.മീ അകലെ സ്ഥിതി ചെയ്യുന്നു. വേനൽക്കാലത്ത് 24 മണിക്കൂറും സൂര്യപ്രകാശം ഉണ്ടാകും.",
      lists: ["bass", "messner"]
    },
    {
      id: "kosciuszko",
      nameEn: "Mount Kosciuszko",
      nameMl: "മൗണ്ട് കൊസിയോസ്കോ",
      continentEn: "Australia (Bass List)",
      continentMl: "ഓസ്‌ട്രേലിയ (ബാസ് പട്ടിക)",
      elevation: "2,228 m (7,310 ft)",
      countryEn: "Australia (New South Wales)",
      countryMl: "ഓസ്‌ട്രേലിയ",
      image: "images/discover/peaks/kosciuszko.jpg",
      firstAscentEn: "February 15, 1840 by Paweł Strzelecki (Poland)",
      firstAscentMl: "1840 ഫെബ്രുവരി 15 – പാവൽ സ്ട്രെസെലെക്കി",
      famousClimbersEn: "Paweł Strzelecki, Richard Bass",
      famousClimbersMl: "റിച്ചാർഡ് ബാസ്",
      difficultyEn: "Low (Gentle walking path with chairlift access, easily summited in 3 to 4 hours by any fit trekker).",
      difficultyMl: "ലളിതം (3-4 മണിക്കൂർ കൊണ്ട് ആർക്കും നടന്നു കയറാം).",
      factsEn: "Selected by Richard Bass for the first Seven Summits completion. Named in honour of Polish military hero Tadeusz Kościuszko.",
      factsMl: "ബാസ് പട്ടികയിൽ ഉൾപ്പെട്ടിരിക്കുന്നു. പോളിഷ് പോരാളിയായ കൊസിയോസ്കോയുടെ പേര് നൽകി.",
      lists: ["bass"]
    },
    {
      id: "carstensz",
      nameEn: "Puncak Jaya (Carstensz Pyramid)",
      nameMl: "കാർസ്റ്റൻസ് പിരമിഡ് (പുൻചക് ജയ)",
      continentEn: "Oceania / Australasia (Messner List)",
      continentMl: "ഓഷ്യാനിയ (മെസ്നർ പട്ടിക)",
      elevation: "4,884 m (16,024 ft)",
      countryEn: "Indonesia (Central Papua)",
      countryMl: "ഇന്തോനേഷ്യ (പാപുവ)",
      image: "images/discover/peaks/carstensz-pyramid.jpg",
      firstAscentEn: "February 13, 1962 by Heinrich Harrer (Austria, author of 'Seven Years in Tibet')",
      firstAscentMl: "1962 ഫെബ്രുവരി 13 – ഹെൻറിച്ച് ഹാരർ ('സെവൻ ഇയേഴ്സ് ഇൻ ടിബറ്റ്' രചയിതാവ്)",
      famousClimbersEn: "Heinrich Harrer, Reinhold Messner, Pat Morrow",
      famousClimbersMl: "ഹെൻറിച്ച് ഹാരർ, മെസ്നർ",
      difficultyEn: "Very High (Technical UIAA grade V limestone rock climbing, dense equatorial jungle approach, political instability).",
      difficultyMl: "വളരെ ഉയർന്ന കാഠിന്യം (സാങ്കേതികമായ പാറക്കെട്ടുകൾ കയറണം, കൊടും വനങ്ങളിലൂടെയുള്ള യാത്ര).",
      factsEn: "The highest island peak in the world. Selected by Reinhold Messner as the true Oceania continental summit. Features an equatorial glacier atop tropical jungle.",
      factsMl: "ലോകത്തിലെ ഏറ്റവും ഉയർന്ന ദ്വീപ് കൊടുമുടി. മെസ്നർ പട്ടികയിലെ പ്രധാന കൊടുമുടി.",
      lists: ["messner"]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { peaks14, nimsdaiProjectPossible, sevenSummits };
}
