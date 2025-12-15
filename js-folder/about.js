// Toggle hamburger / close icon
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');

navbarCollapse.addEventListener('shown.bs.collapse', () => {
  navbarToggler.setAttribute('aria-expanded', 'true');
});

navbarCollapse.addEventListener('hidden.bs.collapse', () => {
  navbarToggler.setAttribute('aria-expanded', 'false');
});



// COUNTERS
function animateCounters() {
  const counters = document.querySelectorAll(".counter-number");
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

// OBSERVER
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const statsSection = document.querySelector(".stats-counter-section");
if (statsSection) observer.observe(statsSection);

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: "smooth"
        });
      }
    }
  });
});

// PARALLAX FLOATING ELEMENTS
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const floatingScale = document.querySelector(".floating-scale i");
  const floatingStats = document.querySelectorAll(".floating-stat");

  if (floatingScale) {
    floatingScale.style.transform = `translateY(-50%) rotate(${scrolled * 0.1}deg)`;
  }

  floatingStats.forEach(stat => {
    stat.style.transform = `translateY(${scrolled * 0.05}px) rotate(${scrolled * 0.02}deg)`;
  });
});
