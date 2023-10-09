function validateEmail() {
    const validEmail = document.getElementById('email').value;
    let correctEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$");
    if (!validEmail.match(correctEmail)) {
        const errorMessage = document.getElementById('error');
        errorMessage.innerHTML = "Please enter a valid email address.";
        errorMessage.appendChild(errorMessage);
        return false;
    } else {
        return true;
    }
}