document.addEventListener('DOMContentLoaded', function () {
  tarteaucitron.init({
    "privacyUrl": "",
    "bodyPosition": "top",
    "hashtag": "#tarteaucitron",
    "cookieName": "tarteaucitron",
    "orientation": "banner",
    "groupServices": true,
    "showDetailsOnClick": true,
    "serviceDefaultState": "wait",
    "closePopup": true,
    "showIcon": true,
    "iconPosition": "BottomRight",
    "DenyAllCta": true,
    "AcceptAllCta": true,
    "highPrivacy": true,
    "mandatory": true,
    "googleConsentMode": true
  });

  // Google Analytics 4
  tarteaucitron.user.gtagUa = 'G-DQMRX1LCMG';
  (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
});
