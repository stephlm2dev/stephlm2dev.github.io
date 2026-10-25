/* KOVELEO - comportements restants du site (menu, en-tête, lien actif: brand/behaviours.js). */

(function () {
  'use strict';

  /* ---- FAQ exclusive accordion (close others on open) ---- */
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });

  /* ---- Ticker pause/play toggle ---- */
  var tickerWrapper = document.querySelector('.ticker-wrapper');
  var tickerPauseBtn = document.getElementById('ticker-pause');

  if (tickerPauseBtn && tickerWrapper) {
    var tickerLabel = tickerPauseBtn.querySelector('.ticker-pause-label');

    tickerPauseBtn.addEventListener('click', function () {
      var isPaused = tickerWrapper.classList.toggle('ticker-paused');
      tickerPauseBtn.classList.toggle('is-paused', isPaused);
      tickerPauseBtn.setAttribute('aria-pressed', String(isPaused));
      if (tickerLabel) tickerLabel.textContent = isPaused ? 'Reprendre' : 'Pause';
    });
  }

})();
