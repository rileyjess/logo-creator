// Use the file system to write files
const fs = require('fs');

// Import the shape classes
const { Circle, Triangle, Square } = require('./shapes.js');


// A function to use the data collected to create the SVG file
function writeToFile(answers) {
    const fileName = `./examples/logo.svg`;

    // If statements to return an svg based on the shape the user inputs
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

    fs.writeFile(fileName, newShape, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'))
}

module.exports = writeToFile;