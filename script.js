document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const header = document.querySelector('header');

    // Mobile menu toggle
    toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Change header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
