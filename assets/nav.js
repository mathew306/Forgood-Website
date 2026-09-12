document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (menu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // close the menu whenever a link inside it is chosen
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // close on escape key for keyboard users
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // close if the viewport is resized back up to desktop width
  window.addEventListener('resize', function () {
    if (window.innerWidth > 920) closeMenu();
  });
});
