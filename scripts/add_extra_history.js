const fs = require('fs');
const path = require('path');

const newPlaces = [
  {
    id: "qutub-minar",
    state: "Delhi",
    stateEn: "Delhi",
    stateMl: "ഡൽഹി",
    nameEn: "Qutub Minar (Victory Minaret of Delhi)",
    nameMl: "ഖുതുബ് മിനാർ (ഡൽഹി)",
    image: "images/discover/history/qutub-minar.jpg",
    locationEn: "Mehrauli, Southwest Delhi",
    locationMl: "മെഹ്റോളി, സൗത്ത് വെസ്റ്റ് ഡൽഹി",
    originEn: "Commissioned in 1199 CE by Qutb ud-Din Aibak, founder of the Delhi Sultanate, to mark the victory of Islam and serve as a minaret for calls to prayer at Quwwat-ul-Islam Mosque.",
    originMl: "1199-ൽ ഡൽഹി സുൽത്താനേറ്റിന്റെ സ്ഥാപകനായ ഖുതുബ് ഉദ്-ദിൻ ഐബക്ക് തുടങ്ങിയതാണ് 72.5 മീറ്റർ ഉയരമുള്ള ഈ ഐതിഹാസിക മിനാരം.",
    ancientHistoryEn: "Built over the citadel of Lal Kot established by the Tomara Rajputs and Chauhan rulers (Prithviraj Chauhan's Qila Rai Pithora). Expanded by Shams ud-Din Iltutmish (adding three storeys) and restored by Firoz Shah Tughlaq in 1368 after lightning damaged the top.",
    ancientHistoryMl: "തോമര രജപുത്രരും പൃഥ്വിരാജ് ചൗഹാനും ഭരിച്ചിരുന്ന ലാൽ കോട്ട് കോട്ടയുടെ അവശിഷ്ടങ്ങൾക്ക് മുകളിലാണ് സമുച്ചയം നിർമ്മിച്ചത്.",
    dynastiesEn: "Mamluk (Slave) Dynasty, Khalji Dynasty, Tughlaq Dynasty, British Raj.",
    dynastiesMl: "മാംലൂക്ക് (അടിമ) രാജവംശം, ഖിൽജി, തുഗ്ലക്ക്, ബ്രിട്ടീഷ് രാജ്.",
    monumentsEn: "72.5m Qutub Minar (UNESCO World Heritage), Quwwat-ul-Islam Mosque, 4th-century Gupta Iron Pillar of Chandragupta II (rust-resistant wonder), Alai Darwaza, Tomb of Iltutmish.",
    monumentsMl: "ഖുതുബ് മിനാർ, കുവ്വത്തുൽ ഇസ്ലാം മസ്ജിദ്, 1600 വർഷം പഴക്കമുള്ള ഇരുമ്പ് സ്തംഭം, അലായ് ദർവാസ.",
    traditionsEn: "Sufi heritage of Mehrauli and Hazrat Qutbuddin Bakhtiyar Kaki; annual Phool Walon Ki Sair festival celebrating communal harmony.",
    traditionsMl: "മെഹ്റോളിയിലെ സൂഫി പാരമ്പര്യം, ഫൂൽ വാലോൻ കി സൈർ സാമുദായിക സൗഹാർദ്ദ ഉത്സവം.",
    religiousSignificanceEn: "Houses one of the earliest surviving mosques in the Indian subcontinent along with ancient sacred Hindu-Jain architectural pillars.",
    religiousSignificanceMl: "ഇന്ത്യൻ ഉപഭൂഖണ്ഡത്തിലെ ഏറ്റവും പുരാതനമായ മുസ്ലിം പള്ളികളിലൊന്നും ഹൈന്ദവ-ജൈന കൊത്തുപണികളും ഉള്ള സ്ഥലം.",
    architectureEn: "Fluted red and buff sandstone minaret tapering from 14.3m base to 2.7m top, adorned with intricate geometric lattice and Arabic calligraphy; Indo-Islamic architectural prototype.",
    architectureMl: "ചുവന്ന മണൽക്കല്ലിൽ ഇൻഡോ-ഇസ്ലാമിക് വാസ്തുശൈലിയിൽ നിർമ്മിച്ച വിസ്മയം.",
    keyEventsEn: [
      "1199 CE: Foundation laid by Qutb ud-Din Aibak.",
      "1220 CE: Iltutmish added three storeys.",
      "1368 CE: Lightning struck; Firoz Shah Tughlaq replaced top storey with two white marble-faced storeys.",
      "1993 CE: Inscribed as a UNESCO World Heritage Site."
    ],
    keyEventsMl: [
      "1199: ഖുതുബ് ഉദ്-ദിൻ ഐബക്ക് നിർമ്മാണം ആരംഭിച്ചു.",
      "1220: ഇൽതുത്മിഷ് മൂന്ന് നിലകൾ കൂട്ടിച്ചേർത്തു.",
      "1368: മിന്നലേറ്റ ഗോപുരം ഫിറോസ് ഷാ തുഗ്ലക്ക് പുനർനിർമ്മിച്ചു.",
      "1993: യുനെസ്കോ ലോക പൈതൃക പദവി."
    ],
    interestingFactsEn: [
      "World's tallest brick minaret standing at 72.5 metres with 379 spiral steps.",
      "The 7-metre Iron Pillar in the courtyard has stood for over 1,600 years without rusting.",
      "Alauddin Khalji began the ambitious Alai Minar intended to be twice the height, but it remained unfinished."
    ],
    interestingFactsMl: [
      "ലോകത്തിലെ ഏറ്റവും ഉയരമുള്ള ഇഷ്ടിക മിനാരം (72.5 മീറ്റർ, 379 പടവുകൾ).",
      "മുറ്റത്തുള്ള 7 മീറ്റർ ഉയരമുള്ള ഇരുമ്പ് തൂൺ 1600 വർഷമായി തുരുമ്പെടുക്കാതെ നിൽക്കുന്നു.",
      "അലാവുദ്ദീൻ ഖിൽജി ഇതിലും ഇരട്ടി വലിപ്പത്തിൽ അലായ് മിനാർ നിർമ്മിക്കാൻ തുടങ്ങി."
    ],
    tourismDevelopmentEn: "Developed with illuminated night walks, lush landscaped gardens, ASI conservation museum, and Delhi Metro connectivity (Qutub Minar Station).",
    tourismDevelopmentMl: "എ.എസ്.ഐ നൈറ്റ് ഇല്യൂമിനേഷൻ ടൂറിസവും ഡൽഹി മെട്രോ കണക്റ്റിവിറ്റിയും.",
    referencesEn: "Archaeological Survey of India (ASI); Percy Brown, Indian Architecture; UNESCO World Heritage Centre."
  },
  {
    id: "ajanta-caves",
    state: "Other Famous Destinations",
    stateEn: "Other Famous Destinations (Maharashtra)",
    stateMl: "മറ്റ് ചരിത്ര കേന്ദ്രങ്ങൾ (മഹാരാഷ്ട്ര)",
    nameEn: "Ajanta Caves (Buddhist Rock-Cut Masterpiece)",
    nameMl: "അജന്ത ഗുഹകൾ (മഹാരാഷ്ട്ര)",
    image: "images/discover/history/ajanta-caves.jpg",
    locationEn: "Waghur River Gorge, Chhatrapati Sambhaji Nagar, Maharashtra",
    locationMl: "വാഘൂർ നദീതീരം, ഛത്രപതി സംഭാജിനഗർ, മഹാരാഷ്ട്ര",
    originEn: "Excavated from a horse-shoe shaped basalt cliff in two distinct phases between 2nd century BCE and 480 CE under the patronages of the Satavahana and Vakataka dynasties.",
    originMl: "ബി.സി 2-ാം നൂറ്റാണ്ടു മുതൽ എ.ഡി 5-ാം നൂറ്റാണ്ട് വരെയുള്ള കാലഘട്ടത്തിൽ ശിലകളിൽ കൊത്തിയെടുത്ത 30 ബുദ്ധ ഗുഹകൾ.",
    ancientHistoryEn: "The caves served as a monsoon retreat (vassa) for Buddhist monks and traders traversing ancient Deccan Silk Route passes. They were accidentally rediscovered in April 1819 by British officer Captain John Smith during a tiger hunt.",
    ancientHistoryMl: "മൺസൂൺ കാലത്ത് ബുദ്ധ സന്യാസിമാരുടെ ആശ്രമമായിരുന്ന ഗുഹകൾ 1819-ൽ ജോൺ സ്മിത്ത് എന്ന ബ്രിട്ടീഷ് ഉദ്യോഗസ്ഥൻ യാദൃശ്ചികമായി കണ്ടെത്തി.",
    dynastiesEn: "Satavahana Dynasty, Vakataka Empire (Emperor Harishena era).",
    dynastiesMl: "ശതവാഹന രാജവംശം, വാകാടക സാമ്രാജ്യം (ഹരിഷേണ ചക്രവർത്തി).",
    monumentsEn: "30 rock-cut Buddhist caves: Chaitya Grihas (worship halls with stupas) and Viharas (monasteries), famous Padmapani and Vajrapani Bodhisattva frescoes, Cave 26 reclining Buddha.",
    monumentsMl: "30 ഗുഹകൾ, പത്മപാണി-വജ്രപാണി ബോധിസത്വ ചുമർചിത്രങ്ങൾ, ഗുഹ 26-ലെ പരിനിർവാണ ബുദ്ധ പ്രതിമ.",
    traditionsEn: "Theravada (Hinayana) and Mahayana Buddhist spiritual traditions, Jataka tale moral narratives depicting Buddha's previous incarnations.",
    traditionsMl: "ഥേരവാദ, മഹായാന ബുദ്ധ പാരമ്പര്യങ്ങളും ജാതകകഥകളും.",
    religiousSignificanceEn: "Universally acknowledged as the crowning pinnacle of classical Indian Buddhist religious and mural painting art.",
    religiousSignificanceMl: "ഇന്ത്യൻ ക്ലാസിക്കൽ ബുദ്ധമത കലയുടെയും ചുമർചിത്ര കലയുടെയും പരമോന്നത കേന്ദ്രം.",
    architectureEn: "Solid basalt cliff excavation showcasing dry fresco mural techniques using vegetable and mineral pigments, pillared colonnades, and barrel-vaulted rock ceilings.",
    architectureMl: "ബസാൾട്ട് പാറ തുരന്നുണ്ടാക്കിയ പില്ലറുകളും വിസ്മയകരമായ ചുമർചിത്രങ്ങളും.",
    keyEventsEn: [
      "2nd Century BCE: Phase 1 Satavahana caves carved.",
      "5th Century CE: Golden Age under Vakataka Emperor Harishena.",
      "1819 CE: Rediscovered by British Captain John Smith.",
      "1983 CE: Inscribed as one of India's first UNESCO World Heritage Sites."
    ],
    keyEventsMl: [
      "ബി.സി 2-ാം നൂറ്റാണ്ട്: ആദ്യഘട്ട ശതവാഹന ഗുഹകൾ.",
      "എ.ഡി 5-ാം നൂറ്റാണ്ട്: ഹരിഷേണന്റെ കാലത്തെ സുവർണ്ണ കാലം.",
      "1819: ക്യാപ്റ്റൻ ജോൺ സ്മിത്ത് കണ്ടെത്തി.",
      "1983: യുനെസ്കോ ലോക പൈതൃക പദവി."
    ],
    interestingFactsEn: [
      "The frescoes have survived over 1,500 years in darkness, retaining their luminous natural mineral glow.",
      "Cave 1's Padmapani Bodhisattva holds a blue lotus with an expression of divine compassion studied by art historians worldwide.",
      "The horseshoe cliff alignment captures natural solar illumination at specific solstices."
    ],
    interestingFactsMl: [
      "1500 വർഷത്തിലേറെ ഇരുട്ടിൽ കിടന്നിട്ടും ഈ പ്രകൃതിദത്ത ചിത്രങ്ങളുടെ നിറം മങ്ങിയിട്ടില്ല.",
      "പത്മപാണി ബോധിസത്വന്റെ കയ്യിലെ നീലത്താമര ലോകപ്രശസ്തമാണ്.",
      "പ്രത്യേക സൂര്യപ്രകാശം ലഭിക്കുന്ന രീതിയിലാണ് ഗുഹകളുടെ നിർമ്മാണം."
    ],
    tourismDevelopmentEn: "Protected UNESCO site featuring battery-operated eco-buses from T-Junction, climate-controlled visitor interpretation centre, and international tourist amenities.",
    tourismDevelopmentMl: "പരിസ്ഥിതി സൗഹൃദ ഇലക്ട്രിക് ബസുകളും ആധുനിക സന്ദർശക കേന്ദ്രവും.",
    referencesEn: "Archaeological Survey of India (ASI); Walter M. Spink, Ajanta: History and Development; UNESCO World Heritage."
  },
  {
    id: "ellora-caves",
    state: "Other Famous Destinations",
    stateEn: "Other Famous Destinations (Maharashtra)",
    stateMl: "മറ്റ് ചരിത്ര കേന്ദ്രങ്ങൾ (മഹാരാഷ്ട്ര)",
    nameEn: "Ellora Caves & Kailasa Temple",
    nameMl: "എല്ലോറ ഗുഹകൾ & കൈലാസ ക്ഷേത്രം (മഹാരാഷ്ട്ര)",
    image: "images/discover/history/ellora-caves.jpg",
    locationEn: "Verul, Chhatrapati Sambhaji Nagar, Maharashtra",
    locationMl: "വെരൂൾ, ഛത്രപതി സംഭാജിനഗർ, മഹാരാഷ്ട്ര",
    originEn: "Monumental cave complex excavated between the 6th and 10th centuries CE, celebrating religious harmony with Hindu, Buddhist, and Jain monuments coexisting along a 2-kilometer basalt escarpment.",
    originMl: "6 മുതൽ 10 വരെ നൂറ്റാണ്ടുകളിൽ ഹൈന്ദവ, ബുദ്ധ, ജൈന മത സൗഹാർദ്ദത്തിന്റെ പ്രതീകമായി പാറ തുരന്ന് നിർമ്മിച്ച 34 ഗുഹകൾ.",
    ancientHistoryEn: "Built under the royal patronage of the Rashtrakuta Dynasty (notably King Krishna I, who commissioned Cave 16 Kailasa Temple in 756–773 CE) and earlier Yadavas and Kalachuris.",
    ancientHistoryMl: "രാഷ്ട്രകൂട രാജാവായ കൃഷ്ണൻ ഒന്നാമനാണ് (എ.ഡി 756-773) ലോകവിസ്മയമായ കൈലാസ ക്ഷേത്രം ഒറ്റപ്പാറയിൽ കൊത്തിയുണ്ടാക്കിയത്.",
    dynastiesEn: "Rashtrakuta Dynasty, Yadavas of Devagiri, Kalachuri Dynasty.",
    dynastiesMl: "രാഷ്ട്രകൂട രാജവംശം, ദേവഗിരി യാദവർ, കലാചൂരികൾ.",
    monumentsEn: "Cave 16 Kailasa Temple (world's largest monolithic rock excavation carved top-to-bottom without scaffolding), Buddhist Caves (Cave 10 Carpenter's Cave Vishvakarma), Jain Caves (Indra Sabha Cave 32).",
    monumentsMl: "കൈലാസ ക്ഷേത്രം (ഗുഹ 16 - ലോകത്തിലെ ഏറ്റവും വലിയ ഒറ്റക്കൽ ക്ഷേത്രം), വിശ്വകർമ്മ ഗുഹ, ഇന്ദ്രസഭ ജൈന ഗുഹ.",
    traditionsEn: "Sanatana Dharma Shaivism, Vaishnavism, Shakta traditions alongside Vajrayana Buddhism and Digambara Jainism.",
    traditionsMl: "ശൈവ, വൈഷ്ണവ, ശാക്തേയ, ബുദ്ധ, ദിഗംബര ജൈന പാരമ്പര്യങ്ങൾ.",
    religiousSignificanceEn: "A testament to ancient India's extraordinary religious tolerance where temples of three major faiths were carved side by side.",
    religiousSignificanceMl: "മൂന്ന് മഹത്തായ മതങ്ങൾ ഒരേ മലനിരകളിൽ സൗഹാർദ്ദത്തോടെ നിലനിന്നതിന്റെ ചരിത്ര തെളിവ്.",
    architectureEn: "Dravidian architecture carved vertically downwards from the crown of the cliff. Over 200,000 tonnes of basalt rock were chiseled away with mathematical precision.",
    architectureMl: "മുകളിൽ നിന്ന് താഴേക്ക് ഒരൊറ്റ കരിങ്കൽ പാറ തുരന്ന് നിർമ്മിച്ച ദ്രാവിഡ വാസ്തുവിസ്മയം.",
    keyEventsEn: [
      "600 CE: Earliest Hindu and Buddhist excavations begin.",
      "756–773 CE: Rashtrakuta King Krishna I carves monolithic Kailasa Temple.",
      "9th Century CE: Digambara Jain cave monasteries created.",
      "1983 CE: Inscribed as a UNESCO World Heritage Site."
    ],
    keyEventsMl: [
      "എ.ഡി 600: ആദ്യ ഗുഹകളുടെ നിർമ്മാണം ആരംഭിച്ചു.",
      "756-773: കൃഷ്ണൻ ഒന്നാമൻ കൈലാസ ക്ഷേത്രം നിർമ്മിച്ചു.",
      "9-ാം നൂറ്റാണ്ട്: ജൈന ഗുഹകൾ പൂർത്തിയായി.",
      "1983: യുനെസ്കോ ലോക പൈതൃക പദവി."
    ],
    interestingFactsEn: [
      "Kailasa Temple is twice the area of the Parthenon in Athens and 1.5 times its height.",
      "Engineers worked entirely top-down; zero margin of error because rock once chiseled away could never be replaced.",
      "Carved with intricate life-size stone elephant statues and friezes depicting the complete Mahabharata and Ramayana."
    ],
    interestingFactsMl: [
      "ഏഥൻസിലെ പാർത്ഥെനോണിന്റെ ഇരട്ടി വിസ്തൃതിയും ഒന്നര ഇരട്ടി ഉയരവുമുണ്ട് കൈലാസ ക്ഷേത്രത്തിന്.",
      "ഒരു തെറ്റ് പോലും പറ്റാതെ മുകളിൽ നിന്ന് താഴേക്ക് കൊത്തിയുണ്ടാക്കിയ എൻജിനീയറിങ് അത്ഭുതം.",
      "രാമായണ-മഹാഭാരത കഥകൾ പൂർണ്ണമായി കൊത്തിവെച്ചിട്ടുണ്ട്."
    ],
    tourismDevelopmentEn: "World-class tourist destination connected via Aurangabad airport, railway, and national highway network with laser light and sound projections.",
    tourismDevelopmentMl: "ലൈറ്റ് & സൗണ്ട് ഷോയും അന്താരാഷ്ട്ര നിലവാരമുള്ള വിനോദസഞ്ചാര സൗകര്യങ്ങളും.",
    referencesEn: "Archaeological Survey of India (ASI); K.V. Soundara Rajan, Cave Temples of the Deccan; UNESCO World Heritage Centre."
  },
  {
    id: "konark-sun-temple",
    state: "Other Famous Destinations",
    stateEn: "Other Famous Destinations (Odisha)",
    stateMl: "മറ്റ് ചരിത്ര കേന്ദ്രങ്ങൾ (ഒഡീഷ)",
    nameEn: "Konark Sun Temple (The Black Pagoda)",
    nameMl: "കൊണാർക്ക് സൂര്യക്ഷേത്രം (ഒഡീഷ)",
    image: "images/discover/history/konark-sun-temple.jpg",
    locationEn: "Konark, Puri District, Odisha (Bay of Bengal Coast)",
    locationMl: "കൊണാർക്ക്, പുരി ജില്ല, ഒഡീഷ",
    originEn: "Built in 1250 CE by King Narasimhadeva I of the Eastern Ganga Dynasty to honor Surya, the Sun God, and celebrate military triumphs over Muslim invaders.",
    originMl: "1250-ൽ ഈസ്റ്റേൺ ഗംഗാ രാജവംശത്തിലെ നരസിംഹദേവൻ ഒന്നാമൻ സൂര്യഭഗവാന്റെ പ്രീതിക്കായി നിർമ്മിച്ച രഥാകൃതിയിലുള്ള ക്ഷേത്രം.",
    ancientHistoryEn: "Known as the 'Black Pagoda' by European sailors because its dark magnetic chlorite shikhara guided maritime navigation along the Bay of Bengal coast. Legend attributes the site's initial sanctity to Samba, son of Lord Krishna, who built a shrine to Surya to cure leprosy.",
    ancientHistoryMl: "യൂറോപ്യൻ നാവികർ 'ബ്ലാക്ക് പഗോഡ' എന്ന് വിളിച്ചിരുന്ന ക്ഷേത്ര ഗോപുരം നാവികർക്ക് ദിശ നിർണ്ണയിക്കാൻ സഹായിച്ചിരുന്നു.",
    dynastiesEn: "Eastern Ganga Dynasty, Gajapati Empire.",
    dynastiesMl: "ഈസ്റ്റേൺ ഗംഗാ രാജവംശം, ഗജപതി സാമ്രാജ്യം.",
    monumentsEn: "24 giant stone-carved chariot wheels (functioning sundials), 7 caparisoned stone horses, Natya Mandapa (Hall of Dance) with 128 celestial dancers, chlorite Surya sculptures.",
    monumentsMl: "24 ഭീമൻ കരിങ്കൽ രഥചക്രങ്ങൾ (സൂര്യഘടികാരങ്ങൾ), 7 കരിങ്കൽ കുതിരകൾ, നാട്യ മണ്ഡപം, സൂര്യ വിഗ്രഹങ്ങൾ.",
    traditionsEn: "Classical Odissi dance tradition, celebrated through the world-famous annual Konark Dance Festival held against the illuminated temple backdrop.",
    traditionsMl: "ഒഡീസ്സി നൃത്ത പാരമ്പര്യം, പ്രശസ്തമായ കൊണാർക്ക് നൃത്തോത്സവം.",
    religiousSignificanceEn: "Premier seat of Vedic solar worship in ancient Kalinga, constructed at the sacred confluence of the Chandrabhaga River and the ocean.",
    religiousSignificanceMl: "സൂര്യദേവന്റെ പ്രധാന ആരാധനാ കേന്ദ്രവും പവിത്രമായ തീർത്ഥാടന കേന്ദ്രവും.",
    architectureEn: "Magnificent Kalinga architectural style designed as a colossal 100-foot cosmic chariot of Surya carved out of Khondalite and chlorite stone with interlocking iron dowels.",
    architectureMl: "കൊണ്ഡലൈറ്റ് ശിലകളിൽ കലിംഗ വാസ്തുവിദ്യയിൽ തീർത്ത വിസ്മയ രഥം.",
    keyEventsEn: [
      "1250 CE: Consecrated after 12 years of labor by 1,200 master craftsmen under architect Bisu Maharana.",
      "1568 CE: Damaged during Kalapahad invasions; main sanctum shikhara gradually collapsed.",
      "1901–1906 CE: British Lieutenant Governor Sir John Woodburn filled the Jagamohana with sand to prevent collapse.",
      "1984 CE: Inscribed as a UNESCO World Heritage Site."
    ],
    keyEventsMl: [
      "1250: 1200 ശില്പികൾ 12 വർഷം കൊണ്ട് നിർമ്മാണം പൂർത്തിയാക്കി.",
      "1568: ആക്രമണങ്ങളിൽ പ്രധാന ഗോപുരത്തിന് തകർച്ച നേരിട്ടു.",
      "1901: തകർച്ച ഒഴിവാക്കാൻ ബ്രിട്ടീഷ് സർക്കാർ മണൽ നിറച്ച് സംരക്ഷിച്ചു.",
      "1984: യുനെസ്കോ ലോക പൈതൃക പദവി."
    ],
    interestingFactsEn: [
      "The 24 wheels are precision sundials; the shadow cast by the spokes tells time accurate to the minute.",
      "Originally, the idol was believed to levitate in mid-air supported by massive magnetic iron lodestones embedded in the ceiling and floor.",
      "The 7 horses symbolize the seven days of the week and the seven colors of sunlight."
    ],
    interestingFactsMl: [
      "24 രഥചക്രങ്ങളും സമയം കൃത്യമായി അളക്കാൻ കഴിയുന്ന അത്ഭുത സൂര്യഘടികാരങ്ങളാണ്.",
      "ക്ഷേത്രത്തിലെ പ്രധാന വിഗ്രഹം കാന്തിക ശക്തിയാൽ വായുവിൽ നിന്നിരുന്നുവെന്ന് പറയപ്പെടുന്നു.",
      "7 കുതിരകൾ ആഴ്ചയിലെ 7 ദിവസങ്ങളെയും സൂര്യപ്രകാശത്തിലെ 7 നിറങ്ങളെയും പ്രതിനിധീകരിക്കുന്നു."
    ],
    tourismDevelopmentEn: "Renowned tourist hub with the Konark Dance Festival, Chandrabhaga Marine Drive, luxury eco-retreats, and ASI illumination.",
    tourismDevelopmentMl: "കൊണാർക്ക് നൃത്തോത്സവം, ചന്ദ്രഭാഗ ബീച്ച്, ആധുനിക ടൂറിസം സൗകര്യങ്ങൾ.",
    referencesEn: "Archaeological Survey of India (ASI); Debala Mitra, Konarak; UNESCO World Heritage Centre."
  }
];

const filePath = path.join(__dirname, 'data_history_part2.js');
let historyPart2 = require(filePath);

newPlaces.forEach(p => {
  if (!historyPart2.some(x => x.id === p.id)) {
    historyPart2.push(p);
  }
});

const out = `// Historical Places Part 2 (Rajasthan, Himachal, J&K, Ladakh, UP, Delhi, Maharashtra, Odisha, Meghalaya, Bengal, Sikkim)\nconst historyPlacesPart2 = ${JSON.stringify(historyPart2, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = historyPlacesPart2;\n}\n`;
fs.writeFileSync(filePath, out, 'utf8');
console.log('Updated data_history_part2.js! Total places in part 2:', historyPart2.length);
