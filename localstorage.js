document.addEventListener('DOMContentLoaded', (event) => {
    const formData = JSON.parse(localStorage.getItem('formData'))
    if (formData) {
        contactForm.elements.name.value = formData.formName
        contactForm.elements.email.value = formData.formEmail
        contactForm.elements.message.value = formData.formText
    }
});

Array.from(contactForm.elements).forEach(element => {
    if (element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') {
        element.addEventListener('input', saveToLocalStorage)
    }
})

function saveToLocalStorage() {
    let formName = contactForm.elements.name.value
    let formEmail = contactForm.elements.email.value
    let formText = contactForm.elements.message.value
    let formData = { formName, formEmail, formText }
    localStorage.setItem('formData', JSON.stringify(formData))
}