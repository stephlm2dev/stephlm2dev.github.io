/* KOVELEO — Vanilla JS interactions */

(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');

  /* ---- Mobile nav ---- */
  function getFocusable() {
    return Array.from(mobileNav.querySelectorAll('button, a, [tabindex="0"]'));
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    var focusable = getFocusable();
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function openNav() {
    mobileNav.classList.add('is-open');
    mobileNav.removeAttribute('inert');
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    mobileNavClose.focus();
    document.addEventListener('keydown', trapFocus);
  }

  function closeNav() {
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('inert', '');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
    document.removeEventListener('keydown', trapFocus);
  }

  if (hamburger) hamburger.addEventListener('click', openNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeNav);

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* Close nav on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('is-open')) {
      closeNav();
    }
  });

  /* ---- Sticky nav scroll class ---- */
  var heroSection = document.getElementById('hero');

  function onScroll() {
    if (!header) return;
    var heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 0;
    if (heroBottom < 0) {
      header.classList.add('nav--scrolled');
    } else {
      header.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Active nav link on scroll ---- */
  var navLinks = document.querySelectorAll('.nav-link');
  var sectionIds = ['constat', 'approche', 'offres', 'resultats'];

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sectionIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });

  /* ---- Scroll reveal ---- */
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    var revealTargets = document.querySelectorAll(
      '.card, .offre-card, .metric, .verbatim, .pillar, .faq-item, .transformation-card'
    );

    revealTargets.forEach(function (el) {
      el.classList.add('reveal');
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

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
