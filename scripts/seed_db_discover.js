const { DatabaseSync } = require('node:sqlite');
const fs = require('node:fs');

const db = new DatabaseSync('suggayitt.db');
const discoverScript = fs.readFileSync('discoverData.js', 'utf-8');
const fn = new Function(discoverScript + '; return discoverData;');
const items = fn();

console.log('Beginning transaction...');
db.exec('BEGIN TRANSACTION');
db.exec('DELETE FROM discover_items');
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

db.exec('COMMIT');
const count = db.prepare('SELECT COUNT(*) as c FROM discover_items').get().c;
console.log('Successfully re-seeded discover_items! Total rows:', count);
