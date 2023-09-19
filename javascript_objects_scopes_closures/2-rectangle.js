class Rectangle {
    constructor(w, h) {
        // an empty constructor in js
        if (w >= 0 && h >= 0) {
            this.width = w;
            this.height = h;
        }
    }
}
const obj = new Rectangle();

module.exports = Rectangle;