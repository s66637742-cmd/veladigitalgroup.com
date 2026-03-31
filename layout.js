// ─── DETECT BASE PATH ───
(function () {
  const path = window.location.pathname;
  const segments = path.replace(/\/index\.html$/, '').split('/').filter(Boolean);
  // On GitHub pages the repo name is the first segment, skip it
  // We determine depth by checking if this page is in a subfolder
  // We use the script tag src to determine base
  const scripts = document.querySelectorAll('script[src]');
  let base = './';
  for (const s of scripts) {
    if (s.src.includes('layout.js')) {
      const src = s.getAttribute('src');
      if (src.startsWith('../')) {
        base = src.replace('layout.js', '');
      }
      break;
    }
  }

  function r(href) {
    return base + href;
  }

  const headerHTML = `
<header>
  <a href="${r('index.html')}" class="logo">
    <div class="logo-mark">V</div>
    VELA DIGITAL LTD
  </a>
  <div class="header-right">
    <button class="btn-cta" onclick="openModal()">Leave a Request</button>
    <span class="nav-label">Sections</span>
    <div class="burger" id="burger">
      <span></span><span></span><span></span>
    </div>
  </div>
</header>
<div class="mobile-menu-overlay" id="menuOverlay"></div>
<div class="mobile-menu" id="mobileMenu">
  <nav>
    <a href="${r('index.html')}">Home</a>
    <a href="${r('ios/index.html')}">iOS Development</a>
    <a href="${r('android/index.html')}">Android Development</a>
    <a href="${r('plan/index.html')}">Development Plan</a>
    <a href="${r('promotion/index.html')}">App Promotion</a>
    <a href="${r('about/index.html')}">About Us</a>
    <a href="${r('contact/index.html')}">Contacts</a>
    <a href="${r('policy/index.html')}">Privacy Policy</a>
  </nav>
</div>`;

  const modalHTML = `
<div class="modal-backdrop" id="requestModal">
  <div class="modal">
    <button class="modal-close" onclick="closeModal()">✕</button>
    <h2>Leave a Request</h2>
    <form id="requestForm">
      <div class="form-group"><input type="text" placeholder="Name" required></div>
      <div class="form-group"><input type="text" placeholder="Company"></div>
      <div class="form-group"><input type="email" placeholder="Email" required></div>
      <div class="form-group"><textarea placeholder="Comment"></textarea></div>
      <button type="submit" class="btn-submit">Send Request</button>
      <p class="form-legal">
        By clicking "Send Request", you agree to the processing of personal data
        in accordance with the <a href="${r('policy/index.html')}">privacy policy</a>.
      </p>
    </form>
  </div>
</div>`;

  const footerHTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-col">
      <h4>Offers</h4>
      <a href="${r('ios/index.html')}">iOS Development</a>
      <a href="${r('android/index.html')}">Android Development</a>
      <a href="${r('plan/index.html')}">Development Plan</a>
      <a href="${r('promotion/index.html')}">App Promotion</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="${r('index.html')}">Home</a>
      <a href="${r('about/index.html')}">About Us</a>
      <a href="${r('contact/index.html')}">Contacts</a>
      <a href="${r('policy/index.html')}">Privacy Policy</a>
    </div>
    <div class="footer-col">
      <h4>Legal</h4>
      <div class="footer-legal">
        <p>VELA DIGITAL LTD</p>
        <p>69 Loose Road<br>MAIDSTONE<br>ME15 7BY<br>United Kingdom</p>
        <p>Company number: 16943334</p>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>VELA DIGITAL LTD</span>
    <span>© 2026 VELA DIGITAL LTD — All rights reserved.</span>
  </div>
</footer>`;

  document.body.insertAdjacentHTML('afterbegin', headerHTML + modalHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
