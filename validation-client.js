const contactForm = document.querySelector('form');
const email = contactForm.querySelector('form #email');
const alertBox = contactForm.querySelector('.alert');

contactForm.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    const alertText = 'Please use only lower case letters in your email address';
    const textDiv = alertBox.querySelector('div');
    textDiv.innerText = alertText;
    alertBox.classList.remove('d-none');
  }
});

// Close button handlers for whole document
const closeButtons = document.querySelectorAll('.btn-close');
closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.parentElement.classList.add('d-none');
  });
});