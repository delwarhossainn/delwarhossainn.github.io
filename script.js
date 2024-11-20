document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero-section');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(heroSection);
});
