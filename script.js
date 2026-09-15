// Editorial portrait enhancement. Kept in JS so the existing page structure remains easy to maintain.
(function enhancePortraitStory() {
  if (document.documentElement.dataset.portraitsEnhanced === 'true') return;
  document.documentElement.dataset.portraitsEnhanced = 'true';

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'portraits.css?v=5';
  document.head.appendChild(css);

  // Hero — use the exact approved wide composition as one image.
  const heroArt = document.querySelector('.hero-art');
  if (heroArt && !heroArt.querySelector('.hero-community-image')) {
    heroArt.classList.add('with-community-image', 'exact-hero-composition');
    const heroImage = document.createElement('img');
    heroImage.src = 'assets/community-hero.svg?v=5';
    heroImage.alt = 'A small community gathered in thoughtful conversation and shared learning';
    heroImage.className = 'hero-community-image';
    heroImage.loading = 'eager';
    heroImage.decoding = 'async';
    heroArt.insertBefore(heroImage, heroArt.firstChild);

    // The approved image already contains the question and progression label,
    // so hide the old HTML overlays to avoid duplication or misalignment.
    heroArt.querySelectorAll('.hero-card, .orb').forEach((el) => {
      el.style.display = 'none';
    });

    heroArt.style.minHeight = '0';
    heroArt.style.aspectRatio = '16 / 9';
    heroArt.style.overflow = 'hidden';
    heroArt.style.borderRadius = '34px';
    heroImage.style.position = 'absolute';
    heroImage.style.inset = '0';
    heroImage.style.width = '100%';
    heroImage.style.height = '100%';
    heroImage.style.objectFit = 'cover';
    heroImage.style.objectPosition = 'center';
  }

  const makePortrait = (src, alt, className, caption = '') => {
    const figure = document.createElement('figure');
    figure.className = `portrait-frame ${className} reveal`;

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    figure.appendChild(img);

    if (caption) {
      const figcaption = document.createElement('figcaption');
      figcaption.textContent = caption;
      figure.appendChild(figcaption);
    }
    return figure;
  };

  // 1. About / Why Flourishing — founder appears only after the idea-led hero.
  const aboutContainer = document.querySelector('#about .container');
  if (aboutContainer && !aboutContainer.querySelector('.portrait-about')) {
    aboutContainer.classList.remove('narrow', 'reveal');
    aboutContainer.classList.add('story-grid');

    const copy = document.createElement('div');
    copy.className = 'story-copy reveal';
    while (aboutContainer.firstChild) copy.appendChild(aboutContainer.firstChild);
    aboutContainer.appendChild(copy);
    aboutContainer.appendChild(
      makePortrait(
        'assets/founder-green.svg',
        'Garcia Ayoola David, founder of The Flourishing Community',
        'portrait-about',
        'Garcia Ayoola David · Founder'
      )
    );
  }

  // 2. Letter — a light portrait sits behind the editorial Letter preview.
  const letterPreview = document.querySelector('#letter .letter-preview');
  if (letterPreview && !letterPreview.querySelector('.portrait-letter')) {
    letterPreview.classList.add('letter-visual');
    const paper = letterPreview.querySelector('.paper');
    const portrait = makePortrait(
      'assets/founder-white.svg',
      'Garcia Ayoola David in a white suit',
      'portrait-letter'
    );
    letterPreview.insertBefore(portrait, paper || null);
  }

  // 3. Forum — portrait + event card work together like an editorial event poster.
  const forumGrid = document.querySelector('#forum .feature-grid');
  const eventCard = forumGrid && forumGrid.querySelector('.event-card');
  if (forumGrid && eventCard && !forumGrid.querySelector('.forum-visual')) {
    const visual = document.createElement('div');
    visual.className = 'forum-visual';
    forumGrid.insertBefore(visual, eventCard);
    visual.appendChild(
      makePortrait(
        'assets/founder-brown.svg',
        'Garcia Ayoola David in a brown suit',
        'portrait-forum'
      )
    );
    visual.appendChild(eventCard);
  }

  // 4. Framework — a more institutional portrait introduces the wider vision.
  const frameworkContainer = document.querySelector('#framework .container');
  const frameworkHeading = frameworkContainer && frameworkContainer.querySelector(':scope > .section-heading');
  if (frameworkContainer && frameworkHeading && !frameworkContainer.querySelector('.framework-intro-grid')) {
    const intro = document.createElement('div');
    intro.className = 'framework-intro-grid';
    frameworkContainer.insertBefore(intro, frameworkHeading);
    intro.appendChild(frameworkHeading);
    intro.appendChild(
      makePortrait(
        'assets/founder-black.svg',
        'Garcia Ayoola David in a black suit',
        'portrait-framework'
      )
    );
  }
})();

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
