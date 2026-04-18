/* ============================================================
   Louis Sungwoo Cho — Portfolio JavaScript
   Animated transportation canvas + UI interactions
   ============================================================ */

'use strict';

// ══════════════════════════════════════════
// DYNAMIC TRANSPORTATION BACKGROUND CANVAS
// Cars, Trains, Planes + ITS Network Nodes
// ══════════════════════════════════════════
(function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Road network layout (proportional coords)
  const H_LANES = [0.14, 0.32, 0.52, 0.70, 0.87];
  const V_LANES = [0.10, 0.26, 0.43, 0.60, 0.78, 0.93];

  // ITS intersection nodes
  const nodes = [];
  H_LANES.forEach(hy => V_LANES.forEach(vx => nodes.push({ x: vx, y: hy, phase: Math.random() * Math.PI * 2 })));

  // ── Vehicle base class ──
  class Vehicle {
    constructor(type) {
      this.type = type;
      this.trail = [];
      this.reset(true);
    }

    reset(init) {
      this.trail = [];
      const r = Math.random;

      if (this.type === 'plane') {
        this.x = init ? r() * W : (r() > 0.5 ? -90 : W + 90);
        this.y = r() * H * 0.65;
        this.speed = r() * 0.45 + 0.28;
        this.vx = this.speed * (this.x < W / 2 ? 1 : -1);
        this.vy = (r() - 0.5) * 0.14;
        this.size = r() * 5 + 6;
        this.opacity = r() * 0.22 + 0.12;

      } else if (this.type === 'train') {
        const lane = H_LANES[Math.floor(r() * H_LANES.length)];
        this.y = lane * H;
        this.x = init ? r() * W : (r() > 0.5 ? -130 : W + 130);
        this.speed = r() * 0.85 + 0.55;
        this.vx = this.speed * (this.x < W / 2 ? 1 : -1);
        this.vy = 0;
        this.len = r() * 70 + 55;
        this.carH = 9;
        this.opacity = r() * 0.22 + 0.1;
        this.colorR = r() > 0.5 ? '79,156,249' : '34,211,238';

      } else {
        // Car — horizontal or vertical lane
        const horiz = r() > 0.5;
        if (horiz) {
          const lane = H_LANES[Math.floor(r() * H_LANES.length)];
          this.y = lane * H + (r() - 0.5) * 18;
          this.x = r() > 0.5 ? -18 : W + 18;
          this.vx = (r() * 1.3 + 0.5) * (this.x < 0 ? 1 : -1);
          this.vy = 0;
        } else {
          const lane = V_LANES[Math.floor(r() * V_LANES.length)];
          this.x = lane * W + (r() - 0.5) * 18;
          this.y = r() > 0.5 ? -18 : H + 18;
          this.vy = (r() * 1.3 + 0.5) * (this.y < 0 ? 1 : -1);
          this.vx = 0;
        }
        this.size = r() * 3.5 + 3;
        this.opacity = r() * 0.3 + 0.1;
        this.glowing = r() > 0.65;
        // Color variety: white, blue, cyan
        const c = r();
        this.color = c > 0.6 ? '#ffffff' : c > 0.35 ? '#4f9cf9' : '#22d3ee';
      }
    }

    update() {
      this.trail.push({ x: this.x, y: this.y });
      const maxTrail = this.type === 'plane' ? 45 : this.type === 'train' ? 18 : 14;
      if (this.trail.length > maxTrail) this.trail.shift();

      this.x += this.vx;
      this.y += this.vy;

      const pad = 220;
      if (this.x < -pad || this.x > W + pad || this.y < -pad || this.y > H + pad) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;

      if (this.type === 'plane') {
        this._drawPlane();
      } else if (this.type === 'train') {
        this._drawTrain();
      } else {
        this._drawCar();
      }

      ctx.restore();
    }

    _drawPlane() {
      // Contrail
      if (this.trail.length > 1) {
        ctx.beginPath();
        for (let i = 0; i < this.trail.length; i++) {
          const t = this.trail[i];
          i === 0 ? ctx.moveTo(t.x, t.y) : ctx.lineTo(t.x, t.y);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.07)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
      // Body
      ctx.translate(this.x, this.y);
      ctx.rotate(Math.atan2(this.vy, this.vx));
      const s = this.size;
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.beginPath();
      ctx.moveTo(s * 2.2, 0);
      ctx.lineTo(-s, s * 0.65);
      ctx.lineTo(-s * 0.55, 0);
      ctx.lineTo(-s, -s * 0.65);
      ctx.closePath();
      ctx.fill();
      // Wing
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(-s * 0.25, -s * 1.6);
      ctx.lineTo(-s * 0.75, -s * 1.55); ctx.lineTo(-s * 0.5, 0);
      ctx.closePath(); ctx.fill();
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(-s * 0.25, s * 1.6);
      ctx.lineTo(-s * 0.75, s * 1.55); ctx.lineTo(-s * 0.5, 0);
      ctx.closePath(); ctx.fill();
    }

    _drawTrain() {
      const dir = this.vx >= 0 ? 1 : -1;
      // Glow trail
      if (this.trail.length > 1) {
        ctx.beginPath();
        for (let i = 0; i < this.trail.length; i++) {
          const t = this.trail[i];
          i === 0 ? ctx.moveTo(t.x, t.y) : ctx.lineTo(t.x, t.y);
        }
        ctx.strokeStyle = `rgba(${this.colorR},0.05)`;
        ctx.lineWidth = this.carH + 3;
        ctx.stroke();
      }
      // Body
      const bx = dir > 0 ? this.x - this.len : this.x;
      ctx.fillStyle = `rgba(${this.colorR},0.85)`;
      ctx.shadowColor = `rgba(${this.colorR},1)`;
      ctx.shadowBlur = 7;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(bx, this.y - this.carH / 2, this.len, this.carH, 3);
        ctx.fill();
      } else {
        ctx.fillRect(bx, this.y - this.carH / 2, this.len, this.carH);
      }
      // Windows
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(210,240,255,0.65)';
      for (let i = 0; i < 7; i++) {
        const wx = bx + 7 + i * 9;
        ctx.fillRect(wx, this.y - 2.5, 5.5, 5, 1);
      }
    }

    _drawCar() {
      // Motion trail
      if (this.trail.length > 1) {
        ctx.beginPath();
        for (let i = 0; i < this.trail.length; i++) {
          const t = this.trail[i];
          i === 0 ? ctx.moveTo(t.x, t.y) : ctx.lineTo(t.x, t.y);
        }
        ctx.strokeStyle = this.color + '50';
        ctx.lineWidth = this.size * 0.55;
        ctx.lineCap = 'round';
        ctx.stroke();
      }
      // Body
      ctx.fillStyle = this.color;
      if (this.glowing) {
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 7;
      }
      const s = this.size;
      const horizontal = this.vx !== 0;
      if (horizontal) {
        ctx.fillRect(this.x - s * 1.5, this.y - s * 0.5, s * 3, s);
        ctx.fillStyle = 'rgba(200,240,255,0.8)';
        ctx.fillRect(this.x - s * 0.9, this.y - s * 1.15, s * 1.8, s * 0.65);
      } else {
        ctx.fillRect(this.x - s * 0.5, this.y - s * 1.5, s, s * 3);
        ctx.fillStyle = 'rgba(200,240,255,0.8)';
        ctx.fillRect(this.x - s * 1.15, this.y - s * 0.9, s * 0.65, s * 1.8);
      }
    }
  }

  // ── Floating data particles (ITS sensor data) ──
  class Particle {
    constructor() { this.reset(); }
    reset() {
      const edge = Math.floor(Math.random() * 4);
      if (edge === 0)      { this.x = Math.random() * W; this.y = 0; this.vx = (Math.random() - 0.5) * 0.3; this.vy = Math.random() * 0.5 + 0.15; }
      else if (edge === 1) { this.x = W; this.y = Math.random() * H; this.vx = -(Math.random() * 0.5 + 0.15); this.vy = (Math.random() - 0.5) * 0.3; }
      else if (edge === 2) { this.x = Math.random() * W; this.y = H; this.vx = (Math.random() - 0.5) * 0.3; this.vy = -(Math.random() * 0.5 + 0.15); }
      else                 { this.x = 0; this.y = Math.random() * H; this.vx = Math.random() * 0.5 + 0.15; this.vy = (Math.random() - 0.5) * 0.3; }
      this.life = 1;
      this.decay = Math.random() * 0.003 + 0.0008;
      this.size = Math.random() * 1.5 + 0.4;
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.life -= this.decay;
      if (this.life <= 0 || this.x < -5 || this.x > W + 5 || this.y < -5 || this.y > H + 5) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.life * 0.45;
      ctx.fillStyle = 'rgba(79,156,249,0.9)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Instantiate
  const vehicles = [
    ...Array.from({ length: 26 }, () => new Vehicle('car')),
    ...Array.from({ length: 5 },  () => new Vehicle('train')),
    ...Array.from({ length: 9 },  () => new Vehicle('plane')),
  ];
  const particles = Array.from({ length: 90 }, () => new Particle());

  let frame = 0;

  function render() {
    ctx.clearRect(0, 0, W, H);
    frame++;

    // ── Road grid (animated dashes) ──
    ctx.save();
    ctx.setLineDash([5, 14]);
    ctx.lineDashOffset = -(frame * 0.28);

    H_LANES.forEach(ly => {
      // Glow fill
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.035)';
      ctx.lineWidth = 16;
      ctx.moveTo(0, ly * H); ctx.lineTo(W, ly * H); ctx.stroke();
      // Center dashes
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      ctx.moveTo(0, ly * H); ctx.lineTo(W, ly * H); ctx.stroke();
    });

    V_LANES.forEach(lx => {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 16;
      ctx.moveTo(lx * W, 0); ctx.lineTo(lx * W, H); ctx.stroke();
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255,255,255,0.05)';
      ctx.lineWidth = 1;
      ctx.moveTo(lx * W, 0); ctx.lineTo(lx * W, H); ctx.stroke();
    });
    ctx.restore();

    // ── ITS node connections ──
    ctx.save();
    ctx.strokeStyle = 'rgba(79,156,249,0.055)';
    ctx.lineWidth = 0.8;
    nodes.forEach((a, i) => {
      nodes.slice(i + 1).forEach(b => {
        const dist = Math.hypot((a.x - b.x) * W, (a.y - b.y) * H);
        if (dist < W * 0.28) {
          ctx.beginPath();
          ctx.moveTo(a.x * W, a.y * H);
          ctx.lineTo(b.x * W, b.y * H);
          ctx.stroke();
        }
      });
    });
    ctx.restore();

    // ── ITS node pulses ──
    nodes.forEach(n => {
      const pulse = (Math.sin(frame * 0.038 + n.phase) + 1) / 2;
      ctx.save();
      ctx.globalAlpha = 0.12 + pulse * 0.28;
      ctx.fillStyle = '#22d3ee';
      ctx.shadowColor = '#22d3ee';
      ctx.shadowBlur = 10 * pulse;
      ctx.beginPath();
      ctx.arc(n.x * W, n.y * H, 2.2 + pulse * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // ── Data particles ──
    particles.forEach(p => { p.update(); p.draw(); });

    // ── Vehicles ──
    vehicles.forEach(v => { v.update(); v.draw(); });

    requestAnimationFrame(render);
  }

  render();
})();

// ══════════════════════════════════════════
// NAVBAR
// ══════════════════════════════════════════
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ══════════════════════════════════════════
// HAMBURGER / MOBILE MENU
// ══════════════════════════════════════════
const ham = document.getElementById('ham');
const mob = document.getElementById('mob');
ham.addEventListener('click', () => mob.classList.toggle('open'));

function closeMob() { mob.classList.remove('open'); }

// ══════════════════════════════════════════
// SCROLL REVEAL (IntersectionObserver)
// ══════════════════════════════════════════
const revEls = document.querySelectorAll('.reveal');
const revObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

revEls.forEach(el => revObserver.observe(el));

// ══════════════════════════════════════════
// COUNTER ANIMATION
// ══════════════════════════════════════════
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const cntObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      cntObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num').forEach(el => cntObserver.observe(el));

// ══════════════════════════════════════════
// ACTIVE NAV LINK ON SCROLL
// ══════════════════════════════════════════
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  const scrollY = window.scrollY + 130;
  let current = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

// ══════════════════════════════════════════
// SMOOTH SCROLL for anchor links
// ══════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ══════════════════════════════════════════
// HERO REVEALS on page load
// ══════════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  const heroReveal = document.querySelectorAll('#hero .reveal');
  heroReveal.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 110);
  });
});

// ══════════════════════════════════════════
// PROJECT CARD image parallax on hover
// ══════════════════════════════════════════
document.querySelectorAll('.proj-card').forEach(card => {
  const img = card.querySelector('.proj-img, .proj-img-wrap img');
  if (!img) return;
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    img.style.transform = `scale(1.04) translate(${x * 6}px, ${y * 6}px)`;
  });
  card.addEventListener('mouseleave', () => {
    img.style.transform = '';
  });
});
