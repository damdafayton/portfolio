const contactForm = document.querySelector('form');

// VALIDATION
const email = contactForm.querySelector('form #email');
const alertBox = contactForm.querySelector('.alert');

function setAlert(alertMessage) {
  const textDiv = alertBox.querySelector('div');
  textDiv.innerText = alertMessage;
  alertBox.classList.remove('d-none');
}

contactForm.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    setAlert('Use only lower case letters in your email address.');
  }
  Array.from(contactForm.elements).forEach((element) => {
    if (element.value.includes('test')) {
      e.preventDefault();
      setAlert('Please don\'t spam me. ;)');
    }
  });
  if (contactForm.message.value.length < 10) {
    e.preventDefault();
    setAlert('Com\'on you can spam better!');
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
});

Array.from(contactForm.elements).forEach((element) => {
  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    element.addEventListener('input', saveToLocalStorage);
  }
});