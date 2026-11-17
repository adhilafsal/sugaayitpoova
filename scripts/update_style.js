const fs = require('fs');

const cssPath = 'style.css';
let content = fs.readFileSync(cssPath, 'utf8');

const regex = /\/\*\s*={10,}[\r\n\s]+DISCOVER & LEARN[\s\S]*$/;
const match = content.match(regex);
if (!match) {
  console.error("Target header not found via regex!");
  process.exit(1);
}

const before = content.slice(0, match.index);

const newStyles = `/* =========================================================
   DISCOVER & LEARN (അറിയാം, പഠിക്കാം) - LIQUID GLASS STYLES
   Complete Redesign: 4 Main Categories, 12 Mountaineers,
   14 Peaks & 7 Summits, 34 Historic Places, 6 Mountain Knowledge Topics
   ========================================================= */

/* Prevent page headings from hiding behind fixed navbar */
#discoverPageView,
.section,
.page-view {
  scroll-margin-top: 100px;
}

.discover-container {
  max-width: 1360px;
  width: 95%;
  margin: 0 auto;
}

/* Cinematic Hero Card */
.discover-hero-card {
  position: relative;
  background: linear-gradient(135deg, rgba(20, 24, 38, 0.92), rgba(10, 13, 20, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-top: 1px solid rgba(255, 214, 0, 0.45);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
}

.discover-hero-glow {
  position: absolute;
  top: -40%;
  right: -20%;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(255, 214, 0, 0.15) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 70%);
  pointer-events: none;
}

.discover-hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
}

.discover-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.9rem;
  background: rgba(255, 214, 0, 0.14);
  border: 1px solid rgba(255, 214, 0, 0.4);
  color: #FFD600;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.discover-hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.25;
  color: #ffffff;
  margin-bottom: 0.85rem;
  letter-spacing: -0.5px;
}

.discover-hero-sub {
  font-size: 1.05rem;
  color: rgba(226, 232, 240, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.discover-stats-row {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}

.discover-stat {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 0.75rem 1.3rem;
  min-width: 140px;
  backdrop-filter: blur(10px);
}

.discover-stat strong {
  font-size: 1.45rem;
  color: #FFD600;
  font-weight: 700;
  line-height: 1.1;
}

.discover-stat span {
  font-size: 0.75rem;
  color: rgba(226, 232, 240, 0.85);
  margin-top: 0.25rem;
  font-weight: 600;
}

/* 4 MAIN CATEGORIES TABS BAR */
.discover-nav-tabs-wrapper {
  margin-bottom: 2.2rem;
  position: sticky;
  top: 75px;
  z-index: 90;
}

.discover-nav-tabs {
  display: flex;
  gap: 0.6rem;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 0.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  overflow-x: auto;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.discover-nav-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.65rem 1.25rem;
  border-radius: 999px;
  border: 1px solid transparent;
  background: transparent;
  color: #e2e8f0;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.25s ease;
}

.discover-nav-tab:hover {
  background: rgba(255, 214, 0, 0.12);
  color: #FFD600;
}

.discover-nav-tab.active {
  background: linear-gradient(135deg, #FFD600, #F59E0B);
  color: #07090e;
  font-weight: 700;
  box-shadow: 0 4px 18px rgba(255, 214, 0, 0.4);
}

.btn-sub-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #e2e8f0;
  border-radius: 999px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-sub-back:hover {
  background: rgba(255, 214, 0, 0.15);
  border-color: #FFD600;
  color: #FFD600;
}

.section-top-actions {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
}

/* 4 MAIN CATEGORY CARDS ON HUB VIEW */
.discover-categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.6rem;
  margin-bottom: 3.5rem;
}

.discover-category-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-top: 1px solid rgba(255, 214, 0, 0.4);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
}

.discover-category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.65), 0 0 25px rgba(255, 214, 0, 0.25);
  border-color: rgba(255, 214, 0, 0.8);
}

.dcat-img-box {
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
  background: #0f172a;
}

.dcat-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.discover-category-card:hover .dcat-img {
  transform: scale(1.08);
}

.dcat-num {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(7, 9, 14, 0.85);
  border: 1px solid rgba(255, 214, 0, 0.6);
  color: #FFD600;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  letter-spacing: 1px;
}

.dcat-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.dcat-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #38bdf8;
  letter-spacing: 0.8px;
  margin-bottom: 0.4rem;
}

.dcat-body h3 {
  font-size: 1.35rem;
  color: #ffffff;
  margin-bottom: 0.6rem;
  line-height: 1.3;
}

.dcat-body p {
  font-size: 0.88rem;
  color: rgba(226, 232, 240, 0.85);
  line-height: 1.6;
  margin-bottom: 1.4rem;
  flex: 1;
}

.dcat-btn {
  background: rgba(255, 214, 0, 0.15);
  border: 1px solid rgba(255, 214, 0, 0.5);
  color: #FFD600;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-start;
  transition: all 0.25s ease;
}

.discover-category-card:hover .dcat-btn {
  background: #FFD600;
  color: #07090e;
  box-shadow: 0 4px 18px rgba(255, 214, 0, 0.4);
}

/* SECTION 1: POPULAR MOUNTAINEERS */
.nimsdai-spotlight-card {
  background: linear-gradient(135deg, rgba(25, 30, 48, 0.95), rgba(12, 16, 26, 0.98));
  border: 1px solid rgba(255, 214, 0, 0.5);
  border-radius: 24px;
  padding: 2.2rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 214, 0, 0.15);
}

.nimsdai-spotlight-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: center;
}

.nimsdai-photo-wrap {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  border: 2px solid rgba(255, 214, 0, 0.5);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
}

.nimsdai-photo {
  width: 100%;
  height: 340px;
  object-fit: cover;
  display: block;
}

.nimsdai-lead-title {
  font-size: 1.85rem;
  color: #ffffff;
  margin-bottom: 0.35rem;
  font-weight: 800;
}

.nimsdai-lead-sub {
  font-size: 1rem;
  color: #FFD600;
  font-weight: 700;
  margin-bottom: 0.9rem;
}

.nimsdai-badges-row {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}

.nims-badge-pill {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f8fafc;
}

.nims-badge-pill.gold {
  background: rgba(255, 214, 0, 0.15);
  border-color: #FFD600;
  color: #FFD600;
}

.nimsdai-stats-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1rem;
  margin: 1.2rem 0;
}

.nims-stat-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 12px;
  text-align: center;
}

.nims-stat-box strong {
  display: block;
  font-size: 1.35rem;
  color: #FFD600;
}

.nims-stat-box span {
  font-size: 0.75rem;
  color: rgba(226, 232, 240, 0.8);
}

.mountaineers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.6rem;
  margin-bottom: 3rem;
}

.mountaineer-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.mountaineer-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 214, 0, 0.6);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 214, 0, 0.18);
}

.mountaineer-thumb-wrap {
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #0f172a;
}

.mountaineer-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.mountaineer-card:hover .mountaineer-thumb {
  transform: scale(1.06);
}

.mountaineer-nat-tag {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(12, 15, 24, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 214, 0, 0.5);
  color: #FFD600;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}

.mountaineer-card h3 {
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 0.35rem;
}

.mountaineer-achievement {
  font-size: 0.82rem;
  color: #38bdf8;
  font-weight: 600;
  margin-bottom: 0.65rem;
  line-height: 1.4;
}

.mountaineer-bio-snip {
  font-size: 0.85rem;
  color: rgba(226, 232, 240, 0.85);
  line-height: 1.5;
  margin-bottom: 1.2rem;
}

.btn-bio-read {
  width: 100%;
  background: rgba(255, 214, 0, 0.12);
  border: 1px solid rgba(255, 214, 0, 0.45);
  color: #FFD600;
  padding: 0.6rem;
  border-radius: 10px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.btn-bio-read:hover {
  background: #FFD600;
  color: #07090e;
  box-shadow: 0 4px 15px rgba(255, 214, 0, 0.35);
}

/* SECTION 2: PEAKS */
.peaks-subnav-bar {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.peaks-subnav-btn {
  padding: 0.7rem 1.4rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #f8fafc;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
}

.peaks-subnav-btn:hover {
  background: rgba(255, 214, 0, 0.15);
  border-color: #FFD600;
  color: #FFD600;
}

.peaks-subnav-btn.active {
  background: linear-gradient(135deg, #FFD600, #F59E0B);
  color: #07090e;
  border-color: #FFD600;
  box-shadow: 0 4px 18px rgba(255, 214, 0, 0.35);
}

.peaks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 1.6rem;
  margin-bottom: 3rem;
}

.peak-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  padding: 1.2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.peak-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 214, 0, 0.6);
}

.peak-thumb-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #0f172a;
}

.peak-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.peak-card:hover .peak-thumb {
  transform: scale(1.06);
}

.peak-rank-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(12, 15, 24, 0.85);
  border: 1px solid rgba(255, 214, 0, 0.6);
  color: #FFD600;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 0.25rem 0.65rem;
  border-radius: 8px;
}

.peak-card h3 {
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.peak-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #38bdf8;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.peak-detail-snip {
  font-size: 0.84rem;
  color: rgba(226, 232, 240, 0.85);
  line-height: 1.5;
  margin-bottom: 0.9rem;
}

/* Nimsdai Project Possible Dedicated Box */
.project-possible-box {
  background: linear-gradient(135deg, rgba(20, 26, 42, 0.95), rgba(9, 12, 20, 0.98));
  border: 1px solid rgba(255, 214, 0, 0.5);
  border-radius: 20px;
  padding: 2rem;
  margin: 3rem 0;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.55);
}

.possible-header {
  margin-bottom: 1.5rem;
}

.possible-timeline-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.2rem;
  font-size: 0.86rem;
}

.possible-timeline-table th,
.possible-timeline-table td {
  padding: 0.65rem 0.9rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.possible-timeline-table th {
  color: #FFD600;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.04);
}

.possible-timeline-table td {
  color: rgba(226, 232, 240, 0.9);
}

/* Seven Summits Comparison & Map */
.seven-summits-comparison {
  background: linear-gradient(135deg, rgba(20, 26, 42, 0.95), rgba(9, 12, 20, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2.5rem;
}

.comparison-dual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.2rem;
}

.list-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  padding: 1.2rem;
}

.list-box h4 {
  color: #FFD600;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.list-box ol {
  padding-left: 1.3rem;
  color: rgba(226, 232, 240, 0.9);
  font-size: 0.88rem;
  line-height: 1.8;
}

/* SECTION 3: HISTORICAL BACKGROUND */
.history-state-filter-bar {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.history-state-btn {
  padding: 0.55rem 1.15rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #f8fafc;
  border-radius: 999px;
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.history-state-btn:hover {
  background: rgba(255, 214, 0, 0.15);
  border-color: #FFD600;
  color: #FFD600;
}

.history-state-btn.active {
  background: linear-gradient(135deg, #FFD600, #F59E0B);
  color: #07090e;
  font-weight: 700;
  border-color: #FFD600;
  box-shadow: 0 4px 15px rgba(255, 214, 0, 0.35);
}

.history-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 1.6rem;
  margin-bottom: 3.5rem;
}

.history-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.history-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 214, 0, 0.6);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 214, 0, 0.18);
}

.history-thumb-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: #0f172a;
}

.history-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.history-card:hover .history-thumb {
  transform: scale(1.06);
}

.history-state-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(12, 15, 24, 0.85);
  border: 1px solid rgba(255, 214, 0, 0.5);
  color: #FFD600;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
}

.history-card h3 {
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 0.3rem;
  line-height: 1.3;
}

.history-loc-text {
  font-size: 0.82rem;
  color: #38bdf8;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.history-origin-snip {
  font-size: 0.85rem;
  color: rgba(226, 232, 240, 0.85);
  line-height: 1.55;
  margin-bottom: 1.2rem;
}

/* SECTION 4: MOUNTAIN KNOWLEDGE */
.knowledge-tabs-bar {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.knowledge-tab-btn {
  padding: 0.65rem 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f8fafc;
  border-radius: 12px;
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.knowledge-tab-btn:hover {
  background: rgba(255, 214, 0, 0.15);
  border-color: #FFD600;
  color: #FFD600;
}

.knowledge-tab-btn.active {
  background: linear-gradient(135deg, #FFD600, #F59E0B);
  color: #07090e;
  border-color: #FFD600;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(255, 214, 0, 0.35);
}

.gears-knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.6rem;
  margin-bottom: 3.5rem;
}

.gear-know-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  padding: 1.4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.gear-know-card h4 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 0.6rem;
}

.gear-detail-row {
  margin-bottom: 0.75rem;
  font-size: 0.86rem;
  line-height: 1.5;
  color: rgba(226, 232, 240, 0.88);
}

.gear-detail-row strong {
  color: #FFD600;
}

.btn-store-link {
  margin-top: 1rem;
  background: linear-gradient(135deg, #FFD600, #F59E0B);
  color: #07090e;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.btn-store-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 214, 0, 0.45);
}

/* Medical Disclaimer Banner */
.medical-disclaimer-banner {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.5);
  border-left: 5px solid #ef4444;
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  margin-bottom: 2rem;
  color: #fca5a5;
  font-size: 0.92rem;
  line-height: 1.6;
}

.medical-disclaimer-banner strong {
  color: #ffffff;
  display: block;
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

/* EXPANDED LARGE MODAL (14-Point Biography / Heritage Articles) */
.discover-modal-card.large-modal {
  max-width: 920px;
  width: 94%;
  padding: 2.5rem;
}

.bio-article-header {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.bio-article-portrait {
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 16px;
  border: 2px solid rgba(255, 214, 0, 0.5);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.bio-section-block {
  margin-bottom: 1.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 1.5rem;
}

.bio-section-block:last-child {
  border-bottom: none;
}

.bio-section-block h4 {
  font-size: 1.15rem;
  color: #FFD600;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.bio-section-block p {
  font-size: 0.94rem;
  line-height: 1.7;
  color: rgba(226, 232, 240, 0.9);
  margin-bottom: 0.6rem;
}

.bio-section-block ul {
  padding-left: 1.3rem;
  color: rgba(226, 232, 240, 0.9);
  font-size: 0.92rem;
  line-height: 1.7;
}

.timeline-list {
  list-style: none;
  padding-left: 0 !important;
  position: relative;
  border-left: 2px solid rgba(255, 214, 0, 0.4);
  margin-left: 0.8rem;
}

.timeline-item {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FFD600;
  box-shadow: 0 0 10px rgba(255, 214, 0, 0.8);
}

.timeline-year {
  font-weight: 700;
  color: #FFD600;
  font-size: 0.85rem;
}

.timeline-text {
  color: #e2e8f0;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 900px) {
  .nimsdai-spotlight-grid {
    grid-template-columns: 1fr;
  }
  .bio-article-header {
    grid-template-columns: 1fr;
  }
  .bio-article-portrait {
    height: 300px;
    max-width: 260px;
    margin: 0 auto;
  }
  .comparison-dual-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .discover-hero-title {
    font-size: 1.85rem;
  }
  .discover-hero-card {
    padding: 2rem 1.4rem;
  }
  .discover-stats-row {
    gap: 0.75rem;
  }
  .discover-stat {
    min-width: 110px;
    padding: 0.6rem 0.9rem;
  }
  .discover-categories-grid {
    grid-template-columns: 1fr;
  }
  .mountaineers-grid,
  .peaks-grid,
  .history-grid,
  .gears-knowledge-grid {
    grid-template-columns: 1fr;
  }
  .discover-modal-card.large-modal {
    padding: 1.5rem;
  }
}
`;

fs.writeFileSync(cssPath, before + newStyles, 'utf8');
console.log('Successfully updated style.css with complete Liquid Glass styles!');
