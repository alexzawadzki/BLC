(function () {
  var btn  = document.querySelector('.w-nav-button');
  var menu = document.querySelector('.w-nav-menu');
  if (!btn || !menu) return;

  function open() {
    menu.setAttribute('data-nav-menu-open', '');
    btn.classList.add('w--open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function close() {
    menu.removeAttribute('data-nav-menu-open');
    btn.classList.remove('w--open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function () {
    btn.classList.contains('w--open') ? close() : open();
  });

  menu.querySelectorAll('.w-nav-link').forEach(function (link) {
    link.addEventListener('click', close);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 991) close();
  });
})();
