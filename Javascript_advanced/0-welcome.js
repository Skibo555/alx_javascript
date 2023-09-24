#!/usr/bin/node

/* A function that welcomes a visitor,
either a longterm one or a new one.
*/
function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    displayFullName()
}