// SECTION FOUR: MOUNTAIN KNOWLEDGE (6 MAJOR TOPICS)

const mountainKnowledge = {
  // --- TOPIC A: 18 TREKKING & MOUNTAINEERING GEARS ---
  gears: [
    {
      id: "trekking-shoes",
      nameEn: "Trekking Shoes (Trail Runners / Low-Ankle)",
      nameMl: "ട്രെക്കിംഗ് ഷൂസ്",
      storeItemId: "shoes",
      whatEn: "Lightweight, flexible hiking footwear engineered with grippy Vibram rubber soles designed for marked trails, day hikes, and moderate terrain.",
      whatMl: "ദൈനംദിന ട്രെക്കിംഗിനും അടയാളപ്പെടുത്തിയ പാതകൾക്കും അനുയോജ്യമായ ഭാരം കുറഞ്ഞതും മികച്ച ഗ്രിപ്പ് നൽകുന്നതുമായ ഷൂസുകൾ.",
      whyEn: "Protects feet from sharp stones and thorns while providing reliable friction on slick mud, wet roots, and sloping rock faces.",
      whyMl: "മൂർച്ചയുള്ള പാറകളിൽ നിന്നും മുള്ളുകളിൽ നിന്നും കാൽപാദങ്ങൾക്ക് സംരക്ഷണം നൽകാനും വഴുക്കൽ തടയാനും.",
      howItWorksEn: "Deep rubber tread lugs (4-5mm) bite into loose dirt, while EVA foam midsoles cushion heel and forefoot impacts.",
      howItWorksMl: "റബ്ബർ സോളിലെ ആഴമേറിയ കുഴികൾ മണ്ണിലും പാറയിലും മികച്ച ഗ്രിപ്പ് നൽകുന്നു. ഇ.വി.എ മിഡ്‌സോൾ പാദങ്ങൾക്കുണ്ടാകുന്ന ആഘാതം കുറയ്ക്കുന്നു.",
      howToChooseEn: "Always buy one half to one full size larger than your casual shoe size to account for foot swelling and prevent toe bruising on steep descents.",
      howToChooseMl: "സാധാരണ ഷൂ സൈസിനേക്കാൾ അര അല്ലെങ്കിൽ ഒരു സൈസ് വലുത് തിരഞ്ഞെടുക്കുക. ഇത് ഇറക്കങ്ങളിൽ വിരലുകൾ ചതയുന്നത് തടയും.",
      whenToUseEn: "Best for Western Ghats day treks (Chembra, Kudremukh, Meesapulimala) and summer Himalayan approaches.",
      whenToUseMl: "പശ്ചിമഘട്ട ട്രെക്കിംഗുകൾക്കും വേനൽക്കാല നടത്തങ്ങൾക്കും അനുയോജ്യം.",
      beginnerRecommendationEn: "Opt for breathable non-waterproof mesh shoes for hot tropical treks so sweat evaporates quickly.",
      beginnerRecommendationMl: "ചൂടുള്ള കാലാവസ്ഥയിൽ വിയർപ്പ് ഉണങ്ങാൻ സഹായിക്കുന്ന ബ്രീത്തബിൾ മെഷ് ഷൂസുകൾ തിരഞ്ഞെടുക്കുക.",
      commonMistakesEn: "Wearing brand new, unbroken shoes directly on a multi-day trek, resulting in excruciating friction blisters on day one.",
      commonMistakesMl: "പുതിയ ഷൂ വാങ്ങി ഉപയോഗിച്ച് നോക്കാതെ നേരിട്ട് വലിയ യാത്രകൾക്ക് ധരിക്കുക; ഇത് ഗുരുതരമായ കുമിളകൾക്ക് (blisters) കാരണമാകും."
    },
    {
      id: "hiking-boots",
      nameEn: "High-Ankle Mountain Boots",
      nameMl: "ഹൈ-ആങ്കിൾ ഹൈക്കിംഗ് ബൂട്ടുകൾ",
      storeItemId: "shoes",
      whatEn: "Heavy-duty, rigid leather or synthetic footwear extending well above the ankle bone with stiff shank support.",
      whatMl: "കണങ്കാലിന് പൂർണ്ണ സംരക്ഷണം നൽകുന്ന ബലമേറിയ മൗണ്ടൻ ബൂട്ടുകൾ.",
      whyEn: "Prevents debilitating ankle rollover sprains when carrying 12-18kg packs over unstable scree, moraine, and boulder fields.",
      whyMl: "ഭാരമേറിയ ബാഗുമായി നടക്കുമ്പോൾ വഴുക്കലുള്ള പാറകളിൽ കണങ്കാൽ തിരിഞ്ഞുപോകുന്നത് (sprain) തടയുന്നു.",
      howItWorksEn: "The high padded collar locks the talus joint in anatomical alignment, while a stiff sole prevents lateral twisting.",
      howItWorksMl: "കണങ്കാലിന് ചുറ്റും ബലമേറിയ പാഡിംഗ് നൽകി സന്ധികളെ സംരക്ഷിക്കുന്നു.",
      howToChooseEn: "Select boots with waterproof-breathable membranes (Gore-Tex) and crampon-compatible heel welts if snow travel is anticipated.",
      howToChooseMl: "മഞ്ഞുമലകളിലൂടെയുള്ള യാത്രയ്ക്ക് ഗോർ-ടെക്സ് വാട്ടർപ്രൂഫ് മെംബ്രേൻ ഉള്ള ബൂട്ടുകൾ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Multi-day Himalayan expeditions (Kedarkantha, Rupin Pass, Goechala) and heavy-pack backpacking.",
      whenToUseMl: "ഹിമാലയൻ സ്നോ ട്രെക്കിംഗുകൾക്കും വലിയ യാത്രകൾക്കും നിർബന്ധം.",
      beginnerRecommendationEn: "Break them in thoroughly by wearing them on city walks or short trails for 2–3 weeks before the expedition.",
      beginnerRecommendationMl: "യാത്രയ്ക്ക് 2-3 ആഴ്ച മുമ്പ് തന്നെ സ്ഥിരമായി ധരിച്ച് കാലിന് പാകപ്പെടുത്തുക.",
      commonMistakesEn: "Tying laces too loosely downhill, allowing the toes to slam violently into the front toe-box.",
      commonMistakesMl: "താഴേക്ക് ഇറങ്ങുമ്പോൾ ലെയ്സുകൾ അയച്ച് കെട്ടുക; ഇത് നഖങ്ങൾ ചതഞ്ഞുപോകാൻ ഇടയാക്കും."
    },
    {
      id: "rucksack",
      nameEn: "Expedition Rucksack (50L – 70L)",
      nameMl: "റക്സാക്ക് ബാഗ് (50L – 70L)",
      storeItemId: "rucksack",
      whatEn: "An ergonomic internal-frame backpack engineered to carry food, shelter, sleeping system, and apparel for multi-day self-sufficiency.",
      whatMl: "ഭാരമേറിയ യാത്രാ ഉപകരണങ്ങൾ നടുവിന് ആയാസമില്ലാതെ ദീർഘദൂരം ചുമക്കാനായി രൂപകൽപ്പന ചെയ്ത വലിയ ബാഗ്.",
      whyEn: "Transfers 70–80% of total pack weight off delicate neck and shoulders directly onto your pelvic hip bones.",
      whyMl: "ഭാരത്തിന്റെ 70-80 ശതമാനവും തോളിൽ നിന്ന് അരക്കെട്ടിലേക്ക് മാറ്റി നടത്തം സുഖകരമാക്കുന്നു.",
      howItWorksEn: "Internal contoured aluminum stay rods channel downward gravitational load straight down into a wide, padded lumbar hip belt.",
      howItWorksMl: "ഉള്ളിലെ അലുമിനിയം ഫ്രെയിമും കട്ടിയുള്ള ഹിപ് ബെൽറ്റും ഭാരം തുല്യമായി വീതിക്കുന്നു.",
      howToChooseEn: "Choose based on torso spine length (measure C7 vertebra to iliac crest), NOT your overall height.",
      howToChooseMl: "ശരീരത്തിന്റെ ഉയരത്തിനനുസരിച്ചല്ല, നട്ടെല്ലിന്റെ നീളത്തിനനുസരിച്ചാണ് റക്സാക്ക് തിരഞ്ഞെടുക്കേണ്ടത്.",
      whenToUseEn: "All wilderness treks lasting 3 to 10 days where camping gear must be carried.",
      whenToUseMl: "3 മുതൽ 10 ദിവസം വരെയുള്ള എല്ലാ ഹിമാലയൻ ക്യാമ്പിംഗ് ട്രെക്കിംഗുകൾക്കും.",
      beginnerRecommendationEn: "A 55L–60L pack is the sweet spot: sufficient space without encouraging you to overpack useless deadweight.",
      beginnerRecommendationMl: "തുടക്കക്കാർക്ക് 55L-60L ബാഗാണ് ഏറ്റവും അനുയോജ്യം.",
      commonMistakesEn: "Packing heavy items (tent, stove) at the bottom or far outside of the bag, throwing your center of gravity backwards.",
      commonMistakesMl: "ഭാരമേറിയ സാധനങ്ങൾ ബാഗിന്റെ ഏറ്റവും താഴെയോ പുറത്തോ വെക്കുന്നത് ബാലൻസ് തെറ്റാൻ കാരണമാകും."
    },
    {
      id: "backpack-rain-cover",
      nameEn: "Backpack Rain Cover (Waterproof Sump)",
      nameMl: "റക്സാക്ക് റെയിൻ കവർ",
      storeItemId: "rucksack",
      whatEn: "A silicone-coated nylon or PU ripstop elasticized waterproof slipcover wrapped snugly around your rucksack.",
      whatMl: "റക്സാക്ക് ബാഗിനെ മഴയിൽ നിന്നും മഞ്ഞിൽ നിന്നും സംരക്ഷിക്കുന്ന വാട്ടർപ്രൂഫ് കവർ.",
      whyEn: "Rucksacks are water-resistant, NOT waterproof; continuous downpours will soak spare clothing, food, and sleeping bags.",
      whyMl: "കനത്ത മഴയിൽ ബാഗിനുള്ളിലെ വസ്ത്രങ്ങളും സ്ലീപ്പിംഗ് ബാഗും നനഞ്ഞുപോകാതിരിക്കാൻ.",
      howItWorksEn: "High-density polyurethane-coated fabric with taped seams creates an impermeable envelope around pack seams and zippers.",
      howItWorksMl: "തയ്യലുകളിലൂടെ പോലും വെള്ളം ഇറങ്ങാത്ത രീതിയിൽ വാട്ടർപ്രൂഫ് തുണി ബാഗിനെ മൂടുന്നു.",
      howToChooseEn: "Ensure the cover is 10–15 liters larger than your rucksack volume so it covers bulky external attachments like foam mats.",
      howToChooseMl: "ബാഗിന്റെ വലിപ്പത്തേക്കാൾ 10-15 ലിറ്റർ അധികമുള്ള കവർ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "During monsoon rains, dense freezing mist, snowstorms, and muddy public transit luggage holds.",
      whenToUseMl: "മൺസൂൺ യാത്രകളിലും മഞ്ഞുവീഴ്ചയുള്ള സമയങ്ങളിലും.",
      beginnerRecommendationEn: "Always use secondary internal garbage liners (dry sacks) inside the pack for critical sleep items.",
      beginnerRecommendationMl: "കൂടുതൽ സുരക്ഷയ്ക്കായി ബാഗിനുള്ളിൽ സാധനങ്ങൾ പ്ലാസ്റ്റിക് കവറുകളിലോ ഡ്രൈ ബാഗുകളിലോ കൂടി സൂക്ഷിക്കുക.",
      commonMistakesEn: "Leaving the back harness exposed to runoff water without pulling the cinch cords tight.",
      commonMistakesMl: "കവർ കൃത്യമായി വലിച്ച് മുറുക്കാതിരുന്നാൽ മുകൾ ഭാഗത്തുകൂടി വെള്ളം ഇറങ്ങി ബാഗ് നനയാം."
    },
    {
      id: "trekking-poles",
      nameEn: "Trekking Poles (Pair)",
      nameMl: "ട്രെക്കിംഗ് പോളുകൾ (വടികൾ)",
      storeItemId: "pole",
      whatEn: "Telescopic aluminum or carbon fiber walking poles equipped with ergonomic hand grips and wrist straps.",
      whatMl: "ഭാരം ക്രമീകരിക്കാനും ബാലൻസ് നിലനിർത്താനും സഹായിക്കുന്ന അലുമിനിയം/കാർബൺ ഫൈബർ വടികൾ.",
      whyEn: "Reduces patellofemoral compressive force on knees by up to 25% on steep descents and provides four points of balance.",
      whyMl: "മലയിറങ്ങുമ്പോൾ കാൽമുട്ടുകളിലുണ്ടാകുന്ന സമ്മർദ്ദം 25% കുറയ്ക്കാനും ബാലൻസ് നൽകാനും.",
      howItWorksEn: "Distributes body and pack weight dynamically to upper pectoral and latissimus back muscles through the arms.",
      howItWorksMl: "ശരീരഭാരം കൈകളിലേക്കും തോളിലേക്കും തുല്യമായി പങ്കുവെച്ച് കാലുകളുടെ ആയാസം കുറയ്ക്കുന്നു.",
      howToChooseEn: "Look for secure lever flick-locks (external clamp) rather than twist-locks, which often freeze and slip in sub-zero snow.",
      howToChooseMl: "മഞ്ഞിൽ ഉറച്ചുപോകുന്ന ട്വിസ്റ്റ് ലോക്കുകൾക്ക് പകരം ഫ്ലിക്ക്-ലോക്ക് (ലിവർ ലോക്ക്) സംവിധാനമുള്ളവ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Always use in pairs during river crossings, scree descents, snow walking, and steep ascents.",
      whenToUseMl: "കുത്തനെയുള്ള കയറ്റങ്ങളിലും ഇറക്കങ്ങളിലും നദികൾ മുറിച്ചുകടക്കുമ്പോഴും.",
      beginnerRecommendationEn: "Adjust height so your elbow forms a precise 90-degree right angle when holding the grip on flat ground.",
      beginnerRecommendationMl: "പരന്ന തറയിൽ നിൽക്കുമ്പോൾ കൈമുട്ട് 90 ഡിഗ്രി കോണിൽ വരുന്ന രീതിയിൽ പോളിന്റെ നീളം ക്രമീകരിക്കുക.",
      commonMistakesEn: "Inserting hands from the top of the wrist strap instead of threading upward through the bottom loop.",
      commonMistakesMl: "റിസ്റ്റ് സ്ട്രാപ്പ് തെറ്റായ രീതിയിൽ പിടിക്കുന്നത് വീഴുമ്പോൾ കൈക്കുഴയ്ക്ക് പരിക്കേൽക്കാൻ കാരണമാകും."
    },
    {
      id: "waterproof-jackets",
      nameEn: "Waterproof Hardshell Jacket",
      nameMl: "വാട്ടർപ്രൂഫ് ഹാർഡ്ഷെൽ ജാക്കറ്റ്",
      storeItemId: "jacket",
      whatEn: "A breathable, windproof, fully seam-sealed outer layer membrane jacket (Gore-Tex, eVent, or Pertex Shield).",
      whatMl: "കനത്ത മഴയെയും തണുത്ത കാറ്റിനെയും പ്രതിരോധിക്കുന്ന പുറം ജാക്കറ്റ്.",
      whyEn: "Keeps rain and melting snow completely out while allowing metabolic body moisture (sweat vapor) to escape.",
      whyMl: "മഴയും കാറ്റും തടയുന്നതിനൊപ്പം ശരീരത്തിലെ വിയർപ്പ് ബാഷ്പമായി പുറത്തുപോകാൻ അനുവദിക്കുന്നു.",
      howItWorksEn: "Microporous membranes contain billions of microscopic pores per sq inch that are 20,000 times smaller than a water droplet, yet 700 times larger than water vapor molecules.",
      howItWorksMl: "മഴത്തുള്ളിയേക്കാൾ ചെറുതും എന്നാൽ വിയർപ്പ് തന്മാത്രകളേക്കാൾ വലുതുമായ സൂക്ഷ്മ സുഷിരങ്ങൾ ഉള്ള മെംബ്രേൻ സാങ്കേതികവിദ്യ.",
      howToChooseEn: "Check waterproof rating: minimum 10,000mm hydrostatic head for day hiking, 20,000mm+ for extreme mountain expeditions.",
      howToChooseMl: "കുറഞ്ഞത് 10,000mm വാട്ടർപ്രൂഫ് റേറ്റിംഗുള്ള ജാക്കറ്റുകൾ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Whenever it rains, sleets, or snows, and as an impenetrable windbreak on gusty alpine ridges.",
      whenToUseMl: "മഴയുള്ളപ്പോഴും മഞ്ഞുകാറ്റ് വീശുമ്പോഴും പുറം വസ്ത്രമായി ധരിക്കുക.",
      beginnerRecommendationEn: "Choose a jacket with pit-zips (underarm ventilation zippers) to vent excess heat during arduous uphill climbs.",
      beginnerRecommendationMl: "കക്ഷങ്ങൾക്ക് താഴെ സിപ്പുകൾ (pit-zips) ഉള്ള ജാക്കറ്റുകൾ തിരഞ്ഞെടുക്കുക; ഇത് കയറ്റങ്ങളിൽ ചൂട് പുറത്തുവിടാൻ സഹായിക്കും.",
      commonMistakesEn: "Confusing a cheap water-resistant windbreaker with a true seam-sealed waterproof hardshell.",
      commonMistakesMl: "സാധാരണ വിൻഡ് ചീറ്ററുകൾ വാട്ടർപ്രൂഫ് ആണെന്ന് തെറ്റിദ്ധരിച്ച് കനത്ത മഴയിൽ കുതിർന്നുപോകുക."
    },
    {
      id: "down-jackets",
      nameEn: "Down / Synthetic Puffer Jacket",
      nameMl: "ഡൗൺ / പഫർ ജാക്കറ്റ്",
      storeItemId: "jacket",
      whatEn: "An ultralight, high-loft insulating mid-layer filled with goose/duck down or synthetic microfibers (Primaloft).",
      whatMl: "തണുപ്പ് അകറ്റിനിർത്താൻ പക്ഷിത്തൂവലുകളോ സിന്തറ്റിക് ഫൈബറോ നിറച്ച കട്ടിയുള്ള പഫർ ജാക്കറ്റ്.",
      whyEn: "Provides the highest warmth-to-weight ratio in existence to prevent hypothermia at sub-zero campsites.",
      whyMl: "മൈനസ് ഡിഗ്രി തണുപ്പിൽ ശരീരത്തിന്റെ സ്വാഭാവിക ചൂട് നഷ്ടപ്പെടാതെ കാത്തുസൂക്ഷിക്കുന്നു.",
      howItWorksEn: "Traps millions of microscopic pockets of non-circulating air warmed by your body heat.",
      howItWorksMl: "ശരീരത്തിൽ നിന്നുള്ള ചൂട് പുറത്തുപോകാത്ത രീതിയിൽ വായു അറകളെ തടഞ്ഞുനിർത്തുന്നു.",
      howToChooseEn: "Check fill power rating (650 to 800+ fill power goose down for high Himalayas).",
      howToChooseMl: "ഹിമാലയൻ യാത്രകൾക്ക് 650 മുതൽ 800 വരെ ഫിൽ പവർ (Fill Power) ഉള്ളവ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Rest stops, summit mornings (pre-dawn pushes), and freezing evenings around the campsite.",
      whenToUseMl: "പുലർച്ചെയുള്ള നടത്തങ്ങൾക്കും രാത്രി ക്യാമ്പ് ചെയ്യുമ്പോഴും വിശ്രമവേളകളിലും ധരിക്കുക.",
      beginnerRecommendationEn: "Never wear your down jacket while doing strenuous uphill hiking; sweat will soak the down and kill all insulation.",
      beginnerRecommendationMl: "കുത്തനെയുള്ള കയറ്റങ്ങൾ കയറുമ്പോൾ ഇത് ധരിക്കരുത്; വിയർപ്പ് പറ്റി തൂവലുകൾ നനഞ്ഞാൽ ചൂട് നൽകാനുള്ള ശേഷി നഷ്ടപ്പെടും.",
      commonMistakesEn: "Getting down feathers wet; untreated down clumps into useless wet mush when exposed to rain.",
      commonMistakesMl: "മഴയത്ത് പുറം ജാക്കറ്റില്ലാതെ ഡൗൺ ജാക്കറ്റ് മാത്രം ധരിക്കുക; നനഞ്ഞാൽ ഇത് ഉപയോഗശൂന്യമാകും."
    },
    {
      id: "thermal-innerwear",
      nameEn: "Thermal Base Layer (Top & Bottom)",
      nameMl: "തെർമൽ ഇന്നർ വെയർ",
      storeItemId: "thermals",
      whatEn: "Skin-tight base layer garments crafted from fine Merino wool or hydrophobic polyester.",
      whatMl: "ശരീരത്തോട് ചേർന്നുനിൽക്കുന്ന വാർം ഇന്നർ വസ്ത്രങ്ങൾ.",
      whyEn: "Rapidly wicks conductive sweat away from your skin, preventing deadly post-exercise 'sweat freeze'.",
      whyMl: "വിയർപ്പ് വലിച്ചെടുത്ത് ശരീരം ഈർപ്പരഹിതമായി നിലനിർത്തി തണുപ്പ് കയറുന്നത് തടയുന്നു.",
      howItWorksEn: "Capillary action draws moisture droplets to the outer fabric surface where body heat evaporates them into the air.",
      howItWorksMl: "ശരീരത്തിൽ ഉണ്ടാകുന്ന വിയർപ്പിനെ തുണിയുടെ പുറംഭാഗത്തേക്ക് തള്ളി ബാഷ്പീകരിക്കുന്നു.",
      howToChooseEn: "Merino wool offers natural anti-odor properties across 7-day treks; synthetic polyester dries 3 times faster.",
      howToChooseMl: "മെറിനോ കമ്പിളി വസ്ത്രങ്ങൾ ദുർഗന്ധം വമിക്കാതെ ദിവസങ്ങളോളം ധരിക്കാം; സിന്തറ്റിക് വസ്ത്രങ്ങൾ വേഗത്തിൽ ഉണങ്ങും.",
      whenToUseEn: "Worn directly against bare skin throughout freezing alpine nights and cold summit bids.",
      whenToUseMl: "തണുപ്പുള്ള രാത്രികളിലും പുലർച്ചെയും അടിവസ്ത്രമായി ധരിക്കുക.",
      beginnerRecommendationEn: "Pack two sets: one exclusively for active hiking, and one strictly dry set reserved exclusively for sleeping in the tent.",
      beginnerRecommendationMl: "രണ്ട് സെറ്റ് കരുതുക: ഒന്ന് പകൽ നടത്തത്തിനും മറ്റൊന്ന് ടെന്റിൽ ഉറങ്ങാൻ മാത്രമായും മാറ്റിവെക്കുക.",
      commonMistakesEn: "Wearing cotton thermals; cotton absorbs up to 27 times its weight in moisture and stays freezing cold ('Cotton Kills').",
      commonMistakesMl: "കോട്ടൺ വസ്ത്രങ്ങൾ ധരിക്കുക; കോട്ടൺ ഈർപ്പം പിടിച്ചുനിർത്തി ശരീരം മരവിപ്പിക്കും ('Cotton Kills')."
    },
    {
      id: "gloves",
      nameEn: "Layered Mountaineering Gloves",
      nameMl: "മൗണ്ടൻ ഗ്ലൗസുകൾ",
      storeItemId: null,
      whatEn: "A two-part hand protection system: thin touch-screen fleece inner liners paired with waterproof insulated outer shells or mittens.",
      whatMl: "കൈകൾക്ക് തണുപ്പും മഞ്ഞുപൊള്ളലും ഏൽക്കാതിരിക്കാനുള്ള പ്രത്യേക ഗ്ലൗസുകൾ.",
      whyEn: "Fingers are the most distant extremities from your heart and are the first to suffer debilitating frostnip and frostbite.",
      whyMl: "രക്തയോട്ടം കുറവായ വിരലുകൾക്ക് വേഗത്തിൽ ഫ്രോസ്റ്റ്ബൈറ്റ് വരാൻ സാധ്യതയുള്ളതിനാൽ സംരക്ഷണം നൽകുന്നു.",
      howItWorksEn: "Liners provide dexterity for tying knots and handling cameras; mittens trap warm air shared between fingers.",
      howItWorksMl: "ഇന്നർ ഗ്ലൗസുകൾ ക്യാമറ ഉപയോഗിക്കാനും മറ്റും സഹായിക്കുന്നു; പുറം മിറ്റൻസ് കൈകൾക്ക് ഊഷ്മളത നൽകുന്നു.",
      howToChooseEn: "Choose outer mittens with wrist leashes so they won't blow away down the mountain if slipped off in gale winds.",
      howToChooseMl: "ശക്തമായ കാറ്റിൽ താഴേക്ക് വീണുപോകാതിരിക്കാൻ റിസ്റ്റ് സ്ട്രാപ്പുള്ള ഗ്ലൗസുകൾ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Snow treks, icy scree scrambling, high pass crossings, and summit pushes.",
      whenToUseMl: "മഞ്ഞുമലകളിലും പാസുകളിലും തണുത്ത കാറ്റുള്ളപ്പോഴും.",
      beginnerRecommendationEn: "Mittens are vastly warmer than 5-finger gloves because fingers warm each other inside a single shared chamber.",
      beginnerRecommendationMl: "5 വിരലുകളുള്ള ഗ്ലൗസുകളേക്കാൾ ചൂട് നൽകുന്നത് വിരലുകൾ ഒന്നിച്ചു നിൽക്കുന്ന മിറ്റൻസുകളാണ് (Mittens).",
      commonMistakesEn: "Taking off gloves directly with your teeth in sub-zero wind to take smartphone photos.",
      commonMistakesMl: "മൊബൈൽ ഉപയോഗിക്കാനായി കൊടും തണുപ്പിൽ ഗ്ലൗസ് ഊരി മാറ്റുക; നിമിഷങ്ങൾക്കുള്ളിൽ വിരലുകൾ മരവിച്ചുപോകാം."
    },
    {
      id: "snow-goggles",
      nameEn: "Alpine Snow Goggles",
      nameMl: "ആൽപൈൻ സ്നോ ഗോഗിൾസ്",
      storeItemId: null,
      whatEn: "Wide-vision, sealed spherical eyewear with anti-fog double lenses and foam face gaskets designed for snowstorms.",
      whatMl: "മഞ്ഞുകാറ്റിൽ കാഴ്ച നഷ്ടപ്പെടാതിരിക്കാൻ കണ്ണുകളെ പൂർണ്ണമായി മൂടുന്ന പ്രത്യേക ഗ്ലാസുകൾ.",
      whyEn: "Blocks gale-force blowing spindrift, prevents corneal freezing, and seals out wind chill in blizzards.",
      whyMl: "അതിശക്തമായ മഞ്ഞുകാറ്റിൽ നിന്ന് കണ്ണുകളെ സംരക്ഷിക്കാനും മഞ്ഞുമരവിപ്പ് തടയാനും.",
      howItWorksEn: "Double lenses create a thermal insulating air barrier that balances temperature differences to prevent internal condensation.",
      howItWorksMl: "ഡബിൾ ലെൻസുകൾ ഉള്ളിലെ ചൂടും പുറത്തെ തണുപ്പും തമ്മിൽ വേർതിരിച്ച് പുകമൂടുന്നത് (fogging) തടയുന്നു.",
      howToChooseEn: "Select cylindrical or spherical lenses with Cat 3 or Cat 4 VLT ratings.",
      howToChooseMl: "ഹിമാലയത്തിന് അനുയോജ്യമായ കാറ്റഗറി 3 അല്ലെങ്കിൽ 4 ലെൻസുകൾ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "High-altitude snowstorms, crossing glaciers, skiing, and summit ridge ascents.",
      whenToUseMl: "ഹിമപാതങ്ങളിലും ഗ്ലേസിയർ യാത്രകളിലും.",
      beginnerRecommendationEn: "Ensure the goggle frame fits flush against your thermal balaclava without pinching your nose bridge.",
      beginnerRecommendationMl: "മുഖത്തോടും തൊപ്പിയോടും ചേർന്നിരിക്കുന്ന രീതിയിലുള്ളവ തിരഞ്ഞെടുക്കുക.",
      commonMistakesEn: "Wiping the wet inner lens surface with rough gloves, permanently stripping off the delicate anti-fog chemical coating.",
      commonMistakesMl: "ഉള്ളിലെ ലെൻസ് ഗ്ലൗസ് കൊണ്ട് തുടച്ച് ആന്റി-ഫോഗ് കോട്ടിംഗ് നശിപ്പിക്കുക."
    },
    {
      id: "sunglasses",
      nameEn: "Category 4 Polarized Glacier Glasses",
      nameMl: "കാറ്റഗറി 4 പോളറൈസ്ഡ് ഗ്ലാസുകൾ",
      storeItemId: "sunglasses",
      whatEn: "Specialized dark sunglasses with leather or rubber side shields offering 100% UV400 radiation protection.",
      whatMl: "സൂര്യരശ്മികളിൽ നിന്നും മഞ്ഞിലെ പ്രതിഫലനത്തിൽ നിന്നും സംരക്ഷണം നൽകുന്ന ഗ്ലാസുകൾ.",
      whyEn: "White snow reflects up to 85% of blinding solar ultraviolet radiation, causing photokeratitis (temporary snow blindness) within hours.",
      whyMl: "മഞ്ഞിൽ തട്ടി പ്രതിഫലിക്കുന്ന അൾട്രാവയലറ്റ് രശ്മികൾ മൂലം കണ്ണുകളുടെ കാഴ്ച നഷ്ടപ്പെടുന്ന 'സ്നോ ബ്ലൈൻഡ്നെസ്' തടയാൻ.",
      howItWorksEn: "Dark category 4 tinted lenses transmit only 3% to 8% of visible light, while side shields block reflected ambient glare.",
      howItWorksMl: "വെളിച്ചത്തിന്റെ 3 മുതൽ 8 ശതമാനം മാത്രം കടത്തിവിടുകയും വശങ്ങളിൽ നിന്നുള്ള പ്രകാശത്തെ തടയുകയും ചെയ്യുന്നു.",
      howToChooseEn: "Always verify Category 4 certification; standard fashion sunglasses (Cat 1 or 2) are useless and dangerous on glaciers.",
      howToChooseMl: "സാധാരണ സൺഗ്ലാസുകൾ ഉപയോഗിക്കരുത്; കാറ്റഗറി 4 സർട്ടിഫിക്കേഷനുള്ള ഗ്ലാസുകൾ മാത്രം തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Mandatory on all daytime snow or glacier walks above tree-line (e.g. Kedarkantha, Roopkund, Ladakh).",
      whenToUseMl: "മഞ്ഞുമലകളിലൂടെയുള്ള എല്ലാ പകൽ യാത്രകൾക്കും നിർബന്ധം.",
      beginnerRecommendationEn: "Attach an elastic neck retainer cord so glasses cannot slip off and tumble into a crevasse.",
      beginnerRecommendationMl: "ഗ്ലാസ് താഴെ വീണുപോകാതിരിക്കാൻ കഴുത്തിൽ ഇടാവുന്ന ചരട് ഘടിപ്പിക്കുക.",
      commonMistakesEn: "Removing sunglasses on cloudy mountain days; UV radiation easily penetrates clouds and causes severe retinal burn.",
      commonMistakesMl: "മേഘാവൃതമായ ദിവസങ്ങളിൽ ഗ്ലാസ് ഊരിവെക്കുക; മേഘങ്ങൾക്കിടയിലൂടെയും UV രശ്മികൾ കണ്ണുകളെ ദോഷകരമായി ബാധിക്കാം."
    },
    {
      id: "headlamps",
      nameEn: "LED Headlamp with Red Night Mode",
      nameMl: "എൽ.ഇ.ഡി ഹെഡ്‌ലാമ്പ്",
      storeItemId: "headlamp",
      whatEn: "A compact hands-free illumination lamp strapped to an elastic headband, outputting 200–450 lumens.",
      whatMl: "കൈകൾ സ്വതന്ത്രമാക്കി തലയിൽ ഘടിപ്പിച്ച് വെളിച്ചം നൽകുന്ന എൽ.ഇ.ഡി ടോർച്ച്.",
      whyEn: "Both hands must remain completely free to plant trekking poles or arrest slips on narrow, unlit mountain ledges.",
      whyMl: "ഇരുട്ടിൽ കൈകളിൽ വടി പിടിക്കാനും പാറകളിൽ പിടിക്കാനും കൈകൾ സ്വതന്ത്രമായിരിക്കണം.",
      howItWorksEn: "Efficient lithium-ion or AAA batteries power bright white focus beams for route-finding and soft red LEDs for reading inside tents.",
      howItWorksMl: "വൈറ്റ് ലൈറ്റ് വഴികാണാനും റെഡ് ലൈറ്റ് രാത്രിയിലെ സ്വാഭാവിക കാഴ്ച നിലനിർത്താനും സഹായിക്കുന്നു.",
      howToChooseEn: "Pick a headlamp with IPX4 or higher water resistance and dual-fuel capability (rechargeable USB pack + backup AAA batteries).",
      howToChooseMl: "വാട്ടർ റെസിസ്റ്റന്റായതും യു.എസ്.ബി ചാർജിംഗിനൊപ്പം എ.എ.എ ബാറ്ററിയും ഉപയോഗിക്കാൻ കഴിയുന്നവ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Pre-dawn alpine summit pushes starting at 2:00 or 3:00 AM; navigating campsite tasks after dark.",
      whenToUseMl: "പുലർച്ചെ 2-3 മണിക്കുള്ള സമ്മിറ്റ് ട്രെക്കിംഗിനും രാത്രി ക്യാമ്പിംഗിനും.",
      beginnerRecommendationEn: "In freezing temperatures, lithium batteries perform vastly better than standard alkaline batteries which rapidly discharge.",
      beginnerRecommendationMl: "കൊടും തണുപ്പിൽ ആൽക്കലൈൻ ബാറ്ററികൾ പെട്ടെന്ന് ചത്തുപോകുമെന്നതിനാൽ ലിഥിയം ബാറ്ററികൾ കരുതുക.",
      commonMistakesEn: "Storing the headlamp loose in your rucksack without locking the power switch, accidentally draining the battery completely before nighttime.",
      commonMistakesMl: "ലോക്ക് ചെയ്യാതെ ബാഗിലിടുക; സ്വിച്ച് തനിയെ ഓണായി ബാറ്ററി തീർന്നുപോകാൻ സാധ്യതയുണ്ട്."
    },
    {
      id: "sleeping-bags",
      nameEn: "Mummy Sleeping Bag (Rated -5°C to -15°C)",
      nameMl: "മമ്മി സ്ലീപ്പിംഗ് ബാഗ്",
      storeItemId: null,
      whatEn: "A tapered, form-fitting insulated cocoon bag featuring a contoured hood, cinch cord, and insulated draft collar.",
      whatMl: "തണുപ്പിൽ നിന്ന് ശരീരത്തെ പൊതിഞ്ഞു സൂക്ഷിക്കുന്ന വാർം സ്ലീപ്പിംഗ് ബാഗ്.",
      whyEn: "Body metabolism slows dramatically during sleep at high altitude; without an insulated cocoon, severe hypothermia can occur in minutes.",
      whyMl: "ഉറക്കത്തിൽ ശരീരത്തിന്റെ ചൂട് കുറയുന്നതിനാൽ മൈനസ് ഡിഗ്രി തണുപ്പിൽ ജീവൻ സംരക്ഷിക്കാൻ.",
      howItWorksEn: "Traps metabolic heat close to the torso and extremities in a minimal internal air volume.",
      howItWorksMl: "ശരീരത്തിന്റെ ആകൃതിയിലുള്ള ഡിസൈൻ വഴി കുറഞ്ഞ വായുവിൽ കൂടുതൽ ചൂട് നിലനിർത്തുന്നു.",
      howToChooseEn: "Choose based on the bag's 'Comfort Rating' (suitable for women/cold sleepers), NOT the 'Extreme Survival Rating'.",
      howToChooseMl: "'കംഫർട്ട് റേറ്റിംഗ്' നോക്കി തിരഞ്ഞെടുക്കുക; ഹിമാലയത്തിന് -5°C മുതൽ -15°C വരെ താങ്ങുന്നവ വേണം.",
      whenToUseEn: "Every night spent in alpine tents, rustic wooden shepherd huts, and high tea-houses.",
      whenToUseMl: "ടെന്റുകളിലെയും മലയോര ഷെൽട്ടറുകളിലെയും എല്ലാ രാത്രി ഉറക്കങ്ങൾക്കും.",
      beginnerRecommendationEn: "Never sleep wearing wet or sweaty trekking clothes; change into 100% bone-dry thermals before sliding in.",
      beginnerRecommendationMl: "പകൽ വിയർത്ത വസ്ത്രങ്ങൾ ധരിച്ച് ഇതിൽ ഉറങ്ങരുത്; ഉണങ്ങിയ തെർമൽ വസ്ത്രങ്ങൾ മാത്രം ധരിക്കുക.",
      commonMistakesEn: "Burying your face completely inside the bag and exhaling; breath moisture saturates the insulation and turns the bag freezing wet.",
      commonMistakesMl: "ശ്വാസം ബാഗിനുള്ളിലേക്ക് വിട്ട് ഉറങ്ങുക; ശ്വാസത്തിലെ ഈർപ്പം ബാഗ് നനയാൻ കാരണമാകും."
    },
    {
      id: "tents",
      nameEn: "Four-Season Geodesic Dome Tent",
      nameMl: "ഫോർ-സീസൺ ഡ travel Tents",
      storeItemId: null,
      whatEn: "A robust, multi-pole interlocking shelter engineered with rigid ripstop fabrics and aluminum alloy poles.",
      whatMl: "മഞ്ഞുമലകളിലെ കൊടും കാറ്റിനെയും മഞ്ഞുവീഴ്ചയെയും പ്രതിരോധിക്കുന്ന സുരക്ഷിത ടെന്റ്.",
      whyEn: "Provides an impenetrable physical micro-climate shielding climbers from gale-force winds, pouring rain, and heavy snow loads.",
      whyMl: "അതിശക്തമായ കാറ്റിൽ നിന്നും മഞ്ഞുവീഴ്ചയിൽ നിന്നും സംരക്ഷണം നൽകുന്ന അഭയകേന്ദ്രം.",
      howItWorksEn: "Geodesic pole crossings distribute wind stresses across multiple intersecting curves, preventing pole buckling.",
      howItWorksMl: "പരസ്പരം ബന്ധിപ്പിച്ച അലുമിനിയം പോളുകൾ കാറ്റിന്റെ സമ്മർദ്ദത്തെ തുല്യമായി പങ്കുവെച്ച് ടെന്റ് തകരാതെ കാക്കുന്നു.",
      howToChooseEn: "Look for 7000-series aircraft-grade aluminum poles and a waterproof flysheet with a minimum 3,000mm hydrostatic head.",
      howToChooseMl: "ബലമേറിയ അലുമിനിയം പോളുകളും വാട്ടർപ്രൂഫ് ഫ്ലൈഷീറ്റുമുള്ള ടെന്റുകൾ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Alpine high-camps where permanent huts do not exist.",
      whenToUseMl: "ഉയർന്ന പ്രദേശങ്ങളിലെ ക്യാമ്പിംഗുകൾക്ക്.",
      beginnerRecommendationEn: "Always stake down the windward side first when pitching in heavy mountain gusts so the tent doesn't blow away.",
      beginnerRecommendationMl: "കാറ്റ് വീശുന്ന വശം ആദ്യം നിലത്ത് ആണി അടിച്ച് ഉറപ്പിക്കുക.",
      commonMistakesEn: "Pitching tents under unstable snow cornices, dead trees, or dry riverbeds prone to flash floods.",
      commonMistakesMl: "മണ്ണിടിച്ചിൽ സാധ്യതയുള്ള സ്ഥലങ്ങളിലോ വെള്ളപ്പൊക്ക സാധ്യതയുള്ള അരുവികൾക്കടുത്തോ ടെന്റ് അടിക്കുക."
    },
    {
      id: "sleeping-mats",
      nameEn: "Closed-Cell Foam or Insulated Inflatable Mat",
      nameMl: "ഇൻസുലേറ്റഡ് സ്ലീപ്പിംഗ് മാറ്റ്",
      storeItemId: null,
      whatEn: "A thermal barrier pad placed between the frozen tent floor and your sleeping bag.",
      whatMl: "തണുത്ത തറയിൽ നിന്ന് ശരീരത്തിലേക്ക് തണുപ്പ് കയറുന്നത് തടയാൻ സ്ലീപ്പിംഗ് ബാഗിന് താഴെ ഇടുന്ന മാറ്റ്.",
      whyEn: "Your body weight compresses sleeping bag down flat beneath you, eliminating all insulation from underneath; the ground will siphon away your body heat 50 times faster than air.",
      whyMl: "ശരീരഭാരം കൊണ്ട് സ്ലീപ്പിംഗ് ബാഗിന്റെ താഴത്തെ ഭാഗം പരന്നുപോകുന്നതിനാൽ നിലത്തുനിന്നുള്ള കൊടും തണുപ്പ് നേരിട്ട് ശരീരത്തിലേക്ക് കയറും.",
      howItWorksEn: "Provides an R-value (measure of thermal resistance) blocking conductive ground chill from draining your core temperature.",
      howItWorksMl: "ആർ-വാല്യൂ (R-Value) സാങ്കേതികവിദ്യയിലൂടെ നിലത്തു നിന്നുള്ള തണുപ്പിനെ പൂർണ്ണമായി തടയുന്നു.",
      howToChooseEn: "Select a mat with an R-value of at least 3.0 for three-season camping, and 4.5+ for sub-zero snow camping.",
      howToChooseMl: "മഞ്ഞിലെ ക്യാമ്പിംഗിന് കുറഞ്ഞത് 4.0-ൽ കൂടുതൽ ആർ-വാല്യൂ ഉള്ള മാറ്റുകൾ തിരഞ്ഞെടുക്കുക.",
      whenToUseEn: "Mandatory on every single night spent inside a ground tent.",
      whenToUseMl: "ടെന്റിൽ ഉറങ്ങുന്ന എല്ലാ രാത്രികളിലും നിർബന്ധം.",
      beginnerRecommendationEn: "A simple closed-cell accordion foam mat (like Therm-a-Rest Z Lite) never punctures, making it foolproof for rugged terrain.",
      beginnerRecommendationMl: "പഞ്ചറാകാത്ത ഫോം മാറ്റുകൾ തുടക്കക്കാർക്ക് കൂടുതൽ വിശ്വസനീയമാണ്.",
      commonMistakesEn: "Assuming a thick sleeping bag alone is enough without a sleeping mat, waking up shivering in the middle of the night.",
      commonMistakesMl: "മാറ്റില്ലാതെ സ്ലീപ്പിംഗ് ബാഗ് മാത്രം ഉപയോഗിച്ച് കൊടും തണുപ്പിൽ ഉറങ്ങാൻ ശ്രമിക്കുക."
    },
    {
      id: "ponchos",
      nameEn: "Heavy-Duty Trekking Poncho",
      nameMl: "ട്രെക്കിംഗ് പോഞ്ചോ റെയിൻകോട്ട്",
      storeItemId: "poncho",
      whatEn: "A wide, hooded waterproof tarp garment cut broadly to drape simultaneously over both the trekker and their 60L rucksack.",
      whatMl: "യാത്രികനെയും ചുമലിലുള്ള വലിയ റക്സാക്കിനെയും ഒരേസമയം മൂടിപ്പുതയ്ക്കുന്ന മഴക്കോട്ട്.",
      whyEn: "Allows rapid, instantaneous rain protection without stopping to unpack rain covers, and provides superb under-body airflow.",
      whyMl: "മഴ വരുമ്പോൾ ബാഗ് അഴിക്കാതെ തന്നെ നിമിഷങ്ങൾക്കുള്ളിൽ ധരിക്കാൻ സാധിക്കുന്നു.",
      howItWorksEn: "Open bottom prevents moisture condensation build-up while heavy-gauge waterproof fabric sheds deluge rain.",
      howItWorksMl: "അടിഭാഗം തുറന്നിരിക്കുന്നതിനാൽ വിയർപ്പ് തങ്ങിനിൽക്കാതെ സുഖകരമായ വായുസഞ്ചാരം നൽകുന്നു.",
      howToChooseEn: "Choose a ripstop nylon model with grommets at the corners so it can double as an emergency survival shelter tarp.",
      howToChooseMl: "കോർണറുകളിൽ കൊളുത്തുകളുള്ളവ തിരഞ്ഞെടുക്കുക; അത്യാവശ്യ ഘട്ടങ്ങളിൽ ഇത് ടെന്റായി കെട്ടാനും ഉപയോഗിക്കാം.",
      whenToUseEn: "Western Ghats monsoons, sudden subtropical downpours, and wet jungle hikes.",
      whenToUseMl: "പശ്ചിമഘട്ടത്തിലെ കനത്ത മൺസൂൺ മഴകളിൽ.",
      beginnerRecommendationEn: "Fasten the side snap buttons securely around your waist so whipping mountain crosswinds don't flap the poncho into your face.",
      beginnerRecommendationMl: "കാറ്റിൽ പറന്നുപോകാതിരിക്കാൻ സൈഡ് ബട്ടണുകൾ കൃത്യമായി ഇടുക.",
      commonMistakesEn: "Wearing a loose flapping poncho on technical narrow ridges with gale winds, catching the wind like a sail.",
      commonMistakesMl: "ശക്തമായ കാറ്റുള്ള ഇടുങ്ങിയ മലനിരകളിൽ ഇത് ധരിക്കുന്നത് ബാലൻസ് തെറ്റാൻ ഇടയാക്കും."
    },
    {
      id: "first-aid-kits",
      nameEn: "Wilderness First-Aid Kit",
      nameMl: "ഫസ്റ്റ് എയ്ഡ് കിറ്റ്",
      storeItemId: null,
      whatEn: "A water-sealed medical kit stocked with trauma dressings, antiseptics, blister treatments, splints, and wilderness medications.",
      whatMl: "അടിയന്തിര ഘട്ടങ്ങളിൽ ജീവൻ രക്ഷിക്കാൻ സഹായിക്കുന്ന പ്രഥമശുശ്രൂഷാ കിറ്റ്.",
      whyEn: "Professional hospital evacuation in remote mountain terrain can take 24 to 72 hours; self-reliance is life-or-death.",
      whyMl: "ഹെലികോപ്റ്ററോ ആംബുലൻസോ എത്താൻ ദിവസങ്ങൾ എടുത്തേക്കാവുന്ന കാടുകളിൽ സ്വയം ചികിത്സിക്കാൻ.",
      howItWorksEn: "Enables immediate control of catastrophic hemorrhage, stabilization of fractures, and treatment of high-altitude acute illness.",
      howItWorksMl: "രക്തസ്രാവം തടയാനും ഒടിവുകൾ കെട്ടിവെക്കാനും അണുബാധ തടയാനും സഹായിക്കുന്നു.",
      howToChooseEn: "Include SAM splints, crepe bandages, sterile gauze, Leukotape, rehydration salts (ORS), paracetamol, and emergency mountain medicines (Diamox under medical prescription).",
      howToChooseMl: "ബാൻഡേജുകൾ, ഒ.ആർ.എസ്, വേദനസംഹാരികൾ, ഡയാമോക്സ് ഗുളികകൾ എന്നിവ ഉൾപ്പെടുത്തുക.",
      whenToUseEn: "Carried in top lid pocket of your pack on every outdoor adventure.",
      whenToUseMl: "എല്ലാ യാത്രകളിലും ബാഗിന്റെ ഏറ്റവും എളുപ്പത്തിൽ എടുക്കാവുന്ന സ്ഥലത്ത് കരുതുക.",
      beginnerRecommendationEn: "Take a certified Wilderness First Aid (WFA) course so you know exactly how to apply each item under pressure.",
      beginnerRecommendationMl: "കിറ്റിലുള്ള സാധനങ്ങൾ കൃത്യമായി ഉപയോഗിക്കാൻ പ്രഥമശുശ്രൂഷാ പരിശീലനം നേടുക.",
      commonMistakesEn: "Carrying expired medicines or storing the kit in an unsealed bag where moisture ruins sterile cotton and tablets.",
      commonMistakesMl: "കാലഹരണപ്പെട്ട മരുന്നുകൾ സൂക്ഷിക്കുകയോ നനവ് തട്ടി മരുന്നുകൾ കേടാക്കുകയോ ചെയ്യുക."
    },
    {
      id: "water-bottles-hydration",
      nameEn: "Insulated Bottles & Hydration Bladders",
      nameMl: "വാട്ടർ ബോട്ടിലുകളും ഹൈഡ്രേഷൻ സിസ്റ്റവും",
      storeItemId: null,
      whatEn: "Wide-mouth BPA-free bottles (Nalgene) paired with insulated thermos flasks and TPU water bladders with bite valves.",
      whatMl: "ശരീരത്തിൽ ജലാംശം നിലനിർത്താൻ സഹായിക്കുന്ന പ്രത്യേക ബോട്ടിലുകളും ഫ്ലാസ്കുകളും.",
      whyEn: "Dehydration accelerates acute altitude sickness by 300%; cold mountain air constantly strips moisture from your lungs.",
      whyMl: "നിർജ്ജലീകരണം ഉണ്ടായാൽ അക്യൂട്ട് മൗണ്ടൻ സിക്ക്നസ് (AMS) പിടിപെടാനുള്ള സാധ്യത പലമടങ്ങ് വർദ്ധിക്കും.",
      howItWorksEn: "Double-wall vacuum insulation keeps drinking water hot in -15°C sub-zero conditions without freezing into solid ice.",
      howItWorksMl: "വാക്വം ഇൻസുലേഷൻ വെള്ളം മഞ്ഞുകട്ടയായി ഉറഞ്ഞുപോകാതെ ചൂടോടെ സൂക്ഷിക്കുന്നു.",
      howToChooseEn: "Carry one 1-liter thermos vacuum flask for hot water and one wide-mouth bottle that can double as a hot-water hot-water bottle inside your sleeping bag.",
      howToChooseMl: "ഒരു തെർമോസ് ഫ്ലാസ്കും ഒരു വൈഡ് മൗത്ത് ബോട്ടിലും കരുതുക.",
      whenToUseEn: "Drink 4 to 5 liters of fluids daily on high-altitude expeditions.",
      whenToUseMl: "ദിവസവും 4 മുതൽ 5 ലിറ്റർ വരെ വെള്ളം കുടിക്കാൻ ശീലിക്കുക.",
      beginnerRecommendationEn: "Fill a wide-mouth Nalgene bottle with boiling water at night, slide it into a wool sock, and place it at the foot of your sleeping bag for 6 hours of radiant bed warmth.",
      beginnerRecommendationMl: "രാത്രി തിളച്ച വെള്ളം ബോട്ടിലിൽ നിറച്ച് സോക്സിട്ട് സ്ലീപ്പിംഗ് ബാഗിന്റെ ഉള്ളിൽ വെച്ചാൽ രാത്രി മുഴുവൻ മികച്ച ചൂട് ലഭിക്കും.",
      commonMistakesEn: "Using exposed external hydration bladder drinking tubes in winter; water freezes solid in the thin tube within 15 minutes.",
      commonMistakesMl: "മഞ്ഞുകാലത്ത് പൈപ്പുള്ള ബാഗുകൾ പുറത്ത് തൂക്കിയിടുക; പൈപ്പിലെ വെള്ളം മിനിറ്റുകൾക്കകം ഉറഞ്ഞുപോകും."
    },
    {
      id: "navigation-tools",
      nameEn: "Compass, Topo Map & Satellite Communicator",
      nameMl: "നാവിഗേഷൻ ഉപകരണങ്ങൾ (മാപ്പും കോമ്പസും)",
      storeItemId: null,
      whatEn: "A baseplate magnetic liquid compass (Silva), waterproof 1:25,000 topographic contour map, and satellite GPS messenger (Garmin inReach).",
      whatMl: "ദിശ അറിയാനുള്ള മാഗ്നറ്റിക് കോമ്പസ്, ടോപ്പോഗ്രാഫിക് മാപ്പ്, സാറ്റലൈറ്റ് ജി.പി.എസ് ഉപകരണങ്ങൾ.",
      whyEn: "Smartphone GPS batteries fail rapidly in sub-zero cold, and mobile cellular signals are zero in deep mountain canyons.",
      whyMl: "മൊബൈൽ ഫോണുകൾക്ക് റേഞ്ചില്ലാത്ത മലകളിൽ വഴിതെറ്റാതിരിക്കാനും അടിയന്തിര സന്ദേശങ്ങൾ അയക്കാനും.",
      howItWorksEn: "Earth's geomagnetic field aligns the compass needle to magnetic north; satellite messengers communicate directly with low-earth orbit constellations.",
      howItWorksMl: "ഭൂമിയുടെ കാന്തികവലയത്തെ ആശ്രയിച്ച് കോമ്പസ് കൃത്യമായി ദിശ കാണിക്കുന്നു.",
      howToChooseEn: "Always carry an analog compass and physical laminated map as an unhackable, battery-free failsafe backup.",
      howToChooseMl: "ബാറ്ററി ആവശ്യമില്ലാത്ത ഒരു സാധാരണ കോമ്പസും വാട്ടർപ്രൂഫ് മാപ്പും എപ്പോഴും കൂടെ കരുതുക.",
      whenToUseEn: "Route planning, whiteouts, fork in the trail, and wilderness emergency signaling.",
      whenToUseMl: "മൂടൽമഞ്ഞിൽ കാഴ്ച മറയുമ്പോഴും കാടുകളിൽ വഴിതിരിയുമ്പോഴും.",
      beginnerRecommendationEn: "Keep battery electronics inside your inner jacket pockets close to body heat so lithium cells don't instantly deplete.",
      beginnerRecommendationMl: "ഇലക്ട്രോണിക് ഉപകരണങ്ങൾ തണുപ്പിൽ ബാറ്ററി തീരാതിരിക്കാൻ ജാക്കറ്റിന്റെ ഉള്ളിലെ പോക്കറ്റിൽ സൂക്ഷിക്കുക.",
      commonMistakesEn: "Relying 100% on a phone screen battery with zero paper backup; when the phone dies at dusk, you are completely stranded.",
      commonMistakesMl: "മൊബൈൽ ഫോണിനെ മാത്രം വിശ്വസിച്ച് യാത്ര ചെയ്യുക; ബാറ്ററി തീർന്നാൽ കാട്ടിൽ വഴിതെറ്റി കുടുങ്ങിപ്പോകും."
    }
  ],

  // --- TOPIC B: MOUNTAIN GEOGRAPHY & TYPES ---
  geography: {
    titleEn: "Mountain Geography & Tectonic Formation",
    titleMl: "പർവ്വത ഭൂമിശാസ്ത്രവും രൂപീകരണവും",
    overviewEn: "Mountains cover approximately 27% of Earth's land surface and are the water towers of our world, supplying fresh drinking water to more than half of humanity. They are born from violent, colossal tectonic movements in Earth's lithosphere over millions of years.",
    overviewMl: "ഭൂമിയുടെ കരവിസ്തൃതിയുടെ 27 ശതമാനവും പർവ്വതങ്ങളാണ്. ലോകജനസംഖ്യയുടെ പകുതിയിലധികം പേർക്ക് കുടിവെള്ളം നൽകുന്ന ജലസംഭരണികളാണ് മലനിരകൾ. ഭൂമിയുടെ ഉള്ളിലെ ടെക്റ്റോണിക് പ്ലേറ്റുകളുടെ കൂട്ടിയിടിയിലൂടെയാണ് ഇവ രൂപംകൊള്ളുന്നത്.",
    types: [
      {
        nameEn: "Fold Mountains (Orogeny)",
        nameMl: "മടക്കു പർവ്വതങ്ങൾ (ഫോൾഡ് മൗണ്ടൻസ്)",
        descriptionEn: "Created when two tectonic plates collide head-on at convergent boundaries. The immense compressive stress crumples and buckles the sedimentary rock layers into colossal arches (anticlines) and troughs (synclines).",
        descriptionMl: "രണ്ട് ടെക്റ്റോണിക് പ്ലേറ്റുകൾ പരസ്പരം കൂട്ടിയിടിക്കുമ്പോൾ പാറപാളികൾ മടങ്ങി മുകളിലേക്ക് ഉയർന്നുണ്ടാകുന്ന പർവ്വതങ്ങൾ.",
        examplesEn: "Himalayas (India/Nepal), Alps (Europe), Andes (South America), Rockies (North America).",
        examplesMl: "ഹിമാലയം, ആൽപ്സ്, ആൻഡീസ്, റോക്കീസ്.",
        diagram: "tectonic_fold_diagram"
      },
      {
        nameEn: "Block Mountains (Fault-Block)",
        nameMl: "ബ്ലോക്ക് പർവ്വതങ്ങൾ",
        descriptionEn: "Formed when tensile tectonic forces pull the crust apart, creating faults. Central blocks of the Earth's crust either drop down (forming grabens/rift valleys) or outer crusts drop leaving central blocks towering high as 'horsts'.",
        descriptionMl: "ഭൂമിയുടെ ഉപരിതലത്തിലുണ്ടാകുന്ന വിള്ളലുകൾ (faults) കാരണം ചില ഭാഗങ്ങൾ താഴേക്ക് ഇടിഞ്ഞുപോവുകയോ മുകളിലേക്ക് തള്ളിനിൽക്കുകയോ ചെയ്യുമ്പോൾ രൂപപ്പെടുന്നു.",
        examplesEn: "Vosges Mountains and Black Forest (Rhine Rift), Sierra Nevada (USA), Satpura & Vindhya ranges (India).",
        examplesMl: "വോസ്ഗെസ്, ബ്ലാക്ക് ഫോറസ്റ്റ്, സത്പുര, വിന്ധ്യ മലനിരകൾ.",
        diagram: "block_fault_diagram"
      },
      {
        nameEn: "Volcanic Mountains",
        nameMl: "അഗ്നിപർവ്വതങ്ങൾ (വോൾക്കാനിക് മൗണ്ടൻസ്)",
        descriptionEn: "Built by the accumulation of molten magma, volcanic ash, cinders, and lava erupting through cracks in the crust from the mantle over successive millennia.",
        descriptionMl: "ഭൂമിയുടെ ഉള്ളിൽ നിന്നുള്ള ലാവയും ചാരവും തണുത്തുറഞ്ഞ് അടിഞ്ഞുകൂടി കാലക്രമേണ മലകളായി മാറുന്നു.",
        examplesEn: "Mount Kilimanjaro (Tanzania), Mount Fuji (Japan), Mount Rainier (USA), Mount Vesuvius (Italy).",
        examplesMl: "കിളിമഞ്ചാരോ, ഫ്യൂജി, മൗണ്ട് റെയ്‌നിയർ.",
        diagram: "volcano_cone_diagram"
      },
      {
        nameEn: "Dome Mountains",
        nameMl: "ഡോം പർവ്വതങ്ങൾ",
        descriptionEn: "Formed when molten magma wells up beneath the Earth's crust but fails to breach the surface. The pooling magma pushes the overlying sedimentary rock strata upward into a broad blister-like dome.",
        descriptionMl: "ഭൂമിക്കടിയിലെ മാഗ്മ പുറത്തേക്ക് വരാതെ മുകളിലെ പാറകളെ തള്ളി ഒരു താഴികക്കുടം പോലെ ഉയർത്തുമ്പോൾ രൂപപ്പെടുന്നു.",
        examplesEn: "Black Hills of South Dakota (USA), Adirondack Mountains (New York).",
        examplesMl: "ബ്ലാക്ക് ഹിൽസ് (അമേരിക്ക), അഡിറോൺഡാക്ക് മലനിരകൾ.",
        diagram: "dome_uplift_diagram"
      },
      {
        nameEn: "Plateau / Residual Mountains (Erosional)",
        nameMl: "പീഠഭൂമി / ശേഷിപ്പ് പർവ്വതങ്ങൾ",
        descriptionEn: "Formed by millions of years of wind, water, and ice erosion carving away soft rock strata from high horizontal volcanic plateaus, leaving behind resistant, towering flat-topped mesas, buttes, and peaks.",
        descriptionMl: "കാറ്റും മഴയും നദികളും ചേർന്ന് മൃദുവായ പാറകളെ ദ്രവിപ്പിച്ചു കളയുമ്പോൾ ബാക്കിയാകുന്ന ബലമേറിയ പാറക്കെട്ടുകൾ.",
        examplesEn: "Western Ghats tablelands (Panchgani, Wayanad), Deccan Traps (India), Catskill Mountains (USA).",
        examplesMl: "പശ്ചിമഘട്ട കുന്നുകൾ, ഡെക്കാൻ പീഠഭൂമി, കാറ്റ്സ്കിൽ മലനിരകൾ.",
        diagram: "plateau_erosion_diagram"
      }
    ]
  },

  // --- TOPIC C: MOUNTAIN WEATHER & CLIMATE ---
  weather: {
    titleEn: "Mountain Weather Dynamics & Meteorology",
    titleMl: "പർവ്വത കാലാവസ്ഥയും കാറ്റുകളും",
    concepts: [
      {
        nameEn: "Environmental Lapse Rate (Altitude Cooling)",
        nameMl: "ഉയരം കൂടുന്തോറുമുള്ള താപനില വ്യതിയാനം (ലാപ്സ് റേറ്റ്)",
        detailsEn: "Air pressure and atmospheric density drop with altitude. As warm air rises, it expands and cools adiabatically at an average rate of 6.5°C per 1,000 meters of elevation gain (approximately 3.5°F per 1,000 ft). This is why peaks like Kilimanjaro retain glaciers even directly on the tropical equator.",
        detailsMl: "ഓരോ 1,000 മീറ്റർ ഉയരം കൂടുമ്പോഴും താപനില ശരാശരി 6.5 ഡിഗ്രി സെൽഷ്യസ് വീതം കുറയുന്നു. ഭൂമധ്യരേഖയ്ക്കടുത്തുള്ള കിളിമഞ്ചാരോയിൽ പോലും മഞ്ഞുപാളികൾ കാണപ്പെടുന്നത് ഇതുകൊണ്ടാണ്."
      },
      {
        nameEn: "Orographic Precipitation & Rain Shadows",
        nameMl: "ഓറോഗ്രാഫിക് മഴയും റെയിൻ ഷാഡോയും",
        detailsEn: "When moisture-laden winds encounter a mountain barrier, they are forced upward. As the air rises and cools, moisture condenses into clouds, dropping torrential rain and snow on the windward slope. By the time the air crests the ridge and descends the leeward side, it is stripped of moisture and warms, creating hyper-arid rain-shadow cold deserts.",
        detailsMl: "ഈർപ്പമുള്ള കാറ്റ് മലനിരകളിൽ തട്ടി മുകളിലേക്ക് ഉയരുമ്പോൾ തണുത്ത് കനത്ത മഴ പെയ്യുന്നു (കാറ്റടിക്കുന്ന വശത്ത്). എന്നാൽ മല കടന്ന് മറുഭാഗത്തേക്ക് ഇറങ്ങുമ്പോൾ ഈർപ്പമില്ലാത്ത വരണ്ട കാറ്റായി മാറുന്നു. ഇതാണ് ലഡാക്ക്, സ്പിതി പോലുള്ള പ്രദേശങ്ങൾ ശീത മരുഭൂമികളാകാൻ കാരണം."
      },
      {
        nameEn: "High-Altitude Jet Streams",
        nameMl: "ജെറ്റ് സ്ട്രീം കാറ്റുകൾ",
        detailsEn: "Narrow bands of ultra-fast westerly winds circumnavigating the globe in the upper troposphere (9,000m to 12,000m), reaching hurricane velocities of 150 to 250 km/h. During winter, the subtropical jet stream sits directly on the summit pyramid of Mount Everest, blasting ice and snow into space with sonic roars.",
        detailsMl: "അന്തരീക്ഷത്തിന്റെ ഉയർന്ന തട്ടിൽ മണിക്കൂറിൽ 150 മുതൽ 250 കിലോമീറ്റർ വരെ വേഗതയിൽ വീശുന്ന അതിശക്തമായ കാറ്റുകൾ. ശൈത്യകാലത്ത് ഇവ എവറസ്റ്റിന്റെ നെറുകയിലൂടെ അതിശക്തമായി ആഞ്ഞടിക്കുന്നു."
      },
      {
        nameEn: "Katabatic (Downslope Drainage) Winds",
        nameMl: "കറ്റാബാറ്റിക് കാറ്റുകൾ",
        detailsEn: "High-density cold air formed over elevated glaciers and snowfields sinks by gravity after sunset, roaring down valleys as violent, freezing nocturnal winds that can flatten base-camp tents within seconds.",
        detailsMl: "സൂര്യാസ്തമയത്തിന് ശേഷം മഞ്ഞുമലകളിലെ തണുത്ത ഭാരമേറിയ വായു ഗുരുത്വാകർഷണം മൂലം അതിവേഗം താഴ്‌വരകളിലേക്ക് ഇരച്ചെത്തുന്ന തണുത്ത കൊടുങ്കാറ്റുകൾ."
      }
    ]
  },

  // --- TOPIC D: ALTITUDE SICKNESS & PHYSIOLOGY ---
  altitudeSickness: {
    titleEn: "Altitude Sickness (AMS, HAPE & HACE)",
    titleMl: "ഉയരങ്ങളിലെ അസുഖങ്ങൾ (AMS, HAPE & HACE)",
    medicalDisclaimer: "DISCLAIMER: This information is strictly for educational purposes and does not constitute certified medical advice. Always consult a licensed wilderness physician. At high altitude, immediate descent is the primary life-saving cure.",
    medicalDisclaimerMl: "മുന്നറിയിപ്പ്: ഇത് വിവരങ്ങൾ പങ്കുവെക്കാൻ മാത്രമുള്ളതാണ്; ഔദ്യോഗിക വൈദ്യോപദേശമല്ല. മലനിരകളിൽ ഉണ്ടാകുന്ന അസുഖങ്ങൾക്ക് ഉടനടി താഴേക്ക് ഇറങ്ങുക (Descent) എന്നതാണ് ഏറ്റവും സുപ്രധാനമായ ജീവൻ രക്ഷാമാർഗ്ഗം.",
    conditions: [
      {
        code: "AMS",
        nameEn: "Acute Mountain Sickness (AMS)",
        nameMl: "അക്യൂട്ട് മൗണ്ടൻ സിക്ക്നസ് (AMS)",
        severity: "Mild to Moderate (Common above 2,500m)",
        severityMl: "2,500 മീറ്ററിന് മുകളിൽ കണ്ടുവരുന്ന സാധാരണ അവസ്ഥ",
        symptomsEn: "Throbbing frontal headache, nausea, dizziness, fatigue, loss of appetite, insomnia, and light-headedness (feels like a severe hangover).",
        symptomsMl: "കഠിനമായ തലവേദന, ഛർദ്ദി, ക്ഷീണം, വിശപ്പില്ലായ്മ, ഉറക്കമില്ലായ്മ, തലകറക്കം.",
        causeEn: "Rapid ascent without acclimatization leading to reduced oxygen saturation in bodily tissues.",
        causeMl: "ശരീരത്തിന് പൊരുത്തപ്പെടാൻ സമയം നൽകാതെയുള്ള വേഗത്തിലുള്ള മലകയറ്റം.",
        managementEn: "Stop ascending immediately. Rest at current altitude. Hydrate with electrolytes. Mild analgesics. Never ascend with active AMS symptoms."
      },
      {
        code: "HAPE",
        nameEn: "High Altitude Pulmonary Edema (HAPE)",
        nameMl: "ഹൈ ആൾട്ടിറ്റ്യൂഡ് പൾമണറി എഡിമ (HAPE)",
        severity: "Life-Threatening Emergency (Lethal if untreated)",
        severityMl: "അതീവ ഗുരുതരം – അടിയന്തിര രക്ഷാപ്രവർത്തനം വേണം",
        symptomsEn: "Extreme breathlessness at rest, persistent dry cough progressing to rattling chest, cyanosis (blue/grey lips and fingernails), and coughing up pink, frothy sputum.",
        symptomsMl: "വിശ്രമിക്കുമ്പോഴും കഠിനമായ ശ്വാസതടസ്സം, നെഞ്ചിൽ നിന്ന് കുറുകുറുപ്പ് ശബ്ദം, ചുണ്ടുകൾ നീലനിറമാകുക, പിങ്ക് നിറത്തിലുള്ള പതയോടെയുള്ള ചുമ.",
        causeEn: "Hypoxic pulmonary vasoconstriction raises pressure in lung capillaries, forcing blood plasma fluid to leak into the lung's air sacs (alveoli), effectively drowning the victim in their own fluid.",
        causeMl: "ഓക്സിജൻ കുറവ് കാരണം ശ്വാസകോശത്തിലെ രക്തക്കുഴലുകളിൽ മർദ്ദം കൂടി ശ്വാസകോശത്തിനുള്ളിലേക്ക് ദ്രാവകം കിനിഞ്ഞിറങ്ങുന്ന അവസ്ഥ.",
        managementEn: "IMMEDIATE DESCENT of at least 500 to 1,000 meters. Administer high-flow supplemental oxygen, portable hyperbaric chamber (Gamow Bag), and Nifedipine under medical guidance."
      },
      {
        code: "HACE",
        nameEn: "High Altitude Cerebral Edema (HACE)",
        nameMl: "ഹൈ ആൾട്ടിറ്റ്യൂഡ് സെറിബ്രൽ എഡിമ (HACE)",
        severity: "Critical Neurological Emergency (Fatal within hours)",
        severityMl: "മസ്തിഷ്കത്തെ ബാധിക്കുന്ന അതീവ ഗുരുതര അവസ്ഥ – മണിക്കൂറുകൾക്കകം മരണം സംഭവിക്കാം",
        symptomsEn: "Ataxia (loss of motor coordination, inability to walk heel-to-toe in a straight line), irrational/erratic behavior, confusion, hallucinations, stupor, and eventual coma.",
        symptomsMl: "നേരെ നടക്കാൻ കഴിയാതെ വരിക (Ataxia), പരസ്പരവിരുദ്ധമായ സംസാരം, വിഭ്രാന്തി, ഓർമ്മക്കുറവ്, അബോധാവസ്ഥ.",
        causeEn: "Severe arterial hypoxia causes cerebral blood vessels to dilate and leak fluid across the blood-brain barrier, triggering brain swelling within the rigid skull.",
        causeMl: "ഓക്സിജൻ ദൗർലഭ്യം മൂലം തലച്ചോറിലെ രക്തക്കുഴലുകളിൽ നിന്ന് ദ്രാവകം ചോർന്ന് തലച്ചോറിൽ നീർക്കെട്ട് ഉണ്ടാകുന്ന അവസ്ഥ.",
        managementEn: "IMMEDIATE DESCENT IS MANDATORY. Administer Dexamethasone (steroid) immediately, emergency supplemental oxygen, and portable hyperbaric chamber."
      }
    ],
    goldenRulesEn: [
      "Rule 1: Any illness at high altitude is altitude sickness until proven otherwise.",
      "Rule 2: Never ascend to sleep at a higher altitude with active symptoms of AMS.",
      "Rule 3: If symptoms worsen, descend immediately without hesitation. Descent saves lives."
    ],
    goldenRulesMl: [
      "നിയമം 1: ഉയർന്ന മലനിരകളിൽ അനുഭവപ്പെടുന്ന ഏത് അസ്വസ്ഥതയും AMS ആണെന്ന് കരുതുക.",
      "നിയമം 2: ചെറിയ ലക്ഷണങ്ങൾ ഉണ്ടെങ്കിൽ പോലും കൂടുതൽ ഉയരത്തിലേക്ക് കയറരുത്.",
      "നിയമം 3: അവസ്ഥ വഷളായാൽ ഒരു നിമിഷം പോലും പാഴാക്കാതെ ഉടനടി താഴേക്ക് ഇറങ്ങുക."
    ]
  },

  // --- TOPIC E: CLIMBING & TREKKING SAFETY (LEAVE NO TRACE) ---
  safety: {
    titleEn: "Mountain Safety Protocols & Wilderness Ethics",
    titleMl: "സുരക്ഷാ നിയമങ്ങളും പരിസ്ഥിതി സംരക്ഷണവും",
    lntPrinciples: [
      { titleEn: "1. Plan Ahead and Prepare", titleMl: "1. കൃത്യമായ ആസൂത്രണം", descEn: "Know regulations, check weather forecasts, carry proper gear, and minimize group sizes." },
      { titleEn: "2. Travel and Camp on Durable Surfaces", titleMl: "2. സുരക്ഷിത പാതകളിൽ മാത്രം സഞ്ചരിക്കുക", descEn: "Stick to existing trails; camp at least 200 feet from alpine lakes and streams to protect riparian habitats." },
      { titleEn: "3. Dispose of Waste Properly (Pack It In, Pack It Out)", titleMl: "3. മാലിന്യങ്ങൾ തിരികെ കൊണ്ടുവരിക", descEn: "Carry all trash, plastic wrappers, and food scraps back to civilization. Catholes for human waste must be 6–8 inches deep and 200 feet from water sources." },
      { titleEn: "4. Leave What You Find", titleMl: "4. പ്രകൃതിയെ തൊടാതെ സൂക്ഷിക്കുക", descEn: "Preserve historical artifacts, petroglyphs, and wildflowers. Take only photographs." },
      { titleEn: "5. Minimize Campfire Impacts", titleMl: "5. കാട്ടുതീ ഒഴിവാക്കുക", descEn: "Use lightweight gas camping stoves instead of burning fragile alpine wood and vegetation." },
      { titleEn: "6. Respect Wildlife", titleMl: "6. വന്യജീവികളെ ബഹുമാനിക്കുക", descEn: "Observe animals from a safe distance. Never feed wild animals; human food damages their health and alters natural behaviors." },
      { titleEn: "7. Be Considerate of Other Visitors", titleMl: "7. സഹയാത്രികരെ മാനിക്കുക", descEn: "Yield to uphill hikers with heavy packs. Keep voices and electronic music silenced so all can enjoy nature's solitude." }
    ],
    lostProtocol: {
      acronym: "S.T.O.P.",
      titleEn: "What to Do If Lost: The S.T.O.P. Protocol",
      titleMl: "കാട്ടിൽ വഴിതെറ്റിയാൽ: S.T.O.P നിയമം",
      steps: [
        { letter: "S", word: "Stop", actionEn: "Stop walking immediately. Panicked rushing in circles leads to fatal cliff falls or exhaustion." },
        { letter: "T", word: "Think", actionEn: "Stay calm. When did you last see a trail marker or stream? Check remaining daylight and battery." },
        { letter: "O", word: "Observe", actionEn: "Look around for recognizable ridges, landmarks, powerlines, or footprints. Note wind direction." },
        { letter: "P", word: "Plan", actionEn: "Formulate a calm strategy: if near dusk, prepare an emergency shelter and conserve warmth rather than wandering at night." }
      ]
    }
  },

  // --- TOPIC F: MOUNTAIN FIRST AID ---
  firstAid: {
    titleEn: "Mountain First Aid & Wilderness Emergencies",
    titleMl: "പർവ്വത പ്രഥമശുശ്രൂഷകൾ",
    disclaimer: "Wilderness first aid differs fundamentally from urban first aid because professional medical care is hours or days away. Prevent before you treat.",
    disclaimerMl: "ആശുപത്രികൾ ദിവസങ്ങൾ അകലെയുള്ള വനങ്ങളിൽ സ്വയം സുരക്ഷയും അറിവും മാത്രമാണ് ആശ്രയം.",
    emergencies: [
      {
        conditionEn: "Hypothermia",
        conditionMl: "ഹൈപ്പോതെർമിയ (അമിത തണുപ്പ്)",
        signsEn: "Violent shivering, slurred speech, clumsy fumbling, apathy ('Umbles': stumbles, mumbles, fumbles, grumbles).",
        treatmentEn: "Strip off all wet clothing immediately. Wrap patient in a dry sleeping bag inside a vapor barrier (Hypothermia Wrap / Burrito). Apply hot water bottles to armpits and groin. Provide warm sweet drinks if conscious. NEVER give alcohol or rub cold skin."
      },
      {
        conditionEn: "Frostbite",
        conditionMl: "ഫ്രോസ്റ്റ്ബൈറ്റ് (മഞ്ഞ് പൊള്ളൽ)",
        signsEn: "Cold, waxy, dead-white skin; complete loss of sensation; solid wooden feel in fingers or toes.",
        treatmentEn: "Protect extremity from wind and friction. DO NOT rub with snow or massage (ice crystals will shred flesh). Only rewarm in warm water bath (37°C–40°C) if there is ZERO risk of the limb refreezing. Refreezing causes permanent gangrene and amputation."
      },
      {
        conditionEn: "Ankle Sprains & Fractures",
        conditionMl: "കണങ്കാൽ ഉളുക്കലും അസ്ഥിഭംഗവും",
        signsEn: "Sudden sharp pain on rock twist, inability to bear weight, rapid swelling, and black-and-blue ecchymosis.",
        treatmentEn: "Follow R.I.C.E. protocol (Rest, Ice/Cold snow compress, Compression with crepe bandage, Elevation). Improvise a rigid splint using trekking poles padded with fleece jackets secured with duct tape or bandanas."
      },
      {
        conditionEn: "Friction Blisters",
        conditionMl: "കാൽപാദങ്ങളിലെ കുമിളകൾ (Blisters)",
        signsEn: "Local friction 'hot spot', tender reddened skin under heel or ball of foot.",
        treatmentEn: "Treat IMMEDIATELY when the hot spot is first felt; apply rigid Leukotape or hydrocolloid blister plaster (Compeed). If blister has formed, sterilize and puncture carefully only if under immense tension, leaving the roof skin intact as a sterile natural dressing."
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = mountainKnowledge;
}
