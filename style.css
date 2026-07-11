*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #06060E;
  --bg2: #0C0C1C;
  --accent: #00FFD4;
  --accent2: #9D4EDD;
  --text: #E8E8F0;
  --muted: #5A5A7A;
  --border: #1A1A32;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Space Grotesk', sans-serif;
  cursor: none;
  overflow-x: hidden;
}

/* ── Cursor ─────────────────────────── */
#cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width .2s, height .2s;
  mix-blend-mode: difference;
}
#cursor-ring {
  position: fixed;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(0,255,212,.4);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
}

/* ── Canvas ─────────────────────────── */
#bg-canvas {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

/* ── Side Nav ───────────────────────── */
#sidenav {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  align-items: flex-end;
}
.ndot {
  display: flex;
  align-items: center;
  gap: .6rem;
  cursor: none;
}
.ndot-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: .6rem;
  color: var(--muted);
  letter-spacing: .12em;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity .2s;
}
.ndot:hover .ndot-label,
.ndot.active .ndot-label { opacity: 1; color: var(--accent); }
.ndot-circle {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--border);
  border: 1px solid var(--muted);
  transition: background .2s, transform .2s, border-color .2s;
}
.ndot.active .ndot-circle,
.ndot:hover .ndot-circle {
  background: var(--accent);
  border-color: var(--accent);
  transform: scale(1.6);
}

/* ── Sections ───────────────────────── */
section {
  position: relative;
  z-index: 1;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 10vw;
}

@media (max-width: 768px) {
  section { padding: 5rem 6vw; }
  #sidenav { display: none; }
  body { cursor: auto; }
  #cursor, #cursor-ring { display: none; }
}

/* ── Hero ───────────────────────────── */
#hero {
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  padding-top: 0;
}
.hero-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: .7rem;
  letter-spacing: .28em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;
  opacity: 0;
  animation: fadeUp .8s ease .4s forwards;
}
.status-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s ease infinite;
}
@keyframes pulse {
  0%,100% { opacity: 1; transform: scale(1); }
  50% { opacity: .4; transform: scale(.7); }
}
.hero-name {
  font-size: clamp(3.2rem, 10vw, 8.5rem);
  font-weight: 700;
  line-height: .95;
  letter-spacing: -.03em;
  color: var(--text);
  margin-bottom: 1.2rem;
  opacity: 0;
  animation: fadeUp .8s ease .6s forwards;
}
.hero-title {
  font-size: clamp(.95rem, 2vw, 1.2rem);
  font-weight: 300;
  color: var(--muted);
  margin-bottom: 2.8rem;
  letter-spacing: .04em;
  opacity: 0;
  animation: fadeUp .8s ease .8s forwards;
}
.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp .8s ease 1s forwards;
}
.btn {
  font-family: 'JetBrains Mono', monospace;
  font-size: .7rem;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: .8rem 2.2rem;
  border: 1px solid var(--accent);
  color: var(--accent);
  background: transparent;
  cursor: none;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: color .3s;
  display: inline-block;
}
.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent);
  transform: translateX(-101%);
  transition: transform .35s cubic-bezier(.4,0,.2,1);
}
.btn:hover::before { transform: translateX(0); }
.btn:hover { color: var(--bg); }
.btn span { position: relative; z-index: 1; }
.btn-ghost { border-color: var(--border); color: var(--muted); }
.btn-ghost::before { background: var(--bg2); }
.btn-ghost:hover { color: var(--text); }

.scroll-hint {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  opacity: 0;
  animation: fadeUp .8s ease 1.4s forwards;
}
.scroll-hint-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  letter-spacing: .22em;
  color: var(--muted);
  text-transform: uppercase;
}
.scroll-line {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: sline 2s ease-in-out infinite;
}
@keyframes sline {
  0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
  49%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
  50%  { transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
}

/* ── About ──────────────────────────── */
#about { gap: 5vw; flex-wrap: wrap; justify-content: center; }
.about-photo-wrap {
  flex: 0 0 260px;
  position: relative;
}
.photo-frame {
  width: 260px;
  height: 320px;
  position: relative;
  overflow: hidden;
}
.photo-frame img,
.photo-placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.photo-placeholder {
  background: var(--bg2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .75rem;
}
.photo-placeholder-icon {
  width: 56px; height: 56px;
  border-radius: 50%;
  border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
}
.photo-placeholder-icon svg { width: 28px; height: 28px; stroke: var(--muted); fill: none; }
.photo-placeholder-text {
  font-family: 'JetBrains Mono', monospace;
  font-size: .6rem;
  letter-spacing: .12em;
  color: var(--muted);
  text-transform: uppercase;
}
.photo-scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,255,212,.025) 2px,
    rgba(0,255,212,.025) 4px
  );
  z-index: 2;
  pointer-events: none;
}
.photo-border {
  position: absolute;
  inset: -1px;
  border: 1px solid rgba(0,255,212,.2);
  z-index: 3;
  pointer-events: none;
}
.corner { position: absolute; width: 18px; height: 18px; z-index: 4; }
.corner.tl { top: -1px; left: -1px; border-top: 2px solid var(--accent); border-left: 2px solid var(--accent); }
.corner.tr { top: -1px; right: -1px; border-top: 2px solid var(--accent); border-right: 2px solid var(--accent); }
.corner.bl { bottom: -1px; left: -1px; border-bottom: 2px solid var(--accent); border-left: 2px solid var(--accent); }
.corner.br { bottom: -1px; right: -1px; border-bottom: 2px solid var(--accent); border-right: 2px solid var(--accent); }

