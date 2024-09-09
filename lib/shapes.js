// Shape class
class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color;
    }
}

// Circle class 
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}"/>`
    };
};

// Triangle class
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    };
};

// Square class
class Square extends Shape {
    render() {
        return `<rect width="150" height="150" fill="${this.color}" />`
    };
};

module.exports = {Circle, Triangle, Square};