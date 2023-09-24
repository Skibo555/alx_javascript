#!/usr/bin/node

/* A function that changes mode in JS
 */

function changeMode(size, weight, transform, background, colour) {
    return function () {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = colour;
    };
    function main() {
        const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
        const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
        const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black')

        const para = document.createElement('p');
        para.textContent = 'Welcome Holberton';
        document.body.appendChild(para);

        const spookyButton = domument.createElement('button')
        spookyButton.textContent = 'Spooky';
        spookyButton.addEventListener('click', spooky);
        document.body.appendChild(spookyButton);

        const darkModeButton = domument.createElement('button')
        darkModeButton.textContent = 'Dark Mode';
        darkModeButton.addEventListener('click', darkMode);
        document.body.appendChild(darkModeButton);

        const screamModeButton = document.createElement('button');
        screamModeButton.textContent = 'Scream mode';
        screamModeButton.addEventListener('click', screamMode);
        document.body.appendChild(screamModeButton);
    }
}
main();