// Toggle hamburger / close icon
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

navbarCollapse.addEventListener('shown.bs.collapse', () => {
  navbarToggler.setAttribute('aria-expanded', 'true');
});

navbarCollapse.addEventListener('hidden.bs.collapse', () => {
  navbarToggler.setAttribute('aria-expanded', 'false');
});
