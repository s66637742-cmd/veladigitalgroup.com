// ─── BURGER MENU ───
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('menuOverlay');

if (burger) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
  });
}

// ─── REQUEST MODAL ───
function openModal() {
  document.getElementById('requestModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('requestModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
document.getElementById('requestModal')?.addEventListener('click', e => {
  if (e.target === document.getElementById('requestModal')) closeModal();
});

// Submit form
document.getElementById('requestForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = 'Sending...';
  setTimeout(() => {
    btn.textContent = '✓ Request sent!';
    btn.style.background = 'linear-gradient(135deg, #00c853, #00e676)';
    setTimeout(closeModal, 1500);
    btn.textContent = 'Send Request';
    btn.style.background = '';
  }, 1200);
});

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // stagger children
      const children = e.target.querySelectorAll('.fade-up');
      children.forEach((c, i) => {
        c.style.transitionDelay = `${i * 80}ms`;
        c.classList.add('visible');
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
document.querySelectorAll('section').forEach(el => observer.observe(el));
