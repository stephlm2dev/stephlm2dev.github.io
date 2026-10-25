// Comportements web des composants à état (colonne "Web" de COMPONENTS.md), repris du script du site.
// Script classique, sans dépendance. Sans effet sur les supports à cadre fixe (data-medium): ils montrent l'état imprimé.
(function () {
  'use strict'
  if (document.documentElement.hasAttribute('data-medium')) return

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn)
    else fn()
  }

  // Menu mobile: ouverture, fermeture, piège de focus, Échap, défilement du corps bloqué
  function mobileNav() {
    var hamburger = document.querySelector('.hamburger')
    var nav = document.querySelector('.mobile-nav')
    if (!hamburger || !nav) return
    var close = nav.querySelector('.mobile-nav-close')
    function focusable() { return Array.prototype.slice.call(nav.querySelectorAll('button, a, [tabindex="0"]')) }
    function trap(e) {
      if (e.key !== 'Tab') return
      var items = focusable()
      var first = items[0]
      var last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    var rest = function () { return document.querySelectorAll('.site-header, main, .site-footer') }
    function open() {
      rest().forEach(function (el) { el.inert = true })
      nav.classList.add('is-open'); nav.removeAttribute('inert')
      hamburger.classList.add('is-open'); hamburger.setAttribute('aria-expanded', 'true')
      document.body.style.overflow = 'hidden'
      if (close) close.focus()
      document.addEventListener('keydown', trap)
    }
    function shut() {
      rest().forEach(function (el) { el.inert = false })
      nav.classList.remove('is-open'); nav.setAttribute('inert', '')
      hamburger.classList.remove('is-open'); hamburger.setAttribute('aria-expanded', 'false')
      document.body.style.overflow = ''
      hamburger.focus()
      document.removeEventListener('keydown', trap)
    }
    hamburger.addEventListener('click', open)
    if (close) close.addEventListener('click', shut)
    nav.querySelectorAll('.mobile-nav-link, .mobile-nav-cta').forEach(function (l) { l.addEventListener('click', shut) })
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) shut() })
    // Si l'écran passe en mode bureau pendant que le menu est ouvert, on le referme
    window.matchMedia('(min-width: 768px)').addEventListener('change', function (e) { if (e.matches && nav.classList.contains('is-open')) shut() })
  }

  // En-tête collant: change de fond une fois la couverture passée ([data-scroll-sentinel] ou .hero)
  function stickyHeader() {
    var header = document.querySelector('.site-header')
    if (!header) return
    var sentinel = document.querySelector('[data-scroll-sentinel]') || document.querySelector('.hero')
    function onScroll() {
      var bottom = sentinel ? sentinel.getBoundingClientRect().bottom : 0
      header.classList.toggle('nav--scrolled', bottom < 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  }

  // Lien actif: la section visible au centre de l'écran allume son lien
  function activeLinks() {
    var links = document.querySelectorAll('.nav-link[href^="#"]')
    if (!links.length || !('IntersectionObserver' in window)) return
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return
        links.forEach(function (link) { link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id) })
      })
    }, { rootMargin: '-40% 0px -55% 0px' })
    links.forEach(function (link) {
      var target = document.getElementById(link.getAttribute('href').slice(1))
      if (target) observer.observe(target)
    })
  }

  // Liste de questions: une seule question ouverte à la fois, dans une même .faq
  function faqExclusive() {
    document.querySelectorAll('.faq').forEach(function (list) {
      var items = list.querySelectorAll('.faq-item')
      items.forEach(function (item) {
        item.addEventListener('toggle', function () {
          if (!item.open) return
          items.forEach(function (other) { if (other !== item) other.open = false })
        })
      })
    })
  }

  // Défilement de citations: bouton pause / reprise
  function tickerPause() {
    var ticker = document.querySelector('.ticker')
    var button = document.querySelector('.ticker-pause')
    if (!ticker || !button) return
    var label = button.querySelector('.ticker-pause-label')
    button.addEventListener('click', function () {
      var paused = ticker.classList.toggle('is-paused')
      button.classList.toggle('is-paused', paused)
      if (label) label.textContent = paused ? 'Reprendre' : 'Pause'
    })
  }

  // Carte retournable: (i) montre le verso, "Retour" revient au recto; la face cachée est inerte
  function flipCards() {
    document.querySelectorAll('.card.flip').forEach(function (card) {
      var front = card.querySelector('.flip-front')
      var back = card.querySelector('.flip-back')
      var openBtn = front && front.querySelector('.flip-open')
      var closeBtn = back && back.querySelector('.flip-close')
      if (!front || !back || !openBtn || !closeBtn) return
      function show(flipped) {
        card.classList.toggle('is-flipped', flipped)
        front.inert = flipped
        back.inert = !flipped
        openBtn.setAttribute('aria-expanded', String(flipped))
        ;(flipped ? closeBtn : openBtn).focus()
      }
      openBtn.hidden = false
      closeBtn.hidden = false
      card.classList.add('is-ready')
      back.inert = true
      openBtn.addEventListener('click', function () { show(true) })
      closeBtn.addEventListener('click', function () { show(false) })
    })
  }

  // Infobulle: Échap la ferme sans quitter l'élément; elle revient au prochain survol ou focus
  function tooltips() {
    var terms = document.querySelectorAll('.term')
    terms.forEach(function (term) {
      ;['mouseenter', 'focus'].forEach(function (type) { term.addEventListener(type, function () { term.classList.remove('is-dismissed') }) })
    })
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') terms.forEach(function (term) { term.classList.add('is-dismissed') })
    })
  }

  ready(function () { mobileNav(); stickyHeader(); activeLinks(); faqExclusive(); tickerPause(); flipCards(); tooltips() })
})()
