// SECTION THREE: HISTORICAL BACKGROUND OF FAMOUS TOURIST PLACES IN INDIA
// Focus on History, Heritage, Dynasties, Architecture, and Origins.

const historyPlaces = [
  // --- KERALA ---
  {
    id: "munnar",
    state: "Kerala",
    stateEn: "Kerala",
    stateMl: "കേരളം",
    nameEn: "Munnar (The Confluence of Three Rivers)",
    nameMl: "മൂന്നാർ (മൂന്ന് നദികളുടെ സംഗമം)",
    image: "images/discover/history/munnar.jpg",
    locationEn: "Idukki District, Western Ghats, Kerala (1,600m above sea level)",
    locationMl: "ഇടുക്കി ജില്ല, പശ്ചിമഘട്ടം, കേരളം (സമുദ്രനിരപ്പിൽ നിന്ന് 1,600 മീറ്റർ ഉയരം)",
    originEn: "Name derived from Malayalam words 'Moonnu' (three) and 'Aaru' (river), signifying the convergence of the Mudhirapuzha, Nallathanni, and Kundaly rivers.",
    originMl: "'മൂന്ന്', 'ആറ്' എന്നീ മലയാള പദങ്ങളിൽ നിന്നാണ് പേര് വന്നത്. മുതിരപ്പുഴ, നല്ലതണ്ണി, കുണ്ടള എന്നീ മൂന്ന് നദികളുടെ സംഗമസ്ഥാനമാണിത്.",
    ancientHistoryEn: "Inhabited for millennia by the Muthuvan tribal communities who navigated the dense Anamalai and Cardamom Hill forests. It fell under the feudal jurisdiction of the Poonjar Royal Dynasty who held vast tracts of highland forest lands.",
    ancientHistoryMl: "മുതുവാൻ ആദിവാസി സമൂഹങ്ങൾ തലമുറകളായി വസിച്ചിരുന്ന പ്രദേശം. പിന്നീട് പൂഞ്ഞാർ രാജവംശത്തിന്റെ അധീനതയിലായിരുന്നു ഈ മലനിരകൾ.",
    dynastiesEn: "Poonjar Royal Dynasty; Travancore Kingdom; British East India Company; Finlay Tea & James Finlay Group.",
    dynastiesMl: "പൂഞ്ഞാർ രാജവംശം, തിരുവിതാംകൂർ രാജ്യം, ബ്രിട്ടീഷ് ഈസ്റ്റ് ഇന്ത്യാ കമ്പനി, ജെയിംസ് ഫിൻലെ ഗ്രൂപ്പ്.",
    monumentsEn: ["C.S.I. Christ Church (consecrated 1910 in stone gothic style)", "Kundala Dam (Asia's first arch dam built in 1946)", "Tata Tea Museum at Nallathanni"],
    monumentsMl: ["സി.എസ്.ഐ ക്രൈസ്റ്റ് ചർച്ച് (1910-ൽ നിർമ്മിച്ച ഗോഥിക് ശൈലിയിലുള്ള പള്ളി)", "കുണ്ടള ഡാം (1946-ൽ നിർമ്മിച്ച ഏഷ്യയിലെ ആദ്യ ആർച്ച് ഡാം)", "നല്ലതണ്ണിയിലെ ടാറ്റാ ടീ മ്യൂസിയം"],
    traditionsEn: "Muthuvan indigenous honey-gathering and forest lore; traditional colonial high-tea rituals; decennial blooming celebration of Neelakurinji (Strobilanthes kunthiana).",
    traditionsMl: "മുതുവാൻ ഗോത്ര ആചാരങ്ങൾ, ബ്രിട്ടീഷ് ടീ പ്ലാന്റേഷൻ സംസ്കാരം, 12 വർഷത്തിലൊരിക്കൽ പൂക്കുന്ന നീലക്കുറിഞ്ഞി വസന്തം.",
    religiousSignificanceEn: "Sacred groves of the indigenous Muthuvans honoring forest deities; historic Christian pilgrimage at Christ Church containing headstones of pioneer British planters.",
    religiousSignificanceMl: "ആദിവാസി ഗോത്രങ്ങളുടെ കാവുകളും പ്രകൃതി ആരാധനയും, 1910-ൽ സ്ഥാപിതമായ ക്രൈസ്റ്റ് ചർച്ച്.",
    architectureEn: "Colonial British hill-station architecture with steep gable roofs, rough-hewn granite stonework, stained glass imported from England, and bungalow verandahs designed for heavy monsoons.",
    architectureMl: "ബ്രിട്ടീഷ് കൊളോണിയൽ വാസ്തുവിദ്യ. കരിങ്കല്ലിൽ തീർത്ത ഭിത്തികളും കുത്തനെയുള്ള മേൽക്കൂരകളും വിദേശത്ത് നിന്ന് കൊണ്ടുവന്ന ഗ്ലാസ് ജാലകങ്ങളും.",
    keyEventsEn: [
      "1877: British resident John Daniel Munro leases 588 sq km of Kanan Devan Hills from the Rohini Thirunal Raja of Poonjar.",
      "1880: A.H. Sharp clears forest at Parvathi to plant the very first tea bush in Munnar.",
      "1900: North Munnaar Light Railway established (mono-rail and later two-foot narrow gauge).",
      "1924: Catastrophic Great Flood of 99 (Malayalam era 1099) devastates the railway network and reshapes the terrain."
    ],
    keyEventsMl: [
      "1877: ജോൺ ഡാനിയൽ മൺറോ പൂഞ്ഞാർ രാജാവിൽ നിന്ന് 588 ച.കി.മീ സ്ഥലം പാട്ടത്തിനെടുത്തു.",
      "1880: എ.എച്ച്. ഷാർപ്പ് മൂന്നാറിലെ ആദ്യത്തെ തേയിലത്തോട്ടം നട്ടുപിടിപ്പിച്ചു.",
      "1924: ചരിത്രപ്രസിദ്ധമായ '99-ലെ വെള്ളപ്പൊക്കം' മൂന്നാറിലെ റെയിൽവേ ലൈനുകളെ പൂർണ്ണമായും ഒഴുക്കിക്കളഞ്ഞു."
    ],
    interestingFactsEn: [
      "Munnar once possessed a high-altitude railway station and mono-rail line destroyed during the 1924 deluge.",
      "Home to Anamudi (2,695m), the highest peak in India south of the Himalayas.",
      "The rare and endangered Nilgiri Tahr (mountain goat) finds its largest surviving sanctuary here in Eravikulam National Park."
    ],
    interestingFactsMl: [
      "1924-ലെ വെള്ളപ്പൊക്കത്തിൽ തകർന്നുപോകുന്നതുവരെ മൂന്നാറിൽ ഒരു റെയിൽവേ സ്റ്റേഷനും ട്രെയിൻ സർവീസും ഉണ്ടായിരുന്നു.",
      "ദക്ഷിണേന്ത്യയിലെ ഏറ്റവും ഉയർന്ന കൊടുമുടിയായ ആനമുടി (2,695 മീറ്റർ) ഇവിടെയാണ്.",
      "വംശനാശഭീഷണി നേരിടുന്ന വരയാടുകളുടെ ഏറ്റവും വലിയ കേന്ദ്രമായ ഇരവികുളം ദേശീയോദ്യാനം ഇവിടെ സ്ഥിതി ചെയ്യുന്നു."
    ],
    tourismDevelopmentEn: "Evolved from a secluded British planter summer retreat into Kerala's premier eco-tourism destination following the establishment of national parks and tea heritage circuits in the late 20th century.",
    tourismDevelopmentMl: "ബ്രിട്ടീഷുകാരുടെ വേനൽക്കാല വസതിയായിരുന്ന പ്രദേശം സ്വാതന്ത്ര്യാനന്തരം പ്ലാന്റേഷൻ ടൂറിസത്തിലൂടെയും പരിസ്ഥിതി സൗഹൃദ യാത്രകളിലൂടെയും വികസിച്ചു.",
    referencesEn: "State Archives of Kerala; 'The Land of the Permauls' (Francis Day); Tata Tea Heritage Records."
  },
  {
    id: "fort-kochi",
    state: "Kerala",
    stateEn: "Kerala",
    stateMl: "കേരളം",
    nameEn: "Fort Kochi (The Gateway to the Spice Coast)",
    nameMl: "ഫോർട്ട് കൊച്ചി (സുഗന്ധവ്യഞ്ജന തീരത്തിന്റെ കവാടം)",
    image: "images/discover/history/fort-kochi.jpg",
    locationEn: "Ernakulam District, Coastal Central Kerala",
    locationMl: "എറണാകുളം ജില്ല, മധ്യകേരള തീരം",
    originEn: "Derived from 'Kochazhi' meaning 'small lagoon' in Malayalam. Rose to prominence after the cataclysmic Periyar river flood of 1341 AD silted the ancient port of Muziris and created Kochi's natural harbour.",
    originMl: "'കൊച്ചാഴി' (ചെറിയ അഴിമുഖം) എന്ന വാക്കിൽ നിന്നാണ് കൊച്ചി ഉണ്ടായത്. എ.ഡി 1341-ലെ പെരിയാർ വെള്ളപ്പൊക്കത്തിൽ മുസിരിസ് തുറമുഖം തകരുകയും കൊച്ചി സ്വാഭാവിക തുറമുഖമായി മാറുകയും ചെയ്തു.",
    ancientHistoryEn: "Emerged as the primary trading hub on the Arabian Sea for pepper, cardamom, and cinnamon, attracting Roman, Arab, Persian, Chinese, and Jewish merchant fleets long before European colonizers arrived.",
    ancientHistoryMl: "കുരുമുളക്, ഏലം എന്നിവ തേടി റോമാക്കാരും അറബികളും പേർഷ്യക്കാരും ചൈനക്കാരും യഹൂദരും നൂറ്റാണ്ടുകളോളം കച്ചവടം നടത്തിയ പുരാതന തുറമുഖം.",
    dynastiesEn: "Kingdom of Cochin (Perumpadappu Swaroopam); Portuguese Empire (1503–1663); Dutch East India Company (1663–1795); British Empire (1795–1947).",
    dynastiesMl: "കൊച്ചി രാജവംശം (പെരുമ്പടപ്പ് സ്വരൂപം), പോർച്ചുഗീസ് സാമ്രാജ്യം, ഡച്ച് ഈസ്റ്റ് ഇന്ത്യാ കമ്പനി, ബ്രിട്ടീഷ് രാജ്.",
    monumentsEn: ["St. Francis Church (India's oldest European-built church, erected 1503)", "Fort Immanuel (Portuguese bastion ruins)", "Santa Cruz Cathedral Basilica", "Chinese Fishing Nets (Cheena Vala)"],
    monumentsMl: ["സെന്റ് ഫ്രാൻസിസ് ചർച്ച് (1503-ൽ നിർമ്മിച്ച ഇന്ത്യയിലെ ആദ്യത്തെ യൂറോപ്യൻ പള്ളി)", "ഫോർട്ട് ഇമ്മാനുവൽ കോട്ടയുടെ അവശിഷ്ടങ്ങൾ", "സാന്താക്രൂസ് കത്തീഡ്രൽ ബസിലിക്ക", "ചീനവലകൾ"],
    traditionsEn: "Cochin Carnival at New Year, multicultural blend of Anglo-Indian, Konkani, Gujarati, and Arab-Kochi cuisines; boat-building and coir crafts.",
    traditionsMl: "കൊച്ചിൻ കാർണിവൽ, ആംഗ്ലോ-ഇന്ത്യൻ, കൊങ്കണി, ഗുജറാത്തി സംസ്കാരങ്ങളുടെ സമന്വയം.",
    religiousSignificanceEn: "Burial place of explorer Vasco da Gama (interred at St. Francis Church for 14 years until his remains were moved to Lisbon in 1538); sacred harmony between Christians, Jews, Muslims, and Hindus.",
    religiousSignificanceMl: "പോർച്ചുഗീസ് നാവികൻ വാസ്കോ ഡ ഗാമയെ ആദ്യം അടക്കം ചെയ്തത് സെന്റ് ഫ്രാൻസിസ് പള്ളിയിലാണ്. ജൂത-ക്രിസ്ത്യൻ-മുസ്ലിം-ഹിന്ദു മതങ്ങളുടെ സംഗമഭൂമി.",
    architectureEn: "A magnificent tapestry of Portuguese manor houses, Dutch gabled warehouses with heavy wooden rafters, and British colonial verandas overlooking cobblestone alleys.",
    architectureMl: "പോർച്ചുഗീസ്, ഡച്ച്, ബ്രിട്ടീഷ് വാസ്തുവിദ്യകളുടെ അപൂർവ്വ സമന്വയം.",
    keyEventsEn: [
      "1341 AD: Massive flooding creates Cochin harbour opening.",
      "1500: Pedro Álvares Cabral arrives; establishes first European factory in India.",
      "1503: Afonso de Albuquerque builds Fort Manuel, the first European fort in India.",
      "1524: Vasco da Gama dies in Fort Kochi on Christmas Eve."
    ],
    keyEventsMl: [
      "1341: വെള്ളപ്പൊക്കത്തിൽ കൊച്ചി അഴിമുഖം രൂപപ്പെട്ടു.",
      "1503: അൽബുക്കർക്ക് ഇന്ത്യയിലെ ആദ്യ യൂറോപ്യൻ കോട്ടയായ ഫോർട്ട് ഇമ്മാനുവൽ സ്ഥാപിച്ചു.",
      "1524: ക്രിസ്മസ് തലേന്ന് വാസ്കോ ഡ ഗാമ കൊച്ചിയിൽ വെച്ച് അന്തരിച്ചു."
    ],
    interestingFactsEn: [
      "The iconic cantilevered Chinese Fishing Nets were introduced by Portuguese traders from the court of Chinese emperor Kublai Khan.",
      "India's first European township and church were established here.",
      "Vasco da Gama lived and died in a private bungalow in Fort Kochi."
    ],
    interestingFactsMl: [
      "കുബ്ലൈ ഖാന്റെ കാലത്ത് ചൈനീസ് വ്യാപാരികളിൽ നിന്ന് പ്രചോദനം ഉൾക്കൊണ്ട് പോർച്ചുഗീസുകാരാണ് ചീനവലകൾ ഇവിടെ എത്തിച്ചത്.",
      "ഇന്ത്യയിലെ ആദ്യത്തെ യൂറോപ്യൻ ടൗൺഷിപ്പും പള്ളിയും ഫോർട്ട് കൊച്ചിയിലാണ്."
    ],
    tourismDevelopmentEn: "Transformed into an international art and cultural destination, world-famous for the Kochi-Muziris Biennale (South Asia's largest contemporary art festival).",
    tourismDevelopmentMl: "കൊച്ചി-മുസിരിസ് ബിനാലെയിലൂടെ അന്താരാഷ്ട്ര കലാവേദിയായി മാറിയ പൈതൃക നഗരം.",
    referencesEn: "Records of Fort St. George; 'The Portuguese in India' (F.C. Danvers); Cochin State Manual."
  },
  {
    id: "bekal-fort",
    state: "Kerala",
    stateEn: "Kerala",
    stateMl: "കേരളം",
    nameEn: "Bekal Fort (The Seaside Sentinel of North Malabar)",
    nameMl: "ബേക്കൽ കോട്ട (വടക്കേ മലബാറിന്റെ കാവൽപ്പുര)",
    image: "images/discover/history/bekal-fort.jpg",
    locationEn: "Kasaragod District, North Kerala coast",
    locationMl: "കാസർഗോഡ് ജില്ല, വടക്കൻ കേരള തീരം",
    originEn: "Name derived from 'Baliakulam' (big palace or big pool), which contracted over centuries into Bekal.",
    originMl: "'ബലിയകുളം' (വലിയ കൊട്ടാരം അല്ലെങ്കിൽ വലിയ കുളം) എന്ന വാക്കിൽ നിന്നാണ് ബേക്കൽ ഉണ്ടായത്.",
    ancientHistoryEn: "Served as an ancient coastal lookout for the Mushika (Kolathiri) kings of Ezhimala, controlling maritime trading routes between Malabar and Gujarat.",
    ancientHistoryMl: "ഏഴിമലയിലെ മൂഷിക (കോലത്തിരി) രാജാക്കന്മാരുടെ കാലം മുതൽ സമുദ്ര നിരീക്ഷണ കേന്ദ്രമായി ഉപയോഗിച്ചിരുന്ന പുരാതന തീരം.",
    dynastiesEn: "Kolathiri Dynasty; Keladi Nayakas of Ikkeri (Shivappa Nayaka); Kingdom of Mysore (Hyder Ali & Tipu Sultan); British East India Company.",
    dynastiesMl: "കോലത്തിരി രാജവംശം, ഇക്കേരിയിലെ കേളദി നായ്ക്കന്മാർ (ശിവപ്പ നായ്ക്കൻ), മൈസൂർ സാമ്രാജ്യം (ഹൈദരാലി, ടിപ്പു സുൽത്താൻ), ബ്രിട്ടീഷ് ഈസ്റ്റ് ഇന്ത്യാ കമ്പനി.",
    monumentsEn: ["Observation Tower (central watchtower with 360-degree sea view)", "Water Tank with grand flight of steps", "Hanuman Temple at entrance", "Sea Bastion"],
    monumentsMl: ["കേന്ദ്ര നിരീക്ഷണ ഗോപുരം (ഒബ്സർവേഷൻ ടവർ)", "പടവുകളുള്ള വലിയ കുളം", "പ്രവേശന കവാടത്തിലെ ഹനുമാൻ ക്ഷേത്രം", "കടൽ കൊത്തളങ്ങൾ"],
    traditionsEn: "Theyyam ritual art forms of North Malabar performed in neighboring sacred groves; Yakshagana performances reflecting Tulu and Kannada cultural crosscurrents.",
    traditionsMl: "വടക്കേ മലബാറിലെ തെയ്യം അനുഷ്ഠാനങ്ങൾ, തുളു-കന്നഡ സ്വാധീനമുള്ള യക്ഷഗാനം.",
    religiousSignificanceEn: "Ancient Mukhyaprana (Hanuman) temple built by the Nayakas at the fort entrance; nearby historic Malik Deenar Mosque in Kasaragod.",
    religiousSignificanceMl: "കോട്ടവാതിലിലെ പുരാതന ഹനുമാൻ ക്ഷേത്രം, മാലിക് ദീനാർ പള്ളി.",
    architectureEn: "Imposing laterite-block coastal fortification spanning 40 sprawling acres shaped like a giant keyhole jutting directly into the Arabian Sea. Designed purely for defensive artillery warfare with multi-tier firing holes.",
    architectureMl: "40 ഏക്കറിലധികം പരന്നുകിടക്കുന്ന ചെങ്കല്ലിൽ പണിത കൂറ്റൻ കോട്ട. കടലിലേക്ക് തള്ളിനിൽക്കുന്ന താക്കോൽ ദ്വാരത്തിന്റെ ആകൃതി.",
    keyEventsEn: [
      "1650 AD: Shivappa Nayaka of Bednore reconstructs and expands the massive fortification.",
      "1763: Hyder Ali captures the fort, making it Tipu Sultan's key northern military headquarters.",
      "1799: British forces seize Bekal following Tipu Sultan's death at Seringapatam."
    ],
    keyEventsMl: [
      "1650: ശിവപ്പ നായ്ക്കൻ കോട്ട വിപുലീകരിച്ച് പുനർനിർമ്മിച്ചു.",
      "1763: ഹൈദരാലി കോട്ട പിടിച്ചെടുത്ത് ടിപ്പു സുൽത്താന്റെ പ്രധാന സൈനിക താവളമാക്കി.",
      "1799: ടിപ്പുവിന്റെ മരണശേഷം ബ്രിട്ടീഷുകാർ കോട്ട സ്വന്തമാക്കി."
    ],
    interestingFactsEn: [
      "Largest, best-preserved fort in the state of Kerala.",
      "Unlike conventional forts, Bekal contains no palaces or residential administrative buildings; it was constructed exclusively for military defense and ocean surveillance.",
      "Its underground tunnels once connected the fort to secret escape points."
    ],
    interestingFactsMl: [
      "കേരളത്തിലെ ഏറ്റവും വലിയതും കേടുപാടുകൾ കൂടാതെ സംരക്ഷിക്കപ്പെട്ടതുമായ കോട്ട.",
      "കൊട്ടാരങ്ങളോ ഭരണ കേന്ദ്രങ്ങളോ ഇല്ലാതെ പൂർണ്ണമായും പ്രതിരോധത്തിനും പീരങ്കികൾക്കുമായി മാത്രം നിർമ്മിച്ചതാണ്.",
      "രഹസ്യ തുരങ്കങ്ങൾ ഇവിടെ ഉണ്ടായിരുന്നു."
    ],
    tourismDevelopmentEn: "Developed under the Bekal Tourism Development Corporation (BTDC) as a premier international heritage and beach destination.",
    tourismDevelopmentMl: "ബേക്കൽ ടൂറിസം ഡെവലപ്‌മെന്റ് കോർപ്പറേഷന്റെ നേതൃത്വത്തിൽ അന്താരാഷ്ട്ര ബീച്ച്-പൈതൃക കേന്ദ്രമായി വികസിപ്പിച്ചു.",
    referencesEn: "Archaeological Survey of India (ASI); William Logan's 'Malabar Manual'."
  },
  {
    id: "wayanad",
    state: "Kerala",
    stateEn: "Kerala",
    stateMl: "കേരളം",
    nameEn: "Wayanad (The Land of Paddy Fields & Petroglyphs)",
    nameMl: "വയനാട് (വയലുകളുടെ നാട്)",
    image: "images/discover/history/wayanad.jpg",
    locationEn: "North-Eastern Kerala plateau bordering Karnataka and Tamil Nadu (700m–2,100m)",
    locationMl: "വടക്കുകിഴക്കൻ കേരള പീഠഭൂമി",
    originEn: "Derived from 'Vayal Naadu' meaning 'The Land of Paddy Fields' in Malayalam.",
    originMl: "'വയൽ നാട്' (വയലുകളുടെ നാട്) എന്ന വാക്കിൽ നിന്നാണ് വയനാട് എന്ന പേര് ഉണ്ടായത്.",
    ancientHistoryEn: "One of the oldest continuously inhabited regions in the subcontinent. The Edakkal Caves on Ambukuthi Hills contain Neolithic rock carvings (petroglyphs) dating back over 6,000 years to 4000 BC, demonstrating links to the Indus Valley Civilization.",
    ancientHistoryMl: "അമ്പുകുത്തി മലയിലെ എടക്കൽ ഗുഹകളിൽ ബി.സി 4000 മുതലുള്ള ശിലായുഗ കൊത്തുപണികൾ കാണപ്പെടുന്നു. സിന്ധുനദീതട സംസ്കാരവുമായുള്ള ബന്ധം ഇതിൽ തെളിയുന്നു.",
    dynastiesEn: "Vedar Kings; Gangas of Talakad; Kadambas; Hoysalas; Kottayam Royal Dynasty (Pazhassi Raja); British Empire.",
    dynastiesMl: "വേടർ രാജാക്കന്മാർ, ഗംഗന്മാർ, കദംബർ, ഹൊയ്സാലർ, കോട്ടയം രാജവംശം (പഴശ്ശിരാജ), ബ്രിട്ടീഷ് രാജ്.",
    monumentsEn: ["Edakkal Caves (Neolithic petroglyph caverns)", "Thirunelli Temple (The 'Kashi of the South')", "Sultan Bathery Jain Temple (13th-century Hoysala granite temple)", "Pazhassi Raja Tomb at Mananthavady"],
    monumentsMl: ["എടക്കൽ ഗുഹകൾ", "തിരുനെല്ലി മഹാവിഷ്ണു ക്ഷേത്രം", "ബത്തേരി ജൈനക്ഷേത്രം (13-ാം നൂറ്റാണ്ട്)", "മാനന്തവാടിയിലെ പഴശ്ശിരാജ സ്മൃതിമണ്ഡപം"],
    traditionsEn: "Paniya, Kurichiya, and Kattunayakan tribal archery, medicinal botany, and Vattakkali dances; ancient ancestral rites performed at Papanasini river.",
    traditionsMl: "കുറിച്ച്യ, പണിയ, കാട്ടുനായ്ക്കർ ഗോത്ര പാരമ്പര്യം; പാപനാശിനി നദിയിലെ ബലിതർപ്പണം.",
    religiousSignificanceEn: "Thirunelli Temple, dedicated to Lord Maha Vishnu, is believed according to legend to have been consecrated by Lord Brahma himself; sacred Papanasini stream absolves sins.",
    religiousSignificanceMl: "ബ്രഹ്മാവ് നേരിട്ട് വിഷ്ണു പ്രതിഷ്ഠ നടത്തിയെന്ന് വിശ്വസിക്കപ്പെടുന്ന തിരുനെല്ലി ക്ഷേത്രം; പാപനാശിനി തീർത്ഥം.",
    architectureEn: "Neolithic cave fissures, 13th-century Dravidian-Hoysala granite stone pillar architecture (Jain Temple), and traditional Kerala wooden temple architecture (Chuttambalam).",
    architectureMl: "ശിലായുഗ ഗുഹകൾ, 13-ാം നൂറ്റാണ്ടിലെ കരിങ്കൽ തൂണുകളുള്ള ജൈന വാസ്തുവിദ്യ, കേരളീയ തച്ചുശാസ്ത്രം.",
    keyEventsEn: [
      "4000 BC: Ancient humans carve geometric human, animal, and wheel motifs at Edakkal.",
      "1780s: Tipu Sultan uses the Sultan Bathery Jain Temple as an artillery battery depot.",
      "1797–1805: Kerala Varma Pazhassi Raja wages legendary guerrilla warfare against the British East India Company using Kurichiya tribal archers.",
      "Nov 30, 1805: Pazhassi Raja is martyred on the banks of Mavilanthodu stream."
    ],
    keyEventsMl: [
      "ബി.സി 4000: എടക്കൽ ഗുഹകളിൽ ശിലായുഗ കൊത്തുപണികൾ രേഖപ്പെടുത്തി.",
      "1780-കൾ: ടിപ്പു സുൽത്താൻ ബത്തേരിയിലെ ജൈനക്ഷേത്രം പീരങ്കി സൂക്ഷിക്കാൻ (ബാറ്ററി) ഉപയോഗിച്ചു.",
      "1805: പഴശ്ശിരാജ കുറിച്യ പടയാളികളുമായി ബ്രിട്ടീഷുകാർക്കെതിരെ ഗറില്ലാ യുദ്ധം നയിച്ചു വീരമൃത്യു വരിച്ചു."
    ],
    interestingFactsEn: [
      "The town of Sultan Bathery was originally named Ganapathivattom until Tipu Sultan stationed his artillery batteries inside the ancient Jain temple.",
      "Edakkal is not a true cave, but an immense boulder wedged naturally into a cleft in the mountain rock, forming a natural cavern roof.",
      "Pazhassi Raja was one of the very few Indian rulers who repeatedly defeated the British Army in tactical guerrilla skirmishes."
    ],
    interestingFactsMl: [
      "സുൽത്താൻ ബത്തേരിയുടെ യഥാർത്ഥ പേര് 'ഗണപതിവട്ടം' എന്നായിരുന്നു; ടിപ്പുവിന്റെ പീരങ്കിപ്പട തമ്പടിച്ചതോടെയാണ് ബത്തേരി എന്ന പേര് വന്നത്.",
      "ബ്രിട്ടീഷ് സൈന്യത്തെ കാടുകൾക്കുള്ളിൽ ഗറില്ലാ യുദ്ധത്തിലൂടെ വിറപ്പിച്ച പോരാളിയായിരുന്നു പഴശ്ശിരാജ."
    ],
    tourismDevelopmentEn: "Developed into Kerala's foremost highland wilderness destination, famous for wildlife sanctuaries (Wayanad Wildlife Sanctuary), spices, and cave explorations.",
    tourismDevelopmentMl: "പ്രകൃതിഭംഗിയും വന്യജീവി സങ്കേതങ്ങളും സാഹസിക ട്രെക്കിംഗും നിറഞ്ഞ പ്രധാന ടൂറിസം കേന്ദ്രം.",
    referencesEn: "Fawcett, F. (1901), 'Notes on the Rock Carvings in the Edakkal Caves'; Logan's Malabar Manual."
  },
  {
    id: "varkala",
    state: "Kerala",
    stateEn: "Kerala",
    stateMl: "കേരളം",
    nameEn: "Varkala (Papanasam & The Red Cliffs)",
    nameMl: "വർക്കല (പാപനാശവും ചുവന്ന കുന്നുകളും)",
    image: "images/discover/history/varkala.jpg",
    locationEn: "Thiruvananthapuram District, Southern Kerala coast",
    locationMl: "തിരുവനന്തപുരം ജില്ല, തെക്കൻ കേരള തീരം",
    originEn: "According to myth, sage Narada tossed his 'Valkalam' (tree bark garment), and the holy spot where it landed came to be known as Varkala.",
    originMl: "നാരദ മഹർഷി തന്റെ വൽക്കലം (മരവുരി) എറിഞ്ഞപ്പോൾ അത് വീണ പുണ്യഭൂമിയാണ് 'വർക്കല' എന്ന് ഐതിഹ്യം.",
    ancientHistoryEn: "Mentioned in the ancient Greco-Roman navigation text 'The Periplus of the Erythraean Sea' (1st century AD) as the trading port of Balita. Revered for over two millennia as a major pilgrimage center.",
    ancientHistoryMl: "ഒന്നാം നൂറ്റാണ്ടിലെ ഗ്രീക്ക് യാത്രാവിവരണമായ 'പെരിപ്ലസ് ഓഫ് ദി എറിത്രിയൻ സീ'യിൽ 'ബലിത' എന്ന് രേഖപ്പെടുത്തിയ പുരാതന തീരം.",
    dynastiesEn: "Venad Kingdom; Travancore Dynasty (Marthanda Varma, Dharma Raja); British Residency.",
    dynastiesMl: "വേണാട് രാജ്യം, തിരുവിതാംകൂർ രാജവംശം (മാർത്താണ്ഡവർമ്മ), ബ്രിട്ടീഷ് റസിഡൻസി.",
    monumentsEn: ["Janardana Swami Temple (2,000-year-old Vaishnavite temple)", "Sivagiri Mutt (founded 1904 by Sree Narayana Guru)", "Anjengo Fort (Anchuthengu Fort built by British in 1695)", "Varkala Lighthouse (1684)"],
    monumentsMl: ["ജനാർദ്ദനസ്വാമി ക്ഷേത്രം (2,000 വർഷം പഴക്കമുള്ള മഹാവിഷ്ണു ക്ഷേത്രം)", "ശിവഗിരി മഠം (ശ്രീനാരായണ ഗുരു 1904-ൽ സ്ഥാപിച്ചത്)", "അഞ്ചുതെങ്ങ് കോട്ട (1695-ലെ ബ്രിട്ടീഷ് കോട്ട)"],
    traditionsEn: "Performing 'Vavu Bali' (ancestral offerings) on the Papanasam beach; Arattu festival with caparisoned elephants; annual Sivagiri pilgrimage on Dec 30–Jan 1.",
    traditionsMl: "പാപനാശം കടപ്പുറത്തെ വാവുബലി തർപ്പണം, ശിവഗിരി തീർത്ഥാടനം.",
    religiousSignificanceEn: "Known as 'Dakshina Kashi' (Southern Varanasi). The waters of Papanasam Beach ('washing away sins') are believed sacred; Janardana Swami Temple is an ancient center of salvation.",
    religiousSignificanceMl: "'ദക്ഷിണ കാശി' എന്ന് അറിയപ്പെടുന്നു. പാപങ്ങൾ കഴുകിക്കളയുന്ന പാപനാശം കടൽത്തീരം. ശ്രീനാരായണ ഗുരുവിന്റെ സമാധി മണ്ഡപമായ ശിവഗിരി.",
    architectureEn: "The Janardana Swami Temple exhibits classic Kerala circular sanctum (Vatta Sreekovil) with intricate wooden carvings. The Varkala Cliffs are a Geological Monument declared by the Geological Survey of India.",
    architectureMl: "വൃത്താകൃതിയിലുള്ള ശ്രീകോവിലോടുകൂടിയ കേരളീയ ക്ഷേത്ര വാസ്തുവിദ്യ. ജിയോളജിക്കൽ സർവേ ഓഫ് ഇന്ത്യ സംരക്ഷിക്കുന്ന ചുവന്ന കുന്നുകൾ (Cenozoic sedimentary cliffs).",
    keyEventsEn: [
      "1st Century AD: Recorded as Balita in Roman trade logs.",
      "12th Century: Janardana Swami Temple reconstructed by Venad king after divine revelation.",
      "1695: British East India Company builds Anjengo Fort, their first factory in Travancore.",
      "1904: Sree Narayana Guru establishes Sivagiri Mutt, launching Kerala's social renaissance against caste discrimination.",
      "1928: Sree Narayana Guru attains Mahasamadhi at Sivagiri."
    ],
    keyEventsMl: [
      "ഒന്നാം നൂറ്റാണ്ട്: റോമൻ വാണിജ്യ ഭൂപടങ്ങളിൽ ഇടംപിടിച്ചു.",
      "1695: ബ്രിട്ടീഷുകാർ അഞ്ചുതെങ്ങ് കോട്ട പണിതു.",
      "1904: ശ്രീനാരായണ ഗുരു ശിവഗിരി മഠം സ്ഥാപിച്ചു ജാതിവിവേചനത്തിനെതിരായ വിപ്ലവത്തിന് തുടക്കമിട്ടു.",
      "1928: ശ്രീനാരായണ ഗുരു ശിവഗിരിയിൽ മഹാസമാധിയായി."
    ],
    interestingFactsEn: [
      "The towering red laterite cliffs of Varkala are a unique geological formation, known as the 'Varkala Formation', found nowhere else on the flat Kerala coast.",
      "Natural freshwater springs bubble directly out from the vertical ocean cliff face.",
      "Janardana Swami Temple possesses an antique bronze bell gifted by the captain of a Dutch sailing ship that survived a storm."
    ],
    interestingFactsMl: [
      "കേരള തീരത്ത് മറ്റൊരിടത്തും കാണാത്ത ചെങ്കൽ മലനിരകളാണ് വർക്കല ക്ലിഫുകൾ.",
      "കടൽഭിത്തികളിൽ നിന്ന് നേരിട്ട് ശുദ്ധജല നീരുറവകൾ പുറത്തേക്ക് ഒഴുകുന്നു.",
      "ഡച്ച് കപ്പലിലെ കപ്പിത്താൻ കൊടുങ്കാറ്റിൽ നിന്ന് രക്ഷപ്പെട്ടതിന്റെ നന്ദിസൂചകമായി ക്ഷേത്രത്തിന് സമ്മാനിച്ച പിച്ചള മണി ഇന്നും അവിടെയുണ്ട്."
    ],
    tourismDevelopmentEn: "Transformed from a quiet pilgrimage shoreline into a world-famous cliff-top beach destination popular for yoga, surfing, and Ayurveda.",
    tourismDevelopmentMl: "തീർത്ഥാടന കേന്ദ്രത്തിൽ നിന്ന് ആഗോള ക്ലിഫ് ബീച്ച്, യോഗ, സർഫിംഗ് കേന്ദ്രമായി മാറി.",
    referencesEn: "Geological Survey of India Records; Travancore Archaeological Series; Sivagiri Mutt Publications."
  },
  {
    id: "mattancherry-palace",
    state: "Kerala",
    stateEn: "Kerala",
    stateMl: "കേരളം",
    nameEn: "Mattancherry Palace (The Dutch Palace)",
    nameMl: "മട്ടാഞ്ചേരി കൊട്ടാരം (ഡച്ച് പാലസ്)",
    image: "images/discover/history/mattancherry-palace.jpg",
    locationEn: "Mattancherry, Kochi, Kerala",
    locationMl: "മട്ടാഞ്ചേരി, കൊച്ചി",
    originEn: "Built circa 1555 AD by the Portuguese as a gift and peace offering to Veera Kerala Varma, the Raja of Kochi, after Portuguese soldiers inadvertently plundered a temple.",
    originMl: "1555-ൽ പോർച്ചുഗീസുകാർ കൊച്ചി രാജാവായ വീരകേരളവർമ്മയ്ക്ക് സമ്മാനമായി നിർമ്മിച്ച് നൽകിയ കൊട്ടാരം.",
    ancientHistoryEn: "Served as the official venue for the coronation of the Rajas of Cochin. Later captured, renovated, and expanded by the Dutch East India Company in 1663, becoming universally known as the 'Dutch Palace'.",
    ancientHistoryMl: "കൊച്ചി മഹാരാജാക്കന്മാരുടെ കിരീടധാരണ ചടങ്ങുകൾ നടന്നിരുന്ന ഔദ്യോഗിക കൊട്ടാരം. 1663-ൽ ഡച്ചുകാർ ഇത് പുനരുദ്ധരിച്ചു.",
    dynastiesEn: "Kingdom of Cochin (Perumpadappu Swaroopam); Portuguese Empire; Dutch East India Company; British East India Company.",
    dynastiesMl: "കൊച്ചി രാജവംശം, പോർച്ചുഗീസ്, ഡച്ച് ഈസ്റ്റ് ഇന്ത്യാ കമ്പനി.",
    monumentsEn: ["Coronation Hall (Palliyara)", "Pazhayannur Bhagavathy Temple in the central courtyard", "Historic Jew Town and Paradesi Synagogue (1568) adjacent to the palace"],
    monumentsMl: ["കൊട്ടാരത്തിലെ കൊറോണേഷൻ ഹാൾ", "നടുമുറ്റത്തെ പഴവന്നൂർ ഭഗവതി ക്ഷേത്രം", "സമീപത്തെ ജൂതപ്പള്ളിയും ജ്യൂ ടൗണും"],
    traditionsEn: "Coronation rituals of Kochi monarchs; temple festivals of the royal deity Pazhayannur Bhagavathy; historic spice trading along the Jew Town canal.",
    traditionsMl: "കൊച്ചി രാജാക്കന്മാരുടെ സ്ഥാനാരോഹണ ചടങ്ങുകൾ, പഴവന്നൂർ ഭഗവതി ക്ഷേത്രോത്സവം.",
    religiousSignificanceEn: "Houses three temples dedicated to Pazhayannur Bhagavathy, Lord Krishna, and Lord Shiva within its private walled compound.",
    religiousSignificanceMl: "പഴവന്നൂർ ഭഗവതി, കൃഷ്ണൻ, ശിവൻ എന്നിവർക്കായി കൊട്ടാര വളപ്പിൽ ക്ഷേത്രങ്ങൾ സ്ഥിതി ചെയ്യുന്നു.",
    architectureEn: "Combines classic Kerala 'Nālukettu' (quadrangular courtyard architecture) with European colonial arches, proportions, and wooden ceilings. World-renowned for its exquisite 16th and 17th-century Hindu tempera murals depicting the Ramayana and Mahabharata.",
    architectureMl: "കേരളീയ നാലുകെട്ട് ശൈലിയും യൂറോപ്യൻ വാസ്തുവിദ്യയും സമന്വയിപ്പിച്ച നിർമ്മിതി. രാമായണം, മഹാഭാരതം കഥകൾ വരച്ച ചുവർചിത്രങ്ങൾ ലോകപ്രശസ്തമാണ്.",
    keyEventsEn: [
      "1555 AD: Built by Portuguese for King Veera Kerala Varma.",
      "1663: Dutch East India Company captures Mattancherry and renovates palace.",
      "1951: Declared a centrally protected monument by the Archaeological Survey of India (ASI)."
    ],
    keyEventsMl: [
      "1555: പോർച്ചുഗീസുകാർ കൊട്ടാരം നിർമ്മിച്ച് നൽകി.",
      "1663: ഡച്ചുകാർ കൊട്ടാരം പുനരുദ്ധരിച്ചു.",
      "1951: കേന്ദ്ര പുരാവസ്തു വകുപ്പ് സംരക്ഷിത സ്മാരകമായി പ്രഖ്യാപിച്ചു."
    ],
    interestingFactsEn: [
      "The dining hall floor looks like polished black marble, but is actually an ancient traditional Kerala mix of burnt coconut shells, egg whites, lime, plant juices, and charcoal.",
      "Contains some of the most vibrant, best-preserved tempera murals in Asia, covering over 300 square meters of wall surface.",
      "Located just a few steps from the historic Paradesi Synagogue, where Hebrew clock dials count backwards."
    ],
    interestingFactsMl: [
      "കൊട്ടാരത്തിലെ തറ മാർബിളല്ല; കരിഞ്ഞ തേങ്ങാപ്പൂള്, മുട്ടയുടെ വെള്ള, ചുണ്ണാമ്പ്, സസ്യച്ചാറുകൾ എന്നിവ ചേർത്താണ് നിർമ്മിച്ചിരിക്കുന്നത്.",
      "300 ചതുരശ്ര മീറ്ററിലധികം വിസ്തൃതിയിൽ രാമായണ ചുവർചിത്രങ്ങൾ ഇവിടെ കാണാം."
    ],
    tourismDevelopmentEn: "Preserved as a protected museum under ASI, attracting millions of international heritage enthusiasts alongside the vibrant spice markets of Jew Town.",
    tourismDevelopmentMl: "എ.എസ്.ഐയുടെ സംരക്ഷണയിലുള്ള പ്രശസ്ത മ്യൂസിയമായി നിലകൊള്ളുന്നു.",
    referencesEn: "Archaeological Survey of India (ASI) Guidebooks; Cochin State Manual (C. Achutha Menon)."
  },

  // --- KARNATAKA ---
  {
    id: "hampi",
    state: "Karnataka",
    stateEn: "Karnataka",
    stateMl: "കർണാടക",
    nameEn: "Hampi (The Forgotten Capital of Vijayanagara)",
    nameMl: "ഹംപി (വിജയനഗര സാമ്രാജ്യത്തിന്റെ തലസ്ഥാനം)",
    image: "images/discover/history/hampi.jpg",
    locationEn: "Vijayanagara District, East-Central Karnataka on the banks of Tungabhadra River",
    locationMl: "വിജയനഗര ജില്ല, തുംഗഭദ്ര നദീതീരം, കർണാടക",
    originEn: "Derived from 'Pampa', the ancient mythological name of the river Tungabhadra; Pampa morphed into Hampa in Kannada, yielding Hampi.",
    originMl: "തുംഗഭദ്ര നദിയുടെ പുരാണ നാമമായ 'പമ്പ' എന്നതിൽ നിന്നാണ് 'ഹംപി' ഉണ്ടായത്.",
    ancientHistoryEn: "Mentioned in the Ramayana as Kishkindha, the mythological monkey kingdom where Rama and Lakshmana met Sugriva and Hanuman. Rose to global glory in the 14th century as the supreme imperial capital of the Vijayanagara Empire.",
    ancientHistoryMl: "രാമായണത്തിലെ കിഷ്കിന്ധ എന്ന വാനര സാമ്രാജ്യമാണ് ഹംപി. 14-ാം നൂറ്റാണ്ടിൽ വിജയനഗര സാമ്രാജ്യത്തിന്റെ ആസ്ഥാനമായി മാറി.",
    dynastiesEn: "Sangama Dynasty; Saluva Dynasty; Tuluva Dynasty (Emperor Krishnadevaraya); Aravidu Dynasty.",
    dynastiesMl: "സംഗമ, സാലുവ, തുളുവ (കൃഷ്ണദേവരായർ), അരവിഡു രാജവംശങ്ങൾ.",
    monumentsEn: ["Virupaksha Temple (continuously functioning since the 7th century)", "Stone Chariot at Vijaya Vittala Temple", "Lotus Mahal", "Elephant Stables", "Monolithic Ugra Narasimha"],
    monumentsMl: ["വിരൂപാക്ഷ ക്ഷേത്രം (ഏഴാം നൂറ്റാണ്ട് മുതൽ പൂജ മുടങ്ങാത്ത ക്ഷേത്രം)", "വിജയ വിട്ടല ക്ഷേത്രത്തിലെ കല്ല് രഥം", "ലോട്ടസ് മഹൽ", "ആനപ്പന്തി"],
    traditionsEn: "Hampi Utsav (annual grand cultural festival celebrating Vijayanagara arts and dance); Purandara Dasa Aradhana honoring Carnatic music.",
    traditionsMl: "ഹംപി ഉത്സവം, കർണാടക സംഗീതത്തിന്റെ പിതാവായ പുരന്ദരദാസ ആരാധന.",
    religiousSignificanceEn: "Virupaksha Temple is one of the holiest Shaivite shrines in South India; birthplace of Lord Hanuman at nearby Anjanadri Hill.",
    religiousSignificanceMl: "ശിവന്റെ വിരൂപാക്ഷ രൂപത്തിലുള്ള പുണ്യക്ഷേത്രം; അഞ്ജനാദ്രി മല ഹനുമാന്റെ ജന്മസ്ഥലമായി വിശ്വസിക്കപ്പെടുന്നു.",
    architectureEn: "Dravidian Vijayanagara style characterized by massive carved granite pillars, musical pillars that emit musical notes when tapped, monolithic sculptures, and sophisticated hydraulic aqueduct networks.",
    architectureMl: "വിജയനഗര വാസ്തുവിദ്യ. കൊത്തുപണികളോടുകൂടിയ കരിങ്കൽ തൂണുകൾ, തട്ടിയാൽ സ്വരങ്ങൾ പുറപ്പെടുവിക്കുന്ന സംഗീത തൂണുകൾ, കൂറ്റൻ ഒറ്റക്കൽ ശിൽപ്പങ്ങൾ.",
    keyEventsEn: [
      "1336 AD: Founded by brothers Harihara I and Bukka Raya I under spiritual guidance of Saint Vidyaranya.",
      "1509–1529: Golden era under Emperor Krishnadevaraya; city becomes one of the wealthiest on Earth.",
      "1565: Battle of Talikota; coalition of Deccan Sultanates sacks, burns, and plunders the city for six months.",
      "1986: Inscribed as a UNESCO World Heritage Site."
    ],
    keyEventsMl: [
      "1336: ഹരിഹരനും ബുക്കരായനും ചേർന്ന് വിജയനഗരം സ്ഥാപിച്ചു.",
      "1509–1529: ശ്രീകൃഷ്ണദേവരായരുടെ സുവർണ്ണ കാലഘട്ടം; ലോകത്തിലെ ഏറ്റവും സമ്പന്നമായ രണ്ടാമത്തെ നഗരമായി മാറി.",
      "1565: തളിക്കോട്ട യുദ്ധം; ഡെക്കാൻ സുൽത്താന്മാരുടെ സംയുക്ത സൈന്യം ഹംപിയെ ആറുമാസത്തോളം കൊള്ളയടിച്ച് തകർത്തു.",
      "1986: യുനെസ്കോ ലോക പൈതൃക കേന്ദ്രമായി പ്രഖ്യാപിച്ചു."
    ],
    interestingFactsEn: [
      "In the 16th century, Hampi was the second-largest city in the world after Beijing, with over 500,000 residents.",
      "Precious rubies, diamonds, and emeralds were sold by the kilogram on open street bazaars.",
      "The famous Vittala Temple has 56 musical pillars that produce the sapthaswaras (musical notes) when struck gently with fingers."
    ],
    interestingFactsMl: [
      "പതിനാറാം നൂറ്റാണ്ടിൽ ബീജിംഗ് കഴിഞ്ഞാൽ ലോകത്തിലെ ഏറ്റവും വലിയ രണ്ടാമത്തെ നഗരമായിരുന്നു ഹംപി.",
      "വജ്രങ്ങളും രത്നങ്ങളും തെരുവോര ചന്തകളിൽ തൂക്കി വിറ്റിരുന്നു.",
      "വിട്ടല ക്ഷേത്രത്തിലെ 56 സംഗീത തൂണുകളിൽ തട്ടിയാൽ സംഗീത സ്വരങ്ങൾ കേൾക്കാം."
    ],
    tourismDevelopmentEn: "A globally revered UNESCO World Heritage open-air museum attracting millions of international backpackers, historians, and boulder climbers.",
    tourismDevelopmentMl: "യുനെസ്കോയുടെ ലോക പൈതൃക കേന്ദ്രം; ചരിത്രാന്വേഷികളുടെയും സഞ്ചാരികളുടെയും സ്വർഗ്ഗം.",
    referencesEn: "UNESCO World Heritage Centre; 'A Forgotten Empire: Vijayanagar' (Robert Sewell)."
  },
  {
    id: "mysore-palace",
    state: "Karnataka",
    stateEn: "Karnataka",
    stateMl: "കർണാടക",
    nameEn: "Mysore Palace (Amba Vilas)",
    nameMl: "മൈസൂർ കൊട്ടാരം (അംബാ വിലാസ്)",
    image: "images/discover/history/mysore-palace.jpg",
    locationEn: "Mysuru, Southern Karnataka",
    locationMl: "മൈസൂരു, ദക്ഷിണ കർണാടക",
    originEn: "Named from 'Mahishuru', signifying the land where Goddess Chamundeshwari vanquished the buffalo demon Mahishasura.",
    originMl: "ചാമുണ്ഡേശ്വരി മഹിഷാസുരനെ വധിച്ച 'മഹിഷൂരു' എന്നതിൽ നിന്നാണ് മൈസൂർ എന്ന പേര് വന്നത്.",
    ancientHistoryEn: "Ruled by the Yaduvamsi Wodeyar dynasty since 1399 AD. The original wooden palace was repeatedly destroyed by lightning, sieges, and fire before the present magnificent palace was commissioned in 1897.",
    ancientHistoryMl: "1399 മുതൽ വൊഡയാർ രാജവംശത്തിന്റെ ആസ്ഥാനം. പഴയ മരക്കൊട്ടാരം തീപിടിച്ച് നശിച്ചതിനെ തുടർന്ന് 1897-ലാണ് ഇന്നത്തെ കൊട്ടാരം നിർമ്മിച്ചത്.",
    dynastiesEn: "Wodeyar Dynasty; Kingdom of Mysore (Hyder Ali and Tipu Sultan interregnum 1761–1799); British Raj.",
    dynastiesMl: "വൊഡയാർ രാജവംശം, മൈസൂർ രാജ്യം (ഹൈദരാലി, ടിപ്പു സുൽത്താൻ).",
    monumentsEn: ["Gombe Thotti (Doll's Pavilion)", "Kalyana Mantapa (Octagonal stained-glass marriage hall)", "Golden Throne (Chinnada Simhasana)", "Public Durbar Hall"],
    monumentsMl: ["കല്യാണ മണ്ഡപം (സ്റ്റെയിൻഡ് ഗ്ലാസ് റൂഫുള്ള ഹാൾ)", "സ്വർണ്ണ സിംഹാസനം", "പബ്ലിക് ദർബാർ ഹാൾ"],
    traditionsEn: "The legendary 10-day Mysuru Dasara festival; grand elephant procession (Jumboo Savari) carrying Goddess Chamundeshwari in a 750-kg pure gold mantapa.",
    traditionsMl: "വിശ്വപ്രസിദ്ധമായ മൈസൂർ ദസറ മഹോത്സവം, 750 കിലോ സ്വർണ്ണ അമ്പാരിയിലുള്ള ജംബൂ സവാരി ഘോഷയാത്ര.",
    religiousSignificanceEn: "Chamundeshwari Temple atop Chamundi Hills is the guardian deity of the royal house; palace houses 12 ancient Hindu shrines within its courtyards.",
    religiousSignificanceMl: "ചാമുണ്ഡി മലയിലെ ചാമുണ്ഡേശ്വരി ക്ഷേത്രം, കൊട്ടാര വളപ്പിലെ 12 പുരാതന ക്ഷേത്രങ്ങൾ.",
    architectureEn: "Indo-Saracenic architectural masterpiece blending Hindu, Mughal, Rajput, and Gothic styles, designed by British architect Henry Irwin using fine granite, marble domes, and rosewood carvings.",
    architectureMl: "ഇന്തോ-സാരസെനിക് വാസ്തുവിദ്യ. ഹിന്ദു, മുഗൾ, രജപുത്ര, ഗോഥിക് ശൈലികൾ സംയോജിപ്പിച്ച് ഹെൻറി ഇർവിൻ കരിങ്കല്ലിൽ രൂപകൽപ്പന ചെയ്തത്.",
    keyEventsEn: [
      "1399 AD: Yaduraya Wodeyar ascends throne, establishing dynasty.",
      "1897: Ancient wooden palace destroyed during wedding fire.",
      "1912: Modern Amba Vilas Palace completed at cost of 4.1 million rupees.",
      "1947: Jayachamarajendra Wodeyar signs accession to the Indian Union."
    ],
    keyEventsMl: [
      "1399: വൊഡയാർ രാജവംശം സ്ഥാപിതമായി.",
      "1897: പഴയ മരക്കൊട്ടാരം തീപിടുത്തത്തിൽ തകർന്നു.",
      "1912: ഇന്നത്തെ അംബാ വിലാസ് കൊട്ടാരം പൂർത്തിയായി.",
      "1947: ഇന്ത്യൻ യൂണിയനിൽ ലയിച്ചു."
    ],
    interestingFactsEn: [
      "Illuminated every Sunday and during Dasara by exactly 97,000 incandescent light bulbs, creating a breathtaking golden glow.",
      "Second most visited historical monument in India after the Taj Mahal.",
      "The Golden Throne is assembled only once a year during Dasara celebrations."
    ],
    interestingFactsMl: [
      "എല്ലാ ഞായറാഴ്ചകളിലും ദസറ നാളുകളിലും 97,000 ബൾബുകൾ കൊണ്ട് കൊട്ടാരം പൂർണ്ണമായി പ്രകാശപൂരിതമാക്കുന്നു.",
      "താജ്മഹൽ കഴിഞ്ഞാൽ ഇന്ത്യയിൽ ഏറ്റവും കൂടുതൽ സഞ്ചാരികൾ എത്തുന്ന സ്മാരകം.",
      "750 കിലോ തൂക്കമുള്ള സ്വർണ്ണ സിംഹാസനം ദസറയ്ക്ക് മാത്രമേ പുറത്തെടുക്കൂ."
    ],
    tourismDevelopmentEn: "Crown jewel of Karnataka tourism, serving as the cultural epicenter of South Indian royal pageantry.",
    tourismDevelopmentMl: "കർണാടക ടൂറിസത്തിന്റെ അഭിമാന സ്തംഭം.",
    referencesEn: "Mysore Palace Board Archives; 'The Royal City of Mysore' (ASI)."
  },
  {
    id: "badami",
    state: "Karnataka",
    stateEn: "Karnataka",
    stateMl: "കർണാടക",
    nameEn: "Badami (Vatapi – The Rock-Cut Capital of Chalukyas)",
    nameMl: "ബദാമി (വാതാപി – ചാലൂക്യന്മാരുടെ പാറ തുരന്ന തലസ്ഥാനം)",
    image: "images/discover/history/badami.jpg",
    locationEn: "Bagalkot District, Northern Karnataka",
    locationMl: "ബാഗൽകോട്ട് ജില്ല, വടക്കൻ കർണാടക",
    originEn: "Originally named Vatapi, associated with the demon siblings Vatapi and Ilvala mentioned in the sage Agastya legend from the Mahabharata.",
    originMl: "അഗസ്ത്യ മുനിയുടെ പുരാണവുമായി ബന്ധപ്പെട്ട 'വാതാപി' എന്ന പേരിൽ നിന്നാണ് ബദാമി ഉണ്ടായത്.",
    ancientHistoryEn: "Founded in 540 AD by Pulakeshin I as the capital of the Early Chalukya dynasty, who ruled Karnataka, Maharashtra, and Andhra for two centuries.",
    ancientHistoryMl: "എ.ഡി 540-ൽ പുലകേശി ഒന്നാമൻ ചാലൂക്യ സാമ്രാജ്യത്തിന്റെ തലസ്ഥാനമായി സ്ഥാപിച്ചു.",
    dynastiesEn: "Early Chalukyas of Badami; Pallava Dynasty (brief capture in 642 AD under Narasimhavarman I); Rashtrakutas; Vijayanagara Empire.",
    dynastiesMl: "ബാദാമി ചാലൂക്യന്മാർ, പല്ലവർ, രാഷ്ട്രകൂടർ, വിജയനഗരം.",
    monumentsEn: ["Four Rock-Cut Cave Temples (dating from 6th to 8th century)", "Agastya Lake (sacred red-sandstone tank)", "Bhutanatha Temple Complex", "Badami Fort"],
    monumentsMl: ["നാല് ഗുഹാക്ഷേത്രങ്ങൾ (ആറാം നൂറ്റാണ്ട്)", "അഗസ്ത്യ തടാകം", "ഭൂതനാഥ ക്ഷേത്രം", "ബദാമി കോട്ട"],
    traditionsEn: "Ancient temple festivals along Agastya Lake; cradle of classical Karnataka temple architecture that later blossomed at Pattadakal and Aihole.",
    traditionsMl: "അഗസ്ത്യ തടാകക്കരയിലെ ഉത്സവങ്ങൾ; ദക്ഷിണേന്ത്യൻ വാസ്തുവിദ്യയുടെ ഈറ്റില്ലം.",
    religiousSignificanceEn: "Cave 1 dedicated to Shiva (18-armed Nataraja); Caves 2 & 3 to Vishnu (Trivikrama & Varaha); Cave 4 to Jain Tirthankaras (Mahavira).",
    religiousSignificanceMl: "ശൈവ, വൈഷ്ണവ, ജൈന മതങ്ങളുടെ സമന്വയം പ്രതിഫലിക്കുന്ന പുണ്യ ഗുഹകൾ.",
    architectureEn: "Rock-cut cave architecture carved out of red sandstone cliffs, featuring intricate reliefs of Nataraja displaying 81 classical Bharatanatyam dance mudras.",
    architectureMl: "ചെങ്കൽ മലകൾ തുരന്നുണ്ടാക്കിയ ഗുഹാ വാസ്തുവിദ്യ. നടരാജന്റെ 81 നൃത്ത മുദ്രകൾ കൊത്തിവെച്ച ശിൽപ്പങ്ങൾ.",
    keyEventsEn: [
      "540 AD: Pulakeshin I establishes Vatapi as royal Chalukyan capital.",
      "642: Pallava King Narasimhavarman I sacks Vatapi, adopting the title 'Vatapikondan' (Conqueror of Vatapi).",
      "1990s: Inscribed into tentative UNESCO list alongside Pattadakal and Aihole."
    ],
    keyEventsMl: [
      "540: പുലകേശി ഒന്നാമൻ വാതാപിയെ തലസ്ഥാനമാക്കി.",
      "642: പല്ലവ രാജാവ് നരസിംഹവർമ്മൻ വാതാപി ആക്രമിച്ചു കീഴടക്കി 'വാതാപികൊണ്ടാൻ' എന്ന പേര് സ്വീകരിച്ചു."
    ],
    interestingFactsEn: [
      "The 18-armed Nataraja sculpture in Cave 1 depicts 81 different combinations of classical dance postures in a single masterwork.",
      "Surrounds Agastya Lake whose waters are traditionally believed to possess miraculous skin-healing properties.",
      "Popular worldwide today among rock climbers for its steep red sandstone crags."
    ],
    interestingFactsMl: [
      "ഒന്നാം ഗുഹയിലെ 18 കൈകളുള്ള നടരാജ ശിൽപ്പത്തിൽ 81 നൃത്ത മുദ്രകൾ കാണാം.",
      "അഗസ്ത്യ തടാകത്തിലെ വെള്ളത്തിന് രോഗശമന ശേഷിയുണ്ടെന്ന് വിശ്വസിക്കപ്പെടുന്നു."
    ],
    tourismDevelopmentEn: "Key component of Karnataka's Golden Triangle of heritage (Badami-Aihole-Pattadakal).",
    tourismDevelopmentMl: "പട്ടടക്കൽ, ഐഹോൾ എന്നിവയ്ക്കൊപ്പം കർണാടകയിലെ പ്രധാന ചരിത്ര പൈതൃക കേന്ദ്രം.",
    referencesEn: "Archaeological Survey of India; 'The Chalukyan Architecture of the Kanarese Districts' (Henry Cousens)."
  },
  {
    id: "chikmagalur",
    state: "Karnataka",
    stateEn: "Karnataka",
    stateMl: "കർണാടക",
    nameEn: "Chikmagalur (The Coffee Cradle of India)",
    nameMl: "ചിക്കമംഗളൂരു (ഇന്ത്യയുടെ കോഫി നാട്)",
    image: "images/discover/history/chikmagalur.jpg",
    locationEn: "Malenadu Region, Western Ghats, Karnataka (1,090m)",
    locationMl: "മലനാട് പ്രദേശം, പശ്ചിമഘട്ടം, കർണാടക",
    originEn: "Means 'Town of the Younger Daughter' (Chikka-Magalu-Uru) in Kannada, gifted as dowry by the local chieftain Rukmangada to his younger daughter.",
    originMl: "'ഇളയ മകളുടെ നാട്' (ചിക്ക മഗളു ഊര്) എന്നാണ് കന്നഡയിൽ അർത്ഥം. രാജാവ് തന്റെ ഇളയ മകൾക്ക് സ്ത്രീധനമായി നൽകിയ പ്രദേശം.",
    ancientHistoryEn: "Cradle of the great Hoysala Empire which originated in the neighboring village of Angadi in the 11th century. Site of the legendary introduction of coffee to India by Sufi saint Baba Budan in 1670.",
    ancientHistoryMl: "ഹൊയ്സാല സാമ്രാജ്യത്തിന്റെ ജന്മദേശം. 1670-ൽ ബാബാ ബുദാൻ എന്ന സൂഫി സന്യാസി ഇന്ത്യയിൽ ആദ്യമായി കാപ്പി നട്ടുവളർത്തിയത് ഇവിടെയാണ്.",
    dynastiesEn: "Hoysala Empire; Keladi Nayakas; Kingdom of Mysore; British Coffee Planters.",
    dynastiesMl: "ഹൊയ്സാല സാമ്രാജ്യം, കേളദി നായ്ക്കന്മാർ, മൈസൂർ രാജ്യം, ബ്രിട്ടീഷ് പ്ലാന്റർമാർ.",
    monumentsEn: ["Baba Budangiri Shrine (Dattapeeta)", "Mullayanagiri (highest peak in Karnataka at 1,930m)", "Belavadi Veera Narayana Temple (Hoysala trikuta temple)", "Kalyani sacred pond"],
    monumentsMl: ["ബാബാ ബുദൻഗിരി (ദത്താത്രേയ പീഠം)", "മുള്ളയ്യനഗിരി (കർണാടകയിലെ ഏറ്റവും ഉയർന്ന കൊടുമുടി)", "ബേലവാടി വീരനാരായണ ക്ഷേത്രം"],
    traditionsEn: "Coffee cultivation and cherry-picking festivals; unique syncretic Sufi-Hindu worship at Inam Dattatreya Peetha.",
    traditionsMl: "കാപ്പിത്തോട്ടങ്ങളിലെ വിളവെടുപ്പ്, ഹിന്ദു-മുസ്ലിം സൗഹാർദ്ദത്തിന്റെ പ്രതീകമായ ബാബാ ബുദൻഗിരി തീർത്ഥാടനം.",
    religiousSignificanceEn: "Baba Budangiri is revered equally by Hindus as the seat of Sage Dattatreya and by Muslims as the shrine of Sufi saint Hazrat Dada Hayat Mir Qalandar.",
    religiousSignificanceMl: "ദത്താത്രേയ സ്വാമിയുടെയും ബാബാ ബുദാൻ എന്ന സൂഫി സന്യാസിയുടെയും പുണ്യ പീഠം.",
    architectureEn: "Exquisite Hoysala soapstone architecture at Belavadi, featuring trikuta (triple sanctum) shrines with stellate star-shaped floorplans, lathe-turned pillars, and elaborate friezes.",
    architectureMl: "ബേലവാടിയിലെ ഹൊയ്സാല ശിൽപ്പകല. സോപ്പ്സ്റ്റോണിൽ തീർത്ത നക്ഷത്രാകൃതിയിലുള്ള ക്ഷേത്ര ശ്രീകോവിലുകൾ.",
    keyEventsEn: [
      "1026 AD: Hoysala dynasty founded in Angadi village, Mudigere.",
      "1670: Baba Budan smuggles seven raw coffee beans from the port of Mocha (Yemen) strapped to his chest, planting them on the Chandradrona hills.",
      "1830s: British planters establish large-scale commercial coffee estates across Malenadu."
    ],
    keyEventsMl: [
      "1026: ഹൊയ്സാല സാമ്രാജ്യം സ്ഥാപിതമായി.",
      "1670: യെമനിലെ മോച്ച തുറമുഖത്ത് നിന്ന് ബാബാ ബുദാൻ നെഞ്ചിൽ ഒളിപ്പിച്ച് കൊണ്ടുവന്ന 7 കാപ്പി വിത്തുകൾ ഇവിടെ നട്ടു.",
      "1830-കൾ: ബ്രിട്ടീഷുകാർ വൻകിട കാപ്പിത്തോട്ടങ്ങൾ ആരംഭിച്ചു."
    ],
    interestingFactsEn: [
      "Every single coffee plant in India today traces its ancestral genetic lineage back to the seven beans smuggled by Baba Budan to Chikmagalur.",
      "Mullayanagiri is the highest point in Karnataka (1,930m), providing panoramic views of the Western Ghats.",
      "The Central Coffee Research Institute (CCRI) is headquartered here."
    ],
    interestingFactsMl: [
      "ഇന്ത്യയിൽ ഇന്ന് വളരുന്ന എല്ലാ കാപ്പിച്ചെടികളുടെയും പൂർവ്വികർ ബാബാ ബുദാൻ കൊണ്ടുവന്ന ആ 7 കാപ്പിക്കുരുക്കളാണ്!",
      "കർണാടകയിലെ ഏറ്റവും ഉയർന്ന കൊടുമുടിയായ മുള്ളയ്യനഗിരി (1,930 മീറ്റർ) ഇവിടെയാണ്."
    ],
    tourismDevelopmentEn: "A major trekking, coffee plantation homestay, and serene cloud-forest destination in the Western Ghats.",
    tourismDevelopmentMl: "കാപ്പിത്തോട്ടങ്ങളും ട്രെക്കിംഗും നിറഞ്ഞ മനോഹരമായ മലയോര വിനോദസഞ്ചാര കേന്ദ്രം.",
    referencesEn: "Coffee Board of India Archives; Mysore Gazetteer (B.L. Rice)."
  },

  // --- TAMIL NADU ---
  {
    id: "ooty",
    state: "Tamil Nadu",
    stateEn: "Tamil Nadu",
    stateMl: "തമിഴ്‌നാട്",
    nameEn: "Ooty (Udhagamandalam – Queen of Hill Stations)",
    nameMl: "ഊട്ടി (ഉദഗമണ്ഡലം – മലനിരകളുടെ റാണി)",
    image: "images/discover/history/ooty.jpg",
    locationEn: "Nilgiris District, Western Ghats, Tamil Nadu (2,240m)",
    locationMl: "നീലഗിരി ജില്ല, പശ്ചിമഘട്ടം, തമിഴ്‌നാട് (2,240 മീറ്റർ)",
    originEn: "Derived from 'Othakal-Mandu' meaning 'Village of Single Stone' in the language of the indigenous Toda pastoral community.",
    originMl: "തോഡ ആദിവാസി ഭാഷയിലെ 'ഒത്തക്കൽ മന്ദു' (ഒറ്റക്കല്ലിന്റെ ഗ്രാമം) എന്ന വാക്കിൽ നിന്നാണ് ഉദഗമണ്ഡലം ഉണ്ടായത്.",
    ancientHistoryEn: "Ancestral highland realm of the Toda, Kota, Badaga, and Kurumba tribes for thousands of years, entirely secluded from lowland wars until British arrival in the 19th century.",
    ancientHistoryMl: "തോഡ, കോട്ട, ബഡഗ ഗോത്രങ്ങൾ നൂറ്റാണ്ടുകളായി വസിച്ചിരുന്ന പ്രദേശം. പുറംലോകത്തിന് അപ്രാപ്യമായിരുന്നു.",
    dynastiesEn: "Toda Indigenous Pastoralists; Hoysalas; Wodeyars of Mysore; British East India Company & British Raj.",
    dynastiesMl: "തോഡ ഗോത്രം, ഹൊയ്സാലർ, മൈസൂർ വൊഡയാർമാർ, ബ്രിട്ടീഷ് രാജ്.",
    monumentsEn: ["Nilgiri Mountain Railway (UNESCO World Heritage Toy Train)", "Stone House (first British bungalow built 1822)", "St. Stephen's Church (1830)", "Government Botanical Garden (1848)"],
    monumentsMl: ["നീലഗിരി മൗണ്ടൻ റെയിൽവേ (യുനെസ്കോ പൈതൃക ടോയ് ട്രെയിൻ)", "സ്റ്റോൺ ഹൗസ് (1822-ൽ നിർമ്മിച്ച ആദ്യ ബംഗ്ലാവ്)", "സെന്റ് സ്റ്റീഫൻസ് ചർച്ച്", "ബൊട്ടാണിക്കൽ ഗാർഡൻ"],
    traditionsEn: "Toda sacred buffalo temple rituals and red-black poothkuli embroidery; colonial flower shows; annual Nilgiri tea festivals.",
    traditionsMl: "തോഡ ഗോത്രക്കാരുടെ കാട്ടുപോത്ത് ക്ഷേത്രാചാരങ്ങളും പരമ്പരാഗത എംബ്രോയ്ഡറിയും, വാർഷിക പുഷ്പമേളകൾ.",
    religiousSignificanceEn: "Toda sacred hills, dairy temples (Ti temples), and St. Stephen's Church built with beams salvaged from Tipu Sultan's Seringapatam palace.",
    religiousSignificanceMl: "തോഡകളുടെ വിശുദ്ധ ക്ഷേത്രങ്ങൾ, ടിപ്പു സുൽത്താന്റെ കൊട്ടാരത്തിലെ തടികൾ കൊണ്ട് നിർമ്മിച്ച സെന്റ് സ്റ്റീഫൻസ് പള്ളി.",
    architectureEn: "British Victorian and Edwardian country manor architecture, half-timbered cottages, gothic spire churches, and conical Toda barrel-vaulted huts.",
    architectureMl: "ബ്രിട്ടീഷ് വിക്ടോറിയൻ ശൈലിയിലുള്ള കോട്ടേജുകൾ, ഗോഥിക് പള്ളികൾ, തോഡകളുടെ പരമ്പരാഗത പുൽമേഞ്ഞ കുടിലുകൾ.",
    keyEventsEn: [
      "1819: John Sullivan, Collector of Coimbatore, scales the Nilgiris and discovers the temperate highland plateau.",
      "1822: Sullivan constructs 'Stone House', initiating British settlement.",
      "1870: Ooty declared summer capital of the Madras Presidency.",
      "1899–1908: Construction of the Nilgiri Mountain Railway using the ingenious Abt rack-and-pinion system.",
      "2005: Nilgiri Mountain Railway inscribed as a UNESCO World Heritage Site."
    ],
    keyEventsMl: [
      "1819: കോയമ്പത്തൂർ കളക്ടർ ജോൺ സള്ളിവൻ നീലഗിരിയിലെത്തി ബ്രിട്ടീഷ് സാന്നിധ്യത്തിന് തുടക്കമിട്ടു.",
      "1870: മദ്രാസ് പ്രസിഡൻസിയുടെ വേനൽക്കാല തലസ്ഥാനമായി ഊട്ടിയെ പ്രഖ്യാപിച്ചു.",
      "1908: നീലഗിരി മൗണ്ടൻ റെയിൽവേ പ്രവർത്തനം ആരംഭിച്ചു.",
      "2005: യുനെസ്കോ ലോക പൈതൃകമായി പ്രഖ്യാപിച്ചു."
    ],
    interestingFactsEn: [
      "The Nilgiri Mountain Railway is the steepest rack-and-pinion railway in all of Asia, climbing gradients of 1 in 12.",
      "Snooker was invented in the Ootacamund Club in 1875 by British army officer Sir Neville Chamberlain.",
      "The Botanical Garden houses a fossilized tree trunk estimated to be 20 million years old."
    ],
    interestingFactsMl: [
      "ഏഷ്യയിലെ ഏറ്റവും കുത്തനെയുള്ള റാക്ക്-ആൻഡ്-പിനിയൻ റെയിൽവേയാണ് നീലഗിരി മൗണ്ടൻ റെയിൽവേ.",
      "1875-ൽ ഊട്ടി ക്ലബ്ബിൽ വെച്ചാണ് സ്നൂക്കർ എന്ന കായിക വിനോദം ആദ്യമായി കണ്ടുപിടിച്ചത്.",
      "2 കോടി വർഷം പഴക്കമുള്ള ഫോസിൽ മരത്തടി ഊട്ടി ബൊട്ടാണിക്കൽ ഗാർഡനിൽ സംരക്ഷിച്ചിട്ടുണ്ട്."
    ],
    tourismDevelopmentEn: "South India's most celebrated colonial hill resort, famed for tea estates, eucalyptus oil, chocolate factories, and mountain vistas.",
    tourismDevelopmentMl: "ദക്ഷിണേന്ത്യയിലെ ഏറ്റവും പ്രശസ്തമായ വേനൽക്കാല മലയോര വിനോദസഞ്ചാര കേന്ദ്രം.",
    referencesEn: "Nilgiris District Gazetteer; 'The Toda of the Nilgiris' (W.H.R. Rivers); UNESCO NMR Dossier."
  },
  {
    id: "kodaikanal",
    state: "Tamil Nadu",
    stateEn: "Tamil Nadu",
    stateMl: "തമിഴ്‌നാട്",
    nameEn: "Kodaikanal (The Princess of Hill Stations)",
    nameMl: "കൊടൈക്കനാൽ (മലനിരകളുടെ രാജകുമാരി)",
    image: "images/discover/history/kodaikanal.jpg",
    locationEn: "Dindigul District, Palani Hills, Tamil Nadu (2,133m)",
    locationMl: "ദിണ്ടിഗൽ ജില്ല, പളനി മലനിരകൾ, തമിഴ്‌നാട് (2,133 മീറ്റർ)",
    originEn: "Derived from Tamil meaning 'The Gift of the Forest' (Kodai-Kanal) or 'The Forest of Creepers'.",
    originMl: "തമിഴിൽ 'വനത്തിന്റെ സമ്മാനം' (കൊടൈ-കനാൽ) എന്നാണ് അർത്ഥം.",
    ancientHistoryEn: "Mentioned in Sangam literature as part of the Kurinji mountain tracts inhabited by the Paliyans and Puliyans. Known for wild honey harvesting and ancient megalithic dolmens.",
    ancientHistoryMl: "സംഘകാല സാഹിത്യത്തിൽ കുറിച്ചി തിണൈയിൽ ഉൾപ്പെട്ട പ്രദേശം. പുരാതന ശിലായുഗ ഡോൾമെനുകൾ ഇവിടെ കാണാം.",
    dynastiesEn: "Early Pandyas; Chera-Pandya frontier; British East India Company; American Madura Mission.",
    dynastiesMl: "പാണ്ഡ്യ രാജവംശം, അമേരിക്കൻ മധുര മിഷൻ, ബ്രിട്ടീഷ് രാജ്.",
    monumentsEn: ["Kodaikanal Lake (star-shaped artificial lake built in 1863)", "Pillar Rocks (three vertical granite boulders 122m high)", "Kodaikanal Solar Observatory (established 1899)", "Coaker's Walk"],
    monumentsMl: ["നക്ഷത്രാകൃതിയിലുള്ള കൊടൈക്കനാൽ തടാകം (1863)", "പില്ലർ റോക്ക്സ് (122 മീറ്റർ ഉയരമുള്ള മൂന്ന് ഭീമൻ പാറകൾ)", "സോളാർ ഒബ്സർവേറ്ററി (1899)"],
    traditionsEn: "Neelakurinji bloom celebrations every 12 years; homemade chocolate making; eucalyptus oil extraction.",
    traditionsMl: "12 വർഷത്തിലൊരിക്കൽ പൂക്കുന്ന നീലക്കുറിഞ്ഞി വസന്തം, ഹോംമെയ്ഡ് ചോക്ലേറ്റ് നിർമ്മാണം.",
    religiousSignificanceEn: "Kurinji Andavar Temple dedicated to Lord Murugan (Lord of the Kurinji mountain tracts); historic La Salette Church (1866).",
    religiousSignificanceMl: "കുറിച്ചി നിലങ്ങളുടെ അധിപനായ മുരുകന്റെ കുറിഞ്ഞി ആണ്ടവർ ക്ഷേത്രം.",
    architectureEn: "Colonial American and British stone masonry cottages with wooden shingles, bay windows, and chimneys designed to withstand wet mountain mists.",
    architectureMl: "അമേരിക്കൻ, ബ്രിട്ടീഷ് വാസ്തുവിദ്യയിലുള്ള കൽ ബംഗ്ലാവുകൾ.",
    keyEventsEn: [
      "1845: American Christian missionaries and British bureaucrats establish Kodaikanal as a sanitary station to escape malaria in Madurai.",
      "1863: Sir Vere Henry Levinge creates the famous star-shaped 60-acre Kodaikanal Lake.",
      "1899: Madras Observatory relocates here to study solar physics, leading to the discovery of the Evershed effect in sunspots."
    ],
    keyEventsMl: [
      "1845: അമേരിക്കൻ മിഷണറിമാരും ബ്രിട്ടീഷുകാരും ചേർന്ന് കൊടൈക്കനാൽ സ്ഥാപിച്ചു.",
      "1863: സർ വെരെ ഹെൻറി ലെവിംഗെ നക്ഷത്രാകൃതിയിലുള്ള തടാകം നിർമ്മിച്ചു.",
      "1899: സൗര നിരീക്ഷണത്തിനായി കൊടൈക്കനാൽ സോളാർ ഒബ്സർവേറ്ററി സ്ഥാപിതമായി."
    ],
    interestingFactsEn: [
      "The Evershed effect, a groundbreaking discovery in astrophysics regarding radial motion in sunspots, was discovered right here at Kodaikanal Solar Observatory in 1909.",
      "One of the few hill stations in India founded primarily by Americans (missionaries) rather than British military officials.",
      "Home to the rare Kurinji flower that blankets the hills in purple-blue once every 12 years."
    ],
    interestingFactsMl: [
      "സൂര്യകളങ്കങ്ങളിലെ വാതക ചലനത്തെക്കുറിച്ചുള്ള 'എവർഷെഡ് പ്രഭാവം' 1909-ൽ കണ്ടെത്തിയത് കൊടൈക്കനാൽ ഒബ്സർവേറ്ററിയിൽ നിന്നാണ്.",
      "ബ്രിട്ടീഷുകാർക്ക് പകരം അമേരിക്കൻ മിഷണറിമാർ പ്രധാന പങ്കുവഹിച്ച ഏക ഹിൽ സ്റ്റേഷൻ."
    ],
    tourismDevelopmentEn: "Renowned as 'Princess of Hill Stations', attracting vacationers seeking cool pine forests, lakes, and misty viewpoints.",
    tourismDevelopmentMl: "പൈൻ കാടുകളും മഞ്ഞുമൂടിയ താഴ്‌വരകളും നിറഞ്ഞ പ്രശസ്ത വിനോദസഞ്ചാര കേന്ദ്രം.",
    referencesEn: "Kodaikanal Observatory Annals; 'The Palani Hills' (C.A. Barber)."
  },
  {
    id: "mahabalipuram",
    state: "Tamil Nadu",
    stateEn: "Tamil Nadu",
    stateMl: "തമിഴ്‌നാട്",
    nameEn: "Mahabalipuram (Mamallapuram – The Pallava Shore Sculpture City)",
    nameMl: "മഹാബലിപുരം (മാമല്ലപുരം)",
    image: "images/discover/history/mahabalipuram.jpg",
    locationEn: "Chengalpattu District, Coromandel Coast, Tamil Nadu",
    locationMl: "ചെങ്കൽപട്ട് ജില്ല, കോറമാണ്ടൽ തീരം, തമിഴ്‌നാട്",
    originEn: "Named in honour of the great Pallava warrior-king Narasimhavarman I, who bore the royal title 'Mamalla' (The Great Wrestler).",
    originMl: "'മാമല്ലൻ' (മഹാനായ ഗുസ്തിക്കാരൻ) എന്നറിയപ്പെട്ടിരുന്ന പല്ലവ രാജാവ് നരസിംഹവർമ്മൻ ഒന്നാമന്റെ പേരിൽ നിന്നാണ് മാമല്ലപുരം ഉണ്ടായത്.",
    ancientHistoryEn: "Thriving international seaport of the Pallava dynasty from the 3rd to 9th centuries AD. Chinese, Roman, and Southeast Asian coins unearthed here confirm its centrality on the Maritime Silk Route.",
    ancientHistoryMl: "3-ാം നൂറ്റാണ്ട് മുതൽ 9-ാം നൂറ്റാണ്ട് വരെ പല്ലവ സാമ്രാജ്യത്തിന്റെ പ്രധാന തുറമുഖ നഗരം. സമുദ്ര സിൽക്ക് റൂട്ടിലെ പ്രധാന കേന്ദ്രം.",
    dynastiesEn: "Pallava Dynasty (Mahendravarman I, Narasimhavarman I, Rajasimha); Chola Empire; Vijayanagara Empire.",
    dynastiesMl: "പല്ലവ രാജവംശം, ചോള സാമ്രാജ്യം, വിജയനഗരം.",
    monumentsEn: ["Shore Temple (built 700–728 AD overlooking the Bay of Bengal)", "Pancha Rathas (Five monolithic rock-cut chariots)", "Descent of the Ganges (Arjuna's Penance - world's largest open-air rock relief)", "Krishna's Butterball"],
    monumentsMl: ["ഷോർ ടെമ്പിൾ (കടൽത്തീരത്തെ പുരാതന ക്ഷേത്രം)", "പഞ്ച രഥങ്ങൾ (ഒറ്റക്കല്ലിൽ തീർത്ത അഞ്ച് രഥങ്ങൾ)", "ഗംഗാവതരണം (അർജ്ജുനന്റെ തപസ്സ് – ലോകത്തിലെ ഏറ്റവും വലിയ പാറ കൊത്തുപണി)", "കൃഷ്ണൻസ് ബട്ടർബോൾ"],
    traditionsEn: "Mamallapuram Dance Festival (celebrating Bharatanatyam, Kathakali, and Kuchipudi against rock sculptures); master stone carving tradition preserved by traditional sculptors.",
    traditionsMl: "മാമല്ലപുരം നൃത്തോത്സവം, തലമുറകളായി കൈമാറിവരുന്ന കല്ലു കൊത്തുപണി പാരമ്പര്യം.",
    religiousSignificanceEn: "Shore Temple houses sanctuaries dedicated to both Lord Shiva and Lord Vishnu (Ananthasayana); mythological site where Arjuna performed intense austerities to obtain the Pasupatastra.",
    religiousSignificanceMl: "ശിവനും വിഷ്ണുവിനും ഒരേപോലെ സമർപ്പിച്ചിട്ടുള്ള ക്ഷേത്രങ്ങൾ. അർജ്ജുനൻ പാശുപതാസ്ത്രം നേടാൻ തപസ്സുചെയ്ത പുണ്യഭൂമി.",
    architectureEn: "Pioneered the transition in South Indian architecture from soft rock-cut cave shrines to hard granite structural temple building. Defined early Dravidian architecture.",
    architectureMl: "ദക്ഷിണേന്ത്യൻ വാസ്തുവിദ്യയുടെ വിപ്ലവം. പാറ തുരന്നുള്ള ഗുഹകളിൽ നിന്ന് കരിങ്കല്ലിൽ കൊത്തിയുണ്ടാക്കിയ ക്ഷേത്രങ്ങളിലേക്കുള്ള മാറ്റം.",
    keyEventsEn: [
      "7th Century AD: Narasimhavarman I commissions monolithic Rathas and bas-reliefs.",
      "700–728 AD: King Narasimhavarman II (Rajasimha) constructs the Shore Temple.",
      "1984: Inscribed as a UNESCO World Heritage Site.",
      "2004: The Indian Ocean Tsunami briefly recedes, exposing underwater remnants of ancient submerged temples before rushing ashore."
    ],
    keyEventsMl: [
      "7-ാം നൂറ്റാണ്ട്: നരസിംഹവർമ്മൻ ഒന്നാമൻ ഒറ്റക്കൽ രഥങ്ങളും ശിൽപ്പങ്ങളും നിർമ്മിച്ചു.",
      "1984: യുനെസ്കോ ലോക പൈതൃക പട്ടികയിൽ ഉൾപ്പെടുത്തി.",
      "2004: സുനാമി തിരമാലകൾ പിൻവാങ്ങിയപ്പോൾ കടലിനടിയിൽ മറഞ്ഞു കിടന്നിരുന്ന പുരാതന ക്ഷേത്ര അവശിഷ്ടങ്ങൾ പുറത്തുകണ്ടു."
    ],
    interestingFactsEn: [
      "The 'Descent of the Ganges' is carved across two giant granite boulders measuring 27 meters long by 9 meters high, featuring over 100 figures of gods, humans, animals, and flying celestial beings.",
      "Krishna's Butterball is a 250-ton giant granite boulder perched precariously on a 45-degree smooth rock slope; seven elephants failed to budge it in 1908.",
      "European mariners named Mahabalipuram the 'Seven Pagodas' believing six other grand pagodas were swallowed by the sea."
    ],
    interestingFactsMl: [
      "ലോകത്തിലെ ഏറ്റവും വലിയ ഓപ്പൺ എയർ കരിങ്കൽ ശിൽപ്പമാണ് 'ഗംഗാവതരണം'.",
      "250 ടൺ ഭാരമുള്ള 'കൃഷ്ണൻസ് ബട്ടർബോൾ' എന്ന ഉരുണ്ട പാറ ഒരു ചെരിവിൽ മറിഞ്ഞുവീഴാതെ അത്ഭുതകരമായി നിൽക്കുന്നു. 1908-ൽ 7 ആനകളെ ഉപയോഗിച്ച് തള്ളിയിടാൻ നോക്കിയിട്ടും അനങ്ങിയില്ല!",
      "കടൽ വിഴുങ്ങിയ 7 പഗോഡകൾ ഇവിടെ ഉണ്ടായിരുന്നതായി വിശ്വസിക്കപ്പെടുന്നു."
    ],
    tourismDevelopmentEn: "Globally celebrated UNESCO World Heritage beach monument hub, attracting cultural historians, stone sculptors, and tourists.",
    tourismDevelopmentMl: "യുനെസ്കോ ലോക പൈതൃക കേന്ദ്രം; ശിൽപ്പകലയുടെ വിസ്മയം.",
    referencesEn: "Archaeological Survey of India; UNESCO World Heritage Records; 'Pallava Architecture' (A.H. Longhurst)."
  },
  {
    id: "madurai",
    state: "Tamil Nadu",
    stateEn: "Tamil Nadu",
    stateMl: "തമിഴ്‌നാട്",
    nameEn: "Madurai (The Athens of the East / Temple City)",
    nameMl: "മധുര (കിഴക്കിന്റെ ഏഥൻസ് / ക്ഷേത്ര നഗരം)",
    image: "images/discover/history/madurai.jpg",
    locationEn: "Madurai District, Banks of Vaigai River, Tamil Nadu",
    locationMl: "മധുര ജില്ല, വൈഗ നദീതീരം, തമിഴ്‌നാട്",
    originEn: "Derived from 'Madhuram' (sweetness), originating from the legend that drops of divine nectar fell from Lord Shiva's hair to bless the newly consecrated city.",
    originMl: "'മധുരം' എന്ന സംസ്കൃത പദത്തിൽ നിന്നാണ് പേര് വന്നത്. ശിവന്റെ ജടയിൽ നിന്ന് അമൃത് വീണ് അനുഗ്രഹീതമായ നഗരമെന്ന് ഐതിഹ്യം.",
    ancientHistoryEn: "One of the oldest continuously inhabited cities on Earth, with recorded history exceeding 2,500 years. Famed seat of the Tamil Sangam academies where classical Tamil literature was composed, evaluated, and compiled.",
    ancientHistoryMl: "2,500 വർഷത്തിലധികം തുടർച്ചയായ ചരിത്രമുള്ള ലോകത്തിലെ ഏറ്റവും പുരാതന നഗരങ്ങളിൽ ഒന്ന്. സംഘകാല സാഹിത്യം വികസിച്ച പവിത്രഭൂമി.",
    dynastiesEn: "Early Pandyas; Chola Empire (10th–13th century); Later Pandyas; Madurai Sultanate (1335–1378); Vijayanagara Empire; Madurai Nayakas (Thirumalai Nayak); British Raj.",
    dynastiesMl: "പാണ്ഡ്യ സാമ്രാജ്യം, ചോളർ, മധുര സുൽത്താനേറ്റ്, വിജയനഗരം, മധുര നായ്ക്കന്മാർ (തിരുമല നായ്ക്കൻ), ബ്രിട്ടീഷ് രാജ്.",
    monumentsEn: ["Meenakshi Amman Temple (14 soaring gopurams reaching 52m)", "Thirumalai Nayakkar Mahal (17th-century palace with 82ft pillars)", "Gandhi Memorial Museum", "Koodal Azhagar Temple"],
    monumentsMl: ["മീനാക്ഷി അമ്മൻ ക്ഷേത്രം (52 മീറ്റർ ഉയരമുള്ള 14 കൂറ്റൻ ഗോപുരങ്ങൾ)", "തിരുമല നായ്ക്കർ മഹൽ", "ഗാന്ധി മെമ്മോറിയൽ മ്യൂസിയം"],
    traditionsEn: "Chithirai Festival (legendary wedding of Goddess Meenakshi and Lord Sundareswarar); Jallikattu bull-taming during Pongal; jasmine (Madurai Malli) flower trade.",
    traditionsMl: "ചിത്തിര മഹോത്സവം (മീനാക്ഷി-സുന്ദരേശ്വര തിരുക്കല്യാണം), പൊങ്കൽ നാളുകളിലെ ജല്ലിക്കട്ട്, മധുര മല്ലിപ്പൂ വിപണി.",
    religiousSignificanceEn: "One of the greatest pilgrimage centers of Hinduism; Meenakshi Amman represents female divine power (Shakti) holding spiritual sovereignty over the city.",
    religiousSignificanceMl: "ശക്തി സ്വരൂപിണിയായ മീനാക്ഷി അമ്മന്റെ ആസ്ഥാനം. ഹൈന്ദവ ഭക്തിപ്രസ്ഥാനത്തിന്റെ പ്രധാന കേന്ദ്രം.",
    architectureEn: "Peak Dravidian architecture built to an urban lotus plan centered on the temple. The Meenakshi Temple complex houses the Hall of 1,000 Pillars (actually 985 exquisitely carved pillars) and 33,000 sculptures.",
    architectureMl: "താമരപ്പൂവിന്റെ ആകൃതിയിൽ നഗരാസൂത്രണം ചെയ്ത ദ്രാവിഡ വാസ്തുവിദ്യ. 985 കൊത്തുപണികളോടുകൂടിയ തൂണുകളുള്ള ആയിരംകാൽ മണ്ഡപം.",
    keyEventsEn: [
      "3rd Century BC: Greek ambassador Megasthenes visits and records the wealth of the Pandyan kingdom.",
      "14th Century: Malik Kafur raids and plunders the temple wealth.",
      "1623–1659: King Thirumalai Nayak reconstructs the temple to its current colossal splendour.",
      "1921: Mahatma Gandhi discards his formal attire in Madurai to wear only the humble loincloth for the rest of his life."
    ],
    keyEventsMl: [
      "ബി.സി മൂന്നാം നൂറ്റാണ്ട്: മെഗസ്തനീസ് മധുര സന്ദർശിച്ചു കുറിപ്പുകൾ എഴുതി.",
      "14-ാം നൂറ്റാണ്ട്: മാലിക് കാഫൂർ നഗരം കൊള്ളയടിച്ചു.",
      "1623–1659: തിരുമല നായ്ക്കർ ഇന്നത്തെ രീതിയിൽ ക്ഷേത്രവും കൊട്ടാരവും പുനർനിർമ്മിച്ചു.",
      "1921: മഹാത്മാഗാന്ധി മധുരയിൽ വെച്ച് തന്റെ മേൽവസ്ത്രങ്ങൾ ഉപേക്ഷിച്ച് സാധാരണ ഖദർ മുണ്ട് മാത്രമുടുക്കാൻ തീരുമാനിച്ചു."
    ],
    interestingFactsEn: [
      "Referred to by ancient Roman and Greek merchants as 'The Athens of the East' due to its bustling night markets and classical culture.",
      "Known in Tamil as 'Thoonga Nagaram' (The City That Never Sleeps) because markets and eateries operate 24 hours a day.",
      "Every single pillar in the Hall of Thousand Pillars is carved from solid granite, with no two pillars bearing the same sculpture."
    ],
    interestingFactsMl: [
      "രാത്രിയിലും സജീവമായ കച്ചവടങ്ങൾ ഉള്ളതിനാൽ 'തൂങ്കാ നഗരം' (ഉറങ്ങാത്ത നഗരം) എന്ന് അറിയപ്പെടുന്നു.",
      "ആയിരംകാൽ മണ്ഡപത്തിലെ 985 തൂണുകളിൽ ഒന്നുപോലും മറ്റൊന്നിന് സമാനമല്ല!",
      "ഗാന്ധിജി തന്റെ വസ്ത്രധാരണം മാറ്റി ഒറ്റമുണ്ട് മാത്രമുടുക്കാൻ തുടങ്ങിയത് മധുരയിൽ വെച്ചാണ്."
    ],
    tourismDevelopmentEn: "Tamil Nadu's premier cultural tourism epicenter, welcoming over 5 million pilgrims and travelers each year.",
    tourismDevelopmentMl: "തമിഴ് സംസ്കാരത്തിന്റെയും ഭക്തിയുടെയും പ്രധാന വിനോദസഞ്ചാര കേന്ദ്രം.",
    referencesEn: "Madurai Meenakshi Sundareswarar Temple Records; Megasthenes' 'Indica'; Tamil Sangam Literature."
  },
  {
    id: "thanjavur",
    state: "Tamil Nadu",
    stateEn: "Tamil Nadu",
    stateMl: "തമിഴ്‌നാട്",
    nameEn: "Thanjavur (Tanjore – The Imperial Capital of the Cholas)",
    nameMl: "തഞ്ചാവൂർ (ചോള സാമ്രാജ്യത്തിന്റെ തലസ്ഥാനം)",
    image: "images/discover/history/thanjavur.jpg",
    locationEn: "Cauvery Delta Region, Central Tamil Nadu",
    locationMl: "കാവേരി ഡെൽറ്റ, മധ്യ തമിഴ്‌നാട്",
    originEn: "Named after the mythological demon Tanjan-Asuran who was vanquished by Lord Vishnu; Tanjan pleaded that the holy town be named after him.",
    originMl: "വിഷ്ണു വധിച്ച 'തഞ്ചൻ' എന്ന അസുരന്റെ പേരിൽ നിന്നാണ് തഞ്ചാവൂർ ഉണ്ടായത്.",
    ancientHistoryEn: "Rose to imperial zenith under Raja Raja Chola I (985–1014 AD) as the supreme capital of the Chola Empire, which conquered South India, Sri Lanka, and sent naval fleets to Sumatra, Malaya, and the Maldives.",
    ancientHistoryMl: "രാജരാജ ചോളൻ ഒന്നാമന്റെ ഭരണകാലത്ത് ലോകം ഭയക്കുന്ന ചോള സാമ്രാജ്യത്തിന്റെ തലസ്ഥാനമായി മാറി. ശ്രീലങ്ക, മലേഷ്യ, ഇന്തോനേഷ്യ വരെ വ്യാപിച്ച ചോള നാവികസേനയുടെ കേന്ദ്രം.",
    dynastiesEn: "Mutharayar Dynasty; Medieval Cholas (Raja Raja I, Rajendra I); Later Pandyas; Vijayanagara Empire; Thanjavur Nayakas; Thanjavur Marathas (Serfoji II); British Raj.",
    dynastiesMl: "ചോള സാമ്രാജ്യം, പാണ്ഡ്യർ, വിജയനഗരം, തഞ്ചാവൂർ നായ്ക്കന്മാർ, മറാഠർ (സെർഫോജി രണ്ടാമൻ).",
    monumentsEn: ["Brihadisvara Temple (The Big Temple / Peruvudaiyar Kovil, completed 1010 AD)", "Thanjavur Maratha Palace", "Saraswathi Mahal Library (one of Asia's oldest medieval libraries)", "Schwartz Church (1779)"],
    monumentsMl: ["ബൃഹദീശ്വര ക്ഷേത്രം (1010-ൽ പൂർത്തിയായ തഞ്ചാവൂർ പെരിയ കോവിൽ)", "തഞ്ചാവൂർ മറാഠ കൊട്ടാരം", "സരസ്വതി മഹൽ ലൈബ്രറി (ഏഷ്യയിലെ ഏറ്റവും പുരാതന ലൈബ്രറികളിൽ ഒന്ന്)"],
    traditionsEn: "Thanjavur Painting (featuring gold foil leafing and embedded semi-precious stones); Thanjavur Thalaiyatti Bommai (bobblehead dancing dolls); Carnatic classical music festivals honoring the musical Trinity.",
    traditionsMl: "തഞ്ചാവൂർ പെയിന്റിംഗ് (സ്വർണ്ണത്തകിടുകൾ പതിപ്പിച്ച ചിത്രങ്ങൾ), തഞ്ചാവൂർ തലയാട്ടി പാവകൾ, കർണാടക സംഗീത കച്ചേരികൾ.",
    religiousSignificanceEn: "The Brihadisvara Temple, dedicated to Lord Shiva, is one of the most sacred and architecturally audacious Shaivite temples on planet Earth.",
    religiousSignificanceMl: "ശിവന് സമർപ്പിച്ചിട്ടുള്ള ബൃഹദീശ്വര ക്ഷേത്രം. യുനെസ്കോയുടെ 'ഗ്രേറ്റ് ലിവിംഗ് ചോള ടെമ്പിൾസ്' പട്ടികയിൽ പ്രധാനം.",
    architectureEn: "Apex of Dravidian granite architecture. The Vimana (temple tower) rises 66 meters (216 ft) high, capped by an extraordinary single carved granite dome (Kumbam) weighing 80 tons, elevated atop the tower without modern machinery.",
    architectureMl: "ശുദ്ധമായ കരിങ്കല്ലിൽ തീർത്ത ദ്രാവിഡ വാസ്തുവിദ്യാ വിസ്മയം. 66 മീറ്റർ ഉയരമുള്ള ഗോപുരത്തിന്റെ മുകളിൽ 80 ടൺ ഭാരമുള്ള ഒറ്റക്കൽ താഴികക്കുടം (കുംഭം) സ്ഥാപിച്ചിരിക്കുന്നു.",
    keyEventsEn: [
      "1010 AD: Raja Raja Chola I consecrates the Brihadisvara Temple to mark 25 years of his reign.",
      "1532: Thanjavur Nayakas gain independence following the fall of Vijayanagara.",
      "1674: Maratha general Venkoji captures Thanjavur, founding the Maratha principality.",
      "1987: Brihadisvara Temple inscribed as a UNESCO World Heritage Site."
    ],
    keyEventsMl: [
      "1010: രാജരാജ ചോളൻ ബൃഹദീശ്വര ക്ഷേത്രത്തിന്റെ പ്രതിഷ്ഠ പൂർത്തിയാക്കി.",
      "1674: മറാഠ ഭരണാധികാരി വെങ്കോജി തഞ്ചാവൂർ പിടിച്ചെടുത്തു.",
      "1987: യുനെസ്കോ ലോക പൈതൃക കേന്ദ്രമായി പ്രഖ്യാപിച്ചു."
    ],
    interestingFactsEn: [
      "The entire Brihadisvara Temple is constructed from over 130,000 tons of granite, in a flat river delta region where no granite quarries exist for over 60 kilometers.",
      "To place the 80-ton granite capstone on top of the 66-meter Vimana, Chola engineers constructed a massive 6-kilometer-long inclined earthen ramp using elephants and wooden rollers.",
      "The massive monolithic Nandi statue at the entrance weighs 20 tons and is carved from a single boulder."
    ],
    interestingFactsMl: [
      "60 കിലോമീറ്റർ ചുറ്റളവിൽ കരിങ്കൽ ക്വാറികൾ ഇല്ലാത്ത കാവേരി തീരത്ത് 130,000 ടൺ കരിങ്കല്ല് കൊണ്ടുവന്നാണ് ഈ ക്ഷേത്രം പണിതത്!",
      "ഗോപുരത്തിന്റെ മുകളിൽ 80 ടൺ ഭാരമുള്ള കല്ല് എത്തിക്കാൻ 6 കിലോമീറ്റർ നീളമുള്ള ചരിഞ്ഞ മൺപാതയുണ്ടാക്കി ആനകളെ ഉപയോഗിച്ചാണ് തള്ളി കയറ്റിയത്.",
      "പ്രവേശന കവാടത്തിലെ ഒറ്റക്കല്ലിൽ തീർത്ത നന്ദി പ്രതിമയ്ക്ക് 20 ടൺ ഭാരമുണ്ട്."
    ],
    tourismDevelopmentEn: "World Heritage anchor for global historians, architects, and spiritual pilgrims exploring South Indian temple arts.",
    tourismDevelopmentMl: "യുനെസ്കോ ലോക പൈതൃക കേന്ദ്രം; ഇന്ത്യൻ വാസ്തുവിദ്യയുടെ വിസ്മയം.",
    referencesEn: "ASI Inscriptions of Raja Raja Chola; UNESCO World Heritage Records; Nilakanta Sastri's 'The Colas'."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = historyPlaces;
}
