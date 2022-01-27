// NAVBAR SECTION
const nav = document.querySelector('nav > ul');
const burger = document.querySelector('#burger-container');
const closeBtn = document.querySelector('.svgClose');

function toggleMenu() {
  nav.classList.toggle('slide-left');
  closeBtn.classList.toggle('opacity-0');
}

burger.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('nav>ul>li>a');
navLinks.forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('slide-left');
  closeBtn.classList.add('opacity-0');
}));