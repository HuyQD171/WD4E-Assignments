const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuButton.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
});

navMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navMenu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Thank you! This demo form shows the contact form extra.';
    contactForm.reset();
});
