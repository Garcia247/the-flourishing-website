// The Flourishing Community — editorial homepage enhancements
(function () {
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'portraits.css?v=10';
  document.head.appendChild(css);

  const style = document.createElement('style');
  style.textContent = `
    .site-header{position:absolute!important;inset:0 0 auto 0!important;z-index:50;background:rgba(247,245,239,.96)!important;border:0!important;backdrop-filter:blur(8px)}
    .nav-wrap{width:min(1480px,calc(100% - 64px))!important;height:92px!important;gap:32px!important}
    .brand{min-width:230px!important;gap:0!important;align-items:flex-start!important}.brand-mark{display:none!important}.brand-text{display:block!important;font-family:Georgia,'Times New Roman',serif!important;font-size:29px!important;line-height:.91!important;font-weight:500!important;letter-spacing:-.045em!important;color:#1d211d!important}
    .desktop-nav{margin-left:auto!important;margin-right:auto!important;gap:30px!important}.desktop-nav a{position:relative;color:#262b27!important;font-size:15px!important;font-weight:500!important;white-space:nowrap}.desktop-nav a:first-child{color:#2d5b47!important;font-weight:800!important}.desktop-nav a:first-child:after{content:'';position:absolute;left:0;right:0;bottom:-10px;height:2px;background:#2d5b47}
    .nav-wrap .btn-small{min-width:202px;min-height:56px;padding:14px 28px!important;font-size:15px!important;gap:16px;box-shadow:0 8px 26px rgba(45,91,71,.12)}

    .hero{position:relative!important;min-height:820px!important;padding:146px 0 72px!important;display:flex!important;align-items:center!important;overflow:hidden!important;isolation:isolate;background:#f7f5ef!important}
    .hero-grid{position:relative;z-index:4;display:block!important;width:min(1480px,calc(100% - 64px))!important;margin-inline:auto!important}
    .hero-copy{position:relative;z-index:5;width:min(500px,39vw);max-width:500px;padding:34px 0 24px}.hero-copy .eyebrow{margin-bottom:23px;font-size:12px;letter-spacing:.22em}.hero h1{max-width:520px;font-size:clamp(66px,6.35vw,106px);line-height:.98;letter-spacing:-.052em}.hero-lead{max-width:485px;margin:32px 0!important;font-size:18px!important;line-height:1.55!important}.hero-actions{gap:24px!important}.hero-actions .btn{min-height:56px;padding-inline:28px!important}.hero .trust-row,.hero .hero-art{display:none!important}

    .editorial-hero-media{position:absolute;z-index:1;right:0;top:50%;width:min(78vw,1490px);aspect-ratio:16/9;transform:translateY(-47%);overflow:hidden;pointer-events:none}
    .editorial-hero-media img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
    .editorial-hero-media:before{content:'';position:absolute;inset:0;z-index:2;background:linear-gradient(90deg,#f7f5ef 0%,rgba(247,245,239,.99) 8%,rgba(247,245,239,.94) 16%,rgba(247,245,239,.64) 27%,rgba(247,245,239,.18) 39%,rgba(247,245,239,0) 52%)}
    .editorial-hero-media:after{content:'';position:absolute;inset:0;z-index:2;background:linear-gradient(0deg,#f7f5ef 0%,rgba(247,245,239,.82) 7%,rgba(247,245,239,.22) 17%,rgba(247,245,239,0) 28%)}

    @media(max-width:1100px){.nav-wrap{width:min(100% - 40px,1160px)!important}.brand{min-width:185px!important}.brand-text{font-size:25px!important}.desktop-nav{gap:18px!important}.desktop-nav a{font-size:13px!important}.nav-wrap .btn-small{min-width:150px}.hero{min-height:750px!important}.hero-grid{width:min(100% - 40px,1160px)!important}.hero-copy{width:min(470px,44vw)}.editorial-hero-media{width:82vw}}
    @media(max-width:900px){.nav-wrap{height:82px!important}.brand{min-width:auto!important}.brand-text{font-size:24px!important}.desktop-nav{display:none!important}.nav-wrap .btn-small{margin-left:auto;min-width:145px;min-height:48px}.hero{min-height:0!important;padding:126px 0 0!important;display:block!important}.hero-grid{width:min(100% - 36px,760px)!important}.hero-copy{width:100%;max-width:650px;padding:22px 0 34px}.hero h1{max-width:640px;font-size:clamp(58px,11vw,84px)}.hero-lead{max-width:610px}.editorial-hero-media{position:relative;right:auto;top:auto;width:min(100% - 24px,900px);margin:8px auto 0;transform:none;border-radius:28px 28px 0 0}.editorial-hero-media:before{background:linear-gradient(0deg,#f7f5ef 0%,rgba(247,245,239,.42) 8%,rgba(247,245,239,0) 22%)}.editorial-hero-media:after{display:none}}
    @media(max-width:640px){.nav-wrap{width:calc(100% - 28px)!important}.brand-text{font-size:21px!important}.nav-wrap .btn-small{min-width:126px;padding:11px 16px!important;font-size:12px!important}.hero{padding-top:112px!important}.hero-grid{width:calc(100% - 28px)!important}.hero h1{font-size:clamp(50px,14vw,66px)}.hero-copy .eyebrow{font-size:10px}.hero-lead{font-size:17px!important}.editorial-hero-media{width:calc(100% - 14px);border-radius:22px 22px 0 0}}
  `;
  document.head.appendChild(style);

  const header = document.querySelector('.site-header');
  if (header) {
    const brandText = header.querySelector('.brand-text');
    if (brandText) brandText.innerHTML = 'The Flourishing<br>Community';
    const nav = header.querySelector('.desktop-nav');
    if (nav) nav.innerHTML = '<a href="#top">Home</a><a href="#about">About</a><a href="#letter">The Letter</a><a href="#forum">The Forum</a><a href="#cohort">The Cohort</a><a href="#framework">The Framework</a>';
    const cta = header.querySelector('.btn-small');
    if (cta) cta.innerHTML = 'Join the Letter <span aria-hidden="true">→</span>';
  }

  const hero = document.querySelector('.hero');
  const heroCopy = hero?.querySelector('.hero-copy');
  if (hero && heroCopy) {
    const eyebrow = heroCopy.querySelector('.eyebrow');
    if (eyebrow) eyebrow.textContent = 'A community for a flourishing world';
    const lead = heroCopy.querySelector('.hero-lead');
    if (lead) lead.textContent = 'The Flourishing Community creates space for people, organisations and societies to think, learn and flourish — and turns those ideas into real-world change through conversation, community gatherings and guided learning.';
    if (!hero.querySelector('.editorial-hero-media')) {
      const media = document.createElement('div');
      media.className = 'editorial-hero-media';
      media.setAttribute('aria-hidden','true');
      const img = document.createElement('img');
      img.src = 'assets/community-hero-safe.jpg?v=10';
      img.alt = '';
      img.loading = 'eager';
      img.fetchPriority = 'high';
      media.appendChild(img);
      hero.appendChild(media);
    }
  }

  function portrait(src, alt, cls, caption='') {
    const fig=document.createElement('figure'); fig.className=`portrait-frame ${cls} reveal`;
    const img=document.createElement('img'); img.src=src; img.alt=alt; img.loading='lazy'; fig.appendChild(img);
    if(caption){const cap=document.createElement('figcaption');cap.textContent=caption;fig.appendChild(cap)}
    return fig;
  }
  const about=document.querySelector('#about .container');
  if(about&&!about.querySelector('.portrait-about')){about.classList.remove('narrow','reveal');about.classList.add('story-grid');const copy=document.createElement('div');copy.className='story-copy reveal';while(about.firstChild)copy.appendChild(about.firstChild);about.appendChild(copy);about.appendChild(portrait('assets/founder-green.svg','Garcia Ayoola David, founder of The Flourishing Community','portrait-about','Garcia Ayoola David · Founder'))}
  const lp=document.querySelector('#letter .letter-preview');
  if(lp&&!lp.querySelector('.portrait-letter')){lp.classList.add('letter-visual');lp.insertBefore(portrait('assets/founder-white.svg','Garcia Ayoola David in a white suit','portrait-letter'),lp.querySelector('.paper'))}
  const fg=document.querySelector('#forum .feature-grid'), ec=fg?.querySelector('.event-card');
  if(fg&&ec&&!fg.querySelector('.forum-visual')){const v=document.createElement('div');v.className='forum-visual';fg.insertBefore(v,ec);v.appendChild(portrait('assets/founder-brown.svg','Garcia Ayoola David in a brown suit','portrait-forum'));v.appendChild(ec)}
  const fc=document.querySelector('#framework .container'), fh=fc?.querySelector(':scope > .section-heading');
  if(fc&&fh&&!fc.querySelector('.framework-intro-grid')){const i=document.createElement('div');i.className='framework-intro-grid';fc.insertBefore(i,fh);i.appendChild(fh);i.appendChild(portrait('assets/founder-black.svg','Garcia Ayoola David in a black suit','portrait-framework'))}
})();

const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
