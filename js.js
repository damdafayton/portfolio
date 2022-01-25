const burger = document.querySelector('#burger-container');
const nav = document.querySelector('nav > ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('slide-left');
});

const close = document.querySelector('#svgClose');
close.addEventListener('click', () => {
    nav.classList.toggle('slide-left');
});

const navLinks = document.querySelectorAll('nav>ul>li>a');
navLinks.forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('slide-left');
}));