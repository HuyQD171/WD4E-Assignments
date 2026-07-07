const menuButton = document.querySelector('.menu-button');
const mainMenu = document.querySelector('#main-menu');
const contactForm = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#status-message');

menuButton.addEventListener('click', () => {
    const open = mainMenu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
});

mainMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        mainMenu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    statusMessage.textContent = 'Thank you! This confirms the contact form extra is working.';
    contactForm.reset();
});
