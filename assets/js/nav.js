(function () {
  var btn = document.querySelector('.w-nav-button');
  if (!btn) return;

  /* ── Build overlay ────────────────────────────────────── */
  var overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Navigation menu');

  /* Header */
  var header = document.createElement('div');
  header.className = 'mobile-nav-header';

  var logoLink = document.createElement('a');
  logoLink.href = 'index.html';
  logoLink.className = 'mobile-nav-logo';

  var logoImg = document.createElement('img');
  logoImg.src = 'assets/images/6413d466976598272d9b6f7b_Lions_Clubs_International_logo.svg.png';
  logoImg.alt = 'Berlin Lions Club';
  logoImg.width = 48;

  var logoName = document.createElement('span');
  logoName.className = 'mobile-nav-logo-name';
  logoName.textContent = 'Berlin Lions Club';

  logoLink.appendChild(logoImg);
  logoLink.appendChild(logoName);

  var closeBtn = document.createElement('button');
  closeBtn.className = 'mobile-nav-close';
  closeBtn.setAttribute('aria-label', 'Close menu');
  closeBtn.innerHTML = '&#x2715;';

  header.appendChild(logoLink);
  header.appendChild(closeBtn);
  overlay.appendChild(header);

  /* Nav links */
  var navLinks = document.createElement('nav');
  navLinks.className = 'mobile-nav-links';

  var pages = [
    { href: 'index.html',              label: 'Home'        },
    { href: 'https://ctberlinfair.com/', label: 'Berlin Fair' },
    { href: 'charity.html',            label: 'Charity'     },
    { href: 'support.html',            label: 'Support Us'  },
    { href: 'about.html',              label: 'About Us'    },
  ];

  /* Detect current page */
  var currentFile = window.location.pathname.split('/').pop();
  if (!currentFile) currentFile = 'index.html';

  pages.forEach(function (page) {
    var a = document.createElement('a');
    a.href = page.href;
    a.className = 'mobile-nav-link';
    a.textContent = page.label;
    if (page.href === currentFile) {
      a.classList.add('is-current');
    }
    a.addEventListener('click', close);
    navLinks.appendChild(a);
  });

  overlay.appendChild(navLinks);
  document.body.appendChild(overlay);

  /* ── Open / close ─────────────────────────────────────── */
  function open() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
  }

  function close() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    overlay.classList.contains('is-open') ? close() : open();
  });

  closeBtn.addEventListener('click', close);

  window.addEventListener('resize', function () {
    if (window.innerWidth > 991) close();
  });
})();
