let passwordStrenght = document.getElementById('password').value;

function validatePassword() {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const validPassword = re.test(passwordStrenght);
    if (!validPassword) {
        let errorMessage = document.getElementById('error');
        let errorPara = document.createElement('p');
        errorPara.innerHTML = 'Please, enter a valid password.'
        errorMessage.appendChild(errorPara);
        return false;
    } else {
        return true;
    }
}