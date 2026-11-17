const fs = require('fs');

const compactModalStyles = `
/* =========================================================
   COMPACT DISCOVER & LEARN POPUP MODAL (DARK LIQUID GLASS)
   ========================================================= */
.compact-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  background: rgba(3, 7, 18, 0.84);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  opacity: 1;
  transition: opacity 0.25s ease;
}

.compact-modal-backdrop.hidden {
  display: none !important;
  opacity: 0;
  pointer-events: none;
}

.compact-discover-modal {
  position: relative;
  width: 100%;
  max-width: 660px;
  max-height: 86vh;
  background: linear-gradient(165deg, rgba(17, 24, 39, 0.96), rgba(8, 12, 22, 0.98));
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255, 214, 0, 0.35);
  border-top: 1px solid rgba(255, 214, 0, 0.65);
  border-radius: 20px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.85), 0 0 35px rgba(255, 214, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: compactPopIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes compactPopIn {
  0% {
    opacity: 0;
    transform: scale(0.92) translateY(12px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.compact-modal-close-btn {
  position: absolute;
  top: 1rem;
  right: 1.15rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  font-size: 1.45rem;
  font-weight: 300;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 50;
  transition: all 0.2s ease;
}

.compact-modal-close-btn:hover {
  background: #FFD600;
  color: #000000;
  border-color: #FFD600;
  transform: rotate(90deg) scale(1.08);
}

.compact-modal-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 86vh;
  overflow: hidden;
}

.compact-modal-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.4rem 1.6rem 1.15rem;
  background: rgba(255, 255, 255, 0.025);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-right: 3.8rem;
  flex-shrink: 0;
}

.compact-modal-thumb {
  width: 74px;
  height: 74px;
  border-radius: 14px;
  object-fit: cover;
  border: 2px solid #FFD600;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.compact-modal-meta {
  flex: 1;
  min-width: 0;
}

.compact-modal-meta .compact-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #FFD600;
  background: rgba(255, 214, 0, 0.12);
  border: 1px solid rgba(255, 214, 0, 0.35);
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  margin-bottom: 0.3rem;
}

.compact-modal-meta h3 {
  color: #ffffff;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.compact-modal-meta p.compact-sub {
  color: rgba(226, 232, 240, 0.82);
  font-size: 0.82rem;
  margin: 0.2rem 0 0;
  line-height: 1.35;
}

.compact-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.35rem 1.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scrollbar-width: thin;
  scrollbar-color: #FFD600 rgba(255, 255, 255, 0.05);
}

.compact-modal-body::-webkit-scrollbar {
  width: 6px;
}
.compact-modal-body::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.04);
}
.compact-modal-body::-webkit-scrollbar-thumb {
  background: #FFD600;
  border-radius: 4px;
}

.compact-info-block {
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 0.9rem 1.1rem;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.compact-info-block:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 214, 0, 0.3);
}

.compact-info-block h4 {
  color: #FFD600;
  font-size: 0.92rem;
  font-weight: 700;
  margin: 0 0 0.45rem 0;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  letter-spacing: 0.2px;
}

.compact-info-block p {
  color: rgba(226, 232, 240, 0.92);
  font-size: 0.86rem;
  line-height: 1.55;
  margin: 0;
}

.compact-info-block ul {
  margin: 0;
  padding-left: 1.15rem;
  color: rgba(226, 232, 240, 0.92);
  font-size: 0.86rem;
  line-height: 1.55;
}

.compact-info-block li {
  margin-bottom: 0.35rem;
}

.compact-info-block li:last-child {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .compact-discover-modal {
    max-height: 92vh;
    border-radius: 16px;
  }
  .compact-modal-header {
    padding: 1.1rem 1.1rem 0.9rem;
    gap: 0.85rem;
    padding-right: 3.2rem;
  }
  .compact-modal-thumb {
    width: 60px;
    height: 60px;
    border-radius: 10px;
  }
  .compact-modal-meta h3 {
    font-size: 1.15rem;
  }
  .compact-modal-body {
    padding: 1rem 1.1rem 1.25rem;
    gap: 0.85rem;
  }
  .compact-info-block {
    padding: 0.75rem 0.9rem;
  }
}
`;

let css = fs.readFileSync('style.css', 'utf8');
if (!css.includes('.compact-discover-modal')) {
  css += '\n' + compactModalStyles;
  fs.writeFileSync('style.css', css, 'utf8');
  console.log('Successfully appended compact modal styles to style.css!');
} else {
  console.log('compact modal styles already present in style.css');
}
