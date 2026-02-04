document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

// Adicionado código removido do CSS
const logo = document.querySelector('.logo-watermark');
const footer = document.querySelector('footer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      logo.style.filter = 'brightness(0) invert(1)';
    } else {
      logo.style.filter = 'none';
    }
  });
}, { threshold: 0.1 });

observer.observe(footer);
