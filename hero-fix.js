// Final hero image override: use the verified full JPEG directly.
(function () {
  function applyHeroImage() {
    const media = document.querySelector('.editorial-hero-media');
    const oldImg = media && media.querySelector('img');
    if (!media || !oldImg) return false;

    // Replace the image node so any earlier async loader still holding the old node
    // cannot overwrite the verified hero image later.
    const img = oldImg.cloneNode(false);
    img.alt = '';
    img.loading = 'eager';
    img.decoding = 'async';
    img.fetchPriority = 'high';
    img.onload = function () { media.classList.add('loaded'); };
    img.onerror = function () { console.error('Final community hero image failed to load.'); };
    img.src = 'assets/community-hero-final.jpg?v=12';
    oldImg.replaceWith(img);
    return true;
  }

  if (!applyHeroImage()) {
    const observer = new MutationObserver(function () {
      if (applyHeroImage()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
