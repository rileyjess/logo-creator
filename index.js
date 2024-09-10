// Import inquirer and the questions
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');

// Use the file system to write files
const fs = require('fs');

// Import the module to render the svg
const createShape = require('./lib/createShape.js');

// A function to use the data collected to create the SVG file
function writeToFile(answers) {
    const fileName = `./examples/logo.svg`;

    const svg = createShape(answers);

    fs.writeFile(fileName, svg, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg'))
}

// Function to run inquirer so that users are prompted with questions in the console
function init() {
    return inquirer
        .prompt(questions)
}

// Call the function so the questions appear, then pass the responses through the writeToFile function to create a new SVG
init() 
    .then((answers) => {
        console.log(answers);
        writeToFile(answers);
    })
     .catch((err) => {
          err ? console.error(err) : console.log('Success!')
     })