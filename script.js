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

  /* ---- Offer cards: (i) flips to the back face, "Retour" flips back ---- */
  document.querySelectorAll('.offer').forEach(function (offer) {
    var front = offer.querySelector('.offer-front');
    var back = offer.querySelector('.offer-back');
    var openBtn = front.querySelector('.offer-flip');
    var closeBtn = back.querySelector('.offer-flip');

    function show(flipped) {
      offer.classList.toggle('is-flipped', flipped);
      front.inert = flipped;
      back.inert = !flipped;
      openBtn.setAttribute('aria-expanded', String(flipped));
      (flipped ? closeBtn : openBtn).focus();
    }

    openBtn.hidden = false;
    closeBtn.hidden = false;
    offer.classList.add('is-ready');
    back.inert = true;
    openBtn.addEventListener('click', function () { show(true); });
    closeBtn.addEventListener('click', function () { show(false); });
  });

})();
