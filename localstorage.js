document.addEventListener('DOMContentLoaded', (event) => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
    contactForm.elements.name.value = formData.formName;
    contactForm.elements.email.value = formData.formEmail;
    contactForm.elements.message.value = formData.formText;
  }
});

Array.from(contactForm.elements).forEach((element) => {
  if (element.tagName == 'INPUT' || element.tagName == 'textarea') {
    element.addEventListener('input', saveToLocalStorage);
  }
});

function saveToLocalStorage() {
  const formName = contactForm.elements.name.value;
  const formEmail = contactForm.elements.email.value;
  const formText = contactForm.elements.message.value;
  const formData = { formName, formEmail, formText };
  localStorage.setItem('formData', JSON.stringify(formData));
}