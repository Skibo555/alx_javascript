function generateInputFields(numFields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // To clear the existing fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement('input');
        inputField.type = "number";
        inputField.name = "field" + i;
        inputContainer.appendChild(inputField);
    }
}
// Add event listener for dropdown change
document.getElementById("numFields").addEventListener("change", function () {
    const selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
});
// The function to validate the form before submission.
function validateForm(event) {
    const inputFields = document.querySelectorAll("#inputContainer input");
    let isValid = true;

    // Check if any input field is empty
    for (const inputField of inputFields) {
        if (inputField.value.trim() === "") {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
        document.getElementById("error").textContent = "Please fill in all fields.";
    }
}

// Attach form submission event listener
document.getElementById("dynamicForm").addEventListener("submit", validateForm);