#!/usr/bin/node
const Rectangle = require('./4-rectangle');

class Square extends Rectangle {

    constructor(size) {
        super(size, size);
    }
    charPrint(c) {
        if (c) {
            for (let i = 1; i <= this.height; i++) {
                const rect_c = c.repeat(this.width);
                console.log(rect_c);
            }
        } else {
            for (let i = 1; i <= this.height; i++) {
                const rect_X = 'X'.repeat(this.width);
                console.log(rect_X);
            }
        }
    }
}

module.exports = Square;