.about-text { flex: 1; min-width: 280px; max-width: 560px; }
.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: .62rem;
  letter-spacing: .28em;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
.about-bio {
  color: var(--muted);
  line-height: 1.85;
  font-size: .95rem;
  font-weight: 300;
  margin-bottom: 2.2rem;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}
.stat-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--accent);
  line-height: 1;
  margin-bottom: .3rem;
}
.stat-label {
  font-size: .65rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: .1em;
}

/* ── Projects ───────────────────────── */
#projects { flex-direction: column; align-items: flex-start; gap: 3rem; }
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.5rem;
  width: 100%;
}
.project-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  padding: 2rem 1.75rem;
  position: relative;
  overflow: hidden;
  cursor: none;
  transition: border-color .3s;
  transform-style: preserve-3d;
  will-change: transform;
}
.project-card:hover { border-color: rgba(0,255,212,.35); }
.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(0,255,212,.055), transparent 62%);
  opacity: 0;
  transition: opacity .4s;
  pointer-events: none;
}
.project-card:hover .card-glow { opacity: 1; }
.project-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: .6rem;
  color: var(--accent);
  letter-spacing: .22em;
  margin-bottom: 1.4rem;
}
.project-title { font-size: 1.15rem; font-weight: 600; margin-bottom: .65rem; }
.project-desc {
  font-size: .85rem;
  color: var(--muted);
  line-height: 1.75;
  margin-bottom: 1.4rem;
  font-weight: 300;
}
.project-tags { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: 1.6rem; }
.tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: .55rem;
  letter-spacing: .08em;
  padding: .22rem .65rem;
  border: 1px solid var(--border);
  color: var(--muted);
  text-transform: uppercase;
}
.project-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: .62rem;
  letter-spacing: .1em;
  color: var(--accent);
  text-decoration: none;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: .4rem;
}
.project-link .arrow { transition: transform .2s; }
.project-link:hover .arrow { transform: translateX(4px); }

/* ── Skills ─────────────────────────── */
#skills { flex-direction: column; align-items: flex-start; gap: 2.5rem; }
.skills-cloud { display: flex; flex-wrap: wrap; gap: .75rem; }
.skill-pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: .7rem;
  padding: .5rem 1.2rem;
  border: 1px solid var(--border);
  color: var(--text);
  letter-spacing: .06em;
  cursor: none;
  position: relative;
  overflow: hidden;
  transition: border-color .25s, color .25s;
}
.skill-pill::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .3s cubic-bezier(.4,0,.2,1);
}
.skill-pill:hover { color: var(--bg); border-color: var(--accent); }
.skill-pill:hover::before { transform: scaleX(1); }
.skill-pill span { position: relative; z-index: 1; }

/* ── Contact ─────────────────────────── */
#contact { flex-direction: column; text-align: center; gap: 0; }
.contact-big {
  font-size: clamp(1.4rem, 4vw, 2.8rem);
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  display: inline-block;
  margin: 1.8rem 0;
  position: relative;
  cursor: none;
  transition: color .2s;
}
.contact-big::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0; right: 0;
  height: 1px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform .35s;
}
.contact-big:hover { color: var(--accent); }
.contact-big:hover::after { transform: scaleX(1); }
.social-row {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.social-link {
  font-family: 'JetBrains Mono', monospace;
  font-size: .65rem;
  letter-spacing: .14em;
  color: var(--muted);
  text-decoration: none;
  text-transform: uppercase;
  cursor: none;
  transition: color .2s;
}
.social-link:hover { color: var(--accent); }

/* ── Divider ─────────────────────────── */
.section-divider {
  position: absolute;
  bottom: 0;
  left: 10vw; right: 10vw;
  height: 1px;
  background: var(--border);
}

/* ── Footer ─────────────────────────── */
footer {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  border-top: 1px solid var(--border);
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  letter-spacing: .22em;
  color: var(--muted);
  text-transform: uppercase;
}

/* ── Reveal ──────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity .75s ease, transform .75s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Education ──────────────────────── */
#education { justify-content: center; }
.edu-layout {
  display: flex;
  gap: 5vw;
  flex-wrap: wrap;
  width: 100%;
  align-items: flex-start;
}
.edu-left { flex: 0 0 260px; min-width: 220px; }
.edu-right { flex: 1; min-width: 280px; display: flex; flex-direction: column; gap: 1.2rem; }

.edu-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  padding: 1.75rem;
  position: relative;
  overflow: hidden;
  transition: border-color .3s;
}
.edu-card:hover { border-color: rgba(0,255,212,.3); }
.edu-card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
}
.edu-degree {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: .3rem;
  color: var(--text);
}
.edu-school {
  font-family: 'JetBrains Mono', monospace;
  font-size: .65rem;
  color: var(--accent);
  letter-spacing: .1em;
}
.edu-year {
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  color: var(--muted);
  letter-spacing: .1em;
  white-space: nowrap;
  padding-top: .15rem;
}
.edu-courses { margin-top: 1.2rem; padding-top: 1.2rem; border-top: 1px solid var(--border); }
.edu-course-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: .58rem;
  color: var(--muted);
  letter-spacing: .14em;
  text-transform: uppercase;
}

/* ── Project badge ──────────────────── */
.project-badge {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: .52rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent2);
  border: 1px solid rgba(157,78,221,.3);
  padding: .18rem .55rem;
  margin-bottom: 1rem;
}

/* ── Stat text variant ──────────────── */
.stat-text { font-size: 1.2rem; }
