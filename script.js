// Editorial enhancement for The Flourishing Community.
(function enhanceFlourishingSite() {
  if (document.documentElement.dataset.flourishingEnhanced === 'true') return;
  document.documentElement.dataset.flourishingEnhanced = 'true';

  const portraitCss = document.createElement('link');
  portraitCss.rel = 'stylesheet';
  portraitCss.href = 'portraits.css?v=8';
  document.head.appendChild(portraitCss);

  const redesign = document.createElement('style');
  redesign.id = 'flourishing-header-redesign';
  redesign.textContent = `
    .site-header.editorial-header { position:absolute; inset:0 0 auto 0; z-index:60; background:rgba(247,245,239,.95); border-bottom:0; backdrop-filter:blur(10px); }
    .editorial-header .nav-wrap { width:min(1480px,calc(100% - 64px)); height:92px; gap:34px; }
    .editorial-header .brand { min-width:230px; gap:0; align-items:flex-start; }
    .editorial-header .brand-mark { display:none; }
    .editorial-header .brand-text { display:block; font-family:Georgia,'Times New Roman',serif; font-size:29px; line-height:.91; font-weight:500; letter-spacing:-.045em; color:#1d211d; }
    .editorial-header .desktop-nav { margin-left:auto; margin-right:auto; gap:31px; align-items:center; }
    .editorial-header .desktop-nav a { position:relative; color:#262b27; font-size:15px; font-weight:500; white-space:nowrap; }
    .editorial-header .desktop-nav a:first-child { color:#2d5b47; font-weight:800; }
    .editorial-header .desktop-nav a:first-child::after { content:''; position:absolute; left:0; right:0; bottom:-10px; height:2px; background:#2d5b47; }
    .editorial-header .btn-small { min-width:202px; min-height:56px; padding:14px 28px; font-size:15px; gap:17px; box-shadow:0 8px 26px rgba(45,91,71,.12); }

    .hero.editorial-hero { position:relative; min-height:820px; padding:146px 0 72px; display:flex; align-items:center; overflow:hidden; isolation:isolate; background:#f7f5ef; }
    .editorial-hero .hero-grid { position:relative; z-index:4; display:block; width:min(1480px,calc(100% - 64px)); margin-inline:auto; }
    .editorial-hero .hero-copy { position:relative; z-index:5; width:min(500px,39vw); max-width:500px; padding:34px 0 24px; }
    .editorial-hero .hero-copy .eyebrow { margin-bottom:23px; font-size:12px; letter-spacing:.22em; color:#2d5b47; }
    .editorial-hero h1 { max-width:520px; font-size:clamp(66px,6.35vw,106px); line-height:.98; letter-spacing:-.052em; }
    .editorial-hero h1 em { display:inline; color:#2d5b47; font-style:italic; }
    .editorial-hero .hero-lead { max-width:485px; margin:32px 0; color:#5b625c; font-size:18px; line-height:1.55; }
    .editorial-hero .hero-actions { gap:24px; }
    .editorial-hero .hero-actions .btn { min-height:56px; padding-inline:28px; }
    .editorial-hero .text-link { font-size:15px; }
    .editorial-hero .trust-row, .editorial-hero .hero-art { display:none !important; }

    .editorial-hero-media { position:absolute; z-index:1; right:0; top:50%; width:min(78vw,1490px); aspect-ratio:16/9; transform:translateY(-47%); overflow:hidden; pointer-events:none; }
    .editorial-hero-media img { display:block; width:100%; height:100%; object-fit:cover; object-position:center; }
    .editorial-hero-media::before { content:''; position:absolute; inset:0; z-index:2; background:linear-gradient(90deg,#f7f5ef 0%,rgba(247,245,239,.99) 8%,rgba(247,245,239,.94) 16%,rgba(247,245,239,.64) 27%,rgba(247,245,239,.18) 39%,rgba(247,245,239,0) 52%); }
    .editorial-hero-media::after { content:''; position:absolute; inset:0; z-index:2; background:linear-gradient(0deg,#f7f5ef 0%,rgba(247,245,239,.84) 7%,rgba(247,245,239,.24) 17%,rgba(247,245,239,0) 28%); }

    @media (min-width:1500px) { .editorial-hero .hero-copy{width:520px;max-width:520px}.editorial-hero-media{width:min(79vw,1530px)} }
    @media (max-width:1100px) {
      .editorial-header .nav-wrap{width:min(100% - 40px,1160px)} .editorial-header .brand{min-width:185px}.editorial-header .brand-text{font-size:25px}.editorial-header .desktop-nav{gap:18px}.editorial-header .desktop-nav a{font-size:13px}.editorial-header .btn-small{min-width:150px}
      .hero.editorial-hero{min-height:750px}.editorial-hero .hero-grid{width:min(100% - 40px,1160px)}.editorial-hero .hero-copy{width:min(470px,44vw)}.editorial-hero-media{width:82vw}
    }
    @media (max-width:900px) {
      .editorial-header .nav-wrap{height:82px}.editorial-header .brand{min-width:auto}.editorial-header .brand-text{font-size:24px}.editorial-header .desktop-nav{display:none}.editorial-header .btn-small{margin-left:auto;min-width:145px;min-height:48px}
      .hero.editorial-hero{min-height:0;padding:126px 0 0;display:block}.editorial-hero .hero-grid{width:min(100% - 36px,760px)}.editorial-hero .hero-copy{width:100%;max-width:650px;padding:22px 0 34px}.editorial-hero h1{max-width:640px;font-size:clamp(58px,11vw,84px)}.editorial-hero .hero-lead{max-width:610px}
      .editorial-hero-media{position:relative;right:auto;top:auto;width:min(100% - 24px,900px);margin:8px auto 0;transform:none;border-radius:28px 28px 0 0}.editorial-hero-media::before{background:linear-gradient(0deg,#f7f5ef 0%,rgba(247,245,239,.45) 8%,rgba(247,245,239,0) 22%)}.editorial-hero-media::after{display:none}
    }
    @media (max-width:640px) {
      .editorial-header .nav-wrap{width:calc(100% - 28px)}.editorial-header .brand-text{display:block;font-size:21px}.editorial-header .btn-small{min-width:126px;padding:11px 16px;font-size:12px}
      .hero.editorial-hero{padding-top:112px}.editorial-hero .hero-grid{width:calc(100% - 28px)}.editorial-hero h1{font-size:clamp(50px,14vw,66px)}.editorial-hero .hero-copy .eyebrow{font-size:10px}.editorial-hero .hero-lead{font-size:17px}.editorial-hero-media{width:calc(100% - 14px);border-radius:22px 22px 0 0}
    }
  `;
  document.head.appendChild(redesign);

  const header = document.querySelector('.site-header');
  if (header) {
    header.classList.add('editorial-header');
    const brandText = header.querySelector('.brand-text');
    if (brandText) brandText.innerHTML = 'The Flourishing<br>Community';
    const nav = header.querySelector('.desktop-nav');
    if (nav) nav.innerHTML = '<a href="#top">Home</a><a href="#about">About</a><a href="#letter">The Letter</a><a href="#forum">The Forum</a><a href="#cohort">The Cohort</a><a href="#framework">The Framework</a>';
    const headerCta = header.querySelector('.btn-small');
    if (headerCta) headerCta.innerHTML = 'Join the Letter <span aria-hidden="true">→</span>';
  }

  const hero = document.querySelector('.hero');
  const heroGrid = hero && hero.querySelector('.hero-grid');
  const heroCopy = hero && hero.querySelector('.hero-copy');
  if (hero && heroGrid && heroCopy) {
    hero.classList.add('editorial-hero');
    const eyebrow = heroCopy.querySelector('.eyebrow');
    if (eyebrow) eyebrow.textContent = 'A community for a flourishing world';
    const lead = heroCopy.querySelector('.hero-lead');
    if (lead) lead.textContent = 'The Flourishing Community creates space for people, organisations and societies to think, learn and flourish — and turns those ideas into real-world change through conversation, community gatherings and guided learning.';
    const oldArt = hero.querySelector('.hero-art');
    if (oldArt) oldArt.style.display = 'none';

    if (!hero.querySelector('.editorial-hero-media')) {
      const media = document.createElement('div');
      media.className = 'editorial-hero-media';
      media.setAttribute('aria-hidden', 'true');
      const img = document.createElement('img');
      img.src = 'assets/community-hero.jpg?v=9';
      img.alt = '';
      img.loading = 'eager';
      img.decoding = 'async';
      media.appendChild(img);
      hero.appendChild(media);
    }
  }

  const makePortrait = (src, alt, className, caption = '') => {
    const figure = document.createElement('figure');
    figure.className = `portrait-frame ${className} reveal`;
    const img = document.createElement('img');
    img.src = src; img.alt = alt; img.loading = 'lazy'; img.decoding = 'async';
    figure.appendChild(img);
    if (caption) { const figcaption = document.createElement('figcaption'); figcaption.textContent = caption; figure.appendChild(figcaption); }
    return figure;
  };

  const aboutContainer = document.querySelector('#about .container');
  if (aboutContainer && !aboutContainer.querySelector('.portrait-about')) {
    aboutContainer.classList.remove('narrow','reveal'); aboutContainer.classList.add('story-grid');
    const copy = document.createElement('div'); copy.className='story-copy reveal';
    while (aboutContainer.firstChild) copy.appendChild(aboutContainer.firstChild);
    aboutContainer.appendChild(copy);
    aboutContainer.appendChild(makePortrait('assets/founder-green.svg','Garcia Ayoola David, founder of The Flourishing Community','portrait-about','Garcia Ayoola David · Founder'));
  }

  const letterPreview = document.querySelector('#letter .letter-preview');
  if (letterPreview && !letterPreview.querySelector('.portrait-letter')) {
    letterPreview.classList.add('letter-visual');
    const paper = letterPreview.querySelector('.paper');
    letterPreview.insertBefore(makePortrait('assets/founder-white.svg','Garcia Ayoola David in a white suit','portrait-letter'), paper || null);
  }

  const forumGrid = document.querySelector('#forum .feature-grid');
  const eventCard = forumGrid && forumGrid.querySelector('.event-card');
  if (forumGrid && eventCard && !forumGrid.querySelector('.forum-visual')) {
    const visual = document.createElement('div'); visual.className='forum-visual';
    forumGrid.insertBefore(visual,eventCard);
    visual.appendChild(makePortrait('assets/founder-brown.svg','Garcia Ayoola David in a brown suit','portrait-forum'));
    visual.appendChild(eventCard);
  }

  const frameworkContainer = document.querySelector('#framework .container');
  const frameworkHeading = frameworkContainer && frameworkContainer.querySelector(':scope > .section-heading');
  if (frameworkContainer && frameworkHeading && !frameworkContainer.querySelector('.framework-intro-grid')) {
    const intro = document.createElement('div'); intro.className='framework-intro-grid';
    frameworkContainer.insertBefore(intro,frameworkHeading); intro.appendChild(frameworkHeading);
    intro.appendChild(makePortrait('assets/founder-black.svg','Garcia Ayoola David in a black suit','portrait-framework'));
  }
})();

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
