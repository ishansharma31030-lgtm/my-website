// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = scrollLink.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Enhanced interactivity
const elements = document.querySelectorAll('.interactive-element');
elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hover-active');
    });
    element.addEventListener('mouseleave', () => {
        element.classList.remove('hover-active');
    });
});