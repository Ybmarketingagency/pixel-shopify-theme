/* Pixel — slider scroll controls and small helpers.
 * Alpine.js handles most reactivity; this file binds the snap-scroll
 * sliders that we couldn't easily do with declarative attributes alone.
 */
(function () {
  function initSliders() {
    document.querySelectorAll('[data-slider]').forEach(slider => {
      const track = slider.querySelector('[data-slider-track]');
      if (!track) return;
      const prevBtns = slider.querySelectorAll('[data-slider-prev]');
      const nextBtns = slider.querySelectorAll('[data-slider-next]');

      const step = () => {
        const card = track.querySelector('div[class*="snap-start"]');
        const cardWidth = card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
        return cardWidth * 2;
      };

      const updateButtons = () => {
        const atStart = track.scrollLeft <= 4;
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
        prevBtns.forEach(b => b.classList.toggle('opacity-40', atStart));
        nextBtns.forEach(b => b.classList.toggle('opacity-40', atEnd));
      };

      prevBtns.forEach(b => b.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' })));
      nextBtns.forEach(b => b.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' })));

      track.addEventListener('scroll', updateButtons, { passive: true });
      window.addEventListener('resize', updateButtons);
      updateButtons();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSliders);
  } else {
    initSliders();
  }
})();
