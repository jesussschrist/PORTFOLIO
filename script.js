/* ─── Clock & year ──────────────────── */
const clockEl    = document.getElementById('clock');
const footerYear = document.getElementById('footer-year');
footerYear.textContent = new Date().getFullYear();

(function tick() {
  clockEl.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  setTimeout(tick, 1000);
})();


/* ─── Cursor ────────────────────────── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * .11;
  ry += (my - ry) * .11;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .btn, .ndot, .skill-pill, .project-card, .edu-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width     = '6px';
    cursor.style.height    = '6px';
    ring.style.width       = '58px';
    ring.style.height      = '58px';
    ring.style.borderColor = 'rgba(0,255,212,.7)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width     = '10px';
    cursor.style.height    = '10px';
    ring.style.width       = '38px';
    ring.style.height      = '38px';
    ring.style.borderColor = 'rgba(0,255,212,.4)';
  });
});


/* ─── Canvas gravity grid ───────────── */
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');
let mouse = { x: -9999, y: -9999 };

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);
document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

const SPACING = 58;
const PULL    = 18;
const RADIUS  = 220;

(function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cols = Math.ceil(canvas.width  / SPACING) + 2;
  const rows = Math.ceil(canvas.height / SPACING) + 2;

  ctx.strokeStyle = 'rgba(26,26,50,0.9)';
  ctx.lineWidth   = 0.5;

  for (let i = 0; i < cols; i++) {
    const x = i * SPACING;
    ctx.beginPath();
    for (let j = 0; j <= rows; j++) {
      const y    = j * SPACING;
      const dist = Math.hypot(x - mouse.x, y - mouse.y);
      const f    = Math.max(0, 1 - dist / RADIUS);
      const ang  = Math.atan2(y - mouse.y, x - mouse.x);
      const px   = x + Math.cos(ang) * f * PULL;
      const py   = y + Math.sin(ang) * f * PULL;
      j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
  }

  for (let j = 0; j < rows; j++) {
    const y = j * SPACING;
    ctx.beginPath();
    for (let i = 0; i <= cols; i++) {
      const x    = i * SPACING;
      const dist = Math.hypot(x - mouse.x, y - mouse.y);
      const f    = Math.max(0, 1 - dist / RADIUS);
      const ang  = Math.atan2(y - mouse.y, x - mouse.x);
      const px   = x + Math.cos(ang) * f * PULL;
      const py   = y + Math.sin(ang) * f * PULL;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
  }

  const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
  g.addColorStop(0, 'rgba(0,255,212,.04)');
  g.addColorStop(1, 'transparent');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(drawGrid);
})();


/* ─── Text scramble (hero name) ─────── */
const CHARS  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
const nameEl = document.getElementById('scramble-name');
const FINAL  = 'JHON CARL GABARDA'; /* ← replace with your actual name */
let frame = 0;

(function scramble() {
  if (frame > 36) { nameEl.textContent = FINAL; return; }
  const resolved = Math.floor((frame / 36) * FINAL.length);
  nameEl.textContent = FINAL.split('').map((ch, i) => {
    if (ch === ' ') return ' ';
    if (i < resolved) return ch;
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }).join('');
  frame++;
  requestAnimationFrame(scramble);
})();


/* ─── Scroll reveals ────────────────── */
const revObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const delay = parseInt(e.target.dataset.delay || '0');
    setTimeout(() => e.target.classList.add('visible'), delay);
    revObserver.unobserve(e.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revObserver.observe(el));


/* ─── Project card: 3D tilt + glow ─── */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r    = card.getBoundingClientRect();
    const cx   = e.clientX - r.left;
    const cy   = e.clientY - r.top;
    const rotX = ((cy / r.height) - .5) *  9;
    const rotY = ((cx / r.width)  - .5) * -9;
    card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
    card.style.setProperty('--mx', `${(cx / r.width)  * 100}%`);
    card.style.setProperty('--my', `${(cy / r.height) * 100}%`);
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateZ(0)';
  });
});


/* ─── Side nav: active section ──────── */
const sections = document.querySelectorAll('section');
const ndots    = document.querySelectorAll('.ndot');

ndots.forEach(dot => {
  dot.addEventListener('click', () => {
    const target = document.getElementById(dot.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const secObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      ndots.forEach(d => d.classList.toggle('active', d.dataset.target === e.target.id));
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => secObs.observe(s));
