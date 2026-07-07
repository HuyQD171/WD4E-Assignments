const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
const form = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

navToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
});

menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        menu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Thank you. This demo confirms that the contact form extra works.';
    form.reset();
});
