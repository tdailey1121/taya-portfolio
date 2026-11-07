// Case study pages: Applied Steps scroll tracking and a screenshot lightbox.
(() => {
  // highlight the step being read in the left pane
  const links = [...document.querySelectorAll('.pane a[href^="#"]')];
  const steps = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  function mark(i) {
    links.forEach((a, k) => {
      a.classList.toggle('past', k < i);
      a.classList.toggle('now', k === i);
      if (k === i) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current');
    });
  }
  if (steps.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) mark(steps.indexOf(e.target)); });
    }, { rootMargin: '-30% 0px -60% 0px' });
    steps.forEach(s => io.observe(s));
  }
  mark(0);

  // open any screenshot full size
  const lb = document.getElementById('lb');
  if (!lb || typeof lb.showModal !== 'function') return;
  const img = lb.querySelector('img'), cap = lb.querySelector('.lb-cap');
  document.querySelectorAll('.shot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.querySelector('img');
      img.src = src.currentSrc || src.src;
      img.alt = src.alt;
      cap.textContent = btn.dataset.caption || src.alt;
      lb.showModal();
    });
  });
  lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
})();
