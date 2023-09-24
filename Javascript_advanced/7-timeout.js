#!/usr/bin/node

// A script for timeout.

function printing() {
    return console.log("Start of the execution queue");
}
printing();

for (let i = 1; i <= 100; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);

    setTimeout(function () {
        if (i === 100) {
            console.log("End of the loop printing");
            console.log("Final code block to be executed");
        }
    }, 0);

}
