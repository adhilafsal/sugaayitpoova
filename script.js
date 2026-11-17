/* =========================================================
   1. 21 TRAVEL DESTINATIONS
   ========================================================= */
const destinationsData = [
  { id: "paithalmala", category: "kerala", image: "images/places/paithalmala.jpg", nameEn: "Paithalmala", nameMl: "പൈതൽമല", regionEn: "Kannur, Kerala", regionMl: "കണ്ണൂർ, കേരളം", shortEn: "Highest peak in Kannur offering misty grasslands, shola forests, and watchtower views.", shortMl: "കണ്ണൂരിലെ ഏറ്റവും ഉയരം കൂടിയ കൊടുമുടി. കോടമഞ്ഞും പുൽമേടുകളും വാച്ച് ടവർ കാഴ്ചകളും.", briefEn: "Situated at 4,500 ft along the Kerala–Karnataka border in Kannur, Paithalmala winds through evergreen shola forests before opening onto sweeping meadows and the summit watchtower.", briefMl: "കണ്ണൂർ ജില്ലയിൽ 4,500 അടി ഉയരത്തിൽ സ്ഥിതി ചെയ്യുന്ന മനോഹരമായ മലനിരയാണ് പൈതൽമല.", bestSeasonEn: "June – February", bestSeasonMl: "ജൂൺ – ഫെബ്രുവരി", durationEn: "1 Day (From Kannur / Kozhikode)", durationMl: "1 ദിവസം", cost: "₹850 – ₹1,200", itineraryEn: ["Morning: Bus from Kannur/Taliparamba to Kudiyanmala & Pottanplavu base.", "Forenoon: Guided forest trek to Paithalmala Watchtower & grasslands.", "Afternoon: Lunch & dip at Ezharakund Waterfalls.", "Evening: Return bus to Taliparamba / Kannur / Kozhikode by 6:30 PM."], itineraryMl: ["രാവിലെ: കണ്ണൂർ/തളിപ്പറമ്പിൽ നിന്ന് പൊട്ടൻപ്ലാവ് ബേസിലേക്ക് ബസ് യാത്ര.", "ഉച്ചയ്ക്ക് മുമ്പ്: പൈതൽമല വാച്ച് ടവറിലേക്കും പുൽമേടുകളിലേക്കും ട്രെക്കിംഗ്.", "ഉച്ചയ്ക്ക് ശേഷം: ഉച്ചഭക്ഷണവും ഏഴരക്കുണ്ട് വെള്ളച്ചാട്ടത്തിൽ കുളിയും.", "വൈകുന്നേരം: 6:30-ഓടെ തിരികെ നാട്ടിലേക്ക്."] },
  { id: "ramakkalmedu", category: "kerala", image: "images/places/ramakkalmedu.jpg", nameEn: "Ramakkalmedu", nameMl: "രാമക്കൽമേട്", regionEn: "Idukki, Kerala", regionMl: "ഇടുക്കി, കേരളം", shortEn: "Non-stop gale winds, Kuravan-Kurathi statue, and panoramic Tamil Nadu plains view.", shortMl: "ശക്തമായ കാറ്റും കുറവൻ-കുറത്തി ശിൽപവും തമിഴ്‌നാട് സമതലങ്ങളുടെ വിദൂര കാഴ്ചയും.", briefEn: "Perched at 3,500 ft in Idukki, Ramakkalmedu records some of the highest continuous wind speeds in Asia overlooking Cumbum and Theni plains.", briefMl: "ഇടുക്കി ജില്ലയിൽ 3,500 അടി ഉയരത്തിൽ സ്ഥിതി ചെയ്യുന്ന രാമക്കൽമേട് ശക്തമായ കാറ്റിനും മലനിരകൾക്കും പ്രസിദ്ധമാണ്.", bestSeasonEn: "September – March", bestSeasonMl: "സെപ്റ്റംബർ – മാർച്ച്", durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി", cost: "₹1,800 – ₹2,400", itineraryEn: ["Night 0: Overnight KSRTC bus from Kerala to Nedumkandam.", "Day 1: Jeep ride to Ramakkalmedu, Tortoise Rock & Kuravan-Kurathi statue.", "Day 2: Sunrise at Aama Para, Cumbum vineyards & evening bus back to Kerala."], itineraryMl: ["രാത്രി 0: കേരളത്തിൽ നിന്ന് നെടുങ്കണ്ടത്തേക്ക് KSRTC ബസ്.", "ദിവസം 1: ജീപ്പിൽ രാമക്കൽമേട്, ആമപ്പാറ, കുറവൻ-കുറത്തി ശിൽപം.", "ദിവസം 2: സൂര്യോദയവും കമ്പം മുന്തിരിത്തോട്ടവും കണ്ട് കേരളത്തിലേക്ക് മടക്കം."] },
  { id: "vattavada", category: "kerala", image: "images/places/vattavada.jpg", nameEn: "Vattavada", nameMl: "വട്ടവട", regionEn: "Munnar Highlands, Kerala", regionMl: "മൂന്നാർ, കേരളം", shortEn: "Terraced vegetable farms, strawberry orchards, and Pampadum Shola forest.", shortMl: "തട്ടുകളായുള്ള പച്ചക്കറി കൃഷിത്തോട്ടങ്ങളും സ്ട്രോബെറി ഫാമുകളും പാമ്പാടുംചോലയും.", briefEn: "Tucked beyond Top Station in Munnar, Vattavada is famous for step-terrace farming, sweet strawberries, and tent camps under starry skies.", briefMl: "മൂന്നാറിലെ ടോപ്പ് സ്റ്റേഷന് അപ്പുറം സ്ഥിതി ചെയ്യുന്ന ശാന്തമായ ഗ്രാമമാണ് വട്ടവട.", bestSeasonEn: "October – April", bestSeasonMl: "ഒക്ടോബർ – ഏപ്രിൽ", durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി", cost: "₹2,200 – ₹2,900", itineraryEn: ["Day 1: Bus to Munnar, transit via Top Station to Vattavada tent camp.", "Day 2: Strawberry farm walk, Pampadum Shola trek & return bus from Munnar."], itineraryMl: ["ദിവസം 1: മൂന്നാറിലെത്തി ടോപ്പ് സ്റ്റേഷൻ വഴി വട്ടവടയിലേക്ക്, ടെന്റ് ക്യാമ്പിംഗ്.", "ദിവസം 2: സ്ട്രോബെറി തോട്ടങ്ങളും പാമ്പാടുംചോലയും കണ്ട് തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "kolukkumalai", category: "kerala", image: "images/places/kolukkumalai.jpg", nameEn: "Kolukkumalai", nameMl: "കൊളുക്കുമല", regionEn: "Suryanelli / Bodinayakanur", regionMl: "സൂര്യനെല്ലി", shortEn: "World's highest organic tea estate famous for above-the-clouds sunrise and Jaguar Rock.", shortMl: "ലോകത്തിലെ ഏറ്റവും ഉയരം കൂടിയ തേയിലത്തോട്ടം. മേഘങ്ങൾക്ക് മുകളിലുള്ള സൂര്യോദയം.", briefEn: "At 7,130 ft above sea level, Kolukkumalai offers an unforgettable 4x4 off-road jeep climb and sunrise above a sea of clouds.", briefMl: "സമുദ്രനിരപ്പിൽ നിന്ന് 7,130 അടി ഉയരത്തിലുള്ള കൊളുക്കുമലയിലെ ജീപ്പ് സഫാരിയും സൂര്യോദയവും അവിസ്മരണീയമാണ്.", bestSeasonEn: "September – May", bestSeasonMl: "സെപ്റ്റംബർ – മെയ്", durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി", cost: "₹2,100 – ₹2,800", itineraryEn: ["Day 1: Bus to Munnar & Suryanelli; hillside tent camping with campfire.", "Day 2: 4:30 AM 4x4 jeep to Kolukkumalai sunrise, Jaguar Rock & return bus to Kerala."], itineraryMl: ["ദിവസം 1: മൂന്നാർ വഴി സൂര്യനെല്ലിയിൽ എത്തുന്നു, ടെന്റ് ക്യാമ്പിംഗ്.", "ദിവസം 2: പുലർച്ചെ 4:30-ന് ഓഫ്-റോഡ് ജീപ്പിൽ കൊളുക്കുമല സൂര്യോദയം കണ്ട് മടക്കം."] },
  { id: "kurishumala", category: "kerala", image: "images/places/kurishumala.jpg", nameEn: "Kurishumala (Vagamon)", nameMl: "കുരിശുമല (വാഗമൺ)", regionEn: "Vagamon, Kerala", regionMl: "വാഗമൺ, കേരളം", shortEn: "Misty hill trek paired with Vagamon Pine Forest, Meadows, and Thangalpara.", shortMl: "കുരിശുമല ട്രെക്കിംഗും വാഗമൺ പൈൻ ഫോറസ്റ്റും മൊട്ടക്കുന്നുകളും തങ്ങൾപാറയും.", briefEn: "A refreshing one-day budget escape from anywhere in Kerala via Kottayam covering Kurishumala, Pine Forest, Meadows, and Thangalpara.", briefMl: "കോട്ടയം വഴി കുറഞ്ഞ ചെലവിൽ പോയി വരാവുന്ന ഏകദിന യാത്രയാണ് വാഗമൺ കുരിശുമല.", bestSeasonEn: "August – March", bestSeasonMl: "ഓഗസ്റ്റ് – മാർച്ച്", durationEn: "1 Day (From Kerala)", durationMl: "1 ദിവസം", cost: "₹950 – ₹1,400", itineraryEn: ["Night 0: Overnight train to Kottayam + 6:55 AM KSRTC bus to Vagamon.", "Day 1: Kurishumala trek, Pine Forest, Meadows & Thangalpara; evening return via Kottayam."], itineraryMl: ["രാത്രി 0: കോട്ടയത്തേക്ക് ട്രെയിൻ + രാവിലെ 6:55-ന് വാഗമൺ KSRTC ബസ്.", "ദിവസം 1: കുരിശുമല, പൈൻ ഫോറസ്റ്റ്, മൊട്ടക്കുന്നുകൾ, തങ്ങൾപാറ എന്നിവ കണ്ട് മടക്കം."] },
  { id: "netravati", category: "kerala", image: "images/places/netravati.jpg", nameEn: "Netravati Peak", nameMl: "നേത്രാവതി പീക്ക്", regionEn: "Kudremukh Range, Karnataka", regionMl: "കുദ്രെമുഖ്, കർണാടക", shortEn: "Lush green ridge trek in the Western Ghats with misty valleys and stream crossings.", shortMl: "പശ്ചിമഘട്ടത്തിലെ പച്ചപ്പ് നിറഞ്ഞ മലനിരകളും അരുവികളും കടന്നുള്ള ട്രെക്കിംഗ്.", briefEn: "Located near Samse in the Kudremukh range, Netravati Peak offers a 12 km guided forest-and-grassland hike with crystal streams.", briefMl: "കുദ്രെമുഖ് മലനിരകളിലെ 12 കി.മീ ദൈർഘ്യമുള്ള മനോഹരമായ ട്രെക്കിംഗ് പാതയാണ് നേത്രാവതി പീക്ക്.", bestSeasonEn: "September – February", bestSeasonMl: "സെപ്റ്റംബർ – ഫെബ്രുവരി", durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി", cost: "₹2,600 – ₹3,300", itineraryEn: ["Night 0: Overnight train/bus from Kerala to Mangaluru & transit to Samse.", "Day 1: Forest permit check-in, 12 km Netravati Peak trek & homestay.", "Day 2: Samse tea estates & night train/bus back to Kerala."], itineraryMl: ["രാത്രി 0: കേരളത്തിൽ നിന്ന് മംഗലാപുരം വഴി സംസെയിലേക്ക് യാത്ര.", "ദിവസം 1: 12 കി.മീ നേത്രാവതി പീക്ക് ട്രെക്കിംഗും ഹോംസ്റ്റേയും.", "ദിവസം 2: തേയിലത്തോട്ടങ്ങൾ സന്ദർശിച്ച് രാത്രി തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "chikmagalur", category: "kerala", image: "images/places/chikmagalur.jpg", nameEn: "Chikmagalur & Mullayanagiri", nameMl: "ചിക്കമംഗളൂരു & മുല്ലയനഗിരി", regionEn: "Karnataka", regionMl: "കർണാടക", shortEn: "Karnataka's highest peak Mullayanagiri, Baba Budangiri, and coffee estate camps.", shortMl: "മുല്ലയനഗിരി കൊടുമുടിയും ബാബ ബുദൻഗിരിയും കാപ്പിത്തോട്ടങ്ങളും.", briefEn: "Climb Karnataka's highest summit at Mullayanagiri (6,330 ft), visit Jhari & Hebbe waterfalls, and camp in coffee estates.", briefMl: "കർണാടകയിലെ ഏറ്റവും ഉയരം കൂടിയ മുല്ലയനഗിരി കൊടുമുടിയും വെള്ളച്ചാട്ടങ്ങളും ഉൾപ്പെടുന്ന യാത്ര.", bestSeasonEn: "September – March", bestSeasonMl: "സെപ്റ്റംബർ – മാർച്ച്", durationEn: "3 Days / 2 Nights (From Kerala)", durationMl: "3 ദിവസം / 2 രാത്രി", cost: "₹3,800 – ₹4,600", itineraryEn: ["Day 1: Overnight train to Mangaluru/Hassan, reach Chikmagalur & Hirekolale Lake.", "Day 2: Sunrise trek to Mullayanagiri, Baba Budangiri & Jhari Falls.", "Day 3: Kemmanagundi Z-Point, Hebbe Falls & night return to Kerala."], itineraryMl: ["ദിവസം 1: ചിക്കമംഗളൂരുവിൽ എത്തുന്നു, ഹിരെകൊളലെ തടാകം.", "ദിവസം 2: മുല്ലയനഗിരി ട്രെക്കിംഗ്, ബാബ ബുദൻഗിരി, ഝാരി വെള്ളച്ചാട്ടം.", "ദിവസം 3: കെമ്മനഗുണ്ടി, ഹെബ്ബെ വെള്ളച്ചാട്ടം എന്നിവ കണ്ട് കേരളത്തിലേക്ക് മടക്കം."] },
  { id: "mysore", category: "kerala", image: "images/places/mysore.jpg", nameEn: "Mysore Heritage & Hills", nameMl: "മൈസൂർ", regionEn: "Karnataka", regionMl: "കർണാടക", shortEn: "Royal palaces, Chamundi Hills, Brindavan Gardens, and easy overnight bus access from Kerala.", shortMl: "മൈസൂർ കൊട്ടാരം, ചാമുണ്ഡി ഹിൽസ്, ബൃന്ദാവൻ ഗാർഡൻ എന്നിവ ഉൾപ്പെടുന്ന യാത്ര.", briefEn: "An easy KSRTC bus trip from Kerala covering Mysore Palace, Zoo, Chamundi Hills, and Brindavan musical fountains.", briefMl: "കേരളത്തിൽ നിന്ന് KSRTC ബസ്സിൽ എളുപ്പത്തിൽ പോയി വരാവുന്ന ചരിത്ര നഗരമാണ് മൈസൂർ.", bestSeasonEn: "October – March", bestSeasonMl: "ഒക്ടോബർ – മാർച്ച്", durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി", cost: "₹2,200 – ₹2,800", itineraryEn: ["Day 1: Morning KSRTC bus to Mysore; Mysore Palace, Zoo & Chamundi Hill.", "Day 2: St. Philomena's Church, KRS Dam & Brindavan Gardens; night bus back to Kerala."], itineraryMl: ["ദിവസം 1: മൈസൂർ കൊട്ടാരം, മൃഗശാല, ചാമുണ്ഡി ഹിൽസ്.", "ദിവസം 2: ബൃന്ദാവൻ ഗാർഡൻ സന്ദർശിച്ച് രാത്രി ബസ്സിൽ കേരളത്തിലേക്ക് മടക്കം."] },
  { id: "hyderabad", category: "west", image: "images/places/hyderabad.jpg", nameEn: "Hyderabad", nameMl: "ഹൈദരാബാദ്", regionEn: "Telangana", regionMl: "തെലങ്കാന", shortEn: "Charminar heritage, Golconda Fort, Ramoji Film City, and Hyderabadi cuisine.", shortMl: "ചാർമിനാർ, ഗോൽക്കൊണ്ട കോട്ട, റാമോജി ഫിലിം സിറ്റി എന്നിവ നിറഞ്ഞ നഗരം.", briefEn: "Direct sleeper train trip from Kerala exploring Charminar, Golconda Fort, Hussain Sagar, and Ramoji Film City.", briefMl: "ചാർമിനാറും ഗോൽക്കൊണ്ട കോട്ടയും റാമോജി ഫിലിം സിറ്റിയും ഉൾപ്പെടുന്ന ട്രെയിൻ യാത്ര.", bestSeasonEn: "October – February", bestSeasonMl: "ഒക്ടോബർ – ഫെബ്രുവരി", durationEn: "4 Days / 3 Nights (From Kerala)", durationMl: "4 ദിവസം / 3 രാത്രി", cost: "₹4,800 – ₹5,900", itineraryEn: ["Day 1: Sleeper train from Kerala to Secunderabad.", "Day 2: Charminar, Chowmahalla Palace, Salar Jung Museum & Hussain Sagar.", "Day 3: Full day at Ramoji Film City or Golconda Fort.", "Day 4: Return train to Kerala."], itineraryMl: ["ദിവസം 1: കേരളത്തിൽ നിന്ന് സെക്കന്തരാബാദിലേക്ക് ട്രെയിൻ യാത്ര.", "ദിവസം 2: ചാർമിനാർ, സാലാർ ജംഗ് മ്യൂസിയം, ഹുസൈൻ സാഗർ.", "ദിവസം 3: റാമോജി ഫിലിം സിറ്റി / ഗോൽക്കൊണ്ട കോട്ട.", "ദിവസം 4: തിരികെ കേരളത്തിലേക്ക് മടക്കയാത്ര."] },
  { id: "matheran", category: "west", image: "images/places/matheran.jpg", nameEn: "Matheran", nameMl: "മാഥേരാൻ", regionEn: "Maharashtra", regionMl: "മഹാരാഷ്ട്ര", shortEn: "Asia's only automobile-free hill station with red-soil forest trails and toy train.", shortMl: "വാഹനങ്ങൾക്ക് പ്രവേശനമില്ലാത്ത ഏഷ്യയിലെ ഏക ഹിൽ സ്റ്റേഷൻ.", briefEn: "Walk quiet red-laterite forest paths to 38 dramatic Sahyadri cliff viewpoints with zero cars or pollution.", briefMl: "വാഹനങ്ങളില്ലാത്ത ശാന്തമായ മലനിരകളും ടോയ് ട്രെയിനും വ്യൂ പോയിന്റുകളും.", bestSeasonEn: "October – May", bestSeasonMl: "ഒക്ടോബർ – മെയ്", durationEn: "4 Days / 3 Nights (From Kerala)", durationMl: "4 ദിവസം / 3 രാത്രി", cost: "₹4,600 – ₹5,600", itineraryEn: ["Day 1: Konkan route train from Kerala to Panvel/Karjat.", "Day 2: Neral to Matheran via toy train; Panorama Point & Echo Point.", "Day 3: Louisa Point & Garbett Plateau; evening train back to Kerala.", "Day 4: Arrive back in Kerala."], itineraryMl: ["ദിവസം 1: കൊങ്കൺ വഴി പൻവേലിലേക്ക് ട്രെയിൻ യാത്ര.", "ദിവസം 2: മാഥേരാൻ ടോയ് ട്രെയിനും വ്യൂ പോയിന്റുകളും.", "ദിവസം 3: ലൂയിസ പോയിന്റ് സന്ദർശിച്ച് തിരികെ കേരളത്തിലേക്ക് ട്രെയിൻ.", "ദിവസം 4: കേരളത്തിൽ തിരിച്ചെത്തുന്നു."] },
  { id: "harihar", category: "west", image: "images/places/harihar.jpg", nameEn: "Harihar Fort", nameMl: "ഹരിഹർ കോട്ട", regionEn: "Nashik, Maharashtra", regionMl: "നാസിക്, മഹാരാഷ്ട്ര", shortEn: "Iconic 80-degree rock-cut vertical steps in the Sahyadri mountains.", shortMl: "80 ഡിഗ്രി കുത്തനെയുള്ള പാറപ്പടികൾ കയറുന്ന സാഹസിക ട്രെക്കിംഗ്.", briefEn: "Climb the famous 80-degree rock-cut staircase carved into a basalt pinnacle in Nashik's Sahyadri range.", briefMl: "80 ഡിഗ്രി കുത്തനെയുള്ള പാറപ്പടികൾ കയറുന്ന ആവേശകരമായ ട്രെക്കിംഗ്.", bestSeasonEn: "July – February", bestSeasonMl: "ജൂലൈ – ഫെബ്രുവരി", durationEn: "4 Days / 3 Nights (From Kerala)", durationMl: "4 ദിവസം / 3 രാത്രി", cost: "₹4,900 – ₹6,000", itineraryEn: ["Day 1: Train from Kerala to Kalyan/Igatpuri & transit to Nirgudpada.", "Day 2: Early morning climb up Harihar Fort rock-cut steps & Trimbakeshwar.", "Day 3: Return train from Kalyan/Panvel to Kerala.", "Day 4: Arrive back in Kerala."], itineraryMl: ["ദിവസം 1: കേരളത്തിൽ നിന്ന് ഇഗത്പുരി വഴി നിർഗുഡ്പാഡയിലേക്ക്.", "ദിവസം 2: ഹരിഹർ കോട്ട ട്രെക്കിംഗും ത്രയംബകേശ്വർ സന്ദർശനവും.", "ദിവസം 3: തിരികെ കേരളത്തിലേക്കുള്ള മടക്ക ട്രെയിൻ.", "ദിവസം 4: കേരളത്തിൽ തിരിച്ചെത്തുന്നു."] },
  { id: "kedarkantha", category: "himalayas", image: "images/places/kedarkantha.jpg", nameEn: "Kedarkantha Trek", nameMl: "കേദാർകാന്ത ട്രെക്ക്", regionEn: "Uttarakhand (12,500 ft)", regionMl: "ഉത്തരാഖണ്ഡ് (12,500 അടി)", shortEn: "India's favorite winter snow summit trek through frozen Juda Ka Talab.", shortMl: "മഞ്ഞുമൂടിയ ജൂഡാ കാ തലാബും 12,500 അടി ഉയരത്തിലേക്കുള്ള സമ്മിറ്റ് ട്രെക്കും.", briefEn: "Classic Himalayan snow summit trek from Sankri featuring frozen Juda Ka Talab and 360-degree sunrise views of Swargarohini and Bandarpoonch.", briefMl: "ഉത്തരാഖണ്ഡിലെ സങ്ക്രിയിൽ നിന്ന് ആരംഭിക്കുന്ന പ്രശസ്തമായ വിന്റർ സ്നോ സമ്മിറ്റ് ട്രെക്ക്.", bestSeasonEn: "December – April", bestSeasonMl: "ഡിസംബർ – ഏപ്രിൽ", durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി", cost: "₹11,500 – ₹13,800", itineraryEn: ["Days 1–2: Train from Kerala to Delhi & overnight bus to Dehradun.", "Day 3: Drive from Dehradun to Sankri base village (6,400 ft).", "Day 4: Trek to Juda Ka Talab frozen lake campsite.", "Day 5: Trek to Kedarkantha Base Camp (11,250 ft).", "Day 6: 3:00 AM summit push to 12,500 ft peak & descend.", "Days 7–9: Return via Dehradun & Delhi train to Kerala."], itineraryMl: ["ദിവസം 1–2: കേരളത്തിൽ നിന്ന് ഡൽഹി വഴി ഡെറാഡൂണിലേക്ക്.", "ദിവസം 3: സങ്ക്രി ബേസ് വില്ലേജിലേക്ക് യാത്ര.", "ദിവസം 4: ജൂഡാ കാ തലാബ് ക്യാമ്പിലേക്ക് ട്രെക്കിംഗ്.", "ദിവസം 5: കേദാർകാന്ത ബേസ് ക്യാമ്പിലേക്ക് കയറ്റം.", "ദിവസം 6: പുലർച്ചെ 12,500 അടി കൊടുമുടി കീഴടക്കുന്നു.", "ദിവസം 7–9: ഡെറാഡൂൺ, ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "brahmatal", category: "himalayas", image: "images/places/brahmatal.jpg", nameEn: "Brahmatal Trek", nameMl: "ബ്രഹ്മതാൽ ട്രെക്ക്", regionEn: "Uttarakhand (12,250 ft)", regionMl: "ഉത്തരാഖണ്ഡ് (12,250 അടി)", shortEn: "Frozen alpine lakes with massive views of Mt. Trishul and Nanda Ghunti.", shortMl: "തണുത്തുറഞ്ഞ തടാകങ്ങളും ത്രിശൂൽ, നന്ദ ഘുന്തി കൊടുമുടികളുടെ കാഴ്ചകളും.", briefEn: "Snow ridge trek between Bekaltal and Brahmatal lakes facing 7,000-meter peaks Mt. Trishul and Nanda Ghunti.", briefMl: "തണുത്തുറഞ്ഞ ബെകൽതാൽ, ബ്രഹ്മതാൽ തടാകങ്ങളിലൂടെയുള്ള ഹിമാലയൻ ട്രെക്കിംഗ്.", bestSeasonEn: "December – March", bestSeasonMl: "ഡിസംബർ – മാർച്ച്", durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി", cost: "₹11,800 – ₹14,000", itineraryEn: ["Days 1–2: Train from Kerala to Delhi & bus to Rishikesh/Kathgodam.", "Day 3: Mountain drive to Lohajung base camp.", "Day 4: Trek to Bekaltal lake campsite.", "Day 5: Trek to Brahmatal Lake.", "Day 6: Summit Brahmatal Top (12,250 ft) & descend.", "Days 7–9: Return via Delhi train to Kerala."], itineraryMl: ["ദിവസം 1–2: ഡൽഹി വഴി ഋഷികേശിലേക്ക് യാത്ര.", "ദിവസം 3: ലോഹാജംഗ് ബേസ് ക്യാമ്പിലേക്ക് യാത്ര.", "ദിവസം 4–5: ബെകൽതാൽ, ബ്രഹ്മതാൽ തടാകങ്ങളിലേക്ക് ട്രെക്കിംഗ്.", "ദിവസം 6: ബ്രഹ്മതാൽ ടോപ്പ് കീഴടക്കി താഴേക്ക് ഇറങ്ങുന്നു.", "ദിവസം 7–9: ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "hampta", category: "himalayas", image: "images/places/hampta.jpg", nameEn: "Hampta Pass & Chandratal", nameMl: "ഹാംപ്ത പാസ് & ചന്ദ്രതാൽ", regionEn: "Himachal Pradesh (14,100 ft)", regionMl: "ഹിമാചൽ പ്രദേശ് (14,100 അടി)", shortEn: "Crossover trek from lush green Kullu valleys into barren Spiti & Chandratal Lake.", shortMl: "കുളു താഴ്‌വരയിൽ നിന്ന് ഹാംപ്ത പാസ് കടന്ന് സ്പിതിയിലേക്കും ചന്ദ്രതാലിലേക്കുമുള്ള യാത്ര.", briefEn: "Cross the 14,100 ft snow pass from green Kullu into the cold desert of Spiti and visit turquoise Chandratal Moon Lake.", briefMl: "14,100 അടി ഉയരമുള്ള ഹാംപ്ത പാസ് കടന്ന് ചന്ദ്രതാൽ തടാകത്തിലേക്ക് എത്തുന്ന ട്രെക്കിംഗ്.", bestSeasonEn: "June – September", bestSeasonMl: "ജൂൺ – സെപ്റ്റംബർ", durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി", cost: "₹12,500 – ₹14,900", itineraryEn: ["Days 1–2: Train from Kerala to Delhi & Volvo bus to Manali.", "Days 3–4: Drive to Jobra; trek via Chika to Balu Ka Ghera.", "Day 5: Cross Hampta Pass (14,100 ft) to Shea Goru.", "Day 6: Trek to Chatru, visit Chandratal Lake & return to Manali.", "Days 7–9: Volvo to Delhi & return train to Kerala."], itineraryMl: ["ദിവസം 1–2: ഡൽഹി വഴി മണാലിയിലേക്ക് യാത്ര.", "ദിവസം 3–4: ചിക്ക, ബാലു കാ ഘേര ക്യാമ്പുകളിലേക്ക് ട്രെക്കിംഗ്.", "ദിവസം 5: 14,100 അടി ഉയരമുള്ള ഹാംപ്ത പാസ് കടക്കുന്നു.", "ദിവസം 6: ചന്ദ്രതാൽ തടാകം സന്ദർശിച്ച് മണാലിയിൽ തിരിച്ചെത്തുന്നു.", "ദിവസം 7–9: ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "delhi", category: "himalayas", image: "images/places/delhi.jpg", nameEn: "Delhi & Agra Heritage", nameMl: "ഡൽഹി & ആഗ്ര", regionEn: "New Delhi / Uttar Pradesh", regionMl: "ന്യൂഡൽഹി / ആഗ്ര", shortEn: "India Gate, Red Fort, Qutub Minar, and Taj Mahal sunrise trip.", shortMl: "ഇന്ത്യാ ഗേറ്റ്, ചെങ്കോട്ട, കുത്തബ് മിനാർ, താജ്മഹൽ എന്നിവ ഉൾപ്പെടുന്ന യാത്ര.", briefEn: "Budget student heritage tour covering Delhi landmarks via Metro plus Taj Mahal and Agra Fort.", briefMl: "കുറഞ്ഞ ചെലവിൽ ഡൽഹിയും ആഗ്രയിലെ താജ്മഹലും സന്ദർശിക്കാവുന്ന പാക്കേജ്.", bestSeasonEn: "October – March", bestSeasonMl: "ഒക്ടോബർ – മാർച്ച്", durationEn: "6 Days / 5 Nights (Kerala to Kerala)", durationMl: "6 ദിവസം / 5 രാത്രി", cost: "₹6,500 – ₹8,000", itineraryEn: ["Days 1–2: Train from Kerala to Hazrat Nizamuddin.", "Day 3: Red Fort, Jama Masjid, Chandni Chowk & India Gate.", "Day 4: Agra Taj Mahal & Agra Fort day trip.", "Days 5–6: Qutub Minar, Lotus Temple & return train to Kerala."], itineraryMl: ["ദിവസം 1–2: കേരളത്തിൽ നിന്ന് ഡൽഹിയിലേക്ക് ട്രെയിൻ യാത്ര.", "ദിവസം 3: ചെങ്കോട്ട, ജുമാ മസ്ജിദ്, ഇന്ത്യാ ഗേറ്റ്.", "ദിവസം 4: ആഗ്ര താജ്മഹലും ആഗ്ര കോട്ടയും.", "ദിവസം 5–6: കുത്തബ് മിനാർ കണ്ട് തിരികെ കേരളത്തിലേക്ക് ട്രെയിൻ."] },
  { id: "kashmir", category: "himalayas", image: "images/places/kashmir.jpg", nameEn: "Kashmir Paradise", nameMl: "കശ്മീർ", regionEn: "Jammu & Kashmir", regionMl: "ജമ്മു & കശ്മീർ", shortEn: "Dal Lake shikara rides, Gulmarg snow meadows, Pahalgam, and Sonamarg.", shortMl: "ദാൽ തടാകത്തിലെ ശിക്കാര യാത്ര, ഗുൽമാർഗ് മഞ്ഞുമലകൾ, പഹൽഗാം, സോനാമാർഗ്.", briefEn: "Explore Srinagar's Dal Lake, Gulmarg Gondola snow peaks, Pahalgam Betaab Valley, and Sonamarg glaciers on a budget.", briefMl: "ദാൽ തടാകവും ഗുൽമാർഗ് മഞ്ഞുമലകളും പഹൽഗാമും സോനാമാർഗും ബജറ്റ് നിരക്കിൽ സന്ദർശിക്കാം.", bestSeasonEn: "All Year", bestSeasonMl: "വർഷം മുഴുവൻ", durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി", cost: "₹13,500 – ₹16,500", itineraryEn: ["Days 1–2: Train from Kerala to Jammu Tawi & cab to Srinagar.", "Day 3: Mughal Gardens & Dal Lake Shikara ride.", "Day 4: Gulmarg snow day & Gondola ride.", "Day 5: Pahalgam Betaab & Aru Valleys.", "Day 6: Sonamarg Thajiwas Glacier.", "Days 7–9: Return via Jammu Tawi train to Kerala."], itineraryMl: ["ദിവസം 1–2: ജമ്മു താവി വഴി ശ്രീനഗറിലേക്ക് യാത്ര.", "ദിവസം 3: ദാൽ തടാകത്തിലെ ശിക്കാര ബോട്ട് യാത്ര.", "ദിവസം 4: ഗുൽമാർഗ് മഞ്ഞുമലകൾ.", "ദിവസം 5–6: പഹൽഗാം, സോനാമാർഗ് സന്ദർശനം.", "ദിവസം 7–9: ജമ്മു താവി വഴി തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "ladakh", category: "himalayas", image: "images/places/ladakh.jpg", nameEn: "Leh – Ladakh Expedition", nameMl: "ലേ – ലഡാക്ക്", regionEn: "Ladakh (11,500 – 18,380 ft)", regionMl: "ലഡാക്ക്", shortEn: "Khardung La pass, Nubra Valley sand dunes, and turquoise Pangong Tso Lake.", shortMl: "ഖാർദുങ് ലാ പാസ്, നുബ്ര വാലി മണലാരണ്യം, പാങ്കോങ് തടാകം.", briefEn: "Cross Khardung La and Chang La passes, camp beside Pangong Tso Lake, and explore Nubra Valley dunes.", briefMl: "ഖാർദുങ് ലാ പാസ് കടന്ന് നുബ്ര വാലിയിലേക്കും പാങ്കോങ് തടാകത്തിലേക്കും നടത്തുന്ന യാത്ര.", bestSeasonEn: "May – September", bestSeasonMl: "മെയ് – സെപ്റ്റംബർ", durationEn: "11 Days / 10 Nights (Kerala to Kerala)", durationMl: "11 ദിവസം / 10 രാത്രി", cost: "₹18,500 – ₹22,500", itineraryEn: ["Days 1–3: Train to Delhi & Manali–Leh highway transit.", "Day 4: Leh acclimatization & Shanti Stupa.", "Day 5: Cross Khardung La to Nubra Valley & Hunder.", "Day 6: Shyok route to Pangong Tso Lake camp.", "Day 7: Chang La pass return to Leh.", "Days 8–11: Return via Manali & Delhi train to Kerala."], itineraryMl: ["ദിവസം 1–3: ഡൽഹി, മണാലി വഴി ലേയിലേക്ക് യാത്ര.", "ദിവസം 4: ലേയിൽ വിശ്രമം.", "ദിവസം 5: ഖാർദുങ് ലാ പാസ്, നുബ്ര വാലി.", "ദിവസം 6: പാങ്കോങ് തടാകക്കരയിലേക്ക് ക്യാമ്പിംഗ്.", "ദിവസം 7–11: മണാലി, ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "manali", category: "himalayas", image: "images/places/manali.jpg", nameEn: "Manali – Solang – Kasol", nameMl: "മണാലി – സോളാങ് – കസോൾ", regionEn: "Himachal Pradesh", regionMl: "ഹിമാചൽ പ്രദേശ്", shortEn: "Snow valleys, Atal Tunnel, Sissu waterfalls, Old Manali, and Kasol.", shortMl: "മഞ്ഞു താഴ്‌വരകൾ, അടൽ ടണൽ, സിസ്സു, ഓൾഡ് മണാലി, കസോൾ.", briefEn: "Classic Himachal circuit covering Solang Valley snow, Atal Tunnel, Sissu, Kullu rafting, and Kasol.", briefMl: "സോളാങ് വാലിയും അടൽ ടണലും സിസ്സു വെള്ളച്ചാട്ടവും കസോളും ഉൾപ്പെടുന്ന യാത്ര.", bestSeasonEn: "All Year", bestSeasonMl: "വർഷം മുഴുവൻ", durationEn: "8 Days / 7 Nights (Kerala to Kerala)", durationMl: "8 ദിവസം / 7 രാത്രി", cost: "₹9,500 – ₹11,800", itineraryEn: ["Days 1–2: Train from Kerala to Delhi & Volvo to Manali.", "Day 3: Hadimba Temple, Vashisht & Old Manali.", "Day 4: Solang Valley, Atal Tunnel & Sissu.", "Day 5: Kullu rafting, Kasol & Manikaran.", "Days 6–8: Volvo to Delhi & return train to Kerala."], itineraryMl: ["ദിവസം 1–2: ഡൽഹി വഴി മണാലിയിലേക്ക് യാത്ര.", "ദിവസം 3: ഹിഡിംബ ക്ഷേത്രം, ഓൾഡ് മണാലി.", "ദിവസം 4: സോളാങ് വാലി, അടൽ ടണൽ, സിസ്സു.", "ദിവസം 5: കുളു, കസോൾ, മണികരൻ.", "ദിവസം 6–8: ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "munnar", category: "kerala", image: "images/places/munnar.jpg", nameEn: "Munnar & Meesapulimala", nameMl: "മൂന്നാർ & മീശപ്പുലിമല", regionEn: "Idukki, Kerala", regionMl: "ഇടുക്കി, കേരളം", shortEn: "Rolling tea gardens and South India's second-highest peak trek.", shortMl: "തേയിലത്തോട്ടങ്ങളും ദക്ഷിണേന്ത്യയിലെ രണ്ടാമത്തെ ഉയരം കൂടിയ കൊടുമുടിയായ മീശപ്പുലിമലയും.", briefEn: "Guided trek to Meesapulimala (8,661 ft) paired with Munnar tea estates and base camp stay.", briefMl: "മീശപ്പുലിമലയിലേക്കുള്ള ട്രെക്കിംഗും മൂന്നാർ തേയിലത്തോട്ടങ്ങളിലെ താമസവും.", bestSeasonEn: "September – March", bestSeasonMl: "സെപ്റ്റംബർ – മാർച്ച്", durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി", cost: "₹2,300 – ₹3,000", itineraryEn: ["Day 1: Bus to Munnar; Mattupetty Dam, Kundala Lake & base camp.", "Day 2: Guided Meesapulimala trek & evening bus return to Kerala."], itineraryMl: ["ദിവസം 1: മൂന്നാർ, മാട്ടുപ്പെട്ടി ഡാം, ക്യാമ്പിംഗ്.", "ദിവസം 2: മീശപ്പുലിമല ട്രെക്കിംഗ് പൂർത്തിയാക്കി നാട്ടിലേക്ക് മടക്കം."] },
  { id: "spiti", category: "himalayas", image: "images/places/spiti.jpg", nameEn: "Spiti Valley Circuit", nameMl: "സ്പിതി വാലി", regionEn: "Himachal Pradesh (12,500 – 15,000 ft)", regionMl: "ഹിമാചൽ പ്രദേശ്", shortEn: "Cold desert monasteries, Key Monastery, Hikkim post office, and Kunzum Pass.", shortMl: "കീ മൊണാസ്ട്രിയും ഹിക്കിം പോസ്റ്റ് ഓഫീസും കുൻസും പാസും ഉൾപ്പെടുന്ന യാത്ര.", briefEn: "Explore Kaza, thousand-year-old Key Monastery, Hikkim highest post office, and Kunzum Pass.", briefMl: "കീ മൊണാസ്ട്രിയും ലോകത്തിലെ ഏറ്റവും ഉയരത്തിലുള്ള ഹിക്കിം പോസ്റ്റ് ഓഫീസും സന്ദർശിക്കാം.", bestSeasonEn: "June – October", bestSeasonMl: "ജൂൺ – ഒക്ടോബർ", durationEn: "10 Days / 9 Nights (Kerala to Kerala)", durationMl: "10 ദിവസം / 9 രാത്രി", cost: "₹14,500 – ₹17,500", itineraryEn: ["Days 1–2: Train to Delhi/Chandigarh & bus to Shimla.", "Days 3–6: Kinnaur road to Kaza, Key Monastery, Kibber & Hikkim.", "Days 7–10: Kunzum Pass to Manali, Delhi & return train to Kerala."], itineraryMl: ["ദിവസം 1–2: ഡൽഹി വഴി ഷിംലയിലേക്ക്.", "ദിവസം 3–6: കാസ, കീ മൊണാസ്ട്രി, ഹിക്കിം സന്ദർശനം.", "ദിവസം 7–10: മണാലി, ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."] },
  { id: "meghalaya", category: "himalayas", image: "images/places/meghalaya.jpg", nameEn: "Meghalaya & Dawki", nameMl: "മേഘാലയ & ദാവ്കി", regionEn: "Northeast India", regionMl: "വടക്കുകിഴക്കൻ ഇന്ത്യ", shortEn: "Living root bridges of Cherrapunji, crystal Umngot river in Dawki, and Krang Suri.", shortMl: "ചിറാപുഞ്ചിയിലെ ലിവിംഗ് റൂട്ട് ബ്രിഡ്ജുകളും ദാവ്കിയിലെ സ്ഫടികം പോലുള്ള നദിയും.", briefEn: "Trek to Double Decker Living Root Bridge, boat on crystal waters in Dawki, and visit Krang Suri Falls.", briefMl: "മേഘാലയയിലെ ലിവിംഗ് റൂട്ട് ബ്രിഡ്ജുകളും ദാവ്കി നദിയിലെ ബോട്ടിംഗും ക്രാങ് സൂരി വെള്ളച്ചാട്ടവും.", bestSeasonEn: "October – April", bestSeasonMl: "ഒക്ടോബർ – ഏപ്രിൽ", durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി", cost: "₹13,900 – ₹16,800", itineraryEn: ["Days 1–3: Train from Kerala to Guwahati & cab to Shillong.", "Day 4: Cherrapunji Nohkalikai Falls & Living Root Bridge trek.", "Day 5: Dawki river boating, Mawlynnong & Krang Suri Falls.", "Days 6–9: Return via Guwahati train to Kerala."], itineraryMl: ["ദിവസം 1–3: ഗുവാഹത്തി വഴി ഷില്ലോങ്ങിലേക്ക് യാത്ര.", "ദിവസം 4: ചിറാപുഞ്ചി ലിവിംഗ് റൂട്ട് ബ്രിഡ്ജ് ട്രെക്കിംഗ്.", "ദിവസം 5: ദാവ്കി നദി, മൗലിന്നോങ്, ക്രാങ് സൂരി.", "ദിവസം 6–9: ഗുവാഹത്തി വഴി തിരികെ കേരളത്തിലേക്ക്."] }
];

/* =========================================================
   2. 8 ADVENTURE STORE GEARS
   ========================================================= */
const storeItemsData = [
  { id: "shoes", image: "images/shoes.jpg", typeEn: "Footwear", typeMl: "പാദരക്ഷകൾ", nameEn: "High-Ankle Waterproof Trekking Shoes", nameMl: "വാട്ടർപ്രൂഫ് ട്രെക്കിംഗ് ഷൂസ്", price: "₹1,499 – ₹3,499", descEn: "Deep lug grip on wet rocks, slush, and snow while preventing ankle twists.", descMl: "വഴുക്കലുള്ള പാറകളിലും മഞ്ഞിലും തെന്നി വീഴാതിരിക്കാനും കണങ്കാലിന് സംരക്ഷണം നൽകാനും.", specsEn: ["4mm–5mm deep rubber outsole lugs for wet rock & snow traction.", "High-ankle padded collar to prevent sprains on uneven boulders.", "Water-repellent breathable membrane for stream crossings."], specsMl: ["മികച്ച ഗ്രിപ്പ് നൽകുന്ന 4mm–5mm റബ്ബർ സോൾ.", "കണങ്കാലിന് സംരക്ഷണം നൽകുന്ന ഹൈ-ആങ്കിൾ ഡിസൈൻ.", "വെള്ളം ഉള്ളിലേക്ക് കടക്കാത്ത വാട്ടർപ്രൂഫ് മെംബ്രേൻ."] },
  { id: "rucksack", image: "images/rucksack.jpg", typeEn: "Luggage", typeMl: "ബാഗ്", nameEn: "50L–60L Rucksack with Rain Cover", nameMl: "50L–60L റക്സാക്ക് ബാഗ് (റെയിൻ കവർ)", price: "₹1,299 – ₹2,799", descEn: "Transfers load onto your hips during multi-day hikes with attached rain cover.", descMl: "ഭാരം തോളിൽ നിന്ന് അരക്കെട്ടിലേക്ക് മാറ്റി നടത്തം എളുപ്പമാക്കുന്നു.", specsEn: ["Padded hip belt transfers 70% of load off shoulders.", "Internal stay rod keeps spine aligned on steep climbs.", "Includes waterproof rain cover for monsoon and snow."], specsMl: ["ഭാരം അരക്കെട്ടിലേക്ക് മാറ്റുന്ന പാഡഡ് ഹിപ് ബെൽറ്റ്.", "നട്ടെല്ലിന് ആയാസം കുറയ്ക്കുന്ന ബാക്ക് സപ്പോർട്ട്.", "വാട്ടർപ്രൂഫ് റെയിൻ കവർ ഉൾപ്പെടുന്നു."] },
  { id: "jacket", image: "images/jacket.jpg", typeEn: "Outerwear", typeMl: "ജാക്കറ്റ്", nameEn: "3-in-1 Padded Windproof & Snow Jacket", nameMl: "വിൻഡ് പ്രൂഫ് & സ്നോ ജാക്കറ്റ്", price: "₹1,699 – ₹3,299", descEn: "Blocks sub-zero Himalayan winds at high passes like Kedarkantha and Ladakh.", descMl: "മൈനസ് ഡിഗ്രി തണുപ്പുള്ള ഹിമാലയൻ കാറ്റിനെ തടയാനും ചൂട് നിലനിർത്താനും.", specsEn: ["Rated down to -5°C to -10°C with thermal layering.", "Windproof outer shell stops icy mountain gusts.", "Detachable inner fleece for versatile South India use."], specsMl: ["-5°C മുതൽ -10°C വരെയുള്ള തണുപ്പിനെ പ്രതിരോധിക്കുന്നു.", "തണുത്ത കാറ്റിനെ തടയുന്ന വിൻഡ് പ്രൂഫ് ഷെൽ.", "വേർപെടുത്താവുന്ന ഇന്നർ ഫ്ലീസ്."] },
  { id: "thermals", image: "images/thermals.jpg", typeEn: "Layering", typeMl: "തെർമൽ വസ്ത്രം", nameEn: "Thermal Inner Wear (Top & Bottom)", nameMl: "തെർമൽ ഇന്നർ വെയർ", price: "₹599 – ₹999", descEn: "Second-skin base layer trapping warmth during freezing campsite nights.", descMl: "കൊടും തണുപ്പിൽ ശരീരത്തിന് ചൂട് നൽകുന്ന ബേസ് ലെയർ.", specsEn: ["Moisture-wicking fabric prevents sweat chill.", "Ultra-lightweight and compact inside rucksacks.", "Essential sleepwear for sub-zero tent camps."], specsMl: ["വിയർപ്പ് വലിച്ചെടുത്ത് ചൂട് നിലനിർത്തുന്ന തുണി.", "ഭാരം കുറഞ്ഞതും ബാഗിൽ ഒതുങ്ങുന്നതും.", "രാത്രി ടെന്റ് ക്യാമ്പിംഗിന് അത്യന്താപേക്ഷിതം."] },
  { id: "pole", image: "images/pole.jpg", typeEn: "Support", typeMl: "സപ്പോർട്ട്", nameEn: "Adjustable Aluminium Trekking Pole", nameMl: "ട്രെക്കിംഗ് പോൾ (വടി)", price: "₹499 – ₹899", descEn: "Reduces knee impact by 25% on steep descents and tests snow depth.", descMl: "മലയിറങ്ങുമ്പോൾ കാൽമുട്ടുകളിലുണ്ടാകുന്ന ആഘാതം കുറയ്ക്കുന്നു.", specsEn: ["Telescopic 3-section shaft adjusts to any height.", "Anti-shock spring absorbs downhill knee stress.", "Includes removable snow basket."], specsMl: ["ഉയരം ക്രമീകരിക്കാവുന്ന 3-സെക്ഷൻ അലുമിനിയം പോൾ.", "കാൽമുട്ടുകൾക്ക് സംരക്ഷണം നൽകുന്ന ആന്റി-ഷോക്ക് സംവിധാനം.", "സ്നോ ബാസ്കറ്റ് ഉൾപ്പെടുന്നു."] },
  { id: "headlamp", image: "images/headlamp.jpg", typeEn: "Lighting", typeMl: "ലൈറ്റ്", nameEn: "LED Headlamp (Hands-Free)", nameMl: "എൽ.ഇ.ഡി ഹെഡ്‌ലാമ്പ്", price: "₹299 – ₹699", descEn: "Crucial for 3:00 AM summit pushes and night camping with both hands free.", descMl: "പുലർച്ചെയുള്ള സമ്മിറ്റ് ട്രെക്കിംഗിനും രാത്രി ക്യാമ്പിംഗിനും കൈകൾ സ്വതന്ത്രമാക്കി വെളിച്ചം നൽകുന്നു.", specsEn: ["Hands-free illumination for poles and rock holds.", "High, low, and red night-vision beam modes.", "Essential for pre-dawn summit climbs."], specsMl: ["കൈകൾ സ്വതന്ത്രമാക്കി വെളിച്ചം നൽകുന്നു.", "ഹൈ, ലോ, റെഡ് മോഡുകൾ.", "പുലർച്ചെയുള്ള യാത്രകൾക്ക് അത്യന്താപേക്ഷിതം."] },
  { id: "poncho", image: "images/poncho.jpg", typeEn: "Rain Gear", typeMl: "മഴക്കോട്ട", nameEn: "Heavy-Duty Poncho Raincoat", nameMl: "പോഞ്ചോ റെയിൻകോട്ട്", price: "₹349 – ₹699", descEn: "Covers both your body and 60L rucksack simultaneously during heavy rain.", descMl: "മഴയിൽ നിങ്ങളെയും ബാഗിനെയും ഒരുമിച്ച് സംരക്ഷിക്കുന്നു.", specsEn: ["Wide-cut design slips over a full 60L rucksack.", "Sealed waterproof seams for Western Ghats monsoons.", "Doubles as an emergency groundsheet."], specsMl: ["60L ബാഗിന് മുകളിലൂടെ ധരിക്കാവുന്ന ഡിസൈൻ.", "കനത്ത മഴയെ പ്രതിരോധിക്കുന്ന സീൽഡ് സീമുകൾ.", "മൺസൂൺ ട്രെക്കിംഗുകൾക്ക് അനുയോജ്യം."] },
  { id: "sunglasses", image: "images/sunglasses.jpg", typeEn: "Accessories", typeMl: "മറ്റ് സാധനങ്ങൾ", nameEn: "UV400 Polarized Sunglasses & Wool Socks", nameMl: "UV സൺഗ്ലാസ് & വൂളൻ സോക്സ്", price: "₹399 – ₹799", descEn: "Prevents snow blindness at high altitude and keeps toes warm in damp boots.", descMl: "മഞ്ഞിലെ സൂര്യപ്രകാശത്തിൽ നിന്ന് കണ്ണുകളെയും തണുപ്പിൽ നിന്ന് കാലുകളെയും സംരക്ഷിക്കുന്നു.", specsEn: ["100% UV400 protection against snow glare.", "Thermal wool socks prevent frostbite and blisters.", "Mandatory for all Himalayan snow treks."], specsMl: ["സൂര്യരശ്മികളിൽ നിന്ന് കണ്ണുകളെ സംരക്ഷിക്കുന്ന UV400 ഗ്ലാസ്.", "തണുപ്പിൽ കാലുകളെ സംരക്ഷിക്കുന്ന വൂളൻ സോക്സ്.", "ഹിമാലയൻ യാത്രകൾക്ക് നിർബന്ധം."] }
];

/* =========================================================
   3. FEATURED EDITING & SHOOTING COURSES + KNOWLEDGE HUB
   ========================================================= */
const coursesData = [
  {
    id: "course-video-edit",
    image: "images/places/kedarkantha.jpg",
    typeEn: "Video Editing • 4 Weeks",
    typeMl: "വീഡിയോ എഡിറ്റിംഗ് • 4 ആഴ്ച",
    nameEn: "Pro Travel & Reel Video Editing (CapCut & Premiere)",
    nameMl: "പ്രോ ട്രാവൽ & റീൽ വീഡിയോ എഡിറ്റിംഗ്",
    price: "₹1,499",
    descEn: "Learn beat-sync cuts, speed ramping, keyframe transitions, sound design, and color grading for Instagram Reels & YouTube.",
    descMl: "ബീറ്റ്-സിങ്ക് കട്ടുകൾ, സ്പീഡ് റാമ്പിംഗ്, സൗണ്ട് ഡിസൈൻ, കളർ ഗ്രേഡിംഗ് എന്നിവ പ്രായോഗികമായി പഠിക്കാം.",
    specsEn: [
      "Module 1: Timeline workflow, J-cuts, L-cuts & rhythm pacing.",
      "Module 2: Speed ramping, smooth keyframes & masking transitions.",
      "Module 3: Layered SFX (whooshes, risers, ambient foley) & vocal clarity.",
      "Module 4: Export settings (1080p/4K 60fps) for zero-compression uploads."
    ],
    specsMl: [
      "മൊഡ്യൂൾ 1: ടൈംലൈൻ എഡിറ്റിംഗും പേസിംഗും.",
      "മൊഡ്യൂൾ 2: സ്പീഡ് റാമ്പിംഗ്, കീഫ്രെയിം ട്രാൻസിഷനുകൾ.",
      "മൊഡ്യൂൾ 3: സൗണ്ട് ഇഫക്റ്റുകളും (SFX) ഓഡിയോ മിക്സിംഗും.",
      "മൊഡ്യൂൾ 4: 1080p/4K 60fps എക്സ്പോർട്ട് സെറ്റിംഗുകൾ."
    ]
  },
  {
    id: "course-photo-edit",
    image: "images/places/kolukkumalai.jpg",
    typeEn: "Photo Editing • 3 Weeks",
    typeMl: "ഫോട്ടോ എഡിറ്റിംഗ് • 3 ആഴ്ച",
    nameEn: "Lightroom & Snapseed Color Grading Mastery",
    nameMl: "ലൈറ്റ്‌റൂം & സ്നാപ്സീഡ് കളർ ഗ്രേഡിംഗ്",
    price: "₹999",
    descEn: "Master RAW exposure recovery, tone curves, HSL color isolation, and moody travel presets on mobile and desktop.",
    descMl: "മൊബൈലിലും കമ്പ്യൂട്ടറിലും പ്രൊഫഷണൽ കളർ ഗ്രേഡിംഗും പ്രീസെറ്റ് നിർമ്മാണവും പഠിക്കാം.",
    specsEn: [
      "Module 1: Histogram reading, dynamic range & RAW highlight recovery.",
      "Module 2: S-curve contrast, HSL color grading & skin-tone protection.",
      "Module 3: Linear/radial sky masking & selective subject lighting.",
      "Module 4: Building and saving your own signature preset pack."
    ],
    specsMl: [
      "മൊഡ്യൂൾ 1: എക്സ്പോഷർ, ഹിസ്റ്റോഗ്രാം, RAW എഡിറ്റിംഗ്.",
      "മൊഡ്യൂൾ 2: ടോൺ കർവ്, HSL കളർ ഗ്രേഡിംഗ്.",
      "മൊഡ്യൂൾ 3: സ്കൈ മാസ്കിംഗും ലൈറ്റിംഗ് ക്രമീകരണവും.",
      "മൊഡ്യൂൾ 4: സ്വന്തമായി പ്രീസെറ്റുകൾ നിർമ്മിക്കൽ."
    ]
  },
  {
    id: "course-video-shoot",
    image: "images/places/ladakh.jpg",
    typeEn: "Video Shooting • 3 Weeks",
    typeMl: "വീഡിയോ ഷൂട്ടിംഗ് • 3 ആഴ്ച",
    nameEn: "Cinematic Mobile & Camera Videography",
    nameMl: "സിനിമാറ്റിക് വീഡിയോ ഷൂട്ടിംഗ് കോഴ്സ്",
    price: "₹1,299",
    descEn: "Shoot ultra-smooth handheld gimbal-like shots, master frame rates (24/60fps), shutter speed, and natural lighting.",
    descMl: "മൊബൈലിലും ക്യാമറയിലും സിനിമാറ്റിക് വീഡിയോകൾ ഷൂട്ട് ചെയ്യാനുള്ള ടെക്നിക്കുകൾ.",
    specsEn: [
      "Module 1: 180-degree shutter rule, ISO control & frame rate selection.",
      "Module 2: Ninja walk, parallax foreground reveals & whip-pan movements.",
      "Module 3: Shooting in harsh mountain sun vs. golden/blue hour.",
      "Module 4: Storyboarding travel sequences (Establishing, Medium, Detail shots)."
    ],
    specsMl: [
      "മൊഡ്യൂൾ 1: ഷട്ടർ സ്പീഡ്, ISO, ഫ്രെയിം റേറ്റ് (24/60fps).",
      "മൊഡ്യൂൾ 2: സ്റ്റെഡി ഹാൻഡ്‌ഹെൽഡ് മൂവ്‌മെന്റുകളും പാരലാക്സ് ഷോട്ടുകളും.",
      "മൊഡ്യൂൾ 3: ഗോൾഡൻ അവർ ലൈറ്റിംഗ് ഉപയോഗിക്കുന്ന വിധം.",
      "മൊഡ്യൂൾ 4: ട്രാവൽ സ്റ്റോറിബോർഡിംഗ്."
    ]
  },
  {
    id: "course-photo-shoot",
    image: "images/places/munnar.jpg",
    typeEn: "Photo Shooting • 3 Weeks",
    typeMl: "ഫോട്ടോ ഷൂട്ടിംഗ് • 3 ആഴ്ച",
    nameEn: "Outdoor, Landscape & Portrait Photography",
    nameMl: "ഔട്ട്‌ഡോർ & പോർട്രെയ്റ്റ് ഫോട്ടോഗ്രാഫി",
    price: "₹1,199",
    descEn: "Learn Rule of Thirds, leading lines, depth of field, long-exposure waterfalls, and sharp portrait framing.",
    descMl: "മനോഹരമായ ലാൻഡ്സ്കേപ്പ്, പോർട്രെയ്റ്റ് ഫോട്ടോകൾ എടുക്കാനുള്ള പ്രായോഗിക പരിശീലനം.",
    specsEn: [
      "Module 1: Exposure triangle (Aperture, Shutter Speed, ISO) in Manual/Pro mode.",
      "Module 2: Composition rules—leading lines, framing, symmetry & negative space.",
      "Module 3: Long-exposure silky waterfalls & night star photography.",
      "Module 4: Posing and natural backlight control for outdoor portraits."
    ],
    specsMl: [
      "മൊഡ്യൂൾ 1: മാനുവൽ/പ്രോ മോഡ് സെറ്റിംഗുകൾ.",
      "മൊഡ്യൂൾ 2: കോമ്പോസിഷൻ നിയമങ്ങളും ഫ്രെയിമിംഗും.",
      "മൊഡ്യൂൾ 3: വെള്ളച്ചാട്ടങ്ങളുടെ ലോംഗ് എക്സ്പോഷർ ഫോട്ടോഗ്രാഫി.",
      "മൊഡ്യൂൾ 4: ഔട്ട്‌ഡോർ പോർട്രെയ്റ്റ് ലൈറ്റിംഗ്."
    ]
  }
];

const knowledgeData = [
  {
    titleEn: "🎬 Video Editing Facts & Knowledge",
    titleMl: "🎬 വീഡിയോ എഡിറ്റിംഗ് അറിവുകൾ",
    pointsEn: [
      "The 3-Second Hook Rule: Viewers decide within 3 seconds—open with your strongest motion clip or crisp ambient sound.",
      "Cut on Action: Slice between two clips while the subject is mid-movement so transitions feel seamless.",
      "Audio is 50% of Video: Layer subtle wind, footsteps, and beat risers under music to bring travel videos alive.",
      "L-Cuts & J-Cuts: Start the audio of the next clip 1 second before the video cuts for cinematic pacing."
    ],
    pointsMl: [
      "3-സെക്കൻഡ് റൂൾ: വീഡിയോയുടെ ആദ്യ 3 സെക്കൻഡിൽ ഏറ്റവും മികച്ച ഷോട്ട് ഉൾപ്പെടുത്തുക.",
      "കട്ട് ഓൺ ആക്ഷൻ: ചലനത്തിനിടയിൽ കട്ട് ചെയ്യുന്നത് വീഡിയോ കൂടുതൽ സ്വാഭാവികമാക്കും.",
      "ഓഡിയോയുടെ പ്രാധാന്യം: സംഗീതത്തോടൊപ്പം പ്രകൃതിയുടെ ശബ്ദങ്ങളും (SFX) ഉൾപ്പെടുത്തുക.",
      "L-കട്ട് & J-കട്ട്: അടുത്ത സീനിന്റെ ശബ്ദം ഒരു സെക്കൻഡ് മുമ്പ് നൽകുന്നത് പ്രൊഫഷണൽ ഫീൽ നൽകും."
    ]
  },
  {
    titleEn: "🎨 Photo Editing Facts & Knowledge",
    titleMl: "🎨 ഫോട്ടോ എഡിറ്റിംഗ് അറിവുകൾ",
    pointsEn: [
      "Shoot in RAW, Not Just JPEG: RAW files hold 4x–8x more shadow and highlight data for clean sky recovery.",
      "Protect Skin Tones: Keep Orange/Red luminance balanced when boosting Vibrance so portraits look natural.",
      "S-Curve Contrast: Slightly lifting the bottom-left point on a Tone Curve creates a clean filmic matte look.",
      "Radial Light Shaping: Use soft radial masks to draw focus toward mountain peaks or main subjects."
    ],
    pointsMl: [
      "RAW ഫോർമാറ്റ്: സാധാരണ JPEG-നേക്കാൾ കൂടുതൽ കളർ വിവരങ്ങൾ RAW ഫോട്ടോകളിൽ ലഭിക്കും.",
      "സ്കിൻ ടോൺ സംരക്ഷിക്കുക: സാച്ചുറേഷൻ കൂട്ടുമ്പോൾ മുഖത്തിന്റെ സ്വാഭാവിക നിറം നഷ്ടപ്പെടാതെ ശ്രദ്ധിക്കുക.",
      "ടോൺ കർവ്: S-കർവ് ഉപയോഗിച്ച് ഫോട്ടോകൾക്ക് സിനിമാറ്റിക് കോൺട്രാസ്റ്റ് നൽകാം.",
      "മാസ്കിംഗ്: ആകാശത്തിനും മലനിരകൾക്കും പ്രത്യേകം ലൈറ്റിംഗ് നൽകാൻ മാസ്കിംഗ് ഉപയോഗിക്കുക."
    ]
  },
  {
    titleEn: "🎥 Video Shot Facts & Knowledge",
    titleMl: "🎥 വീഡിയോ ഷൂട്ടിംഗ് അറിവുകൾ",
    pointsEn: [
      "180-Degree Shutter Rule: Set shutter speed to double your frame rate (1/50s at 24fps, 1/120s at 60fps) for natural motion.",
      "Lock Exposure & Focus: Press and hold on your screen to lock AE/AF so brightness never flickers mid-shot.",
      "Foreground Parallax: Glide the camera past tree branches, rocks, or windows to create instant 3D depth.",
      "Shoot 60fps for Slow-Mo: Record action at 60fps and slow to 40% on a 24fps timeline for smooth slow motion."
    ],
    pointsMl: [
      "ഷട്ടർ സ്പീഡ് നിയമം: ഫ്രെയിം റേറ്റിന്റെ ഇരട്ടി ഷട്ടർ സ്പീഡ് (24fps-ന് 1/50s) നൽകുക.",
      "AE/AF ലോക്ക്: ഷൂട്ട് ചെയ്യുമ്പോൾ സ്ക്രീനിൽ അമർത്തിപ്പിടിച്ച് എക്സ്പോഷർ ലോക്ക് ചെയ്യുക.",
      "ഫോർഗ്രൗണ്ട് ഡെപ്ത്: മരച്ചില്ലകൾക്കോ പാറകൾക്കോ പിന്നിലൂടെ ക്യാമറ ചലിപ്പിക്കുന്നത് 3D ഇഫക്റ്റ് നൽകും.",
      "സ്ലോ മോഷൻ: 60fps-ൽ ഷൂട്ട് ചെയ്ത് എഡിറ്റിംഗിൽ വേഗത കുറച്ചാൽ സ്മൂത്ത് സ്ലോ-മോഷൻ ലഭിക്കും."
    ]
  },
  {
    titleEn: "📸 Photo Shot Facts & Knowledge",
    titleMl: "📸 ഫോട്ടോ ഷൂട്ടിംഗ് അറിവുകൾ",
    pointsEn: [
      "Golden Hour & Blue Hour: The 45 minutes after sunrise and before sunset give warm, soft directional light.",
      "Rule of Thirds & Leading Lines: Place horizons on grid lines and use trails or rivers to guide the eye.",
      "Clean Your Lens First: A single fingerprint smudge causes hazy flares—wipe your lens before every shot.",
      "Add Human Scale: Including a lone trekker or tent in front of huge peaks communicates true mountain scale."
    ],
    pointsMl: [
      "ഗോൾഡൻ അവർ: സൂര്യോദയത്തിന് ശേഷവും അസ്തമയത്തിന് മുമ്പുമുള്ള 45 മിനിറ്റ് ഫോട്ടോഗ്രാഫിക്ക് ഏറ്റവും മികച്ച സമയമാണ്.",
      "റൂൾ ഓഫ് തേർഡ്സ്: ഗ്രിഡ് ലൈനുകൾ ഉപയോഗിച്ച് സബ്ജക്റ്റിനെ കൃത്യമായി ഫ്രെയിം ചെയ്യുക.",
      "ലെൻസ് വൃത്തിയാക്കുക: ഷൂട്ട് ചെയ്യുന്നതിന് മുമ്പ് ക്യാമറ ലെൻസ് തുടയ്ക്കുന്നത് ഫോട്ടോയ്ക്ക് വ്യക്തത നൽകും.",
      "സ്കെയിൽ നൽകുക: വലിയ മലനിരകളുടെ ഫോട്ടോ എടുക്കുമ്പോൾ ഒരു സഞ്ചാരിയെക്കൂടി ഉൾപ്പെടുത്തുന്നത് വലിപ്പം വ്യക്തമാക്കും."
    ]
  }
];

/* =========================================================
   STATE & DOM ELEMENTS
   ========================================================= */
let currentLang = 'en';
let currentFilter = 'all';
let currentSort = 'default';
let weatherCache = {};
let authToken = localStorage.getItem('suggayittAuthToken') || '';
let activeDetailContext = null;
let currentProfileTab = 'cart';

const mainPageView = document.getElementById('mainPageView');
const packagesPageView = document.getElementById('packagesPageView');
const storePageView = document.getElementById('storePageView');
const studioPageView = document.getElementById('studioPageView');
const discoverPageView = document.getElementById('discoverPageView');
const profilePageView = document.getElementById('profilePageView');
const detailsPageView = document.getElementById('detailsPageView');
const notFoundPageView = document.getElementById('notFoundPageView');

const discoverGrid = document.getElementById('discoverGrid');
const triviaGrid = document.getElementById('triviaGrid');
const discoverModal = document.getElementById('discoverModal');
const discoverModalContent = document.getElementById('discoverModalContent');
let currentDiscoverFilter = 'all';

const detailsBackBar = document.getElementById('detailsBackBar');
const detailsContent = document.getElementById('detailsContent');
const suggestionInput = document.getElementById('suggestionInput');

const placesGrid = document.getElementById('placesGrid');
const packagesList = document.getElementById('packagesList');
const storeGrid = document.getElementById('storeGrid');
const coursesGrid = document.getElementById('coursesGrid');
const knowledgeGrid = document.getElementById('knowledgeGrid');
const langSelect = document.getElementById('langSelect');

const placeSearchInput = document.getElementById('placeSearchInput');
const placeSearchBtn = document.getElementById('placeSearchBtn');
const placesDatalist = document.getElementById('placesDatalist');

/* Auth Elements */
const authModal = document.getElementById('authModal');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const tabLoginBtn = document.getElementById('tabLoginBtn');
const tabSignupBtn = document.getElementById('tabSignupBtn');
const authFeedbackMsg = document.getElementById('authFeedbackMsg');
const authNavGroup = document.getElementById('authNavGroup');
const userProfileGroup = document.getElementById('userProfileGroup');
const loggedInUserBadge = document.getElementById('loggedInUserBadge');

function populateSearchDatalist() {
  const placeOptions = destinationsData.map(p => `
    <option value="${p.nameEn}">${p.nameMl} — ${p.regionEn}</option>
    <option value="${p.nameMl}">${p.nameEn} — ${p.regionMl}</option>
  `).join('');

  const gearOptions = storeItemsData.map(g => `
    <option value="${g.nameEn}">${g.nameMl} — Store (${g.price})</option>
    <option value="${g.nameMl}">${g.nameEn} — സ്റ്റോർ (${g.price})</option>
  `).join('');

  const courseOptions = coursesData.map(c => `
    <option value="${c.nameEn}">${c.nameMl} — Course (${c.price})</option>
    <option value="${c.nameMl}">${c.nameEn} — കോഴ്സ് (${c.price})</option>
  `).join('');

  const dList = (typeof discoverData !== 'undefined' ? discoverData : (window.discoverData || []));
  const discoverOptions = dList.map(d => `
    <option value="${d.titleEn}">${d.titleMl} — Discover & Learn</option>
    <option value="${d.titleMl}">${d.titleEn} — അറിയാം, പഠിക്കാം</option>
  `).join('');

  placesDatalist.innerHTML = placeOptions + gearOptions + courseOptions + discoverOptions;
}

function setActiveNav(navId) {
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-nav'));
  const activeEl = document.getElementById(navId);
  if (activeEl) activeEl.classList.add('active-nav');
}

function hideAllViews() {
  mainPageView.classList.add('hidden');
  packagesPageView.classList.add('hidden');
  storePageView.classList.add('hidden');
  studioPageView.classList.add('hidden');
  if (discoverPageView) discoverPageView.classList.add('hidden');
  profilePageView.classList.add('hidden');
  detailsPageView.classList.add('hidden');
  notFoundPageView.classList.add('hidden');
}

function showMainView(sectionId) {
  activeDetailContext = null;
  hideAllViews();
  mainPageView.classList.remove('hidden');

  if (sectionId === 'best-places') setActiveNav('nav-places');
  else if (sectionId === 'about') setActiveNav('nav-about');
  else setActiveNav('nav-home');

  if (sectionId && window.location.hash !== '#' + sectionId) {
    history.replaceState(null, '', '#' + sectionId);
  }

  if (sectionId) {
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function openPage(pageName) {
  activeDetailContext = null;
  hideAllViews();

  if (window.location.hash !== '#' + pageName) {
    history.pushState(null, '', '#' + pageName);
  }

  if (pageName === 'packages') {
    packagesPageView.classList.remove('hidden');
    setActiveNav('nav-packages');
    renderPackages();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (pageName === 'store') {
    storePageView.classList.remove('hidden');
    setActiveNav('nav-store');
    renderStore();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (pageName === 'studio') {
    studioPageView.classList.remove('hidden');
    setActiveNav('nav-studio');
    renderStudio();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (pageName === 'discover') {
    if (discoverPageView) discoverPageView.classList.remove('hidden');
    setActiveNav('nav-discover');
    renderDiscover();
    renderTrivia();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (pageName === 'profile') {
    const activeUser = JSON.parse(localStorage.getItem('suggayittActiveUser') || 'null');
    if (!activeUser) {
      openAuthModal('login');
      return;
    }
    profilePageView.classList.remove('hidden');
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-nav'));
    renderProfileDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function openDetailsPage(type, itemId) {
  activeDetailContext = { type, id: itemId };
  hideAllViews();
  detailsPageView.classList.remove('hidden');

  const activeUser = JSON.parse(localStorage.getItem('suggayittActiveUser') || 'null');
  const userGreeting = activeUser ? `Hello%20Suggayitt%20Povaa%2C%20I%20am%20${encodeURIComponent(activeUser.name)}.%20` : 'Hello%20Suggayitt%20Povaa%2C%20';

  if (type === 'place') {
    setActiveNav('nav-packages');
    const place = destinationsData.find(p => p.id === itemId);
    if (!place) return;

    const title = currentLang === 'ml' ? place.nameMl : place.nameEn;
    const region = currentLang === 'ml' ? place.regionMl : place.regionEn;
    const duration = currentLang === 'ml' ? place.durationMl : place.durationEn;
    const brief = currentLang === 'ml' ? place.briefMl : place.briefEn;
    const season = currentLang === 'ml' ? place.bestSeasonMl : place.bestSeasonEn;
    const steps = currentLang === 'ml' ? place.itineraryMl : place.itineraryEn;
    const saved = isItemSaved('savedPackages', place.id);

    detailsBackBar.innerHTML = `
      <button type="button" class="btn-back" onclick="openPage('packages')">
        ${currentLang === 'ml' ? '← എല്ലാ പാക്കേജുകളിലേക്കും മടങ്ങുക' : '← Back to All Packages'}
      </button>
      <button type="button" class="btn-back" onclick="showMainView('best-places')">
        ${currentLang === 'ml' ? '← ഹോമിലേക്ക്' : '← Back to Home'}
      </button>
    `;

    detailsContent.innerHTML = `
      <div class="details-hero-grid">
        <img src="${place.image}" alt="${place.nameEn}" class="details-banner-img" onerror="this.style.display='none'">
        <div>
          <span class="details-badge">${region}</span>
          <h1 class="details-title">${title}</h1>
          <div class="details-meta-row">
            <span class="details-price-tag">${place.cost}</span>
            <span class="details-duration-tag">${duration}</span>
          </div>
          <p class="details-lead">${brief}</p>
        </div>
      </div>

      <div class="details-body-section">
        <h3>${currentLang === 'ml' ? 'സന്ദർശിക്കാൻ അനുയോജ്യമായ സമയം' : 'Best Season to Visit'}</h3>
        <p>${season}</p>
      </div>

      <div class="details-body-section">
        <h3>${currentLang === 'ml' ? 'യാത്രാ പരിപാടി (കേരളത്തിൽ നിന്ന് പോയി വരാൻ)' : 'Complete Day-by-Day Itinerary (From Kerala & Return)'}</h3>
        <ul class="details-itinerary-list">
          ${steps.map(step => `<li>• ${step}</li>`).join('')}
        </ul>
      </div>

      <div class="details-action-bar">
        <a href="https://wa.me/917012274317?text=${userGreeting}I%20want%20to%20enquire%20and%20book%20the%20${encodeURIComponent(place.nameEn)}%20package." 
           target="_blank" onclick="recordUserBooking('place', '${place.nameEn}', '${place.cost}')" class="btn-whatsapp">
          ${currentLang === 'ml' ? 'വാട്സാപ്പിൽ ബുക്ക് / അന്വേഷണം നടത്താം' : 'Enquire & Book on WhatsApp'}
        </a>
        <button type="button" class="btn-save-icon ${saved ? 'saved' : ''}" onclick="toggleProfileItem('savedPackages', '${place.id}', event)">
          ${saved ? (currentLang === 'ml' ? '♥ സേവ് ചെയ്തു' : '♥ Saved in Profile') : (currentLang === 'ml' ? '♡ പാക്കേജ് സേവ് ചെയ്യുക' : '♡ Save Package')}
        </button>
        <a href="tel:+917012274317" class="btn-outline">
          ${currentLang === 'ml' ? 'വിളിക്കുക: +91 70122 74317' : 'Call Now: +91 70122 74317'}
        </a>
      </div>
    `;
  } else if (type === 'gear') {
    setActiveNav('nav-store');
    const gear = storeItemsData.find(g => g.id === itemId);
    if (!gear) return;

    const title = currentLang === 'ml' ? gear.nameMl : gear.nameEn;
    const category = currentLang === 'ml' ? gear.typeMl : gear.typeEn;
    const desc = currentLang === 'ml' ? gear.descMl : gear.descEn;
    const specs = currentLang === 'ml' ? gear.specsMl : gear.specsEn;
    const inCart = isItemSaved('cart', gear.id);

    detailsBackBar.innerHTML = `
      <button type="button" class="btn-back" onclick="openPage('store')">
        ${currentLang === 'ml' ? '← സ്റ്റോറിലേക്ക് മടങ്ങുക' : '← Back to Store'}
      </button>
      <button type="button" class="btn-back" onclick="showMainView('home')">
        ${currentLang === 'ml' ? '← ഹോമിലേക്ക്' : '← Back to Home'}
      </button>
    `;

    detailsContent.innerHTML = `
      <div class="details-hero-grid">
        <img src="${gear.image}" alt="${gear.nameEn}" class="details-banner-img" onerror="this.style.display='none'">
        <div>
          <span class="details-badge">${category}</span>
          <h1 class="details-title">${title}</h1>
          <div class="details-meta-row">
            <span class="details-price-tag">${gear.price}</span>
          </div>
          <p class="details-lead">${desc}</p>
        </div>
      </div>

      <div class="details-body-section">
        <h3>${currentLang === 'ml' ? 'പ്രത്യേകതകളും പ്രാധാന്യവും' : 'Key Features & Why You Need It'}</h3>
        <ul class="details-itinerary-list">
          ${specs.map(spec => `<li>• ${spec}</li>`).join('')}
        </ul>
      </div>

      <div class="details-action-bar">
        <a href="https://wa.me/917012274317?text=${userGreeting}I%20want%20to%20order%20${encodeURIComponent(gear.nameEn)}." 
           target="_blank" onclick="recordUserBooking('gear', '${gear.nameEn}', '${gear.price}')" class="btn-whatsapp">
          ${currentLang === 'ml' ? 'വാട്സാപ്പിൽ ഓർഡർ / അന്വേഷണം നടത്താം' : 'Enquire / Order on WhatsApp'}
        </a>
        <button type="button" class="btn-save-icon ${inCart ? 'saved' : ''}" onclick="toggleProfileItem('cart', '${gear.id}', event)">
          ${inCart ? (currentLang === 'ml' ? '✓ കാർട്ടിൽ ഉണ്ട്' : '✓ Added to Cart') : (currentLang === 'ml' ? '+ കാർട്ടിലേക്ക് ചേർക്കുക' : '+ Add to Cart')}
        </button>
        <a href="tel:+917012274317" class="btn-outline">
          ${currentLang === 'ml' ? 'വിളിക്കുക: +91 70122 74317' : 'Call Now: +91 70122 74317'}
        </a>
      </div>
    `;
  } else if (type === 'course') {
    setActiveNav('nav-studio');
    const course = coursesData.find(c => c.id === itemId);
    if (!course) return;

    const title = currentLang === 'ml' ? course.nameMl : course.nameEn;
    const category = currentLang === 'ml' ? course.typeMl : course.typeEn;
    const desc = currentLang === 'ml' ? course.descMl : course.descEn;
    const specs = currentLang === 'ml' ? course.specsMl : course.specsEn;
    const saved = isItemSaved('savedCourses', course.id);

    detailsBackBar.innerHTML = `
      <button type="button" class="btn-back" onclick="openPage('studio')">
        ${currentLang === 'ml' ? '← ക്രിയേറ്റർ സ്റ്റുഡിയോയിലേക്ക് മടങ്ങുക' : '← Back to Creator Studio'}
      </button>
      <button type="button" class="btn-back" onclick="showMainView('home')">
        ${currentLang === 'ml' ? '← ഹോമിലേക്ക്' : '← Back to Home'}
      </button>
    `;

    detailsContent.innerHTML = `
      <div class="details-hero-grid">
        <img src="${course.image}" alt="${course.nameEn}" class="details-banner-img" onerror="this.style.display='none'">
        <div>
          <span class="details-badge">${category}</span>
          <h1 class="details-title">${title}</h1>
          <div class="details-meta-row">
            <span class="details-price-tag">${currentLang === 'ml' ? 'കോഴ്സ് ഫീസ്:' : 'Course Fee:'} ${course.price}</span>
          </div>
          <p class="details-lead">${desc}</p>
        </div>
      </div>

      <div class="details-body-section">
        <h3>${currentLang === 'ml' ? 'കോഴ്സ് സിലബസും മൊഡ്യൂളുകളും' : 'Course Syllabus & Modules'}</h3>
        <ul class="details-itinerary-list">
          ${specs.map(spec => `<li>• ${spec}</li>`).join('')}
        </ul>
      </div>

      <div class="details-action-bar">
        <a href="https://wa.me/917012274317?text=${userGreeting}I%20want%20to%20join%20the%20${encodeURIComponent(course.nameEn)}%20course." 
           target="_blank" onclick="recordUserBooking('course', '${course.nameEn}', '${course.price}')" class="btn-whatsapp">
          ${currentLang === 'ml' ? 'വാട്സാപ്പിൽ കോഴ്സിന് ചേരാം' : 'Enroll / Enquire on WhatsApp'}
        </a>
        <button type="button" class="btn-save-icon ${saved ? 'saved' : ''}" onclick="toggleProfileItem('savedCourses', '${course.id}', event)">
          ${saved ? (currentLang === 'ml' ? '♥ സേവ് ചെയ്തു' : '♥ Saved Course') : (currentLang === 'ml' ? '♡ കോഴ്സ് സേവ് ചെയ്യുക' : '♡ Save Course')}
        </button>
        <a href="tel:+917012274317" class="btn-outline">
          ${currentLang === 'ml' ? 'വിളിക്കുക: +91 70122 74317' : 'Call Now: +91 70122 74317'}
        </a>
      </div>
    `;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openNotFoundPage(rawQuery) {
  activeDetailContext = { type: 'notfound', id: rawQuery };
  hideAllViews();
  notFoundPageView.classList.remove('hidden');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active-nav'));

  const headingEl = document.getElementById('notFoundHeading');
  headingEl.textContent = currentLang === 'ml'
    ? `ക്ഷമിക്കണം, "${rawQuery}" കണ്ടെത്താനായില്ല!`
    : `Sorry, we couldn't find "${rawQuery}"!`;

  suggestionInput.value = currentLang === 'ml'
    ? `എന്റെ നിർദ്ദേശം / തിരഞ്ഞത്: ${rawQuery} - `
    : `My suggestion / searched item: ${rawQuery} - `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitSuggestion(method) {
  const text = suggestionInput.value.trim();
  if (!text) {
    suggestionInput.focus();
    return;
  }

  // Persist suggestion into SQLite database
  fetch('/api/suggestions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(authToken ? { 'Authorization': `Bearer ${authToken}` } : {})
    },
    body: JSON.stringify({ method, message: text })
  }).catch(err => console.warn('SQLite suggestion sync notice:', err));

  if (method === 'whatsapp') {
    const waUrl = `https://wa.me/917012274317?text=${encodeURIComponent('Hello Suggayitt Povaa Team, ' + text)}`;
    window.open(waUrl, '_blank');
  } else {
    const mailUrl = `mailto:suggayittpova@gmail.com?subject=${encodeURIComponent('Suggayitt Povaa Website Suggestion')}&body=${encodeURIComponent(text)}`;
    window.location.href = mailUrl;
  }
}

function handlePlaceSearch() {
  const rawInput = placeSearchInput.value.trim();
  const query = rawInput.toLowerCase();
  if (!query) return;

  const matchedPlace = destinationsData.find(place =>
    place.nameEn.toLowerCase().includes(query) ||
    place.nameMl.toLowerCase().includes(query) ||
    place.id.toLowerCase().includes(query) ||
    place.regionEn.toLowerCase().includes(query)
  );
  if (matchedPlace) {
    openDetailsPage('place', matchedPlace.id);
    placeSearchInput.value = '';
    return;
  }

  const matchedGear = storeItemsData.find(gear =>
    gear.nameEn.toLowerCase().includes(query) ||
    gear.nameMl.toLowerCase().includes(query) ||
    gear.id.toLowerCase().includes(query) ||
    gear.typeEn.toLowerCase().includes(query) ||
    gear.typeMl.toLowerCase().includes(query)
  );
  if (matchedGear) {
    openDetailsPage('gear', matchedGear.id);
    placeSearchInput.value = '';
    return;
  }

  const matchedCourse = coursesData.find(course =>
    course.nameEn.toLowerCase().includes(query) ||
    course.nameMl.toLowerCase().includes(query) ||
    course.id.toLowerCase().includes(query) ||
    course.typeEn.toLowerCase().includes(query) ||
    course.typeMl.toLowerCase().includes(query)
  );
  if (matchedCourse) {
    openDetailsPage('course', matchedCourse.id);
    placeSearchInput.value = '';
    return;
  }

  const dList = (typeof discoverData !== 'undefined' ? discoverData : (window.discoverData || []));
  const matchedDiscover = dList.find(d =>
    d.titleEn.toLowerCase().includes(query) ||
    d.titleMl.toLowerCase().includes(query) ||
    d.id.toLowerCase().includes(query) ||
    d.subtitleEn.toLowerCase().includes(query) ||
    d.subtitleMl.toLowerCase().includes(query) ||
    d.badgeEn.toLowerCase().includes(query) ||
    d.badgeMl.toLowerCase().includes(query)
  );
  if (matchedDiscover) {
    openPage('discover');
    setTimeout(() => openDiscoverModal(matchedDiscover.id), 200);
    placeSearchInput.value = '';
    return;
  }

  openNotFoundPage(rawInput);
  placeSearchInput.value = '';
}

placeSearchBtn.addEventListener('click', handlePlaceSearch);
placeSearchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handlePlaceSearch();
  }
});
placeSearchInput.addEventListener('change', handlePlaceSearch);

/* =========================================================
   4. RENDER CARDS (PLACES, PACKAGES, STORE, STUDIO)
   ========================================================= */
function handleSortChange(sortVal) {
  currentSort = sortVal;
  renderPackages();
}

function getWeatherBadgeHtml(placeId) {
  const w = weatherCache[placeId];
  if (!w) return '';
  const cond = currentLang === 'ml' ? w.conditionMl : w.conditionEn;
  return `<div class="weather-pill">${w.icon} ${w.tempC}°C • ${cond}</div>`;
}

function fetchLiveWeather() {
  destinationsData.forEach(dest => {
    if (!weatherCache[dest.id]) {
      fetch(`/api/weather/${dest.id}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.success && data.weather) {
            weatherCache[dest.id] = data.weather;
            const badgePlace = document.getElementById(`weather-place-${dest.id}`);
            const badgePkg = document.getElementById(`weather-pkg-${dest.id}`);
            const html = getWeatherBadgeHtml(dest.id);
            if (badgePlace) badgePlace.innerHTML = html;
            if (badgePkg) badgePkg.innerHTML = html;
          }
        })
        .catch(() => { });
    }
  });
}

function renderPlaces() {
  placesGrid.innerHTML = destinationsData.map(place => {
    const detailsBtnText = currentLang === 'ml' ? 'കൂടുതൽ വിവരങ്ങൾ' : 'More Details';
    const saved = isItemSaved('savedPackages', place.id);
    return `
      <div class="place-card" onclick="openDetailsPage('place', '${place.id}')">
        <div>
          <img src="${place.image}" alt="${place.nameEn}" class="place-img" onerror="this.style.display='none'">
          <div class="place-region">${currentLang === 'ml' ? place.regionMl : place.regionEn}</div>
          <h3>${currentLang === 'ml' ? place.nameMl : place.nameEn}</h3>
          <div id="weather-place-${place.id}">${getWeatherBadgeHtml(place.id)}</div>
          <p>${currentLang === 'ml' ? place.shortMl : place.shortEn}</p>
        </div>
        <div class="card-btn-row">
          <button type="button" class="btn-details" onclick="openDetailsPage('place', '${place.id}')">${detailsBtnText}</button>
          <button type="button" class="btn-save-icon ${saved ? 'saved' : ''}" onclick="toggleProfileItem('savedPackages', '${place.id}', event)">
            ${saved ? '♥ Saved' : '♡ Save'}
          </button>
        </div>
      </div>
    `;
  }).join('');
  fetchLiveWeather();
}

function renderPackages() {
  let list = currentFilter === 'all'
    ? [...destinationsData]
    : destinationsData.filter(d => d.category === currentFilter);

  const getCostNum = (pkg) => pkg.costNumeric || parseInt(pkg.cost.replace(/[^\d]/g, ''), 10) || 0;

  if (currentSort === 'price_asc') {
    list.sort((a, b) => getCostNum(a) - getCostNum(b));
  } else if (currentSort === 'price_desc') {
    list.sort((a, b) => getCostNum(b) - getCostNum(a));
  } else if (currentSort === 'altitude_desc') {
    list.sort((a, b) => (b.altitudeFt || 0) - (a.altitudeFt || 0));
  }

  packagesList.innerHTML = list.map(pkg => {
    const title = currentLang === 'ml' ? pkg.nameMl : pkg.nameEn;
    const duration = currentLang === 'ml' ? pkg.durationMl : pkg.durationEn;
    const summary = currentLang === 'ml' ? pkg.shortMl : pkg.shortEn;
    const detailsBtnText = currentLang === 'ml' ? 'കൂടുതൽ വിവരങ്ങൾ' : 'More Details';
    const saved = isItemSaved('savedPackages', pkg.id);

    return `
      <div class="package-card" id="pkg-${pkg.id}">
        <div>
          <img src="${pkg.image}" alt="${pkg.nameEn}" class="pkg-card-img" onerror="this.style.display='none'">
          <div class="pkg-header">
            <div>
              <h3>${title}</h3>
              <span class="pkg-duration">${duration}</span>
              <div id="weather-pkg-${pkg.id}">${getWeatherBadgeHtml(pkg.id)}</div>
            </div>
            <span class="pkg-cost">${pkg.cost}</span>
          </div>
          <p class="pkg-summary">${summary}</p>
        </div>
        <div class="card-btn-row">
          <button type="button" class="btn-details" onclick="openDetailsPage('place', '${pkg.id}')">${detailsBtnText}</button>
          <button type="button" class="btn-save-icon ${saved ? 'saved' : ''}" onclick="toggleProfileItem('savedPackages', '${pkg.id}', event)">
            ${saved ? '♥ Saved' : '♡ Save'}
          </button>
        </div>
      </div>
    `;
  }).join('');
  fetchLiveWeather();
}

function renderStore() {
  storeGrid.innerHTML = storeItemsData.map(item => {
    const detailsBtnText = currentLang === 'ml' ? 'കൂടുതൽ വിവരങ്ങൾ' : 'More Details';
    const inCart = isItemSaved('cart', item.id);
    return `
      <div class="gear-card">
        <div>
          <img src="${item.image}" alt="${item.nameEn}" class="gear-img" onerror="this.style.display='none'">
          <div class="gear-top">
            <span class="gear-type">${currentLang === 'ml' ? item.typeMl : item.typeEn}</span>
            <span class="gear-price">${item.price}</span>
          </div>
          <h3>${currentLang === 'ml' ? item.nameMl : item.nameEn}</h3>
          <p>${currentLang === 'ml' ? item.descMl : item.descEn}</p>
        </div>
        <div class="card-btn-row">
          <button type="button" class="btn-details" onclick="openDetailsPage('gear', '${item.id}')">${detailsBtnText}</button>
          <button type="button" class="btn-save-icon ${inCart ? 'saved' : ''}" onclick="toggleProfileItem('cart', '${item.id}', event)">
            ${inCart ? '✓ Cart' : '+ Cart'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderStudio() {
  const detailsBtnText = currentLang === 'ml' ? 'കൂടുതൽ വിവരങ്ങൾ' : 'More Details';
  coursesGrid.innerHTML = coursesData.map(course => {
    const saved = isItemSaved('savedCourses', course.id);
    return `
      <div class="gear-card">
        <div>
          <img src="${course.image}" alt="${course.nameEn}" class="gear-img" onerror="this.style.display='none'">
          <div class="gear-top">
            <span class="gear-type">${currentLang === 'ml' ? course.typeMl : course.typeEn}</span>
            <span class="gear-price">${course.price}</span>
          </div>
          <h3>${currentLang === 'ml' ? course.nameMl : course.nameEn}</h3>
          <p>${currentLang === 'ml' ? course.descMl : course.descEn}</p>
        </div>
        <div class="card-btn-row">
          <button type="button" class="btn-details" onclick="openDetailsPage('course', '${course.id}')">${detailsBtnText}</button>
          <button type="button" class="btn-save-icon ${saved ? 'saved' : ''}" onclick="toggleProfileItem('savedCourses', '${course.id}', event)">
            ${saved ? '♥ Saved' : '♡ Save'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  knowledgeGrid.innerHTML = knowledgeData.map(block => `
    <div class="knowledge-card">
      <h3>${currentLang === 'ml' ? block.titleMl : block.titleEn}</h3>
      <ul>
        ${(currentLang === 'ml' ? block.pointsMl : block.pointsEn).map(pt => `<li>• ${pt}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* =========================================================
   4B. DISCOVER & LEARN (അറിയാം, പഠിക്കാം) LOGIC & MODALS
   ========================================================= */
function getCategoryLabel(cat) {
  if (cat === 'mountaineers') return currentLang === 'ml' ? 'ഇതിഹാസ പർവ്വതാരോഹകർ' : 'Legendary Mountaineer';
  if (cat === 'peaks') return currentLang === 'ml' ? 'ലോക കൊടുമുടി' : 'Iconic Peak';
  if (cat === 'expeditions') return currentLang === 'ml' ? 'ചരിത്ര പര്യവേഷണം' : 'Historic Expedition';
  if (cat === 'geography') return currentLang === 'ml' ? 'വിസ്മയ ഭൂമിശാസ്ത്രം' : 'Extreme Geography';
  return currentLang === 'ml' ? 'അധ്യായം' : 'Chapter';
}

function filterDiscover(cat) {
  currentDiscoverFilter = cat;
  document.querySelectorAll('.discover-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.dfilter === cat);
  });
  renderDiscover();
}

// --- DISCOVER & LEARN (4 MAIN CATEGORIES) CONTROLLER ---
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

    spotlightContainer.innerHTML = `
      <div class="nimsdai-spotlight-grid">
        <div class="nimsdai-photo-wrap">
          <img src="${nims.portrait}" alt="Nirmal Purja Nimsdai" class="nimsdai-photo">
        </div>
        <div>
          <div class="nimsdai-badges-row">
            <span class="nims-badge-pill gold">⭐ ${currentLang === 'ml' ? 'പ്രത്യേക ഫീച്ചർ' : 'Special Feature'}</span>
            <span class="nims-badge-pill">🎖️ Gurkha & British SBS</span>
            <span class="nims-badge-pill">⏱️ 14 Peaks in 189 Days</span>
            <span class="nims-badge-pill">❄️ K2 Winter First Ascent</span>
          </div>
          <h2 class="nimsdai-lead-title">${title}</h2>
          <div class="nimsdai-lead-sub">${sub}</div>
          <p style="font-size: 0.94rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65; margin-bottom: 1.2rem;">
            ${bio}
          </p>
          <div class="nimsdai-stats-strip">
            <div class="nims-stat-box">
              <strong>14</strong>
              <span>${currentLang === 'ml' ? '8000m കൊടുമുടികൾ' : '8000m Summits'}</span>
            </div>
            <div class="nims-stat-box">
              <strong>189</strong>
              <span>${currentLang === 'ml' ? 'ദിവസങ്ങൾ (6 മാസം 6 ദിവസം)' : 'Days (Record Speed)'}</span>
            </div>
            <div class="nims-stat-box">
              <strong>K2 Winter</strong>
              <span>${currentLang === 'ml' ? 'ചരിത്രത്തിലെ ആദ്യ വിജയം' : 'Historic 1st Winter'}</span>
            </div>
            <div class="nims-stat-box">
              <strong>Netflix & Book</strong>
              <span>14 Peaks: Nothing Is Impossible</span>
            </div>
          </div>
          <button type="button" class="btn-store-link" style="margin-top: 1rem; padding: 0.75rem 1.6rem; font-size: 0.92rem;" onclick="openBioModal('nirmal-purja')">
            ${readBtn}
          </button>
        </div>
      </div>
    `;
  }

  // 12 Mountaineers Cards Grid
  if (gridContainer) {
    gridContainer.innerHTML = list.map(m => {
      const name = currentLang === 'ml' ? m.nameMl : m.nameEn;
      const nat = currentLang === 'ml' ? m.nationalityMl : m.nationalityEn;
      const achieve = currentLang === 'ml' ? m.keyAchievementMl : m.keyAchievementEn;
      const short = currentLang === 'ml' ? m.shortBioMl : m.shortBioEn;
      const btnText = currentLang === 'ml' ? 'പൂർണ്ണ ജീവചരിത്രം വായിക്കാം →' : 'View Full Biography →';

      return `
        <div class="mountaineer-card" onclick="openBioModal('${m.id}')">
          <div>
            <div class="mountaineer-thumb-wrap">
              <img src="${m.portrait}" alt="${m.nameEn}" class="mountaineer-thumb" onerror="this.src='images/discover/mountaineers/nirmal-purja.jpg'">
              <span class="mountaineer-nat-tag">📍 ${nat}</span>
            </div>
            <h3>${name}</h3>
            <div class="mountaineer-achievement">🏆 ${achieve}</div>
            <p class="mountaineer-bio-snip">${short}</p>
          </div>
          <div>
            <button type="button" class="btn-bio-read" onclick="event.stopPropagation(); openBioModal('${m.id}')">
              ${btnText}
            </button>
          </div>
        </div>
      `;
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

    let html = `
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">8,000m+ Death Zone</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">${currentLang === 'ml' ? 'ലോകത്തിലെ 14 എണ്ണായിരം മീറ്റർ കൊടുമുടികൾ' : 'The 14 Eight-Thousanders of Planet Earth'}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.88); line-height: 1.6;">
          ${currentLang === 'ml'
        ? 'സമുദ്രനിരപ്പിൽ നിന്ന് 8,000 മീറ്ററിലധികം ഉയരമുള്ള കൊടുമുടികളെയാണ് എണ്ണായിരം മീറ്ററുകൾ അഥവാ "ഡെത്ത് സോൺ" കൊടുമുടികൾ എന്ന് വിളിക്കുന്നത്. ഈ ഉയരത്തിൽ അന്തരീക്ഷ ഓക്സിജൻ്റെ അളവ് മൂന്നിലൊന്നായി ചുരുങ്ങുന്നു. ലോകത്തിൽ ആകെയുള്ള 14 എണ്ണായിരം മീറ്റർ കൊടുമുടികളും ഏഷ്യയിലെ ഹിമാലയം, കാറക്കോറം മലനിരകളിലാണ് സ്ഥിതി ചെയ്യുന്നത്.'
        : 'The 14 Peaks challenge encompasses all fourteen mountains on Earth standing taller than 8,000 meters (26,247 feet) above sea level. Located exclusively in the Himalayan and Karakoram ranges of Asia, their summits pierce the biological "Death Zone" where atmospheric oxygen is insufficient to sustain human life long-term.'}
        </p>
      </div>

      <div class="peaks-grid">
        ${peaks.map(p => {
          const name = currentLang === 'ml' ? p.nameMl : p.nameEn;
          const country = currentLang === 'ml' ? p.countryMl : p.countryEn;
          const ascent = currentLang === 'ml' ? p.firstAscentMl : p.firstAscentEn;
          const diff = currentLang === 'ml' ? p.difficultyMl : p.difficultyEn;
          const hist = currentLang === 'ml' ? p.historyMl : p.historyEn;

          return `
            <div class="peak-card" onclick="openPeakModal('${p.id}')">
              <div class="peak-thumb-wrap">
                <img src="${p.image}" alt="${p.nameEn}" class="peak-thumb" onerror="this.src='images/discover/peaks/mount-everest.jpg'">
                <span class="peak-rank-tag">#${p.rank} • ${p.elevation}</span>
              </div>
              <h3>${name}</h3>
              <div class="peak-meta-row">
                <span>📍 ${country}</span>
              </div>
              <p class="peak-detail-snip"><strong>${currentLang === 'ml' ? 'ആദ്യ വിജയം:' : 'First Ascent:'}</strong> ${ascent}</p>
              <p class="peak-detail-snip" style="color: #fca5a5;"><strong>${currentLang === 'ml' ? 'കാഠിന്യം:' : 'Difficulty:'}</strong> ${diff}</p>
              <button type="button" class="btn-bio-read" style="margin-top: 0.8rem;" onclick="event.stopPropagation(); openPeakModal('${p.id}')">
                ${currentLang === 'ml' ? 'വിശദ വിവരങ്ങൾ കാണുക →' : 'View Mountain Profile →'}
              </button>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Dedicated Project Possible explanation & timeline table
    if (nimsPossible) {
      html += `
        <div class="project-possible-box">
          <div class="possible-header">
            <span class="discover-badge" style="border-color: #FFD600; color: #FFD600;">⚡ Historic Record</span>
            <h2 style="font-size: 1.8rem; color: #ffffff; margin: 0.5rem 0;">${currentLang === 'ml' ? nimsPossible.titleMl : nimsPossible.titleEn}</h2>
            <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
              ${currentLang === 'ml' ? nimsPossible.overviewMl : nimsPossible.overviewEn}
            </p>
          </div>

          <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 14px; padding: 1.3rem; margin-bottom: 1.5rem;">
            <h4 style="color: #FFD600; font-size: 1.1rem; margin-bottom: 0.6rem;">
              ${currentLang === 'ml' ? '14 കൊടുമുടികൾ: സാധാരണ ദൗത്യങ്ങളും പ്രൊജക്റ്റ് പോസിബിളും തമ്മിലുള്ള വ്യത്യാസം' : 'General 14 Peaks Challenge vs. Project Possible'}
            </h4>
            <p style="font-size: 0.92rem; color: rgba(226, 232, 240, 0.9); line-height: 1.6; margin-bottom: 0.75rem;">
              <strong>${currentLang === 'ml' ? 'പരമ്പരാഗത ശൈലി:' : 'Traditional Mountaineering:'}</strong> ${currentLang === 'ml' ? nimsPossible.comparison.generalMl : nimsPossible.comparison.generalEn}
            </p>
            <p style="font-size: 0.92rem; color: rgba(226, 232, 240, 0.9); line-height: 1.6;">
              <strong>${currentLang === 'ml' ? 'നിംസ്ദായുടെ റെക്കോർഡ്:' : 'Nimsdai Purja Record:'}</strong> ${currentLang === 'ml' ? nimsPossible.comparison.nimsdaiMl : nimsPossible.comparison.nimsdaiEn}
            </p>
          </div>

          <h4 style="color: #ffffff; font-size: 1.15rem; margin-bottom: 0.8rem;">
            📅 ${currentLang === 'ml' ? 'നിർമൽ പുർജയുടെ 14 സമ്മിറ്റ് തീയതികൾ (2019 ടൈംലൈൻ)' : 'Verified Summit Dates & Expedition Timeline (2019)'}
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
                ${nimsPossible.verifiedTimeline.map(item => `
                  <tr>
                    <td><span class="nims-badge-pill" style="font-size: 0.72rem;">${item.phase}</span></td>
                    <td><strong>${item.peak}</strong></td>
                    <td style="color: #FFD600; font-weight: 700;">${item.date}</td>
                    <td>${item.country}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div style="margin-top: 1.6rem;">
            <h4 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 0.6rem;">
              🤝 ${currentLang === 'ml' ? 'നേപ്പാളി ഷെർപ്പ സംഘം (സഹയാത്രികർ):' : 'The Legendary Nepali Climbing Team:'}
            </h4>
            <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
              ${nimsPossible.teamMembers.map(tm => `
                <span class="nims-badge-pill" style="padding: 0.4rem 0.85rem; font-size: 0.82rem;">
                  ${tm.name} <span style="color: #38bdf8;">(${tm.role})</span>
                </span>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    view14.innerHTML = html;
  }

  // Subsection B: 7 Peaks (Seven Summits)
  if (view7 && currentPeaksSubTab === '7summits') {
    const summitsData = typeof discoverSevenSummits !== 'undefined' ? discoverSevenSummits : null;
    if (!summitsData) return;

    let html = `
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">The Seven Continents</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">${currentLang === 'ml' ? 'സെവൻ സമ്മിറ്റ്സ് ചലഞ്ച്' : 'The Seven Summits Challenge'}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.88); line-height: 1.6;">
          ${currentLang === 'ml' ? summitsData.overviewMl : summitsData.overviewEn}
        </p>
      </div>

      <!-- Bass vs Messner Comparison -->
      <div class="seven-summits-comparison">
        <h3 style="color: #FFD600; font-size: 1.35rem; margin-bottom: 0.6rem;">
          ${currentLang === 'ml' ? summitsData.comparisonAnalysis.titleMl : summitsData.comparisonAnalysis.titleEn}
        </h3>
        <p style="font-size: 0.93rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
          ${currentLang === 'ml' ? summitsData.comparisonAnalysis.textMl : summitsData.comparisonAnalysis.textEn}
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
        ${summitsData.mountains.map(m => {
      const name = currentLang === 'ml' ? m.nameMl : m.nameEn;
      const cont = currentLang === 'ml' ? m.continentMl : m.continentEn;
      const country = currentLang === 'ml' ? m.countryMl : m.countryEn;
      const ascent = currentLang === 'ml' ? m.firstAscentMl : m.firstAscentEn;
      const diff = currentLang === 'ml' ? m.difficultyMl : m.difficultyEn;
      const facts = currentLang === 'ml' ? m.factsMl : m.factsEn;

      return `
            <div class="peak-card" onclick="openPeakModal('${m.id}')">
              <div class="peak-thumb-wrap">
                <img src="${m.image}" alt="${m.nameEn}" class="peak-thumb" onerror="this.src='images/discover/peaks/mount-everest.jpg'">
                <span class="peak-rank-tag">${cont} • ${m.elevation}</span>
              </div>
              <h3>${name}</h3>
              <div class="peak-meta-row">
                <span>📍 ${country}</span>
              </div>
              <p class="peak-detail-snip"><strong>${currentLang === 'ml' ? 'ആദ്യ വിജയം:' : 'First Ascent:'}</strong> ${ascent}</p>
              <p class="peak-detail-snip" style="color: #fca5a5;"><strong>${currentLang === 'ml' ? 'കാഠിന്യം:' : 'Difficulty:'}</strong> ${diff}</p>
              <p class="peak-detail-snip">${facts}</p>
              <button type="button" class="btn-bio-read" style="margin-top: 0.8rem;" onclick="event.stopPropagation(); openPeakModal('${m.id}')">
                ${currentLang === 'ml' ? 'വിശദ വിവരങ്ങൾ കാണുക →' : 'View Mountain Profile →'}
              </button>
            </div>
          `;
    }).join('')}
      </div>
    `;

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
      return `
        <button type="button" class="history-state-btn ${isActive ? 'active' : ''}" onclick="filterHistory('${st.id}')">
          ${label}
        </button>
      `;
    }).join('');
  }

  const filtered = places.filter(p => {
    if (currentHistoryState === 'all') return true;
    if (currentHistoryState === 'Other') return ['Uttar Pradesh', 'Delhi', 'National Capital Territory', 'Meghalaya', 'West Bengal', 'Sikkim', 'Other Famous Destinations'].includes(p.state) || p.state.includes('Other');
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

      return `
        <div class="history-card" onclick="openHistoryModal('${place.id}')">
          <div>
            <div class="history-thumb-wrap">
              <img src="${place.image}" alt="${place.nameEn}" class="history-thumb" onerror="this.src='images/discover/history/hampi.jpg'">
              <span class="history-state-tag">${state}</span>
            </div>
            <h3>${name}</h3>
            <div class="history-loc-text">📍 ${loc}</div>
            <p class="history-origin-snip">${origin}</p>
          </div>
          <div>
            <button type="button" class="btn-bio-read" onclick="event.stopPropagation(); openHistoryModal('${place.id}')">
              ${btnText}
            </button>
          </div>
        </div>
      `;
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
      return `
        <button type="button" class="knowledge-tab-btn ${currentKnowledgeTopic === t.key ? 'active' : ''}" onclick="switchKnowledgeTopic('${t.key}')">
          ${t.icon} ${label}
        </button>
      `;
    }).join('');
  }

  // TOPIC A: GEARS
  if (currentKnowledgeTopic === 'gears') {
    contentArea.innerHTML = `
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">Equipment Mastery</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">${currentLang === 'ml' ? 'ട്രെക്കിംഗ് & മൗണ്ടനീയറിംഗ് ഗിയറുകൾ' : 'Trekking and Mountaineering Equipment Guide'}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.88); line-height: 1.6;">
          ${currentLang === 'ml'
        ? 'ഹിമാലയൻ മലനിരകളിലും പശ്ചിമഘട്ടത്തിലും സുരക്ഷിതമായി യാത്ര ചെയ്യാൻ ആവശ്യമായ 18 സുപ്രധാന ഉപകരണങ്ങളുടെ സമഗ്ര വിവരണം. ഉപകരണങ്ങൾ എന്തിനു വേണം, എങ്ങനെ പ്രവർത്തിക്കുന്നു, എങ്ങനെ ശരിയായി തിരഞ്ഞെടുക്കണം എന്ന് ഇവിടെ വിശദീകരിച്ചിരിക്കുന്നു.'
        : 'Detailed guide to the 18 essential pieces of equipment required for safe, self-sufficient wilderness trekking, camping, and high-altitude mountaineering. Connect directly to our Adventure Store for tested equipment.'}
        </p>
      </div>

      <div class="gears-knowledge-grid">
        ${knowData.gears.map(g => {
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
            storeBtn = `
              <button type="button" class="btn-store-link" onclick="openPage('store')">
                🛒 ${currentLang === 'ml' ? 'സ്റ്റോറിൽ കാണുക' : 'View in Adventure Store'}
              </button>
            `;
          }

          return `
            <div class="gear-know-card">
              <div>
                <h4>⚙️ ${name}</h4>
                <div class="gear-detail-row"><strong>${currentLang === 'ml' ? 'എന്താണ്:' : 'What it is:'}</strong> ${what}</div>
                <div class="gear-detail-row"><strong>${currentLang === 'ml' ? 'എന്തിനു വേണം:' : 'Why needed:'}</strong> ${why}</div>
                <div class="gear-detail-row"><strong>${currentLang === 'ml' ? 'പ്രവർത്തനം:' : 'How it works:'}</strong> ${howWorks}</div>
                <div class="gear-detail-row"><strong>${currentLang === 'ml' ? 'തിരഞ്ഞെടുക്കാൻ:' : 'How to choose:'}</strong> ${howChoose}</div>
                <div class="gear-detail-row"><strong>${currentLang === 'ml' ? 'എപ്പോൾ ഉപയോഗിക്കണം:' : 'When to use:'}</strong> ${whenUse}</div>
                <div class="gear-detail-row" style="color: #6ee7b7;"><strong>💡 ${currentLang === 'ml' ? 'തുടക്കക്കാർക്ക്:' : 'Beginners:'}</strong> ${rec}</div>
                <div class="gear-detail-row" style="color: #fca5a5;"><strong>⚠️ ${currentLang === 'ml' ? 'സാധാരണ തെറ്റുകൾ:' : 'Common Mistakes:'}</strong> ${mistakes}</div>
              </div>
              ${storeBtn}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // TOPIC B: GEOGRAPHY
  else if (currentKnowledgeTopic === 'geography') {
    const geo = knowData.geography;
    contentArea.innerHTML = `
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">Tectonics & Geology</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">${currentLang === 'ml' ? geo.titleMl : geo.titleEn}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
          ${currentLang === 'ml' ? geo.overviewMl : geo.overviewEn}
        </p>
      </div>

      <div class="gears-knowledge-grid">
        ${geo.types.map(t => `
          <div class="gear-know-card">
            <h4>🌋 ${currentLang === 'ml' ? t.nameMl : t.nameEn}</h4>
            <p style="font-size: 0.9rem; color: rgba(226, 232, 240, 0.9); line-height: 1.6; margin-bottom: 1rem;">
              ${currentLang === 'ml' ? t.descriptionMl : t.descriptionEn}
            </p>
            <div style="background: rgba(255, 255, 255, 0.05); padding: 0.8rem; border-radius: 10px; font-size: 0.85rem;">
              <strong style="color: #FFD600;">${currentLang === 'ml' ? 'ഉദാഹരണങ്ങൾ:' : 'Examples:'}</strong>
              <div style="color: #e2e8f0; margin-top: 0.3rem;">${currentLang === 'ml' ? t.examplesMl : t.examplesEn}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // TOPIC C: WEATHER
  else if (currentKnowledgeTopic === 'weather') {
    const w = knowData.weather;
    contentArea.innerHTML = `
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">Alpine Meteorology</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">${currentLang === 'ml' ? w.titleMl : w.titleEn}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
          ${currentLang === 'ml' ? 'ഉയരം കൂടുംതോറും മാറുന്ന വായുമർദ്ദവും അതിശക്തമായ കാറ്റുകളും മലനിരകളിലെ കാലാവസ്ഥയെ നിർണ്ണയിക്കുന്നു.' : 'Understanding atmospheric pressure drops, jet streams, katabatic winds, and adiabatic lapse rate cooling in alpine mountains.'}
        </p>
      </div>

      <div class="gears-knowledge-grid">
        ${w.concepts.map(c => `
          <div class="gear-know-card">
            <h4>💨 ${currentLang === 'ml' ? c.nameMl : c.nameEn}</h4>
            <p style="font-size: 0.92rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
              ${currentLang === 'ml' ? c.detailsMl : c.detailsEn}
            </p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // TOPIC D: ALTITUDE SICKNESS
  else if (currentKnowledgeTopic === 'altitude') {
    const alt = knowData.altitudeSickness;
    contentArea.innerHTML = `
      <!-- Medical Disclaimer -->
      <div class="medical-disclaimer-banner">
        <strong>⚠️ ${currentLang === 'ml' ? 'മെഡിക്കൽ മുന്നറിയിപ്പ്:' : 'RESPONSIBLE MEDICAL DISCLAIMER:'}</strong>
        ${currentLang === 'ml' ? alt.medicalDisclaimerMl : alt.medicalDisclaimer}
      </div>

      <div class="gears-knowledge-grid" style="margin-bottom: 2rem;">
        ${alt.conditions.map(c => `
          <div class="gear-know-card" style="border-top: 3px solid ${c.code === 'AMS' ? '#FFD600' : '#ef4444'};">
            <span class="discover-badge" style="align-self: flex-start; ${c.code !== 'AMS' ? 'border-color: #ef4444; color: #fca5a5;' : ''}">${c.code}</span>
            <h4 style="margin: 0.4rem 0;">${currentLang === 'ml' ? c.nameMl : c.nameEn}</h4>
            <div style="font-size: 0.8rem; font-weight: 700; color: ${c.code === 'AMS' ? '#38bdf8' : '#ef4444'}; margin-bottom: 0.75rem;">
              ${currentLang === 'ml' ? c.severityMl : c.severity}
            </div>
            <div class="gear-detail-row"><strong>${currentLang === 'ml' ? 'ലക്ഷണങ്ങൾ:' : 'Symptoms:'}</strong> ${currentLang === 'ml' ? c.symptomsMl : c.symptomsEn}</div>
            <div class="gear-detail-row"><strong>${currentLang === 'ml' ? 'കാരണം:' : 'Cause:'}</strong> ${currentLang === 'ml' ? c.causeMl : c.causeEn}</div>
            <div class="gear-detail-row" style="color: #6ee7b7;"><strong>${currentLang === 'ml' ? 'ചികിത്സ:' : 'Management:'}</strong> ${c.managementEn}</div>
          </div>
        `).join('')}
      </div>

      <div style="background: rgba(255, 214, 0, 0.08); border-left: 4px solid #FFD600; padding: 1.5rem; border-radius: 0 14px 14px 0;">
        <h4 style="color: #FFD600; font-size: 1.15rem; margin-bottom: 0.6rem;">
          🛡️ ${currentLang === 'ml' ? 'ആൾട്ടിറ്റ്യൂഡ് സുരക്ഷയുടെ മൂന്ന് സുവർണ്ണ നിയമങ്ങൾ' : 'The Three Golden Rules of High-Altitude Safety'}
        </h4>
        <ul style="padding-left: 1.3rem; color: rgba(226, 232, 240, 0.95); font-size: 0.94rem; line-height: 1.7;">
          ${(currentLang === 'ml' ? alt.goldenRulesMl : alt.goldenRulesEn).map(r => `<li>• ${r}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // TOPIC E: SAFETY & LNT
  else if (currentKnowledgeTopic === 'safety') {
    const s = knowData.safety;
    contentArea.innerHTML = `
      <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 18px; padding: 1.8rem; margin-bottom: 2rem;">
        <span class="discover-badge">Wilderness Ethics</span>
        <h2 style="font-size: 1.8rem; color: #fff; margin: 0.4rem 0;">${currentLang === 'ml' ? s.titleMl : s.titleEn}</h2>
        <p style="font-size: 0.95rem; color: rgba(226, 232, 240, 0.9); line-height: 1.65;">
          ${currentLang === 'ml' ? 'പ്രകൃതിക്ക് യാതൊരു ദോഷവും വരാത്ത രീതിയിൽ യാത്ര ചെയ്യാനുള്ള അന്താരാഷ്ട്ര ലീവ് നോ ട്രേസ് (LNT) നിയമങ്ങളും കാട്ടിൽ വഴിതെറ്റിയാൽ ചെയ്യേണ്ട കാര്യങ്ങളും.' : 'International Leave No Trace (LNT) 7 principles and emergency lost-in-the-mountains survival protocols.'}
        </p>
      </div>

      <!-- S.T.O.P. Protocol Card -->
      <div style="background: linear-gradient(135deg, rgba(20, 26, 42, 0.95), rgba(9, 12, 20, 0.98)); border: 1px solid rgba(255, 214, 0, 0.4); border-radius: 16px; padding: 1.5rem; margin-bottom: 2rem;">
        <h3 style="color: #FFD600; font-size: 1.3rem; margin-bottom: 0.6rem;">
          🛑 ${currentLang === 'ml' ? s.lostProtocol.titleMl : s.lostProtocol.titleEn}
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem;">
          ${s.lostProtocol.steps.map(st => `
            <div style="background: rgba(255, 255, 255, 0.05); padding: 1rem; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
              <strong style="color: #FFD600; font-size: 1.1rem; display: block; margin-bottom: 0.3rem;">${st.letter} – ${st.word}</strong>
              <p style="font-size: 0.88rem; color: rgba(226, 232, 240, 0.88); line-height: 1.5; margin: 0;">${st.actionEn}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <h3 style="color: #ffffff; font-size: 1.4rem; margin-bottom: 1.2rem;">
        🌿 ${currentLang === 'ml' ? 'ലീവ് നോ ട്രേസ് (LNT) 7 തത്ത്വങ്ങൾ' : 'The 7 Leave No Trace Principles'}
      </h3>
      <div class="gears-knowledge-grid">
        ${s.lntPrinciples.map(p => `
          <div class="gear-know-card">
            <h4>${currentLang === 'ml' ? p.titleMl : p.titleEn}</h4>
            <p style="font-size: 0.9rem; color: rgba(226, 232, 240, 0.88); line-height: 1.6;">${p.descEn}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // TOPIC F: FIRST AID
  else if (currentKnowledgeTopic === 'firstaid') {
    const fa = knowData.firstAid;
    contentArea.innerHTML = `
      <div class="medical-disclaimer-banner">
        <strong>⚠️ ${currentLang === 'ml' ? 'പ്രഥമശുശ്രൂഷാ മുന്നറിയിപ്പ്:' : 'WILDERNESS FIRST AID DISCLAIMER:'}</strong>
        ${currentLang === 'ml' ? fa.disclaimerMl : fa.disclaimer}
      </div>

      <div class="gears-knowledge-grid">
        ${fa.emergencies.map(em => `
          <div class="gear-know-card">
            <h4>🩹 ${currentLang === 'ml' ? em.conditionMl : em.conditionEn}</h4>
            <div class="gear-detail-row"><strong>${currentLang === 'ml' ? 'ലക്ഷണങ്ങൾ:' : 'Signs:'}</strong> ${em.signsEn}</div>
            <div class="gear-detail-row" style="color: #6ee7b7;"><strong>${currentLang === 'ml' ? 'ചികിത്സാ നടപടികൾ:' : 'Wilderness Treatment:'}</strong> ${em.treatmentEn}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// COMPACT DISCOVER & LEARN POPUP MODALS
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

  discoverModalContent.innerHTML = `
    <div class="compact-modal-header">
      <img src="${m.portrait}" alt="${m.nameEn}" class="compact-modal-thumb" onerror="this.src='images/discover/mountaineers/nirmal-purja.jpg'">
      <div class="compact-modal-meta">
        <span class="compact-badge">🧗‍♂️ ${nationality}</span>
        <h3>${name}</h3>
        <p class="compact-sub">${birthplace}</p>
      </div>
    </div>

    <div class="compact-modal-body">
      <!-- 1. Full Name, Nationality & Birthplace -->
      <div class="compact-info-block">
        <h4>👤 1. ${isMl ? 'പേരും വ്യക്തിവിവരങ്ങളും' : 'Mountaineer Identity & Introduction'}</h4>
        <p><strong>${isMl ? 'മുഴുവൻ പേര്:' : 'Full Name:'}</strong> ${fullName}</p>
        <p style="margin-top: 0.25rem;"><strong>${isMl ? 'രാജ്യവും പൗരത്വവും:' : 'Country & Nationality:'}</strong> ${nationality}</p>
        <p style="margin-top: 0.25rem;"><strong>${isMl ? 'ജനനസ്ഥലവും തീയതിയും:' : 'Birthplace & Date:'}</strong> ${birthplace}</p>
        <p style="margin-top: 0.35rem; color: #FFD600; font-weight: 600;">${shortBio}</p>
      </div>

      <!-- 2. Early Life & Background -->
      <div class="compact-info-block">
        <h4>🌱 2. ${isMl ? 'ആദ്യകാല ജീവിതവും പശ്ചാത്തലവും' : 'Early Life & Background'}</h4>
        <p>${earlyLife}</p>
        ${edu ? `<p style="margin-top: 0.35rem; font-size: 0.84rem; color: rgba(226, 232, 240, 0.8);"><strong>${isMl ? 'വിദ്യാഭ്യാസം/പരിശീലനം:' : 'Education/Training:'}</strong> ${edu}</p>` : ''}
      </div>

      <!-- 3. Major Mountaineering Achievements -->
      <div class="compact-info-block">
        <h4>🏆 3. ${isMl ? 'പ്രധാന പർവ്വത നേട്ടങ്ങൾ' : 'Major Mountaineering Achievements'}</h4>
        <p style="color: #FFD600; font-weight: 700; margin-bottom: 0.4rem;">★ ${keyAchieve}</p>
        <ul>
          ${achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>

      <!-- 4. Important Expeditions -->
      <div class="compact-info-block">
        <h4>🗺️ 4. ${isMl ? 'ശ്രദ്ധേയമായ പര്യവേക്ഷണങ്ങൾ' : 'Important Expeditions'}</h4>
        <ul>
          ${expeditions.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>

      <!-- 5. Awards and Recognitions -->
      <div class="compact-info-block">
        <h4>🎖️ 5. ${isMl ? 'പുരസ്കാരങ്ങളും അംഗീകാരങ്ങളും' : 'Awards & Recognitions'}</h4>
        <ul>
          ${awards.map(aw => `<li>${aw}</li>`).join('')}
        </ul>
      </div>

      <!-- 6. Legacy & Contribution to Mountaineering -->
      <div class="compact-info-block">
        <h4>⭐ 6. ${isMl ? 'പർവ്വതാരോഹണ രംഗത്തെ സംഭാവനകൾ' : 'Legacy & Contribution to Mountaineering'}</h4>
        <p>${legacy}</p>
      </div>

      <!-- 7. Interesting Facts -->
      <div class="compact-info-block">
        <h4>💡 7. ${isMl ? 'രസകരമായ വസ്തുതകൾ' : 'Interesting Facts'}</h4>
        <ul>
          ${facts.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

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

  const monumentList = Array.isArray(monuments) ? monuments : monuments.split(/[,;•.]\s+/).filter(Boolean);
  const factList = Array.isArray(facts) ? facts : facts.split(/[,;•.]\s+/).filter(Boolean);
  const eventList = Array.isArray(events) ? events : events.split(/[,;•.]\s+/).filter(Boolean);

  discoverModalContent.innerHTML = `
    <div class="compact-modal-header">
      <img src="${pl.image}" alt="${pl.nameEn}" class="compact-modal-thumb" onerror="this.src='images/discover/history/hampi.jpg'">
      <div class="compact-modal-meta">
        <span class="compact-badge">🏛️ ${state}</span>
        <h3>${name}</h3>
        <p class="compact-sub">📍 ${loc}</p>
      </div>
    </div>

    <div class="compact-modal-body">
      <!-- 1. Place Name & Identity -->
      <div class="compact-info-block">
        <h4>📍 1. ${isMl ? 'സ്ഥലനാമവും പ്രാഥമിക വിവരവും' : 'Place Name & Identity'}</h4>
        <p><strong>${isMl ? 'പൈതൃക കേന്ദ്രം:' : 'Heritage Destination:'}</strong> ${name} (${state})</p>
        <p style="margin-top: 0.25rem;"><strong>${isMl ? 'ഭൂമിശാസ്ത്ര സ്ഥാനം:' : 'Geographical Location:'}</strong> ${loc}</p>
      </div>

      <!-- 2. Location & Historical Period -->
      <div class="compact-info-block">
        <h4>⏳ 2. ${isMl ? 'ചരിത്ര കാലഘട്ടവും സ്ഥാനവും' : 'Location & Historical Period'}</h4>
        <p>${ancient}</p>
      </div>

      <!-- 3. Brief Historical Introduction -->
      <div class="compact-info-block">
        <h4>📜 3. ${isMl ? 'ചരിത്ര ആമുഖവും ഉത്ഭവവും' : 'Brief Historical Introduction & Origin'}</h4>
        <p>${origin}</p>
      </div>

      <!-- 4. Important Kings, Rulers or Dynasties -->
      <div class="compact-info-block">
        <h4>👑 4. ${isMl ? 'പ്രധാന രാജവംശങ്ങളും ഭരണാധികാരികളും' : 'Important Kings, Rulers & Dynasties'}</h4>
        <p><strong>${isMl ? 'ഭരണ രാജവംശങ്ങൾ:' : 'Associated Dynasties:'}</strong> ${dynasties}</p>
      </div>

      <!-- 5. Important Historical Monuments -->
      <div class="compact-info-block">
        <h4>🏛️ 5. ${isMl ? 'പ്രധാന ചരിത്ര സ്മാരകങ്ങൾ' : 'Important Historical Monuments'}</h4>
        ${monumentList.length > 1 ? `
          <ul>
            ${monumentList.map(m => `<li>${m}</li>`).join('')}
          </ul>
        ` : `<p>${monuments}</p>`}
      </div>

      <!-- 6. Cultural and Religious Significance -->
      <div class="compact-info-block">
        <h4>🕉️ 6. ${isMl ? 'സാംസ്കാരിക-ആത്മീയ പ്രാധാന്യം' : 'Cultural & Religious Significance'}</h4>
        <p>${traditions}</p>
        ${rel ? `<p style="margin-top: 0.35rem; color: #38bdf8;"><strong>${isMl ? 'ആത്മീയ പാരമ്പര്യം:' : 'Spiritual Heritage:'}</strong> ${rel}</p>` : ''}
      </div>

      <!-- 7. Major Historical Events -->
      <div class="compact-info-block">
        <h4>⚔️ 7. ${isMl ? 'പ്രധാന ചരിത്ര സംഭവങ്ങൾ' : 'Major Historical Events'}</h4>
        ${eventList.length > 1 ? `
          <ul>
            ${eventList.map(ev => `<li>${ev}</li>`).join('')}
          </ul>
        ` : `<p>${events}</p>`}
      </div>

      <!-- 8. Interesting Historical Facts -->
      <div class="compact-info-block">
        <h4>💡 8. ${isMl ? 'രസകരമായ ചരിത്ര വസ്തുതകൾ' : 'Interesting Historical Facts'}</h4>
        ${factList.length > 1 ? `
          <ul>
            ${factList.map(f => `<li>${f}</li>`).join('')}
          </ul>
        ` : `<p>${facts}</p>`}
      </div>
    </div>
  `;

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

  discoverModalContent.innerHTML = `
    <div class="compact-modal-header">
      <img src="${p.image}" alt="${p.nameEn}" class="compact-modal-thumb" onerror="this.src='images/discover/peaks/mount-everest.jpg'">
      <div class="compact-modal-meta">
        <span class="compact-badge">🏔️ ${p.elevation}</span>
        <h3>${name}</h3>
        <p class="compact-sub">📍 ${country} • ${range}</p>
      </div>
    </div>

    <div class="compact-modal-body">
      <div class="compact-info-block">
        <h4>🏔️ 1. ${isMl ? 'കൊടുമുടിയുടെ പേരും സ്ഥാനവും' : 'Peak Identity & Elevation'}</h4>
        <p><strong>${isMl ? 'കൊടുമുടി:' : 'Mountain Peak:'}</strong> ${name}</p>
        <p style="margin-top: 0.25rem;"><strong>${isMl ? 'ഉയരം:' : 'Elevation:'}</strong> ${p.elevation}</p>
        <p style="margin-top: 0.25rem;"><strong>${isMl ? 'രാജ്യവും മലനിരയും:' : 'Country & Range:'}</strong> ${country} (${range})</p>
      </div>

      <div class="compact-info-block">
        <h4>🏁 2. ${isMl ? 'ആദ്യത്തെ ചരിത്ര വിജയം' : 'First Successful Ascent'}</h4>
        <p>${firstAscent}</p>
      </div>

      <div class="compact-info-block">
        <h4>⚠️ 3. ${isMl ? 'കയറ്റത്തിന്റെ കാഠിന്യവും വെല്ലുവിളികളും' : 'Climbing Difficulty & Terrain'}</h4>
        <p>${difficulty}</p>
      </div>

      ${history ? `
      <div class="compact-info-block">
        <h4>📜 4. ${isMl ? 'ചരിത്ര പശ്ചാത്തലം' : 'Historical Background'}</h4>
        <p>${history}</p>
      </div>` : ''}

      ${expeditions ? `
      <div class="compact-info-block">
        <h4>🗺️ 5. ${isMl ? 'പ്രശസ്ത പര്യവേക്ഷണങ്ങൾ' : 'Famous Expeditions'}</h4>
        <p>${expeditions}</p>
      </div>` : ''}

      <div class="compact-info-block">
        <h4>💡 6. ${isMl ? 'പ്രധാന വസ്തുതകൾ' : 'Key Mountain Facts'}</h4>
        <p>${facts}</p>
      </div>
    </div>
  `;

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



// ==============================================================================
// 5. USER PROFILE, CART & DATABASE SYNC (SUPABASE POWERED)
// ==============================================================================

const profileCache = {
  cart: [],
  savedPackages: [],
  savedCourses: [],
  bookedPackages: [],
  currentCourses: [],
  buyHistory: []
};

let isProfileSyncing = false;

function getUserProfileStore() {
  const user = JSON.parse(localStorage.getItem('suggayittActiveUser') || 'null');
  if (!user) return null;
  const allData = JSON.parse(localStorage.getItem('suggayittProfileData') || '{}');
  if (!allData[user.email]) {
    allData[user.email] = {
      cart: profileCache.cart || [],
      savedPackages: profileCache.savedPackages || [],
      savedCourses: profileCache.savedCourses || [],
      bookedPackages: profileCache.bookedPackages || [],
      currentCourses: profileCache.currentCourses || [],
      buyHistory: profileCache.buyHistory || []
    };
    localStorage.setItem('suggayittProfileData', JSON.stringify(allData));
  }
  return { user, allData, data: allData[user.email] };
}

function saveUserProfileStore(storeObj) {
  if (!storeObj || !storeObj.user) return;
  storeObj.allData[storeObj.user.email] = storeObj.data;
  localStorage.setItem('suggayittProfileData', JSON.stringify(storeObj.allData));
}

async function syncProfileFromSupabase() {
  const activeUser = JSON.parse(localStorage.getItem('suggayittActiveUser') || 'null');
  if (!activeUser || !window.SuggayittDB) return;
  const userId = activeUser.id;
  if (!userId) return;

  isProfileSyncing = true;
  try {
    const [packages, cart, courses, bookings, orders] = await Promise.all([
      window.SuggayittDB.getSavedPackages(userId),
      window.SuggayittDB.getCartItems(userId),
      window.SuggayittDB.getSavedCourses(userId),
      window.SuggayittDB.getBookingRequests(userId),
      window.SuggayittDB.getOrderRequests(userId)
    ]);

    profileCache.savedPackages = (packages || []).map(p => p.package_id);
    profileCache.cart = (cart || []).map(c => c.product_id);
    profileCache.savedCourses = (courses || []).map(c => c.course_id);

    profileCache.bookedPackages = (bookings || []).map(b => ({
      id: b.id,
      title: b.package_name,
      amount: b.amount || '',
      date: new Date(b.request_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: b.booking_status || 'Requested'
    }));

    profileCache.buyHistory = (orders || []).map(o => ({
      id: o.id,
      title: o.product_name,
      amount: o.amount || '',
      date: new Date(o.order_request_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: o.order_status || 'Requested'
    }));

    const allData = JSON.parse(localStorage.getItem('suggayittProfileData') || '{}');
    allData[activeUser.email] = {
      cart: profileCache.cart,
      savedPackages: profileCache.savedPackages,
      savedCourses: profileCache.savedCourses,
      bookedPackages: profileCache.bookedPackages,
      currentCourses: profileCache.currentCourses,
      buyHistory: profileCache.buyHistory
    };
    localStorage.setItem('suggayittProfileData', JSON.stringify(allData));

    renderPlaces();
    renderPackages();
    renderStore();
    renderStudio();
    if (!profilePageView.classList.contains('hidden')) {
      renderProfileDashboard();
    }
  } catch (err) {
    console.warn('[Supabase Sync Warning]:', err);
  } finally {
    isProfileSyncing = false;
  }
}

async function toggleProfileItem(listKey, itemId, event) {
  if (event) event.stopPropagation();
  const storeObj = getUserProfileStore();
  if (!storeObj) {
    openAuthModal('login');
    return;
  }

  const list = storeObj.data[listKey];
  const idx = list.indexOf(itemId);
  const adding = (idx === -1);
  if (adding) {
    list.push(itemId);
  } else {
    list.splice(idx, 1);
  }
  saveUserProfileStore(storeObj);

  // Sync directly with Supabase
  if (storeObj.user.id && window.SuggayittDB) {
    if (listKey === 'cart') {
      const item = storeItemsData.find(g => g.id === itemId);
      const name = item ? item.nameEn : itemId;
      if (adding) {
        window.SuggayittDB.addToCart(storeObj.user.id, itemId, name, 1);
      } else {
        window.SuggayittDB.removeFromCart(storeObj.user.id, itemId);
      }
    } else if (listKey === 'savedPackages') {
      const pkg = destinationsData.find(d => d.id === itemId);
      const name = pkg ? pkg.nameEn : itemId;
      if (adding) {
        window.SuggayittDB.savePackage(storeObj.user.id, itemId, name);
      } else {
        window.SuggayittDB.removeSavedPackage(storeObj.user.id, itemId);
      }
    } else if (listKey === 'savedCourses') {
      const course = coursesData.find(c => c.id === itemId);
      const name = course ? course.nameEn : itemId;
      if (adding) {
        window.SuggayittDB.saveCourse(storeObj.user.id, itemId, name);
      } else {
        window.SuggayittDB.removeSavedCourse(storeObj.user.id, itemId);
      }
    }
  }

  renderPlaces();
  renderPackages();
  renderStore();
  renderStudio();

  if (!profilePageView.classList.contains('hidden')) {
    renderProfileDashboard();
  }
  if (activeDetailContext && activeDetailContext.type !== 'notfound') {
    openDetailsPage(activeDetailContext.type, activeDetailContext.id);
  }
}

async function recordUserBooking(category, itemTitle, priceOrCost) {
  const storeObj = getUserProfileStore();
  if (!storeObj) return;

  const entry = {
    id: Date.now(),
    title: itemTitle,
    amount: priceOrCost,
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    status: 'Requested'
  };

  if (category === 'place') storeObj.data.bookedPackages.unshift(entry);
  else if (category === 'course') storeObj.data.currentCourses.unshift(entry);
  else if (category === 'gear') storeObj.data.buyHistory.unshift(entry);

  saveUserProfileStore(storeObj);

  // Sync request with Supabase
  if (storeObj.user.id && window.SuggayittDB) {
    const itemId = activeDetailContext ? activeDetailContext.id : 'custom';
    if (category === 'place') {
      window.SuggayittDB.createBookingRequest(storeObj.user.id, itemId, itemTitle, priceOrCost);
    } else if (category === 'gear') {
      window.SuggayittDB.createOrderRequest(storeObj.user.id, itemId, itemTitle, 1, priceOrCost);
    } else if (category === 'course') {
      window.SuggayittDB.createBookingRequest(storeObj.user.id, itemId, itemTitle, priceOrCost);
    }
  }

  if (!profilePageView.classList.contains('hidden')) {
    renderProfileDashboard();
  }
}

function isItemSaved(listKey, itemId) {
  const storeObj = getUserProfileStore();
  return storeObj ? storeObj.data[listKey].includes(itemId) : false;
}

function switchProfileTab(tabName) {
  currentProfileTab = tabName;
  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.ptab === tabName);
  });
  renderProfileDashboard();
}

function renderProfileDashboard() {
  const storeObj = getUserProfileStore();
  if (!storeObj) return;

  const { user, data } = storeObj;
  document.getElementById('profileAvatarInitial').textContent = user.name ? user.name.charAt(0).toUpperCase() : 'U';
  document.getElementById('profileUserName').textContent = user.name || 'Traveller';
  const contactText = user.phone ? `${user.email} • ${user.phone}` : user.email;
  document.getElementById('profileUserContact').textContent = contactText;

  const container = document.getElementById('profileTabContent');

  if (isProfileSyncing && !data[currentProfileTab === 'history' ? 'bookedPackages' : (currentProfileTab === 'packages' ? 'savedPackages' : (currentProfileTab === 'courses' ? 'savedCourses' : 'cart'))].length) {
    container.innerHTML = `
      <div class="profile-loading-box">
        <div class="profile-spinner"></div>
        <p>${currentLang === 'ml' ? 'വിവരങ്ങൾ ഡാറ്റാബേസിൽ നിന്ന് ലോഡ് ചെയ്യുന്നു...' : 'Syncing data with Supabase...'}</p>
      </div>`;
    return;
  }

  if (currentProfileTab === 'cart') {
    const items = storeItemsData.filter(g => data.cart.includes(g.id));
    if (!items.length) {
      container.innerHTML = `<div class="profile-empty-box"><p>${currentLang === 'ml' ? 'നിങ്ങളുടെ കാർട്ടിൽ ഗിയറുകളൊന്നുമില്ല.' : 'Your gear cart is currently empty. Add items from the Store!'}</p><br><button type="button" class="btn-primary" onclick="openPage('store')">${currentLang === 'ml' ? 'സ്റ്റോറിലേക്ക് പോകുക' : 'Browse Adventure Store'}</button></div>`;
      return;
    }
    container.innerHTML = `<div class="gears-grid">${items.map(item => `
      <div class="gear-card">
        <div>
          <img src="${item.image}" alt="${item.nameEn}" class="gear-img" onerror="this.style.display='none'">
          <div class="gear-top">
            <span class="gear-type">${currentLang === 'ml' ? item.typeMl : item.typeEn}</span>
            <span class="gear-price">${item.price}</span>
          </div>
          <h3>${currentLang === 'ml' ? item.nameMl : item.nameEn}</h3>
        </div>
        <div class="card-btn-row">
          <a href="https://wa.me/917012274317?text=Hello%20Suggayitt%20Povaa%2C%20I%20am%20${encodeURIComponent(user.name)}.%20I%20want%20to%20order%20${encodeURIComponent(item.nameEn)}." target="_blank" onclick="recordUserBooking('gear', '${item.nameEn}', '${item.price}')" class="btn-details">${currentLang === 'ml' ? 'ഓർഡർ ചെയ്യുക' : 'Buy Now'}</a>
          <button type="button" class="btn-remove-small" onclick="toggleProfileItem('cart', '${item.id}', event)">✕</button>
        </div>
      </div>
    `).join('')}</div>`;
  } else if (currentProfileTab === 'packages') {
    const places = destinationsData.filter(p => data.savedPackages.includes(p.id));
    if (!places.length) {
      container.innerHTML = `<div class="profile-empty-box"><p>${currentLang === 'ml' ? 'സേവ് ചെയ്ത പാക്കേജുകളൊന്നുമില്ല.' : 'No saved packages yet. Save your dream treks to view them here!'}</p><br><button type="button" class="btn-primary" onclick="openPage('packages')">${currentLang === 'ml' ? 'പാക്കേജുകൾ കാണുക' : 'Explore Packages'}</button></div>`;
      return;
    }
    container.innerHTML = `<div class="places-grid">${places.map(place => `
      <div class="place-card" onclick="openDetailsPage('place', '${place.id}')">
        <div>
          <img src="${place.image}" alt="${place.nameEn}" class="place-img" onerror="this.style.display='none'">
          <div class="place-region">${currentLang === 'ml' ? place.regionMl : place.regionEn} • ${place.cost}</div>
          <h3>${currentLang === 'ml' ? place.nameMl : place.nameEn}</h3>
        </div>
        <div class="card-btn-row">
          <button type="button" class="btn-details">${currentLang === 'ml' ? 'വിശദാംശങ്ങൾ' : 'More Details'}</button>
          <button type="button" class="btn-remove-small" onclick="toggleProfileItem('savedPackages', '${place.id}', event)">✕</button>
        </div>
      </div>
    `).join('')}</div>`;
  } else if (currentProfileTab === 'courses') {
    const courses = coursesData.filter(c => data.savedCourses.includes(c.id));
    if (!courses.length) {
      container.innerHTML = `<div class="profile-empty-box"><p>${currentLang === 'ml' ? 'സേവ് ചെയ്ത കോഴ്സുകളൊന്നുമില്ല.' : 'No saved courses yet. Save courses from Featured Editing & Shooting!'}</p><br><button type="button" class="btn-primary" onclick="openPage('studio')">${currentLang === 'ml' ? 'കോഴ്സുകൾ കാണുക' : 'Explore Courses'}</button></div>`;
      return;
    }
    container.innerHTML = `<div class="gears-grid">${courses.map(c => `
      <div class="gear-card">
        <div>
          <img src="${c.image}" alt="${c.nameEn}" class="gear-img" onerror="this.style.display='none'">
          <div class="gear-top">
            <span class="gear-type">${currentLang === 'ml' ? c.typeMl : c.typeEn}</span>
            <span class="gear-price">${c.price}</span>
          </div>
          <h3>${currentLang === 'ml' ? c.nameMl : c.nameEn}</h3>
        </div>
        <div class="card-btn-row">
          <button type="button" class="btn-details" onclick="openDetailsPage('course', '${c.id}')">${currentLang === 'ml' ? 'വിശദാംശങ്ങൾ' : 'More Details'}</button>
          <button type="button" class="btn-remove-small" onclick="toggleProfileItem('savedCourses', '${c.id}', event)">✕</button>
        </div>
      </div>
    `).join('')}</div>`;
  } else if (currentProfileTab === 'history') {
    const renderRows = (arr, emptyText) => arr.length
      ? arr.map(r => `<div class="history-row"><div><strong>${r.title}</strong><div style="font-size:0.82rem;color:#cbd5e1;">${r.date} • ${r.amount}</div></div><span class="history-badge ${r.status === 'Requested' ? 'requested' : 'confirmed'}">${r.status}</span></div>`).join('')
      : `<p style="color:#94a3b8;font-size:0.9rem;margin-bottom:1rem;">${emptyText}</p>`;

    container.innerHTML = `
      <div class="history-section-group">
        <h3>${currentLang === 'ml' ? 'നിലവിലുള്ള കോഴ്സുകൾ (Current Courses)' : 'Current Courses'}</h3>
        ${renderRows(data.currentCourses, currentLang === 'ml' ? 'നിലവിൽ കോഴ്സുകളിലൊന്നും ചേർന്നിട്ടില്ല.' : 'No active courses enrolled yet.')}
      </div>
      <div class="history-section-group">
        <h3>${currentLang === 'ml' ? 'ബുക്ക് ചെയ്ത പാക്കേജുകൾ (Booked / Requested Packages)' : 'Booked & Requested Packages'}</h3>
        ${renderRows(data.bookedPackages, currentLang === 'ml' ? 'ബുക്ക് ചെയ്ത പാക്കേജുകളൊന്നുമില്ല.' : 'No package requests recorded yet.')}
      </div>
      <div class="history-section-group">
        <h3>${currentLang === 'ml' ? 'വാങ്ങിയ ഗിയറുകൾ (Buy History / Gear Orders)' : 'Buy History & Order Requests'}</h3>
        ${renderRows(data.buyHistory, currentLang === 'ml' ? 'ഇതുവരെ ഗിയറുകളൊന്നും വാങ്ങിയിട്ടില്ല.' : 'No gear order requests recorded yet.')}
      </div>
    `;
  }
}

// ==============================================================================
// 6. LOG IN & SIGN UP ENGINE (SUPABASE AUTH POWERED)
// ==============================================================================

function openAuthModal(tab = 'login') {
  authModal.classList.remove('hidden');
  switchAuthTab(tab);
}

function closeAuthModal() {
  authModal.classList.add('hidden');
  authFeedbackMsg.classList.add('hidden');
}

function closeAuthOnBackdrop(event) {
  if (event.target === authModal) {
    closeAuthModal();
  }
}

function switchAuthTab(tab) {
  authFeedbackMsg.classList.add('hidden');
  const loginF = document.getElementById('loginForm');
  const signupF = document.getElementById('signupForm');
  const forgotF = document.getElementById('forgotForm');
  const updateF = document.getElementById('updatePasswordForm');
  const tabLogin = document.getElementById('tabLoginBtn');
  const tabSignup = document.getElementById('tabSignupBtn');

  if (loginF) loginF.classList.add('hidden');
  if (signupF) signupF.classList.add('hidden');
  if (forgotF) forgotF.classList.add('hidden');
  if (updateF) updateF.classList.add('hidden');
  if (tabLogin) tabLogin.classList.remove('active');
  if (tabSignup) tabSignup.classList.remove('active');

  if (tab === 'signup') {
    if (signupF) signupF.classList.remove('hidden');
    if (tabSignup) tabSignup.classList.add('active');
  } else if (tab === 'forgot') {
    if (forgotF) forgotF.classList.remove('hidden');
  } else if (tab === 'update-password') {
    if (updateF) updateF.classList.remove('hidden');
  } else {
    if (loginF) loginF.classList.remove('hidden');
    if (tabLogin) tabLogin.classList.add('active');
  }
}

function showAuthFeedback(message, type) {
  authFeedbackMsg.textContent = message;
  authFeedbackMsg.className = `auth-feedback ${type}`;
  authFeedbackMsg.classList.remove('hidden');
}

async function handleSignupSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;

  showAuthFeedback(
    currentLang === 'ml' ? 'അക്കൗണ്ട് സൃഷ്ടിക്കുന്നു...' : 'Creating your account...',
    'info'
  );

  if (window.SuggayittDB) {
    const { data, error } = await window.SuggayittDB.signUp(email, password, name, phone);
    if (error) {
      showAuthFeedback(error.message || 'Signup failed', 'error');
      return;
    }

    if (data && data.user) {
      if (data.session) {
        // Immediate session created
        const activeUser = {
          id: data.user.id,
          name: name,
          phone: phone,
          email: email
        };
        localStorage.setItem('suggayittActiveUser', JSON.stringify(activeUser));
        updateAuthNavbar();
        syncProfileFromSupabase();

        // Safe legacy data migration
        window.SuggayittDB.migrateLegacyData(activeUser.id, activeUser.email, destinationsData, storeItemsData, coursesData);

        showAuthFeedback(
          currentLang === 'ml'
            ? `സ്വാഗതം ${name}! അക്കൗണ്ട് വിജയകരമായി നിർമ്മിച്ചു.`
            : `Welcome ${name}! Your account has been created.`,
          'success'
        );
        document.getElementById('signupForm').reset();
        setTimeout(closeAuthModal, 1200);
      } else {
        // Email verification required
        showAuthFeedback(
          currentLang === 'ml'
            ? `അക്കൗണ്ട് സൃഷ്ടിച്ചു! ദയവായി നിങ്ങളുടെ ഇമെയിൽ പരിശോധിച്ചു സ്ഥിരീകരിക്കുക (${email}).`
            : `Account created! Please check your email inbox to verify your account (${email}).`,
          'success'
        );
        document.getElementById('signupForm').reset();
      }
      return;
    }
  }

  showAuthFeedback('Unable to connect to database. Please check your internet connection.', 'error');
}

async function handleLoginSubmit(event) {
  event.preventDefault();
  const identifier = document.getElementById('loginIdentifier').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  showAuthFeedback(
    currentLang === 'ml' ? 'പരിശോധിക്കുന്നു...' : 'Logging in...',
    'info'
  );

  if (window.SuggayittDB) {
    const { data, error } = await window.SuggayittDB.signIn(identifier, password);
    if (error) {
      let msg = error.message;
      if (error.message.includes('Invalid login credentials')) {
        msg = currentLang === 'ml'
          ? 'തെറ്റായ ഇമെയിൽ അല്ലെങ്കിൽ പാസ്‌വേഡ്.'
          : 'Invalid email or password.';
      } else if (error.message.includes('Email not confirmed')) {
        msg = currentLang === 'ml'
          ? 'ഇമെയിൽ സ്ഥിരീകരിച്ചിട്ടില്ല. ദയവായി നിങ്ങളുടെ ഇൻബോക്സ് പരിശോധിക്കുക.'
          : 'Email not confirmed yet. Please verify your email via the link sent to you.';
      }
      showAuthFeedback(msg, 'error');
      return;
    }

    if (data && data.session && data.user) {
      const u = data.user;
      let userName = u.user_metadata?.full_name || u.user_metadata?.name || u.email.split('@')[0];
      let userPhone = u.user_metadata?.phone || '';

      // Try fetching profile from profiles table
      try {
        const profile = await window.SuggayittDB.getProfile(u.id);
        if (profile) {
          if (profile.full_name) userName = profile.full_name;
          if (profile.phone) userPhone = profile.phone;
        }
      } catch (e) { }

      const activeUser = {
        id: u.id,
        name: userName,
        phone: userPhone,
        email: u.email
      };

      localStorage.setItem('suggayittActiveUser', JSON.stringify(activeUser));
      updateAuthNavbar();
      syncProfileFromSupabase();

      // Safe legacy data migration
      window.SuggayittDB.migrateLegacyData(activeUser.id, activeUser.email, destinationsData, storeItemsData, coursesData);

      showAuthFeedback(
        currentLang === 'ml'
          ? `തിരികെ സ്വാഗതം, ${userName}!`
          : `Welcome back, ${userName}!`,
        'success'
      );

      document.getElementById('loginForm').reset();
      renderPlaces();
      renderPackages();
      renderStore();
      renderStudio();
      setTimeout(closeAuthModal, 850);
      return;
    }
  }

  showAuthFeedback('Unable to connect to database. Please check your internet connection.', 'error');
}

async function logoutUser() {
  if (window.SuggayittDB) {
    try {
      await window.SuggayittDB.signOut();
    } catch (e) {
      console.warn('SignOut warning:', e);
    }
  }

  localStorage.removeItem('suggayittActiveUser');
  profileCache.cart = [];
  profileCache.savedPackages = [];
  profileCache.savedCourses = [];
  profileCache.bookedPackages = [];
  profileCache.buyHistory = [];

  updateAuthNavbar();
  renderPlaces();
  renderPackages();
  renderStore();
  renderStudio();
  if (!profilePageView.classList.contains('hidden')) {
    showMainView('home');
  }
}

async function handleForgotPasswordSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('forgotEmail').value.trim().toLowerCase();

  showAuthFeedback(
    currentLang === 'ml' ? 'ലിങ്ക് അയക്കുന്നു...' : 'Sending reset link...',
    'info'
  );

  if (window.SuggayittDB) {
    const { error } = await window.SuggayittDB.resetPasswordForEmail(email);
    if (error) {
      showAuthFeedback(error.message, 'error');
      return;
    }

    showAuthFeedback(
      currentLang === 'ml'
        ? 'പാസ്‌വേഡ് റീസെറ്റ് ലിങ്ക് നിങ്ങളുടെ ഇമെയിലിലേക്ക് അയച്ചിട്ടുണ്ട്!'
        : 'Password reset link has been sent to your email!',
      'success'
    );
    document.getElementById('forgotForm').reset();
  }
}

async function handleUpdatePasswordSubmit(event) {
  event.preventDefault();
  const newPassword = document.getElementById('newPasswordInput').value;

  showAuthFeedback(
    currentLang === 'ml' ? 'പാസ്‌വേഡ് മാറ്റുന്നു...' : 'Updating password...',
    'info'
  );

  if (window.SuggayittDB) {
    const { error } = await window.SuggayittDB.updatePassword(newPassword);
    if (error) {
      showAuthFeedback(error.message, 'error');
      return;
    }

    showAuthFeedback(
      currentLang === 'ml'
        ? 'പാസ്‌വേഡ് വിജയകരമായി അപ്‌ഡേറ്റ് ചെയ്തു! ഇനി ലോഗിൻ ചെയ്യാം.'
        : 'Password updated successfully! You can now log in.',
      'success'
    );
    document.getElementById('updatePasswordForm').reset();
    setTimeout(() => {
      switchAuthTab('login');
    }, 1500);
  }
}

function updateAuthNavbar() {
  const activeUser = JSON.parse(localStorage.getItem('suggayittActiveUser') || 'null');
  if (activeUser) {
    authNavGroup.classList.add('hidden');
    userProfileGroup.classList.remove('hidden');
    const firstName = activeUser.name ? activeUser.name.split(' ')[0] : 'Profile';
    loggedInUserBadge.textContent = `👤 ${firstName} (Profile)`;
  } else {
    userProfileGroup.classList.add('hidden');
    authNavGroup.classList.remove('hidden');
  }
}

// ==============================================================================
// 7. LANGUAGE SWITCHER & INITIALIZATION
// ==============================================================================

function applyLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-en], [data-ml]').forEach(el => {
    el.textContent = lang === 'ml' ? el.getAttribute('data-ml') : el.getAttribute('data-en');
  });

  if (typeof placeSearchInput !== 'undefined' && placeSearchInput) {
    placeSearchInput.placeholder = lang === 'ml'
      ? placeSearchInput.getAttribute('data-placeholder-ml')
      : placeSearchInput.getAttribute('data-placeholder-en');
  }

  if (typeof suggestionInput !== 'undefined' && suggestionInput) {
    suggestionInput.placeholder = lang === 'ml'
      ? suggestionInput.getAttribute('data-placeholder-ml')
      : suggestionInput.getAttribute('data-placeholder-en');
  }

  document.querySelectorAll('#authModal input[data-placeholder-en]').forEach(inp => {
    inp.placeholder = lang === 'ml'
      ? inp.getAttribute('data-placeholder-ml')
      : inp.getAttribute('data-placeholder-en');
  });

  renderPlaces();
  renderPackages();
  renderStore();
  renderStudio();
  renderDiscover();
  renderTrivia();
  updateAuthNavbar();

  if (!profilePageView.classList.contains('hidden')) {
    renderProfileDashboard();
  }

  if (activeDetailContext) {
    if (activeDetailContext.type === 'notfound') {
      openNotFoundPage(activeDetailContext.id);
    } else {
      openDetailsPage(activeDetailContext.type, activeDetailContext.id);
    }
  }

  localStorage.setItem('suggayittLang', lang);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderPackages();
  });
});

if (typeof langSelect !== 'undefined' && langSelect) {
  langSelect.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
  });
}

async function syncCatalogFromAPI() {
  try {
    const [destRes, storeRes, courseRes, knowRes] = await Promise.all([
      fetch('/api/destinations'),
      fetch('/api/store'),
      fetch('/api/courses'),
      fetch('/api/knowledge')
    ]);

    const destData = await destRes.json();
    if (destData && destData.success && destData.destinations) {
      destinationsData.splice(0, destinationsData.length, ...destData.destinations);
    }
    const storeData = await storeRes.json();
    if (storeData && storeData.success && storeData.items) {
      storeItemsData.splice(0, storeItemsData.length, ...storeData.items);
    }
    const courseData = await courseRes.json();
    if (courseData && courseData.success && courseData.courses) {
      coursesData.splice(0, coursesData.length, ...courseData.courses);
    }
    const knowData = await knowRes.json();
    if (knowData && knowData.success && knowData.knowledge) {
      knowledgeData.splice(0, knowledgeData.length, ...knowData.knowledge);
    }

    populateSearchDatalist();
    renderPlaces();
    renderPackages();
    renderStore();
    renderStudio();
  } catch (err) {
    // Static catalogs remain default
  }
}

async function validateSession() {
  if (!window.SuggayittDB) return;

  try {
    const session = await window.SuggayittDB.getCurrentSession();
    if (session && session.user) {
      const u = session.user;
      let userName = u.user_metadata?.full_name || u.user_metadata?.name || u.email.split('@')[0];
      let userPhone = u.user_metadata?.phone || '';

      try {
        const profile = await window.SuggayittDB.getProfile(u.id);
        if (profile) {
          if (profile.full_name) userName = profile.full_name;
          if (profile.phone) userPhone = profile.phone;
        }
      } catch (e) { }

      const activeUser = {
        id: u.id,
        name: userName,
        phone: userPhone,
        email: u.email
      };

      localStorage.setItem('suggayittActiveUser', JSON.stringify(activeUser));
      updateAuthNavbar();
      syncProfileFromSupabase();
    } else {
      const cached = localStorage.getItem('suggayittActiveUser');
      if (cached) {
        localStorage.removeItem('suggayittActiveUser');
        updateAuthNavbar();
      }
    }
  } catch (err) {
    console.warn('[Session validation notice]:', err);
  }
}

function handleHashRouting() {
  const hash = (window.location.hash || '').replace('#', '');
  if (!hash) return;

  // Handle password recovery link from Supabase
  if (window.location.href.includes('type=recovery') || hash.includes('type=recovery')) {
    openAuthModal('update-password');
    return;
  }

  if (hash === 'home') {
    showMainView('home');
  } else if (hash === 'best-places') {
    showMainView('best-places');
  } else if (hash === 'about') {
    showMainView('about');
  } else if (hash === 'packages') {
    openPage('packages');
  } else if (hash === 'store') {
    openPage('store');
  } else if (hash === 'studio') {
    openPage('studio');
  } else if (hash === 'discover') {
    openPage('discover');
  } else if (hash === 'profile') {
    openPage('profile');
  }
}

window.addEventListener('popstate', handleHashRouting);
window.addEventListener('hashchange', handleHashRouting);

window.addEventListener('DOMContentLoaded', () => {
  populateSearchDatalist();
  const saved = localStorage.getItem('suggayittLang') || 'en';
  if (typeof langSelect !== 'undefined' && langSelect) {
    langSelect.value = saved;
  }
  applyLanguage(saved);
  syncCatalogFromAPI();

  // Initialize Supabase session and listener
  if (window.SuggayittDB) {
    validateSession();
    window.SuggayittDB.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        openAuthModal('update-password');
      } else if (event === 'SIGNED_IN') {
        validateSession();
      } else if (event === 'SIGNED_OUT') {
        logoutUser();
      }
    });
  }

  if (window.location.hash || window.location.href.includes('type=recovery')) {
    handleHashRouting();
  }
});
