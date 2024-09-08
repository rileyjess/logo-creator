// Shape class
class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
}

// Circle class 
class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    };
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
    };
};

// Triangle class
class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    };
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    };
};

// Square class
class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    };
    render() {
        return `<rect width="150" height="150" fill="${this.shapeColor}" />`
    };
};