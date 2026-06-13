// Language preference persistence.
// Stores the user's chosen language in localStorage when the language
// switcher is clicked, and rewrites navigation links on subsequent
// pages so the chosen language is preserved across navigation.
(function () {
  const STORAGE_KEY = 'site-lang';

  function applyPreference() {
    const pref = localStorage.getItem(STORAGE_KEY);
    if (pref !== 'ko' && pref !== 'en') return;
    const attr = pref === 'ko' ? 'data-href-ko' : 'data-href-en';
    document.querySelectorAll('a[' + attr + ']').forEach(function (a) {
      const v = a.getAttribute(attr);
      if (v) a.setAttribute('href', v);
    });
  }

  function bindSwitcher() {
    document.querySelectorAll('a.lang-switch-link').forEach(function (a) {
      a.addEventListener('click', function () {
        const target = a.getAttribute('data-target-lang');
        if (target === 'ko' || target === 'en') {
          localStorage.setItem(STORAGE_KEY, target);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyPreference();
      bindSwitcher();
    });
  } else {
    applyPreference();
    bindSwitcher();
  }
})();
