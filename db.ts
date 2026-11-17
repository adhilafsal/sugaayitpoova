import { DatabaseSync } from 'node:sqlite';
import * as path from 'node:path';
import * as fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'suggayitt.db');

export const db = new DatabaseSync(DB_FILE);

// Initialize Tables
export function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS destinations (
      id TEXT PRIMARY KEY,
      category TEXT NOT NULL,
      image TEXT NOT NULL,
      name_en TEXT NOT NULL,
      name_ml TEXT NOT NULL,
      region_en TEXT NOT NULL,
      region_ml TEXT NOT NULL,
      short_en TEXT NOT NULL,
      short_ml TEXT NOT NULL,
      brief_en TEXT NOT NULL,
      brief_ml TEXT NOT NULL,
      best_season_en TEXT NOT NULL,
      best_season_ml TEXT NOT NULL,
      duration_en TEXT NOT NULL,
      duration_ml TEXT NOT NULL,
      cost TEXT NOT NULL,
      cost_numeric INTEGER NOT NULL,
      altitude_ft INTEGER NOT NULL,
      itinerary_en TEXT NOT NULL,
      itinerary_ml TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS store_items (
      id TEXT PRIMARY KEY,
      image TEXT NOT NULL,
      type_en TEXT NOT NULL,
      type_ml TEXT NOT NULL,
      name_en TEXT NOT NULL,
      name_ml TEXT NOT NULL,
      price TEXT NOT NULL,
      price_numeric REAL NOT NULL,
      desc_en TEXT NOT NULL,
      desc_ml TEXT NOT NULL,
      specs_en TEXT NOT NULL,
      specs_ml TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS courses (
      id TEXT PRIMARY KEY,
      image TEXT NOT NULL,
      type_en TEXT NOT NULL,
      type_ml TEXT NOT NULL,
      name_en TEXT NOT NULL,
      name_ml TEXT NOT NULL,
      price TEXT NOT NULL,
      price_numeric REAL NOT NULL,
      desc_en TEXT NOT NULL,
      desc_ml TEXT NOT NULL,
      specs_en TEXT NOT NULL,
      specs_ml TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS knowledge (
      id TEXT PRIMARY KEY,
      title_en TEXT NOT NULL,
      title_ml TEXT NOT NULL,
      points_en TEXT NOT NULL,
      points_ml TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      salt TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS sessions (
      token TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      expires_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS cart_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      item_id TEXT NOT NULL,
      quantity INTEGER DEFAULT 1,
      added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, item_id)
    );

    CREATE TABLE IF NOT EXISTS saved_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      item_type TEXT NOT NULL,
      item_id TEXT NOT NULL,
      saved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, item_type, item_id)
    );

    CREATE TABLE IF NOT EXISTS bookings (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      category TEXT NOT NULL,
      item_id TEXT NOT NULL,
      item_title TEXT NOT NULL,
      price_or_cost TEXT NOT NULL,
      status TEXT DEFAULT 'Confirmed',
      booked_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS suggestions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT,
      method TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      item_id TEXT NOT NULL,
      user_name TEXT NOT NULL,
      rating INTEGER NOT NULL,
      comment TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS discover_items (
      id TEXT PRIMARY KEY,
      category TEXT NOT NULL,
      image TEXT NOT NULL,
      badge_en TEXT NOT NULL,
      badge_ml TEXT NOT NULL,
      title_en TEXT NOT NULL,
      title_ml TEXT NOT NULL,
      subtitle_en TEXT NOT NULL,
      subtitle_ml TEXT NOT NULL,
      short_en TEXT NOT NULL,
      short_ml TEXT NOT NULL,
      key_fact_en TEXT NOT NULL,
      key_fact_ml TEXT NOT NULL,
      timeline_en TEXT,
      timeline_ml TEXT,
      full_story_en TEXT NOT NULL,
      full_story_ml TEXT NOT NULL,
      takeaways_en TEXT NOT NULL,
      takeaways_ml TEXT NOT NULL
    );
  `);

  seedInitialData();
}

function seedInitialData() {
  const checkDest = db.prepare('SELECT COUNT(*) as count FROM destinations').get() as { count: number };
  if (checkDest.count === 0) {
    const insert = db.prepare(`
      INSERT INTO destinations (
        id, category, image, name_en, name_ml, region_en, region_ml,
        short_en, short_ml, brief_en, brief_ml, best_season_en, best_season_ml,
        duration_en, duration_ml, cost, cost_numeric, altitude_ft, itinerary_en, itinerary_ml
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )
    `);

    const destinations = [
      {
        id: "paithalmala", category: "kerala", image: "images/places/paithalmala.jpg",
        nameEn: "Paithalmala", nameMl: "പൈതൽമല", regionEn: "Kannur, Kerala", regionMl: "കണ്ണൂർ, കേരളം",
        shortEn: "Highest peak in Kannur offering misty grasslands, shola forests, and watchtower views.",
        shortMl: "കണ്ണൂരിലെ ഏറ്റവും ഉയരം കൂടിയ കൊടുമുടി. കോടമഞ്ഞും പുൽമേടുകളും വാച്ച് ടവർ കാഴ്ചകളും.",
        briefEn: "Situated at 4,500 ft along the Kerala–Karnataka border in Kannur, Paithalmala winds through evergreen shola forests before opening onto sweeping meadows and the summit watchtower.",
        briefMl: "കണ്ണൂർ ജില്ലയിൽ 4,500 അടി ഉയരത്തിൽ സ്ഥിതി ചെയ്യുന്ന മനോഹരമായ മലനിരയാണ് പൈതൽമല.",
        bestSeasonEn: "June – February", bestSeasonMl: "ജൂൺ – ഫെബ്രുവരി",
        durationEn: "1 Day (From Kannur / Kozhikode)", durationMl: "1 ദിവസം",
        cost: "₹850 – ₹1,200", costNumeric: 850, altitudeFt: 4500,
        itineraryEn: ["Morning: Bus from Kannur/Taliparamba to Kudiyanmala & Pottanplavu base.", "Forenoon: Guided forest trek to Paithalmala Watchtower & grasslands.", "Afternoon: Lunch & dip at Ezharakund Waterfalls.", "Evening: Return bus to Taliparamba / Kannur / Kozhikode by 6:30 PM."],
        itineraryMl: ["രാവിലെ: കണ്ണൂർ/തളിപ്പറമ്പിൽ നിന്ന് പൊട്ടൻപ്ലാവ് ബേസിലേക്ക് ബസ് യാത്ര.", "ഉച്ചയ്ക്ക് മുമ്പ്: പൈതൽമല വാച്ച് ടവറിലേക്കും പുൽമേടുകളിലേക്കും ട്രെക്കിംഗ്.", "ഉച്ചയ്ക്ക് ശേഷം: ഉച്ചഭക്ഷണവും ഏഴരക്കുണ്ട് വെള്ളച്ചാട്ടത്തിൽ കുളിയും.", "വൈകുന്നേരം: 6:30-ഓടെ തിരികെ നാട്ടിലേക്ക്."]
      },
      {
        id: "ramakkalmedu", category: "kerala", image: "images/places/ramakkalmedu.jpg",
        nameEn: "Ramakkalmedu", nameMl: "രാമക്കൽമേട്", regionEn: "Idukki, Kerala", regionMl: "ഇടുക്കി, കേരളം",
        shortEn: "Non-stop gale winds, Kuravan-Kurathi statue, and panoramic Tamil Nadu plains view.",
        shortMl: "ശക്തമായ കാറ്റും കുറവൻ-കുറത്തി ശിൽപവും തമിഴ്‌നാട് സമതലങ്ങളുടെ വിദൂര കാഴ്ചയും.",
        briefEn: "Perched at 3,500 ft in Idukki, Ramakkalmedu records some of the highest continuous wind speeds in Asia overlooking Cumbum and Theni plains.",
        briefMl: "ഇടുക്കി ജില്ലയിൽ 3,500 അടി ഉയരത്തിൽ സ്ഥിതി ചെയ്യുന്ന രാമക്കൽമേട് ശക്തമായ കാറ്റിനും മലനിരകൾക്കും പ്രസിദ്ധമാണ്.",
        bestSeasonEn: "September – March", bestSeasonMl: "സെപ്റ്റംബർ – മാർച്ച്",
        durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി",
        cost: "₹1,800 – ₹2,400", costNumeric: 1800, altitudeFt: 3500,
        itineraryEn: ["Night 0: Overnight KSRTC bus from Kerala to Nedumkandam.", "Day 1: Jeep ride to Ramakkalmedu, Tortoise Rock & Kuravan-Kurathi statue.", "Day 2: Sunrise at Aama Para, Cumbum vineyards & evening bus back to Kerala."],
        itineraryMl: ["രാത്രി 0: കേരളത്തിൽ നിന്ന് നെടുങ്കണ്ടത്തേക്ക് KSRTC ബസ്.", "ദിവസം 1: ജീപ്പിൽ രാമക്കൽമേട്, ആമപ്പാറ, കുറവൻ-കുറത്തി ശിൽപം.", "ദിവസം 2: സൂര്യോദയവും കമ്പം മുന്തിരിത്തോട്ടവും കണ്ട് കേരളത്തിലേക്ക് മടക്കം."]
      },
      {
        id: "vattavada", category: "kerala", image: "images/places/vattavada.jpg",
        nameEn: "Vattavada", nameMl: "വട്ടവട", regionEn: "Munnar Highlands, Kerala", regionMl: "മൂന്നാർ, കേരളം",
        shortEn: "Terraced vegetable farms, strawberry orchards, and Pampadum Shola forest.",
        shortMl: "തട്ടുകളായുള്ള പച്ചക്കറി കൃഷിത്തോട്ടങ്ങളും സ്ട്രോബെറി ഫാമുകളും പാമ്പാടുംചോലയും.",
        briefEn: "Tucked beyond Top Station in Munnar, Vattavada is famous for step-terrace farming, sweet strawberries, and tent camps under starry skies.",
        briefMl: "മൂന്നാറിലെ ടോപ്പ് സ്റ്റേഷന് അപ്പുറം സ്ഥിതി ചെയ്യുന്ന ശാന്തമായ ഗ്രാമമാണ് വട്ടവട.",
        bestSeasonEn: "October – April", bestSeasonMl: "ഒക്ടോബർ – ഏപ്രിൽ",
        durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി",
        cost: "₹2,200 – ₹2,900", costNumeric: 2200, altitudeFt: 6200,
        itineraryEn: ["Day 1: Bus to Munnar, transit via Top Station to Vattavada tent camp.", "Day 2: Strawberry farm walk, Pampadum Shola trek & return bus from Munnar."],
        itineraryMl: ["ദിവസം 1: മൂന്നാറിലെത്തി ടോപ്പ് സ്റ്റേഷൻ വഴി വട്ടവടയിലേക്ക്, ടെന്റ് ക്യാമ്പിംഗ്.", "ദിവസം 2: സ്ട്രോബെറി തോട്ടങ്ങളും പാമ്പാടുംചോലയും കണ്ട് തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "kolukkumalai", category: "kerala", image: "images/places/kolukkumalai.jpg",
        nameEn: "Kolukkumalai", nameMl: "കൊളുക്കുമല", regionEn: "Suryanelli / Bodinayakanur", regionMl: "സൂര്യനെല്ലി",
        shortEn: "World's highest organic tea estate famous for above-the-clouds sunrise and Jaguar Rock.",
        shortMl: "ലോകത്തിലെ ഏറ്റവും ഉയരം കൂടിയ തേയിലത്തോട്ടം. മേഘങ്ങൾക്ക് മുകളിലുള്ള സൂര്യോദയം.",
        briefEn: "At 7,130 ft above sea level, Kolukkumalai offers an unforgettable 4x4 off-road jeep climb and sunrise above a sea of clouds.",
        briefMl: "സമുദ്രനിരപ്പിൽ നിന്ന് 7,130 അടി ഉയരത്തിലുള്ള കൊളുക്കുമലയിലെ ജീപ്പ് സഫാരിയും സൂര്യോദയവും അവിസ്മരണീയമാണ്.",
        bestSeasonEn: "September – May", bestSeasonMl: "സെപ്റ്റംബർ – മെയ്",
        durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി",
        cost: "₹2,100 – ₹2,800", costNumeric: 2100, altitudeFt: 7130,
        itineraryEn: ["Day 1: Bus to Munnar & Suryanelli; hillside tent camping with campfire.", "Day 2: 4:30 AM 4x4 jeep to Kolukkumalai sunrise, Jaguar Rock & return bus to Kerala."],
        itineraryMl: ["ദിവസം 1: മൂന്നാർ വഴി സൂര്യനെല്ലിയിൽ എത്തുന്നു, ടെന്റ് ക്യാമ്പിംഗ്.", "ദിവസം 2: പുലർച്ചെ 4:30-ന് ഓഫ്-റോഡ് ജീപ്പിൽ കൊളുക്കുമല സൂര്യോദയം കണ്ട് മടക്കം."]
      },
      {
        id: "kurishumala", category: "kerala", image: "images/places/kurishumala.jpg",
        nameEn: "Kurishumala (Vagamon)", nameMl: "കുരിശുമല (വാഗമൺ)", regionEn: "Vagamon, Kerala", regionMl: "വാഗമൺ, കേരളം",
        shortEn: "Misty hill trek paired with Vagamon Pine Forest, Meadows, and Thangalpara.",
        shortMl: "കുരിശുമല ട്രെക്കിംഗും വാഗമൺ പൈൻ ഫോറസ്റ്റും മൊട്ടക്കുന്നുകളും തങ്ങൾപാറയും.",
        briefEn: "A refreshing one-day budget escape from anywhere in Kerala via Kottayam covering Kurishumala, Pine Forest, Meadows, and Thangalpara.",
        briefMl: "കോട്ടയം വഴി കുറഞ്ഞ ചെലവിൽ പോയി വരാവുന്ന ഏകദിന യാത്രയാണ് വാഗമൺ കുരിശുമല.",
        bestSeasonEn: "August – March", bestSeasonMl: "ഓഗസ്റ്റ് – മാർച്ച്",
        durationEn: "1 Day (From Kerala)", durationMl: "1 ദിവസം",
        cost: "₹950 – ₹1,400", costNumeric: 950, altitudeFt: 3800,
        itineraryEn: ["Night 0: Overnight train to Kottayam + 6:55 AM KSRTC bus to Vagamon.", "Day 1: Kurishumala trek, Pine Forest, Meadows & Thangalpara; evening return via Kottayam."],
        itineraryMl: ["രാത്രി 0: കോട്ടയത്തേക്ക് ട്രെയിൻ + രാവിലെ 6:55-ന് വാഗമൺ KSRTC ബസ്.", "ദിവസം 1: കുരിശുമല, പൈൻ ഫോറസ്റ്റ്, മൊട്ടക്കുന്നുകൾ, തങ്ങൾപാറ എന്നിവ കണ്ട് മടക്കം."]
      },
      {
        id: "netravati", category: "kerala", image: "images/places/netravati.jpg",
        nameEn: "Netravati Peak", nameMl: "നേത്രാവതി പീക്ക്", regionEn: "Kudremukh Range, Karnataka", regionMl: "കുദ്രെമുഖ്, കർണാടക",
        shortEn: "Lush green ridge trek in the Western Ghats with misty valleys and stream crossings.",
        shortMl: "പശ്ചിമഘട്ടത്തിലെ പച്ചപ്പ് നിറഞ്ഞ മലനിരകളും അരുവികളും കടന്നുള്ള ട്രെക്കിംഗ്.",
        briefEn: "Located near Samse in the Kudremukh range, Netravati Peak offers a 12 km guided forest-and-grassland hike with crystal streams.",
        briefMl: "കുദ്രെമുഖ് മലനിരകളിലെ 12 കി.മീ ദൈർഘ്യമുള്ള മനോഹരമായ ട്രെക്കിംഗ് പാതയാണ് നേത്രാവതി പീക്ക്.",
        bestSeasonEn: "September – February", bestSeasonMl: "സെപ്റ്റംബർ – ഫെബ്രുവരി",
        durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി",
        cost: "₹2,600 – ₹3,300", costNumeric: 2600, altitudeFt: 4980,
        itineraryEn: ["Night 0: Overnight train/bus from Kerala to Mangaluru & transit to Samse.", "Day 1: Forest permit check-in, 12 km Netravati Peak trek & homestay.", "Day 2: Samse tea estates & night train/bus back to Kerala."],
        itineraryMl: ["രാത്രി 0: കേരളത്തിൽ നിന്ന് മംഗലാപുരം വഴി സംസെയിലേക്ക് യാത്ര.", "ദിവസം 1: 12 കി.മീ നേത്രാവതി പീക്ക് ട്രെക്കിംഗും ഹോംസ്റ്റേയും.", "ദിവസം 2: തേയിലത്തോട്ടങ്ങൾ സന്ദർശിച്ച് രാത്രി തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "chikmagalur", category: "kerala", image: "images/places/chikmagalur.jpg",
        nameEn: "Chikmagalur & Mullayanagiri", nameMl: "ചിക്കമംഗളൂരു & മുല്ലയനഗിരി", regionEn: "Karnataka", regionMl: "കർണാടക",
        shortEn: "Karnataka's highest peak Mullayanagiri, Baba Budangiri, and coffee estate camps.",
        shortMl: "മുല്ലയനഗിരി കൊടുമുടിയും ബാബ ബുദൻഗിരിയും കാപ്പിത്തോട്ടങ്ങളും.",
        briefEn: "Climb Karnataka's highest summit at Mullayanagiri (6,330 ft), visit Jhari & Hebbe waterfalls, and camp in coffee estates.",
        briefMl: "കർണാടകയിലെ ഏറ്റവും ഉയരം കൂടിയ മുല്ലയനഗിരി കൊടുമുടിയും വെള്ളച്ചാട്ടങ്ങളും ഉൾപ്പെടുന്ന യാത്ര.",
        bestSeasonEn: "September – March", bestSeasonMl: "സെപ്റ്റംബർ – മാർച്ച്",
        durationEn: "3 Days / 2 Nights (From Kerala)", durationMl: "3 ദിവസം / 2 രാത്രി",
        cost: "₹3,800 – ₹4,600", costNumeric: 3800, altitudeFt: 6330,
        itineraryEn: ["Day 1: Overnight train to Mangaluru/Hassan, reach Chikmagalur & Hirekolale Lake.", "Day 2: Sunrise trek to Mullayanagiri, Baba Budangiri & Jhari Falls.", "Day 3: Kemmanagundi Z-Point, Hebbe Falls & night return to Kerala."],
        itineraryMl: ["ദിവസം 1: ചിക്കമംഗളൂരുവിൽ എത്തുന്നു, ഹിരെകൊളലെ തടാകം.", "ദിവസം 2: മുല്ലയനഗിരി ട്രെക്കിംഗ്, ബാബ ബുദൻഗിരി, ഝാരി വെള്ളച്ചാട്ടം.", "ദിവസം 3: കെമ്മനഗുണ്ടി, ഹെബ്ബെ വെള്ളച്ചാട്ടം എന്നിവ കണ്ട് കേരളത്തിലേക്ക് മടക്കം."]
      },
      {
        id: "mysore", category: "kerala", image: "images/places/mysore.jpg",
        nameEn: "Mysore Heritage & Hills", nameMl: "മൈസൂർ", regionEn: "Karnataka", regionMl: "കർണാടക",
        shortEn: "Royal palaces, Chamundi Hills, Brindavan Gardens, and easy overnight bus access from Kerala.",
        shortMl: "മൈസൂർ കൊട്ടാരം, ചാമുണ്ഡി ഹിൽസ്, ബൃന്ദാവൻ ഗാർഡൻ എന്നിവ ഉൾപ്പെടുന്ന യാത്ര.",
        briefEn: "An easy KSRTC bus trip from Kerala covering Mysore Palace, Zoo, Chamundi Hills, and Brindavan musical fountains.",
        briefMl: "കേരളത്തിൽ നിന്ന് KSRTC ബസ്സിൽ എളുപ്പത്തിൽ പോയി വരാവുന്ന ചരിത്ര നഗരമാണ് മൈസൂർ.",
        bestSeasonEn: "October – March", bestSeasonMl: "ഒക്ടോബർ – മാർച്ച്",
        durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി",
        cost: "₹2,200 – ₹2,800", costNumeric: 2200, altitudeFt: 2500,
        itineraryEn: ["Day 1: Morning KSRTC bus to Mysore; Mysore Palace, Zoo & Chamundi Hill.", "Day 2: St. Philomena's Church, KRS Dam & Brindavan Gardens; night bus back to Kerala."],
        itineraryMl: ["ദിവസം 1: മൈസൂർ കൊട്ടാരം, മൃഗശാല, ചാമുണ്ഡി ഹിൽസ്.", "ദിവസം 2: ബൃന്ദാവൻ ഗാർഡൻ സന്ദർശിച്ച് രാത്രി ബസ്സിൽ കേരളത്തിലേക്ക് മടക്കം."]
      },
      {
        id: "hyderabad", category: "west", image: "images/places/hyderabad.jpg",
        nameEn: "Hyderabad", nameMl: "ഹൈദരാബാദ്", regionEn: "Telangana", regionMl: "തെലങ്കാന",
        shortEn: "Charminar heritage, Golconda Fort, Ramoji Film City, and Hyderabadi cuisine.",
        shortMl: "ചാർമിനാർ, ഗോൽക്കൊണ്ട കോട്ട, റാമോജി ഫിലിം സിറ്റി എന്നിവ നിറഞ്ഞ നഗരം.",
        briefEn: "Direct sleeper train trip from Kerala exploring Charminar, Golconda Fort, Hussain Sagar, and Ramoji Film City.",
        briefMl: "ചാർമിനാറും ഗോൽക്കൊണ്ട കോട്ടയും റാമോജി ഫിലിം സിറ്റിയും ഉൾപ്പെടുന്ന ട്രെയിൻ യാത്ര.",
        bestSeasonEn: "October – February", bestSeasonMl: "ഒക്ടോബർ – ഫെബ്രുവരി",
        durationEn: "4 Days / 3 Nights (From Kerala)", durationMl: "4 ദിവസം / 3 രാത്രി",
        cost: "₹4,800 – ₹5,900", costNumeric: 4800, altitudeFt: 1778,
        itineraryEn: ["Day 1: Sleeper train from Kerala to Secunderabad.", "Day 2: Charminar, Chowmahalla Palace, Salar Jung Museum & Hussain Sagar.", "Day 3: Full day at Ramoji Film City or Golconda Fort.", "Day 4: Return train to Kerala."],
        itineraryMl: ["ദിവസം 1: കേരളത്തിൽ നിന്ന് സെക്കന്തരാബാദിലേക്ക് ട്രെയിൻ യാത്ര.", "ദിവസം 2: ചാർമിനാർ, സാലാർ ജംഗ് മ്യൂസിയം, ഹുസൈൻ സാഗർ.", "ദിവസം 3: റാമോജി ഫിലിം സിറ്റി / ഗോൽക്കൊണ്ട കോട്ട.", "ദിവസം 4: തിരികെ കേരളത്തിലേക്ക് മടക്കയാത്ര."]
      },
      {
        id: "matheran", category: "west", image: "images/places/matheran.jpg",
        nameEn: "Matheran", nameMl: "മാഥേരാൻ", regionEn: "Maharashtra", regionMl: "മഹാരാഷ്ട്ര",
        shortEn: "Asia's only automobile-free hill station with red-soil forest trails and toy train.",
        shortMl: "വാഹനങ്ങൾക്ക് പ്രവേശനമില്ലാത്ത ഏഷ്യയിലെ ഏക ഹിൽ സ്റ്റേഷൻ.",
        briefEn: "Walk quiet red-laterite forest paths to 38 dramatic Sahyadri cliff viewpoints with zero cars or pollution.",
        briefMl: "വാഹനങ്ങളില്ലാത്ത ശാന്തമായ മലനിരകളും ടോയ് ട്രെയിനും വ്യൂ പോയിന്റുകളും.",
        bestSeasonEn: "October – May", bestSeasonMl: "ഒക്ടോബർ – മെയ്",
        durationEn: "4 Days / 3 Nights (From Kerala)", durationMl: "4 ദിവസം / 3 രാത്രി",
        cost: "₹4,600 – ₹5,600", costNumeric: 4600, altitudeFt: 2625,
        itineraryEn: ["Day 1: Konkan route train from Kerala to Panvel/Karjat.", "Day 2: Neral to Matheran via toy train; Panorama Point & Echo Point.", "Day 3: Louisa Point & Garbett Plateau; evening train back to Kerala.", "Day 4: Arrive back in Kerala."],
        itineraryMl: ["ദിവസം 1: കൊങ്കൺ വഴി പൻവേലിലേക്ക് ട്രെയിൻ യാത്ര.", "ദിവസം 2: മാഥേരാൻ ടോയ് ട്രെയിനും വ്യൂ പോയിന്റുകളും.", "ദിവസം 3: ലൂയിസ പോയിന്റ് സന്ദർശിച്ച് തിരികെ കേരളത്തിലേക്ക് ട്രെയിൻ.", "ദിവസം 4: കേരളത്തിൽ തിരിച്ചെത്തുന്നു."]
      },
      {
        id: "harihar", category: "west", image: "images/places/harihar.jpg",
        nameEn: "Harihar Fort", nameMl: "ഹരിഹർ കോട്ട", regionEn: "Nashik, Maharashtra", regionMl: "നാസിക്, മഹാരാഷ്ട്ര",
        shortEn: "Iconic 80-degree rock-cut vertical steps in the Sahyadri mountains.",
        shortMl: "80 ഡിഗ്രി കുത്തനെയുള്ള പാറപ്പടികൾ കയറുന്ന സാഹസിക ട്രെക്കിംഗ്.",
        briefEn: "Climb the famous 80-degree rock-cut staircase carved into a basalt pinnacle in Nashik's Sahyadri range.",
        briefMl: "80 ഡിഗ്രി കുത്തനെയുള്ള പാറപ്പടികൾ കയറുന്ന ആവേശകരമായ ട്രെക്കിംഗ്.",
        bestSeasonEn: "July – February", bestSeasonMl: "ജൂലൈ – ഫെബ്രുവരി",
        durationEn: "4 Days / 3 Nights (From Kerala)", durationMl: "4 ദിവസം / 3 രാത്രി",
        cost: "₹4,900 – ₹6,000", costNumeric: 4900, altitudeFt: 3676,
        itineraryEn: ["Day 1: Train from Kerala to Kalyan/Igatpuri & transit to Nirgudpada.", "Day 2: Early morning climb up Harihar Fort rock-cut steps & Trimbakeshwar.", "Day 3: Return train from Kalyan/Panvel to Kerala.", "Day 4: Arrive back in Kerala."],
        itineraryMl: ["ദിവസം 1: കേരളത്തിൽ നിന്ന് ഇഗത്പുരി വഴി നിർഗുഡ്പാഡയിലേക്ക്.", "ദിവസം 2: ഹരിഹർ കോട്ട ട്രെക്കിംഗും ത്രയംബകേശ്വർ സന്ദർശനവും.", "ദിവസം 3: തിരികെ കേരളത്തിലേക്കുള്ള മടക്ക ട്രെയിൻ.", "ദിവസം 4: കേരളത്തിൽ തിരിച്ചെത്തുന്നു."]
      },
      {
        id: "kedarkantha", category: "himalayas", image: "images/places/kedarkantha.jpg",
        nameEn: "Kedarkantha Trek", nameMl: "കേദാർകാന്ത ട്രെക്ക്", regionEn: "Uttarakhand (12,500 ft)", regionMl: "ഉത്തരാഖണ്ഡ് (12,500 അടി)",
        shortEn: "India's favorite winter snow summit trek through frozen Juda Ka Talab.",
        shortMl: "മഞ്ഞുമൂടിയ ജൂഡാ കാ തലാബും 12,500 അടി ഉയരത്തിലേക്കുള്ള സമ്മിറ്റ് ട്രെക്കും.",
        briefEn: "Classic Himalayan snow summit trek from Sankri featuring frozen Juda Ka Talab and 360-degree sunrise views of Swargarohini and Bandarpoonch.",
        briefMl: "ഉത്തരാഖണ്ഡിലെ സങ്ക്രിയിൽ നിന്ന് ആരംഭിക്കുന്ന പ്രശസ്തമായ വിന്റർ സ്നോ സമ്മിറ്റ് ട്രെക്ക്.",
        bestSeasonEn: "December – April", bestSeasonMl: "ഡിസംബർ – ഏപ്രിൽ",
        durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി",
        cost: "₹11,500 – ₹13,800", costNumeric: 11500, altitudeFt: 12500,
        itineraryEn: ["Days 1–2: Train from Kerala to Delhi & overnight bus to Dehradun.", "Day 3: Drive from Dehradun to Sankri base village (6,400 ft).", "Day 4: Trek to Juda Ka Talab frozen lake campsite.", "Day 5: Trek to Kedarkantha Base Camp (11,250 ft).", "Day 6: 3:00 AM summit push to 12,500 ft peak & descend.", "Days 7–9: Return via Dehradun & Delhi train to Kerala."],
        itineraryMl: ["ദിവസം 1–2: കേരളത്തിൽ നിന്ന് ഡൽഹി വഴി ഡെറാഡൂണിലേക്ക്.", "ദിവസം 3: സങ്ക്രി ബേസ് വില്ലേജിലേക്ക് യാത്ര.", "ദിവസം 4: ജൂഡാ കാ തലാബ് ക്യാമ്പിലേക്ക് ട്രെക്കിംഗ്.", "ദിവസം 5: കേദാർകാന്ത ബേസ് ക്യാമ്പിലേക്ക് കയറ്റം.", "ദിവസം 6: പുലർച്ചെ 12,500 അടി കൊടുമുടി കീഴടക്കുന്നു.", "ദിവസം 7–9: ഡെറാഡൂൺ, ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "brahmatal", category: "himalayas", image: "images/places/brahmatal.jpg",
        nameEn: "Brahmatal Trek", nameMl: "ബ്രഹ്മതാൽ ട്രെക്ക്", regionEn: "Uttarakhand (12,250 ft)", regionMl: "ഉത്തരാഖണ്ഡ് (12,250 അടി)",
        shortEn: "Frozen alpine lakes with massive views of Mt. Trishul and Nanda Ghunti.",
        shortMl: "തണുത്തുറഞ്ഞ തടാകങ്ങളും ത്രിശൂൽ, നന്ദ ഘുന്തി കൊടുമുടികളുടെ കാഴ്ചകളും.",
        briefEn: "Snow ridge trek between Bekaltal and Brahmatal lakes facing 7,000-meter peaks Mt. Trishul and Nanda Ghunti.",
        briefMl: "തണുത്തുറഞ്ഞ ബെകൽതാൽ, ബ്രഹ്മതാൽ തടാകങ്ങളിലൂടെയുള്ള ഹിമാലയൻ ട്രെക്കിംഗ്.",
        bestSeasonEn: "December – March", bestSeasonMl: "ഡിസംബർ – മാർച്ച്",
        durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി",
        cost: "₹11,800 – ₹14,000", costNumeric: 11800, altitudeFt: 12250,
        itineraryEn: ["Days 1–2: Train from Kerala to Delhi & bus to Rishikesh/Kathgodam.", "Day 3: Mountain drive to Lohajung base camp.", "Day 4: Trek to Bekaltal lake campsite.", "Day 5: Trek to Brahmatal Lake.", "Day 6: Summit Brahmatal Top (12,250 ft) & descend.", "Days 7–9: Return via Delhi train to Kerala."],
        itineraryMl: ["ദിവസം 1–2: ഡൽഹി വഴി ഋഷികേശിലേക്ക് യാത്ര.", "ദിവസം 3: ലോഹാജംഗ് ബേസ് ക്യാമ്പിലേക്ക് യാത്ര.", "ദിവസം 4–5: ബെകൽതാൽ, ബ്രഹ്മതാൽ തടാകങ്ങളിലേക്ക് ട്രെക്കിംഗ്.", "ദിവസം 6: ബ്രഹ്മതാൽ ടോപ്പ് കീഴടക്കി താഴേക്ക് ഇറങ്ങുന്നു.", "ദിവസം 7–9: ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "hampta", category: "himalayas", image: "images/places/hampta.jpg",
        nameEn: "Hampta Pass & Chandratal", nameMl: "ഹാംപ്ത പാസ് & ചന്ദ്രതാൽ", regionEn: "Himachal Pradesh (14,100 ft)", regionMl: "ഹിമാചൽ പ്രദേശ് (14,100 അടി)",
        shortEn: "Crossover trek from lush green Kullu valleys into barren Spiti & Chandratal Lake.",
        shortMl: "കുളു താഴ്‌വരയിൽ നിന്ന് ഹാംപ്ത പാസ് കടന്ന് സ്പിതിയിലേക്കും ചന്ദ്രതാലിലേക്കുമുള്ള യാത്ര.",
        briefEn: "Cross the 14,100 ft snow pass from green Kullu into the cold desert of Spiti and visit turquoise Chandratal Moon Lake.",
        briefMl: "14,100 അടി ഉയരമുള്ള ഹാംപ്ത പാസ് കടന്ന് ചന്ദ്രതാൽ തടാകത്തിലേക്ക് എത്തുന്ന ട്രെക്കിംഗ്.",
        bestSeasonEn: "June – September", bestSeasonMl: "ജൂൺ – സെപ്റ്റംബർ",
        durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി",
        cost: "₹12,500 – ₹14,900", costNumeric: 12500, altitudeFt: 14100,
        itineraryEn: ["Days 1–2: Train from Kerala to Delhi & Volvo bus to Manali.", "Days 3–4: Drive to Jobra; trek via Chika to Balu Ka Ghera.", "Day 5: Cross Hampta Pass (14,100 ft) to Shea Goru.", "Day 6: Trek to Chatru, visit Chandratal Lake & return to Manali.", "Days 7–9: Volvo to Delhi & return train to Kerala."],
        itineraryMl: ["ദിവസം 1–2: ഡൽഹി വഴി മണാലിയിലേക്ക് യാത്ര.", "ദിവസം 3–4: ചിക്ക, ബാലു കാ ഘേര ക്യാമ്പുകളിലേക്ക് ട്രെക്കിംഗ്.", "ദിവസം 5: 14,100 അടി ഉയരമുള്ള ഹാംപ്ത പാസ് കടക്കുന്നു.", "ദിവസം 6: ചന്ദ്രതാൽ തടാകം സന്ദർശിച്ച് മണാലിയിൽ തിരിച്ചെത്തുന്നു.", "ദിവസം 7–9: ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "delhi", category: "himalayas", image: "images/places/delhi.jpg",
        nameEn: "Delhi & Agra Heritage", nameMl: "ഡൽഹി & ആഗ്ര", regionEn: "New Delhi / Uttar Pradesh", regionMl: "ന്യൂഡൽഹി / ആഗ്ര",
        shortEn: "India Gate, Red Fort, Qutub Minar, and Taj Mahal sunrise trip.",
        shortMl: "ഇന്ത്യാ ഗേറ്റ്, ചെങ്കോട്ട, കുത്തബ് മിനാർ, താജ്മഹൽ എന്നിവ ഉൾപ്പെടുന്ന യാത്ര.",
        briefEn: "Budget student heritage tour covering Delhi landmarks via Metro plus Taj Mahal and Agra Fort.",
        briefMl: "കുറഞ്ഞ ചെലവിൽ ഡൽഹിയും ആഗ്രയിലെ താജ്മഹലും സന്ദർശിക്കാവുന്ന പാക്കേജ്.",
        bestSeasonEn: "October – March", bestSeasonMl: "ഒക്ടോബർ – മാർച്ച്",
        durationEn: "6 Days / 5 Nights (Kerala to Kerala)", durationMl: "6 ദിവസം / 5 രാത്രി",
        cost: "₹6,500 – ₹8,000", costNumeric: 6500, altitudeFt: 700,
        itineraryEn: ["Days 1–2: Train from Kerala to Hazrat Nizamuddin.", "Day 3: Red Fort, Jama Masjid, Chandni Chowk & India Gate.", "Day 4: Agra Taj Mahal & Agra Fort day trip.", "Days 5–6: Qutub Minar, Lotus Temple & return train to Kerala."],
        itineraryMl: ["ദിവസം 1–2: കേരളത്തിൽ നിന്ന് ഡൽഹിയിലേക്ക് ട്രെയിൻ യാത്ര.", "ദിവസം 3: ചെങ്കോട്ട, ജുമാ മസ്ജിദ്, ഇന്ത്യാ ഗേറ്റ്.", "ദിവസം 4: ആഗ്ര താജ്മഹലും ആഗ്ര കോട്ടയും.", "ദിവസം 5–6: കുത്തബ് മിനാർ കണ്ട് തിരികെ കേരളത്തിലേക്ക് ട്രെയിൻ."]
      },
      {
        id: "kashmir", category: "himalayas", image: "images/places/kashmir.jpg",
        nameEn: "Kashmir Paradise", nameMl: "കശ്മീർ", regionEn: "Jammu & Kashmir", regionMl: "ജമ്മു & കശ്മീർ",
        shortEn: "Dal Lake shikara rides, Gulmarg snow meadows, Pahalgam, and Sonamarg.",
        shortMl: "ദാൽ തടാകത്തിലെ ശിക്കാര യാത്ര, ഗുൽമാർഗ് മഞ്ഞുമലകൾ, പഹൽഗാം, സോനാമാർഗ്.",
        briefEn: "Explore Srinagar's Dal Lake, Gulmarg Gondola snow peaks, Pahalgam Betaab Valley, and Sonamarg glaciers on a budget.",
        briefMl: "ദാൽ തടാകവും ഗുൽമാർഗ് മഞ്ഞുമലകളും പഹൽഗാമും സോനാമാർഗും ബജറ്റ് നിരക്കിൽ സന്ദർശിക്കാം.",
        bestSeasonEn: "All Year", bestSeasonMl: "വർഷം മുഴുവൻ",
        durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി",
        cost: "₹13,500 – ₹16,500", costNumeric: 13500, altitudeFt: 5200,
        itineraryEn: ["Days 1–2: Train from Kerala to Jammu Tawi & cab to Srinagar.", "Day 3: Mughal Gardens & Dal Lake Shikara ride.", "Day 4: Gulmarg snow day & Gondola ride.", "Day 5: Pahalgam Betaab & Aru Valleys.", "Day 6: Sonamarg Thajiwas Glacier.", "Days 7–9: Return via Jammu Tawi train to Kerala."],
        itineraryMl: ["ദിവസം 1–2: ജമ്മു താവി വഴി ശ്രീനഗറിലേക്ക് യാത്ര.", "ദിവസം 3: ദാൽ തടാകത്തിലെ ശിക്കാര ബോട്ട് യാത്ര.", "ദിവസം 4: ഗുൽമാർഗ് മഞ്ഞുമലകൾ.", "ദിവസം 5–6: പഹൽഗാം, സോനാമാർഗ് സന്ദർശനം.", "ദിവസം 7–9: ജമ്മു താവി വഴി തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "ladakh", category: "himalayas", image: "images/places/ladakh.jpg",
        nameEn: "Leh – Ladakh Expedition", nameMl: "ലേ – ലഡാക്ക്", regionEn: "Ladakh (11,500 – 18,380 ft)", regionMl: "ലഡാക്ക്",
        shortEn: "Khardung La pass, Nubra Valley sand dunes, and turquoise Pangong Tso Lake.",
        shortMl: "ഖാർദുങ് ലാ പാസ്, നുബ്ര വാലി മണലാരണ്യം, പാങ്കോങ് തടാകം.",
        briefEn: "Cross Khardung La and Chang La passes, camp beside Pangong Tso Lake, and explore Nubra Valley dunes.",
        briefMl: "ഖാർദുങ് ലാ പാസ് കടന്ന് നുബ്ര വാലിയിലേക്കും പാങ്കോങ് തടാകത്തിലേക്കും നടത്തുന്ന യാത്ര.",
        bestSeasonEn: "May – September", bestSeasonMl: "മെയ് – സെപ്റ്റംബർ",
        durationEn: "11 Days / 10 Nights (Kerala to Kerala)", durationMl: "11 ദിവസം / 10 രാത്രി",
        cost: "₹18,500 – ₹22,500", costNumeric: 18500, altitudeFt: 11500,
        itineraryEn: ["Days 1–3: Train to Delhi & Manali–Leh highway transit.", "Day 4: Leh acclimatization & Shanti Stupa.", "Day 5: Cross Khardung La to Nubra Valley & Hunder.", "Day 6: Shyok route to Pangong Tso Lake camp.", "Day 7: Chang La pass return to Leh.", "Days 8–11: Return via Manali & Delhi train to Kerala."],
        itineraryMl: ["ദിവസം 1–3: ഡൽഹി, മണാലി വഴി ലേയിലേക്ക് യാത്ര.", "ദിവസം 4: ലേയിൽ വിശ്രമം.", "ദിവസം 5: ഖാർദുങ് ലാ പാസ്, നുബ്ര വാലി.", "ദിവസം 6: പാങ്കോങ് തടാകക്കരയിലേക്ക് ക്യാമ്പിംഗ്.", "ദിവസം 7–11: മണാലി, ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "manali", category: "himalayas", image: "images/places/manali.jpg",
        nameEn: "Manali – Solang – Kasol", nameMl: "മണാലി – സോളാങ് – കസോൾ", regionEn: "Himachal Pradesh", regionMl: "ഹിമാചൽ പ്രദേശ്",
        shortEn: "Snow valleys, Atal Tunnel, Sissu waterfalls, Old Manali, and Kasol.",
        shortMl: "മഞ്ഞു താഴ്‌വരകൾ, അടൽ ടണൽ, സിസ്സു, ഓൾഡ് മണാലി, കസോൾ.",
        briefEn: "Classic Himachal circuit covering Solang Valley snow, Atal Tunnel, Sissu, Kullu rafting, and Kasol.",
        briefMl: "സോളാങ് വാലിയും അടൽ ടണലും സിസ്സു വെള്ളച്ചാട്ടവും കസോളും ഉൾപ്പെടുന്ന യാത്ര.",
        bestSeasonEn: "All Year", bestSeasonMl: "വർഷം മുഴുവൻ",
        durationEn: "8 Days / 7 Nights (Kerala to Kerala)", durationMl: "8 ദിവസം / 7 രാത്രി",
        cost: "₹9,500 – ₹11,800", costNumeric: 9500, altitudeFt: 6725,
        itineraryEn: ["Days 1–2: Train from Kerala to Delhi & Volvo to Manali.", "Day 3: Hadimba Temple, Vashisht & Old Manali.", "Day 4: Solang Valley, Atal Tunnel & Sissu.", "Day 5: Kullu rafting, Kasol & Manikaran.", "Days 6–8: Volvo to Delhi & return train to Kerala."],
        itineraryMl: ["ദിവസം 1–2: ഡൽഹി വഴി മണാലിയിലേക്ക് യാത്ര.", "ദിവസം 3: ഹിഡിംബ ക്ഷേത്രം, ഓൾഡ് മണാലി.", "ദിവസം 4: സോളാങ് വാലി, അടൽ ടണൽ, സിസ്സു.", "ദിവസം 5: കുളു, കസോൾ, മണികരൻ.", "ദിവസം 6–8: ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "munnar", category: "kerala", image: "images/places/munnar.jpg",
        nameEn: "Munnar & Meesapulimala", nameMl: "മൂന്നാർ & മീശപ്പുലിമല", regionEn: "Idukki, Kerala", regionMl: "ഇടുക്കി, കേരളം",
        shortEn: "Rolling tea gardens and South India's second-highest peak trek.",
        shortMl: "തേയിലത്തോട്ടങ്ങളും ദക്ഷിണേന്ത്യയിലെ രണ്ടാമത്തെ ഉയരം കൂടിയ കൊടുമുടിയായ മീശപ്പുലിമലയും.",
        briefEn: "Guided trek to Meesapulimala (8,661 ft) paired with Munnar tea estates and base camp stay.",
        briefMl: "മീശപ്പുലിമലയിലേക്കുള്ള ട്രെക്കിംഗും മൂന്നാർ തേയിലത്തോട്ടങ്ങളിലെ താമസവും.",
        bestSeasonEn: "September – March", bestSeasonMl: "സെപ്റ്റംബർ – മാർച്ച്",
        durationEn: "2 Days / 1 Night (From Kerala)", durationMl: "2 ദിവസം / 1 രാത്രി",
        cost: "₹2,300 – ₹3,000", costNumeric: 2300, altitudeFt: 8661,
        itineraryEn: ["Day 1: Bus to Munnar; Mattupetty Dam, Kundala Lake & base camp.", "Day 2: Guided Meesapulimala trek & evening bus return to Kerala."],
        itineraryMl: ["ദിവസം 1: മൂന്നാർ, മാട്ടുപ്പെട്ടി ഡാം, ക്യാമ്പിംഗ്.", "ദിവസം 2: മീശപ്പുലിമല ട്രെക്കിംഗ് പൂർത്തിയാക്കി നാട്ടിലേക്ക് മടക്കം."]
      },
      {
        id: "spiti", category: "himalayas", image: "images/places/spiti.jpg",
        nameEn: "Spiti Valley Circuit", nameMl: "സ്പിതി വാലി", regionEn: "Himachal Pradesh (12,500 – 15,000 ft)", regionMl: "ഹിമാചൽ പ്രദേശ്",
        shortEn: "Cold desert monasteries, Key Monastery, Hikkim post office, and Kunzum Pass.",
        shortMl: "കീ മൊണാസ്ട്രിയും ഹിക്കിം പോസ്റ്റ് ഓഫീസും കുൻസും പാസും ഉൾപ്പെടുന്ന യാത്ര.",
        briefEn: "Explore Kaza, thousand-year-old Key Monastery, Hikkim highest post office, and Kunzum Pass.",
        briefMl: "കീ മൊണാസ്ട്രിയും ലോകത്തിലെ ഏറ്റവും ഉയരത്തിലുള്ള ഹിക്കിം പോസ്റ്റ് ഓഫീസും സന്ദർശിക്കാം.",
        bestSeasonEn: "June – October", bestSeasonMl: "ജൂൺ – ഒക്ടോബർ",
        durationEn: "10 Days / 9 Nights (Kerala to Kerala)", durationMl: "10 ദിവസം / 9 രാത്രി",
        cost: "₹14,500 – ₹17,500", costNumeric: 14500, altitudeFt: 12500,
        itineraryEn: ["Days 1–2: Train to Delhi/Chandigarh & bus to Shimla.", "Days 3–6: Kinnaur road to Kaza, Key Monastery, Kibber & Hikkim.", "Days 7–10: Kunzum Pass to Manali, Delhi & return train to Kerala."],
        itineraryMl: ["ദിവസം 1–2: ഡൽഹി വഴി ഷിംലയിലേക്ക്.", "ദിവസം 3–6: കാസ, കീ മൊണാസ്ട്രി, ഹിക്കിം സന്ദർശനം.", "ദിവസം 7–10: മണാലി, ഡൽഹി വഴി തിരികെ കേരളത്തിലേക്ക്."]
      },
      {
        id: "meghalaya", category: "himalayas", image: "images/places/meghalaya.jpg",
        nameEn: "Meghalaya & Dawki", nameMl: "മേഘാലയ & ദാവ്കി", regionEn: "Northeast India", regionMl: "വടക്കുകിഴക്കൻ ഇന്ത്യ",
        shortEn: "Living root bridges of Cherrapunji, crystal Umngot river in Dawki, and Krang Suri.",
        shortMl: "ചിറാപുഞ്ചിയിലെ ലിവിംഗ് റൂട്ട് ബ്രിഡ്ജുകളും ദാവ്കിയിലെ സ്ഫടികം പോലുള്ള നദിയും.",
        briefEn: "Trek to Double Decker Living Root Bridge, boat on crystal waters in Dawki, and visit Krang Suri Falls.",
        briefMl: "മേഘാലയയിലെ ലിവിംഗ് റൂട്ട് ബ്രിഡ്ജുകളും ദാവ്കി നദിയിലെ ബോട്ടിംഗും ക്രാങ് സൂരി വെള്ളച്ചാട്ടവും.",
        bestSeasonEn: "October – April", bestSeasonMl: "ഒക്ടോബർ – ഏപ്രിൽ",
        durationEn: "9 Days / 8 Nights (Kerala to Kerala)", durationMl: "9 ദിവസം / 8 രാത്രി",
        cost: "₹13,900 – ₹16,800", costNumeric: 13900, altitudeFt: 4900,
        itineraryEn: ["Days 1–3: Train from Kerala to Guwahati & cab to Shillong.", "Day 4: Cherrapunji Nohkalikai Falls & Living Root Bridge trek.", "Day 5: Dawki river boating, Mawlynnong & Krang Suri Falls.", "Days 6–9: Return via Guwahati train to Kerala."],
        itineraryMl: ["ദിവസം 1–3: ഗുവാഹത്തി വഴി ഷില്ലോങ്ങിലേക്ക് യാത്ര.", "ദിവസം 4: ചിറാപുഞ്ചി ലിവിംഗ് റൂട്ട് ബ്രിഡ്ജ് ട്രെക്കിംഗ്.", "ദിവസം 5: ദാവ്കി നദി, മൗലിന്നോങ്, ക്രാങ് സൂരി.", "ദിവസം 6–9: ഗുവാഹത്തി വഴി തിരികെ കേരളത്തിലേക്ക്."]
      }
    ];

    for (const d of destinations) {
      insert.run(
        d.id, d.category, d.image, d.nameEn, d.nameMl, d.regionEn, d.regionMl,
        d.shortEn, d.shortMl, d.briefEn, d.briefMl, d.bestSeasonEn, d.bestSeasonMl,
        d.durationEn, d.durationMl, d.cost, d.costNumeric, d.altitudeFt,
        JSON.stringify(d.itineraryEn), JSON.stringify(d.itineraryMl)
      );
    }
  }

  // Seed Store Items
  const checkStore = db.prepare('SELECT COUNT(*) as count FROM store_items').get() as { count: number };
  if (checkStore.count === 0) {
    const insertStore = db.prepare(`
      INSERT INTO store_items (id, image, type_en, type_ml, name_en, name_ml, price, price_numeric, desc_en, desc_ml, specs_en, specs_ml)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const storeItems = [
      { id: "shoes", image: "images/shoes.jpg", typeEn: "Footwear", typeMl: "പാദരക്ഷകൾ", nameEn: "High-Ankle Waterproof Trekking Shoes", nameMl: "വാട്ടർപ്രൂഫ് ട്രെക്കിംഗ് ഷൂസ്", price: "₹1,499 – ₹3,499", priceNumeric: 1499, descEn: "Deep lug grip on wet rocks, slush, and snow while preventing ankle twists.", descMl: "വഴുക്കലുള്ള പാറകളിലും മഞ്ഞിലും തെന്നി വീഴാതിരിക്കാനും കണങ്കാലിന് സംരക്ഷണം നൽകാനും.", specsEn: ["4mm–5mm deep rubber outsole lugs for wet rock & snow traction.", "High-ankle padded collar to prevent sprains on uneven boulders.", "Water-repellent breathable membrane for stream crossings."], specsMl: ["മികച്ച ഗ്രിപ്പ് നൽകുന്ന 4mm–5mm റബ്ബർ സോൾ.", "കണങ്കാലിന് സംരക്ഷണം നൽകുന്ന ഹൈ-ആങ്കിൾ ഡിസൈൻ.", "വെള്ളം ഉള്ളിലേക്ക് കടക്കാത്ത വാട്ടർപ്രൂഫ് മെംബ്രേൻ."] },
      { id: "rucksack", image: "images/rucksack.jpg", typeEn: "Luggage", typeMl: "ബാഗ്", nameEn: "50L–60L Rucksack with Rain Cover", nameMl: "50L–60L റക്സാക്ക് ബാഗ് (റെയിൻ കവർ)", price: "₹1,299 – ₹2,799", priceNumeric: 1299, descEn: "Transfers load onto your hips during multi-day hikes with attached rain cover.", descMl: "ഭാരം തോളിൽ നിന്ന് അരക്കെട്ടിലേക്ക് മാറ്റി നടത്തം എളുപ്പമാക്കുന്നു.", specsEn: ["Padded hip belt transfers 70% of load off shoulders.", "Internal stay rod keeps spine aligned on steep climbs.", "Includes waterproof rain cover for monsoon and snow."], specsMl: ["ഭാരം അരക്കെട്ടിലേക്ക് മാറ്റുന്ന പാഡഡ് ഹിപ് ബെൽറ്റ്.", "നട്ടെല്ലിന് ആയാസം കുറയ്ക്കുന്ന ബാക്ക് സപ്പോർട്ട്.", "വാട്ടർപ്രൂഫ് റെയിൻ കവർ ഉൾപ്പെടുന്നു."] },
      { id: "jacket", image: "images/jacket.jpg", typeEn: "Outerwear", typeMl: "ജാക്കറ്റ്", nameEn: "3-in-1 Padded Windproof & Snow Jacket", nameMl: "വിൻഡ് പ്രൂഫ് & സ്നോ ജാക്കറ്റ്", price: "₹1,699 – ₹3,299", priceNumeric: 1699, descEn: "Blocks sub-zero Himalayan winds at high passes like Kedarkantha and Ladakh.", descMl: "മൈനസ് ഡിഗ്രി തണുപ്പുള്ള ഹിമാലയൻ കാറ്റിനെ തടയാനും ചൂട് നിലനിർത്താനും.", specsEn: ["Rated down to -5°C to -10°C with thermal layering.", "Windproof outer shell stops icy mountain gusts.", "Detachable inner fleece for versatile South India use."], specsMl: ["-5°C മുതൽ -10°C വരെയുള്ള തണുപ്പിനെ പ്രതിരോധിക്കുന്നു.", "തണുത്ത കാറ്റിനെ തടയുന്ന വിൻഡ് പ്രൂഫ് ഷെൽ.", "വേർപെടുത്താവുന്ന ഇന്നർ ഫ്ലീസ്."] },
      { id: "thermals", image: "images/thermals.jpg", typeEn: "Layering", typeMl: "തെർമൽ വസ്ത്രം", nameEn: "Thermal Inner Wear (Top & Bottom)", nameMl: "തെർമൽ ഇന്നർ വെയർ", price: "₹599 – ₹999", priceNumeric: 599, descEn: "Second-skin base layer trapping warmth during freezing campsite nights.", descMl: "കൊടും തണുപ്പിൽ ശരീരത്തിന് ചൂട് നൽകുന്ന ബേസ് ലെയർ.", specsEn: ["Moisture-wicking fabric prevents sweat chill.", "Ultra-lightweight and compact inside rucksacks.", "Essential sleepwear for sub-zero tent camps."], specsMl: ["വിയർപ്പ് വലിച്ചെടുത്ത് ചൂട് നിലനിർത്തുന്ന തുണി.", "ഭാരം കുറഞ്ഞതും ബാഗിൽ ഒതുങ്ങുന്നതും.", "രാത്രി ടെന്റ് ക്യാമ്പിംഗിന് അത്യന്താപേക്ഷിതം."] },
      { id: "pole", image: "images/pole.jpg", typeEn: "Support", typeMl: "സപ്പോർട്ട്", nameEn: "Adjustable Aluminium Trekking Pole", nameMl: "ട്രെക്കിംഗ് പോൾ (വടി)", price: "₹499 – ₹899", priceNumeric: 499, descEn: "Reduces knee impact by 25% on steep descents and tests snow depth.", descMl: "മലയിറങ്ങുമ്പോൾ കാൽമുട്ടുകളിലുണ്ടാകുന്ന ആഘാതം കുറയ്ക്കുന്നു.", specsEn: ["Telescopic 3-section shaft adjusts to any height.", "Anti-shock spring absorbs downhill knee stress.", "Includes removable snow basket."], specsMl: ["ഉയരം ക്രമീകരിക്കാവുന്ന 3-സെക്ഷൻ അലുമിനിയം പോൾ.", "കാൽമുട്ടുകൾക്ക് സംരക്ഷണം നൽകുന്ന ആന്റി-ഷോക്ക് സംവിധാനം.", "സ്നോ ബാസ്കറ്റ് ഉൾപ്പെടുന്നു."] },
      { id: "headlamp", image: "images/headlamp.jpg", typeEn: "Lighting", typeMl: "ലൈറ്റ്", nameEn: "LED Headlamp (Hands-Free)", nameMl: "എൽ.ഇ.ഡി ഹെഡ്‌ലാമ്പ്", price: "₹299 – ₹699", priceNumeric: 299, descEn: "Crucial for 3:00 AM summit pushes and night camping with both hands free.", descMl: "പുലർച്ചെയുള്ള സമ്മിറ്റ് ട്രെക്കിംഗിനും രാത്രി ക്യാമ്പിംഗിനും കൈകൾ സ്വതന്ത്രമാക്കി വെളിച്ചം നൽകുന്നു.", specsEn: ["Hands-free illumination for poles and rock holds.", "High, low, and red night-vision beam modes.", "Essential for pre-dawn summit climbs."], specsMl: ["കൈകൾ സ്വതന്ത്രമാക്കി വെളിച്ചം നൽകുന്നു.", "ഹൈ, ലോ, റെഡ് മോഡുകൾ.", "പുലർച്ചെയുള്ള യാത്രകൾക്ക് അത്യന്താപേക്ഷിതം."] },
      { id: "poncho", image: "images/poncho.jpg", typeEn: "Rain Gear", typeMl: "മഴക്കോട്ട", nameEn: "Heavy-Duty Poncho Raincoat", nameMl: "പോഞ്ചോ റെയിൻകോട്ട്", price: "₹349 – ₹699", priceNumeric: 349, descEn: "Covers both your body and 60L rucksack simultaneously during heavy rain.", descMl: "മഴയിൽ നിങ്ങളെയും ബാഗിനെയും ഒരുമിച്ച് സംരക്ഷിക്കുന്നു.", specsEn: ["Wide-cut design slips over a full 60L rucksack.", "Sealed waterproof seams for Western Ghats monsoons.", "Doubles as an emergency groundsheet."], specsMl: ["60L ബാഗിന് മുകളിലൂടെ ധരിക്കാവുന്ന ഡിസൈൻ.", "കനത്ത മഴയെ പ്രതിരോധിക്കുന്ന സീൽഡ് സീമുകൾ.", "മൺസൂൺ ട്രെക്കിംഗുകൾക്ക് അനുയോജ്യം."] },
      { id: "sunglasses", image: "images/sunglasses.jpg", typeEn: "Accessories", typeMl: "മറ്റ് സാധനങ്ങൾ", nameEn: "UV400 Polarized Sunglasses & Wool Socks", nameMl: "UV സൺഗ്ലാസ് & വൂളൻ സോക്സ്", price: "₹399 – ₹799", priceNumeric: 399, descEn: "Prevents snow blindness at high altitude and keeps toes warm in damp boots.", descMl: "മഞ്ഞിലെ സൂര്യപ്രകാശത്തിൽ നിന്ന് കണ്ണുകളെയും തണുപ്പിൽ നിന്ന് കാലുകളെയും സംരക്ഷിക്കുന്നു.", specsEn: ["100% UV400 protection against snow glare.", "Thermal wool socks prevent frostbite and blisters.", "Mandatory for all Himalayan snow treks."], specsMl: ["സൂര്യരശ്മികളിൽ നിന്ന് കണ്ണുകളെ സംരക്ഷിക്കുന്ന UV400 ഗ്ലാസ്.", "തണുപ്പിൽ കാലുകളെ സംരക്ഷിക്കുന്ന വൂളൻ സോക്സ്.", "ഹിമാലയൻ യാത്രകൾക്ക് നിർബന്ധം."] }
    ];

    for (const item of storeItems) {
      insertStore.run(
        item.id, item.image, item.typeEn, item.typeMl, item.nameEn, item.nameMl,
        item.price, item.priceNumeric, item.descEn, item.descMl,
        JSON.stringify(item.specsEn), JSON.stringify(item.specsMl)
      );
    }
  }

  // Seed Courses
  const checkCourses = db.prepare('SELECT COUNT(*) as count FROM courses').get() as { count: number };
  if (checkCourses.count === 0) {
    const insertCourse = db.prepare(`
      INSERT INTO courses (id, image, type_en, type_ml, name_en, name_ml, price, price_numeric, desc_en, desc_ml, specs_en, specs_ml)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const courses = [
      {
        id: "course-video-edit", image: "images/places/kedarkantha.jpg",
        typeEn: "Video Editing • 4 Weeks", typeMl: "വീഡിയോ എഡിറ്റിംഗ് • 4 ആഴ്ച",
        nameEn: "Pro Travel & Reel Video Editing (CapCut & Premiere)", nameMl: "പ്രോ ട്രാവൽ & റീൽ വീഡിയോ എഡിറ്റിംഗ്",
        price: "₹1,499", priceNumeric: 1499,
        descEn: "Learn beat-sync cuts, speed ramping, keyframe transitions, sound design, and color grading for Instagram Reels & YouTube.",
        descMl: "ബീറ്റ്-സിങ്ക് കട്ടുകൾ, സ്പീഡ് റാമ്പിംഗ്, സൗണ്ട് ഡിസൈൻ, കളർ ഗ്രേഡിംഗ് എന്നിവ പ്രായോഗികമായി പഠിക്കാം.",
        specsEn: ["Module 1: Timeline workflow, J-cuts, L-cuts & rhythm pacing.", "Module 2: Speed ramping, smooth keyframes & masking transitions.", "Module 3: Layered SFX (whooshes, risers, ambient foley) & vocal clarity.", "Module 4: Export settings (1080p/4K 60fps) for zero-compression uploads."],
        specsMl: ["മൊഡ്യൂൾ 1: ടൈംലൈൻ എഡിറ്റിംഗും പേസിംഗും.", "മൊഡ്യൂൾ 2: സ്പീഡ് റാമ്പിംഗ്, കീഫ്രെയിം ട്രാൻസിഷനുകൾ.", "മൊഡ്യൂൾ 3: സൗണ്ട് ഇഫക്റ്റുകളും (SFX) ഓഡിയോ മിക്സിംഗും.", "മൊഡ്യൂൾ 4: 1080p/4K 60fps എക്സ്പോർട്ട് സെറ്റിംഗുകൾ."]
      },
      {
        id: "course-photo-edit", image: "images/places/kolukkumalai.jpg",
        typeEn: "Photo Editing • 3 Weeks", typeMl: "ഫോട്ടോ എഡിറ്റിംഗ് • 3 ആഴ്ച",
        nameEn: "Lightroom & Snapseed Color Grading Mastery", nameMl: "ലൈറ്റ്‌റൂം & സ്നാപ്സീഡ് കളർ ഗ്രേഡിംഗ്",
        price: "₹999", priceNumeric: 999,
        descEn: "Master RAW exposure recovery, tone curves, HSL color isolation, and moody travel presets on mobile and desktop.",
        descMl: "മൊബൈലിലും കമ്പ്യൂട്ടറിലും പ്രൊഫഷണൽ കളർ ഗ്രേഡിംഗും പ്രീസെറ്റ് നിർമ്മാണവും പഠിക്കാം.",
        specsEn: ["Module 1: Histogram reading, dynamic range & RAW highlight recovery.", "Module 2: S-curve contrast, HSL color grading & skin-tone protection.", "Module 3: Linear/radial sky masking & selective subject lighting.", "Module 4: Building and saving your own signature preset pack."],
        specsMl: ["മൊഡ്യൂൾ 1: എക്സ്പോഷർ, ഹിസ്റ്റോഗ്രാം, RAW എഡിറ്റിംഗ്.", "മൊഡ്യൂൾ 2: ടോൺ കർവ്, HSL കളർ ഗ്രേഡിംഗ്.", "മൊഡ്യൂൾ 3: സ്കൈ മാസ്കിംഗും ലൈറ്റിംഗ് ക്രമീകരണവും.", "മൊഡ്യൂൾ 4: സ്വന്തമായി പ്രീസെറ്റുകൾ നിർമ്മിക്കൽ."]
      },
      {
        id: "course-video-shoot", image: "images/places/ladakh.jpg",
        typeEn: "Video Shooting • 3 Weeks", typeMl: "വീഡിയോ ഷൂട്ടിംഗ് • 3 ആഴ്ച",
        nameEn: "Cinematic Mobile & Camera Videography", nameMl: "സിനിമാറ്റിക് വീഡിയോ ഷൂട്ടിംഗ് കോഴ്സ്",
        price: "₹1,299", priceNumeric: 1299,
        descEn: "Shoot ultra-smooth handheld gimbal-like shots, master frame rates (24/60fps), shutter speed, and natural lighting.",
        descMl: "മൊബൈലിലും ക്യാമറയിലും സിനിമാറ്റിക് വീഡിയോകൾ ഷൂട്ട് ചെയ്യാനുള്ള ടെക്നിക്കുകൾ.",
        specsEn: ["Module 1: 180-degree shutter rule, ISO control & frame rate selection.", "Module 2: Ninja walk, parallax foreground reveals & whip-pan movements.", "Module 3: Shooting in harsh mountain sun vs. golden/blue hour.", "Module 4: Storyboarding travel sequences (Establishing, Medium, Detail shots)."],
        specsMl: ["മൊഡ്യൂൾ 1: ഷട്ടർ സ്പീഡ്, ISO, ഫ്രെയിം റേറ്റ് (24/60fps).", "മൊഡ്യൂൾ 2: സ്റ്റെഡി ഹാൻഡ്‌ഹെൽഡ് മൂവ്‌മെന്റുകളും പാരലാക്സ് ഷോട്ടുകളും.", "മൊഡ്യൂൾ 3: ഗോൾഡൻ അവർ ലൈറ്റിംഗ് ഉപയോഗിക്കുന്ന വിധം.", "മൊഡ്യൂൾ 4: ട്രാവൽ സ്റ്റോറിബോർഡിംഗ്."]
      },
      {
        id: "course-photo-shoot", image: "images/places/munnar.jpg",
        typeEn: "Photo Shooting • 3 Weeks", typeMl: "ഫോട്ടോ ഷൂട്ടിംഗ് • 3 ആഴ്ച",
        nameEn: "Outdoor, Landscape & Portrait Photography", nameMl: "ഔട്ട്‌ഡോർ & പോർട്രെയ്റ്റ് ഫോട്ടോഗ്രാഫി",
        price: "₹1,199", priceNumeric: 1199,
        descEn: "Learn Rule of Thirds, leading lines, depth of field, long-exposure waterfalls, and sharp portrait framing.",
        descMl: "മനോഹരമായ ലാൻഡ്സ്കേപ്പ്, പോർട്രെയ്റ്റ് ഫോട്ടോകൾ എടുക്കാനുള്ള പ്രായോഗിക പരിശീലനം.",
        specsEn: ["Module 1: Exposure triangle (Aperture, Shutter Speed, ISO) in Manual/Pro mode.", "Module 2: Composition rules—leading lines, framing, symmetry & negative space.", "Module 3: Long-exposure silky waterfalls & night star photography.", "Module 4: Posing and natural backlight control for outdoor portraits."],
        specsMl: ["മൊഡ്യൂൾ 1: മാനുവൽ/പ്രോ മോഡ് സെറ്റിംഗുകൾ.", "മൊഡ്യൂൾ 2: കോമ്പോസിഷൻ നിയമങ്ങളും ഫ്രെയിമിംഗും.", "മൊഡ്യൂൾ 3: വെള്ളച്ചാട്ടങ്ങളുടെ ലോംഗ് എക്സ്പോഷർ ഫോട്ടോഗ്രാഫി.", "മൊഡ്യൂൾ 4: ഔട്ട്‌ഡോർ പോർട്രെയ്റ്റ് ലൈറ്റിംഗ്."]
      }
    ];

    for (const c of courses) {
      insertCourse.run(
        c.id, c.image, c.typeEn, c.typeMl, c.nameEn, c.nameMl,
        c.price, c.priceNumeric, c.descEn, c.descMl,
        JSON.stringify(c.specsEn), JSON.stringify(c.specsMl)
      );
    }
  }

  // Seed Knowledge Hub
  const checkKnowledge = db.prepare('SELECT COUNT(*) as count FROM knowledge').get() as { count: number };
  if (checkKnowledge.count === 0) {
    const insertK = db.prepare(`
      INSERT INTO knowledge (id, title_en, title_ml, points_en, points_ml)
      VALUES (?, ?, ?, ?, ?)
    `);

    const knowledgeData = [
      {
        id: "video-edit-facts",
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
        id: "photo-edit-facts",
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
        id: "video-shoot-facts",
        titleEn: "🎥 Video Shooting Facts & Knowledge",
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
        id: "photo-shoot-facts",
        titleEn: "📸 Photo Shooting Facts & Knowledge",
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

    for (const k of knowledgeData) {
      insertK.run(
        k.id, k.titleEn, k.titleMl,
        JSON.stringify(k.pointsEn), JSON.stringify(k.pointsMl)
      );
    }
  }

  // Seed Discover Items
  const checkDiscover = db.prepare('SELECT COUNT(*) as count FROM discover_items').get() as { count: number };
  if (checkDiscover.count < 60) {
    db.exec("DELETE FROM discover_items");
    try {
      const discoverScript = fs.readFileSync(path.join(__dirname, 'discoverData.js'), 'utf-8');
      const fn = new Function(discoverScript + '; return discoverData;');
      const items = fn() as any[];
      const insertD = db.prepare(`
        INSERT INTO discover_items (
          id, category, image, badge_en, badge_ml, title_en, title_ml, subtitle_en, subtitle_ml,
          short_en, short_ml, key_fact_en, key_fact_ml, timeline_en, timeline_ml,
          full_story_en, full_story_ml, takeaways_en, takeaways_ml
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )
      `);
      for (const d of items) {
        insertD.run(
          d.id, d.category, d.image, d.badgeEn, d.badgeMl, d.titleEn, d.titleMl, d.subtitleEn, d.subtitleMl,
          d.shortEn, d.shortMl, d.keyFactEn, d.keyFactMl, d.timelineEn || '', d.timelineMl || '',
          JSON.stringify(d.fullStoryEn), JSON.stringify(d.fullStoryMl),
          JSON.stringify(d.takeawaysEn), JSON.stringify(d.takeawaysMl)
        );
      }
    } catch (err) {
      console.warn('Discover seeding notice:', err);
    }
  }
}

// Queries
export function getDestinations(category?: string, search?: string, sort?: string) {
  let query = 'SELECT * FROM destinations WHERE 1=1';
  const params: any[] = [];

  if (category && category !== 'all') {
    query += ' AND category = ?';
    params.push(category);
  }

  if (search && search.trim() !== '') {
    query += ' AND (name_en LIKE ? OR name_ml LIKE ? OR region_en LIKE ? OR short_en LIKE ?)';
    const term = `%${search.trim()}%`;
    params.push(term, term, term, term);
  }

  if (sort === 'price_asc') {
    query += ' ORDER BY cost_numeric ASC';
  } else if (sort === 'price_desc') {
    query += ' ORDER BY cost_numeric DESC';
  } else if (sort === 'altitude_desc') {
    query += ' ORDER BY altitude_ft DESC';
  } else {
    query += ' ORDER BY rowid ASC';
  }

  const rows = db.prepare(query).all(...params) as any[];
  return rows.map(r => ({
    id: r.id,
    category: r.category,
    image: r.image,
    nameEn: r.name_en,
    nameMl: r.name_ml,
    regionEn: r.region_en,
    regionMl: r.region_ml,
    shortEn: r.short_en,
    shortMl: r.short_ml,
    briefEn: r.brief_en,
    briefMl: r.brief_ml,
    bestSeasonEn: r.best_season_en,
    bestSeasonMl: r.best_season_ml,
    durationEn: r.duration_en,
    durationMl: r.duration_ml,
    cost: r.cost,
    costNumeric: r.cost_numeric,
    altitudeFt: r.altitude_ft,
    itineraryEn: JSON.parse(r.itinerary_en),
    itineraryMl: JSON.parse(r.itinerary_ml)
  }));
}

export function getDestinationById(id: string) {
  const r = db.prepare('SELECT * FROM destinations WHERE id = ?').get(id) as any;
  if (!r) return null;
  return {
    id: r.id,
    category: r.category,
    image: r.image,
    nameEn: r.name_en,
    nameMl: r.name_ml,
    regionEn: r.region_en,
    regionMl: r.region_ml,
    shortEn: r.short_en,
    shortMl: r.short_ml,
    briefEn: r.brief_en,
    briefMl: r.brief_ml,
    bestSeasonEn: r.best_season_en,
    bestSeasonMl: r.best_season_ml,
    durationEn: r.duration_en,
    durationMl: r.duration_ml,
    cost: r.cost,
    costNumeric: r.cost_numeric,
    altitudeFt: r.altitude_ft,
    itineraryEn: JSON.parse(r.itinerary_en),
    itineraryMl: JSON.parse(r.itinerary_ml)
  };
}

export function getStoreItems(search?: string) {
  let query = 'SELECT * FROM store_items';
  const params: any[] = [];
  if (search && search.trim() !== '') {
    query += ' WHERE name_en LIKE ? OR name_ml LIKE ? OR type_en LIKE ?';
    const term = `%${search.trim()}%`;
    params.push(term, term, term);
  }
  const rows = db.prepare(query).all(...params) as any[];
  return rows.map(r => ({
    id: r.id,
    image: r.image,
    typeEn: r.type_en,
    typeMl: r.type_ml,
    nameEn: r.name_en,
    nameMl: r.name_ml,
    price: r.price,
    priceNumeric: r.price_numeric,
    descEn: r.desc_en,
    descMl: r.desc_ml,
    specsEn: JSON.parse(r.specs_en),
    specsMl: JSON.parse(r.specs_ml)
  }));
}

export function getCourses() {
  const rows = db.prepare('SELECT * FROM courses').all() as any[];
  return rows.map(r => ({
    id: r.id,
    image: r.image,
    typeEn: r.type_en,
    typeMl: r.type_ml,
    nameEn: r.name_en,
    nameMl: r.name_ml,
    price: r.price,
    priceNumeric: r.price_numeric,
    descEn: r.desc_en,
    descMl: r.desc_ml,
    specsEn: JSON.parse(r.specs_en),
    specsMl: JSON.parse(r.specs_ml)
  }));
}

export function getKnowledge() {
  const rows = db.prepare('SELECT * FROM knowledge').all() as any[];
  return rows.map(r => ({
    id: r.id,
    titleEn: r.title_en,
    titleMl: r.title_ml,
    pointsEn: JSON.parse(r.points_en),
    pointsMl: JSON.parse(r.points_ml)
  }));
}

export function calculateWeather(placeId: string) {
  const dest = getDestinationById(placeId);
  if (!dest) return null;

  // Real physical mountain/coastal climate calculation based on altitude and region
  const alt = dest.altitudeFt;
  let tempC = 26;
  let condEn = "Pleasant & Clear";
  let condMl = "തെളിഞ്ഞ കാലാവസ്ഥ";
  let icon = "☀️";
  let humidity = 65;
  let windKmH = 14;

  if (alt >= 12000) {
    tempC = -3;
    condEn = "Sub-Zero Snowfall & Crisp Winds";
    condMl = "മൈനസ് ഡിഗ്രി മഞ്ഞുവീഴ്ച";
    icon = "❄️";
    humidity = 40;
    windKmH = 28;
  } else if (alt >= 7000) {
    tempC = 11;
    condEn = "Chilly Misty Clouds";
    condMl = "തണുത്ത കോടമഞ്ഞ്";
    icon = "☁️";
    humidity = 85;
    windKmH = 22;
  } else if (alt >= 4000) {
    tempC = 18;
    condEn = "Cool Mountain Breeze & Light Fog";
    condMl = "തണുത്ത മലങ്കാറ്റും മൂടൽമഞ്ഞും";
    icon = "🌤️";
    humidity = 78;
    windKmH = 18;
  } else if (dest.id === 'ramakkalmedu') {
    tempC = 22;
    condEn = "High-Velocity Gale Winds";
    condMl = "ശക്തമായ വേഗത്തിലുള്ള കാറ്റ്";
    icon = "💨";
    windKmH = 42;
  }

  return {
    placeId,
    altitudeFt: alt,
    tempC,
    conditionEn: condEn,
    conditionMl: condMl,
    icon,
    humidity,
    windKmH
  };
}

// User & Auth Functions
export function createUser(user: { id: string; name: string; phone: string; email: string; password_hash: string; salt: string }) {
  const stmt = db.prepare(`
    INSERT INTO users (id, name, phone, email, password_hash, salt)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  stmt.run(user.id, user.name, user.phone, user.email, user.password_hash, user.salt);
  return { id: user.id, name: user.name, phone: user.phone, email: user.email };
}

export function getUserByEmailOrPhone(identifier: string) {
  const clean = identifier.trim().toLowerCase();
  const row = db.prepare(`
    SELECT * FROM users WHERE LOWER(email) = ? OR phone = ?
  `).get(clean, clean) as any;
  return row || null;
}

export function getUserById(id: string) {
  const row = db.prepare('SELECT id, name, phone, email, created_at FROM users WHERE id = ?').get(id) as any;
  return row || null;
}

export function createSession(token: string, userId: string, expiresAt: string) {
  db.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').run(token, userId, expiresAt);
}

export function getUserBySession(token: string) {
  const session = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token) as any;
  if (!session) return null;
  return getUserById(session.user_id);
}

export function deleteSession(token: string) {
  db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
}

// Profile Cart & Saved Management
export function getUserCart(userId: string) {
  const rows = db.prepare(`
    SELECT c.item_id, c.quantity, s.name_en, s.name_ml, s.price, s.image, s.type_en, s.type_ml
    FROM cart_items c
    JOIN store_items s ON c.item_id = s.id
    WHERE c.user_id = ?
  `).all(userId) as any[];
  return rows;
}

export function addToCart(userId: string, itemId: string, quantity = 1) {
  db.prepare(`
    INSERT INTO cart_items (user_id, item_id, quantity)
    VALUES (?, ?, ?)
    ON CONFLICT(user_id, item_id) DO UPDATE SET quantity = quantity + 1
  `).run(userId, itemId, quantity);
}

export function removeFromCart(userId: string, itemId: string) {
  db.prepare('DELETE FROM cart_items WHERE user_id = ? AND item_id = ?').run(userId, itemId);
}

export function getUserSaved(userId: string) {
  const rows = db.prepare(`SELECT item_type, item_id FROM saved_items WHERE user_id = ?`).all(userId) as any[];
  const packages: string[] = [];
  const courses: string[] = [];
  for (const r of rows) {
    if (r.item_type === 'packages') packages.push(r.item_id);
    else if (r.item_type === 'courses') courses.push(r.item_id);
  }
  return { packages, courses };
}

export function toggleSavedItem(userId: string, itemType: string, itemId: string) {
  const existing = db.prepare(`
    SELECT id FROM saved_items WHERE user_id = ? AND item_type = ? AND item_id = ?
  `).get(userId, itemType, itemId);

  if (existing) {
    db.prepare('DELETE FROM saved_items WHERE user_id = ? AND item_type = ? AND item_id = ?').run(userId, itemType, itemId);
    return false; // Removed
  } else {
    db.prepare('INSERT INTO saved_items (user_id, item_type, item_id) VALUES (?, ?, ?)').run(userId, itemType, itemId);
    return true; // Added
  }
}

export function createBooking(userId: string, category: string, itemId: string, itemTitle: string, priceOrCost: string) {
  const id = `book-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  db.prepare(`
    INSERT INTO bookings (id, user_id, category, item_id, item_title, price_or_cost, status)
    VALUES (?, ?, ?, ?, ?, ?, 'Confirmed')
  `).run(id, userId, category, itemId, itemTitle, priceOrCost);
  return id;
}

export function getUserBookings(userId: string) {
  const rows = db.prepare(`
    SELECT * FROM bookings WHERE user_id = ? ORDER BY booked_at DESC
  `).all(userId) as any[];
  return rows;
}

export function addSuggestion(userId: string | null, method: string, message: string) {
  db.prepare(`
    INSERT INTO suggestions (user_id, method, message)
    VALUES (?, ?, ?)
  `).run(userId, method, message);
}

export function addReview(itemId: string, userName: string, rating: number, comment: string) {
  db.prepare(`
    INSERT INTO reviews (item_id, user_name, rating, comment)
    VALUES (?, ?, ?, ?)
  `).run(itemId, userName, rating, comment);
}

export function getReviews(itemId: string) {
  return db.prepare('SELECT * FROM reviews WHERE item_id = ? ORDER BY created_at DESC').all(itemId) as any[];
}

export function getDiscoverItems(category?: string, search?: string) {
  let query = 'SELECT * FROM discover_items WHERE 1=1';
  const params: any[] = [];
  if (category && category !== 'all') {
    query += ' AND category = ?';
    params.push(category);
  }
  if (search && search.trim() !== '') {
    query += ' AND (title_en LIKE ? OR title_ml LIKE ? OR subtitle_en LIKE ? OR short_en LIKE ?)';
    const term = `%${search.trim()}%`;
    params.push(term, term, term, term);
  }
  query += ' ORDER BY rowid ASC';
  const rows = db.prepare(query).all(...params) as any[];
  return rows.map(r => ({
    id: r.id,
    category: r.category,
    image: r.image,
    badgeEn: r.badge_en,
    badgeMl: r.badge_ml,
    titleEn: r.title_en,
    titleMl: r.title_ml,
    subtitleEn: r.subtitle_en,
    subtitleMl: r.subtitle_ml,
    shortEn: r.short_en,
    shortMl: r.short_ml,
    keyFactEn: r.key_fact_en,
    keyFactMl: r.key_fact_ml,
    timelineEn: r.timeline_en,
    timelineMl: r.timeline_ml,
    fullStoryEn: JSON.parse(r.full_story_en),
    fullStoryMl: JSON.parse(r.full_story_ml),
    takeawaysEn: JSON.parse(r.takeaways_en),
    takeawaysMl: JSON.parse(r.takeaways_ml)
  }));
}

export function getDiscoverItemById(id: string) {
  const r = db.prepare('SELECT * FROM discover_items WHERE id = ?').get(id) as any;
  if (!r) return null;
  return {
    id: r.id,
    category: r.category,
    image: r.image,
    badgeEn: r.badge_en,
    badgeMl: r.badge_ml,
    titleEn: r.title_en,
    titleMl: r.title_ml,
    subtitleEn: r.subtitle_en,
    subtitleMl: r.subtitle_ml,
    shortEn: r.short_en,
    shortMl: r.short_ml,
    keyFactEn: r.key_fact_en,
    keyFactMl: r.key_fact_ml,
    timelineEn: r.timeline_en,
    timelineMl: r.timeline_ml,
    fullStoryEn: JSON.parse(r.full_story_en),
    fullStoryMl: JSON.parse(r.full_story_ml),
    takeawaysEn: JSON.parse(r.takeaways_en),
    takeawaysMl: JSON.parse(r.takeaways_ml)
  };
}

export function getStats() {
  const destCount = (db.prepare('SELECT COUNT(*) as c FROM destinations').get() as any).c;
  const userCount = (db.prepare('SELECT COUNT(*) as c FROM users').get() as any).c;
  const bookCount = (db.prepare('SELECT COUNT(*) as c FROM bookings').get() as any).c;
  const storeCount = (db.prepare('SELECT COUNT(*) as c FROM store_items').get() as any).c;
  const discoverCount = (db.prepare('SELECT COUNT(*) as c FROM discover_items').get() as any).c;
  return {
    destinations: destCount,
    users: userCount,
    bookings: bookCount,
    storeGears: storeCount,
    discoverChapters: discoverCount
  };
}
