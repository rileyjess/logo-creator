// Import the shape classes
const { Circle, Triangle, Square } = require('./shapes.js');

// If statements to return an svg based on the shape the user inputs
function createShape(answers) {

    if (answers.shape === "Circle") {
        let newShape = new Circle(answers.shapeColor);

        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${newShape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`
    }

    if (answers.shape === "Triangle") {
        let newShape = new Triangle(answers.shapeColor);

        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${newShape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`
    }

    if (answers.shape === "Square") {
        let newShape = new Square(answers.shapeColor);

        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        ${newShape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>`
    }
}

module.exports = createShape;