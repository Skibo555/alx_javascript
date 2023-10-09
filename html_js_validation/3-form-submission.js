const form = document.querySelector('#submit');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    handleFormSubmit();
});

const isRequired = value => value === '' ? false : true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

function handleFormSubmit() {
    const nameField = document.querySelector('#name').value.trim();
    const emailField = document.querySelector('#email').value.trim();

    if (!isRequired(nameField) || !isRequired(emailField)) {
        console.log('Please fill in all required fields');
    } else if (!isEmailValid(emailField)) {
        console.log('Please enter a valid email address');
    } else {
        console.log('Form submitted successfully!');
    }
};