/* ============================================================
   AI Workforce Decision Systems — script.js
   © 2026 Abdul Basit
   ============================================================ */

/* ── STAR CANVAS ── */
(function () {
  const c = document.getElementById('stars');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
  }

  function init() {
    stars = [];
    for (let i = 0; i < 140; i++) {
      stars.push({
        x:  Math.random() * W,
        y:  Math.random() * H,
        r:  Math.random() * 1.2 + 0.1,
        vx: (Math.random() - 0.5) * 0.12,
        vy: Math.random() * 0.18 + 0.05,
        o:  Math.random() * 0.6 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,210,255,${s.o})`;
      ctx.fill();

      s.x += s.vx;
      s.y += s.vy;

      if (s.y > H) { s.y = 0; s.x = Math.random() * W; }
      if (s.x < 0) s.x = W;
      if (s.x > W) s.x = 0;
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); init(); });
  resize();
  init();
  draw();
})();


/* ── SCROLL FADE-IN ── */
(function () {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    observer.observe(el);
  });
})();


/* ── MOBILE HAMBURGER ── */
(function () {
  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  if (!ham || !nav) return;

  ham.addEventListener('click', () => nav.classList.toggle('open'));

  document.addEventListener('click', e => {
    if (!ham.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
})();


/* ── NAV SCROLL STYLE ── */
(function () {
  const navEl = document.querySelector('nav');
  if (!navEl) return;

  window.addEventListener('scroll', () => {
    navEl.style.background = window.scrollY > 10
      ? 'rgba(6,10,18,0.95)'
      : 'rgba(6,10,18,0.7)';
  });
})();
