/* ========== GDF: Theme, Counters, Carousel ========== */
(function GDFFeaturePack(){

  /* --------- THEME (persistent) --------- */
  const THEME_KEY = 'gdf_theme';
  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    const icon = document.getElementById('gdfThemeIcon');
    if(icon) icon.textContent = (theme === 'dark') ? '☀️' : '🌙';
  }
  (function initTheme(){
    const saved = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(saved);
    const btn = document.getElementById('gdfThemeToggle');
    if(!btn) return;
    btn.addEventListener('click', ()=>{
      const cur = document.documentElement.getAttribute('data-theme') || 'light';
      const next = cur === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  })();


  /* --------- COUNTERS (animate) --------- */
  function animateCounters(){
    const counters = document.querySelectorAll('.gdf-counter');
    counters.forEach(c => {
      const target = Number(c.dataset.target) || 0;
      // If already set, skip
      const already = Number(c.textContent.replace(/,/g,'')) || 0;
      if(already >= target) return;
      const duration = 1600 + Math.min(2000, target/2);
      const start = performance.now();
      function step(now){
        const progress = Math.min(1,(now-start)/duration);
        const value = Math.floor(progress * target);
        c.textContent = value.toLocaleString('en-IN');
        if(progress < 1) requestAnimationFrame(step);
        else c.textContent = target.toLocaleString('en-IN');
      }
      requestAnimationFrame(step);
    });

    // animate small bars (they are pre-sized in HTML inline widths)
    document.querySelectorAll('.gdf-small-bar').forEach(el => {
      const w = el.style.width || '0%';
      el.style.width = '0%';
      setTimeout(()=> el.style.width = w, 80);
    });
    // animate main progress bars (based on current inline width)
    document.querySelectorAll('.gdf-progress-bar').forEach(el=>{
      const w = el.style.width || '0%';
      el.style.width = '0%';
      setTimeout(()=> el.style.width = w, 120);
    });
  }

  // run counters when visible
  function onVisibleTrigger(selector, cb){
    const el = document.querySelector(selector);
    if(!el) return cb();
    const obs = new IntersectionObserver((entries, observer)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          cb();
          observer.disconnect();
        }
      });
    }, {threshold: 0.25});
    obs.observe(el);
  }

  onVisibleTrigger('#gdf-impact', animateCounters);


  /* --------- TESTIMONIAL CAROUSEL --------- */
  const carousel = document.getElementById('gdfCarousel');
  if(carousel){
    const slides = Array.from(carousel.querySelectorAll('.gdf-slide'));
    let idx = 0;
    const dotsEl = document.getElementById('gdfDots');
    const prevBtn = document.getElementById('gdfPrev');
    const nextBtn = document.getElementById('gdfNext');
    // build dots
    slides.forEach((s,i)=>{
      const b = document.createElement('button');
      b.type = 'button';
      b.className = i===0 ? 'active' : '';
      b.setAttribute('aria-label','Go to testimonial '+(i+1));
      b.addEventListener('click', ()=> goto(i));
      dotsEl.appendChild(b);
    });

    function refresh(){
      slides.forEach((s,i)=>{
        s.setAttribute('aria-hidden', i===idx ? 'false' : 'true');
      });
      Array.from(dotsEl.children).forEach((d,i)=>{
        d.classList.toggle('active', i===idx);
      });
    }

    function goto(n){
      idx = (n + slides.length) % slides.length;
      refresh();
    }
    if(prevBtn) prevBtn.addEventListener('click', ()=> goto(idx-1));
    if(nextBtn) nextBtn.addEventListener('click', ()=> goto(idx+1));

    // autoplay
    let autoplay = setInterval(()=> goto(idx+1), 6000);
    // pause on hover
    carousel.addEventListener('mouseenter', ()=> clearInterval(autoplay));
    carousel.addEventListener('mouseleave', ()=> autoplay = setInterval(()=> goto(idx+1), 6000));
    refresh();
  }

})();
