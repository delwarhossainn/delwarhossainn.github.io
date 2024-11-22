document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.animated-header, .animated-section, .animated-footer');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 1.5s forwards';
      }
    });
  }, { threshold: 0.2 });

  sections.forEach((section) => observer.observe(section));
});
