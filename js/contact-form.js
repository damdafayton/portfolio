const contactForm = document.querySelector('form');

// VALIDATION
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

// LOCAL STRORAGE
function saveToLocalStorage() {
  const formName = contactForm.elements.name.value;
  const formEmail = contactForm.elements.email.value;
  const formText = contactForm.elements.message.value;
  const formData = { formName, formEmail, formText };
  localStorage.setItem('formData', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    contactForm.elements.name.value = formData.formName;
    contactForm.elements.email.value = formData.formEmail;
    contactForm.elements.message.value = formData.formText;
  }
})

Array.from(contactForm.elements).forEach((element) => {
  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    element.addEventListener('input', saveToLocalStorage);
  }
});