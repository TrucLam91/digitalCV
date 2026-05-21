/* ══════════════════════════════════════
   NHI LAM — DIGITAL CV
   script.js
══════════════════════════════════════ */

const colors = {
  about:      { accent: '#4f8fff', blob: 'rgba(79,143,255,0.08)'  },
  skills:     { accent: '#9461ff', blob: 'rgba(148,97,255,0.08)'  },
  experience: { accent: '#10b981', blob: 'rgba(16,185,129,0.08)'  },
  portfolio:  { accent: '#f59e0b', blob: 'rgba(245,158,11,0.08)'  },
};

function go(id) {
  /* hide all sections */
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('on'));

  /* deactivate all nav buttons (sidebar + mobile) */
  document.querySelectorAll('.nb, .mob-nb').forEach(b => b.classList.remove('active'));

  /* activate target section */
  document.getElementById(id).classList.add('on');

  /* activate matching buttons in both sidebars */
  document.querySelectorAll(`[data-s="${id}"]`).forEach(b => b.classList.add('active'));

  /* update accent bar and blob color */
  const c = colors[id];
  document.getElementById('accent-bar').style.background = c.accent;
  document.getElementById('blob').style.background =
    `radial-gradient(circle, ${c.blob} 0%, transparent 70%)`;

  /* scroll content back to top on section switch */
  document.getElementById(id).scrollTop = 0;
   window.location.hash = id;
}
if (window.location.hash) {
  go(window.location.hash.replace('#',''));
}
