const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
// const writeToFile = require('./lib/writeToFile.js');

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

function init() {
    return inquirer
        .prompt(questions)
}
    
init() 
    .then((answers) => {
        console.log(answers);
        writeToFile(answers);
    })
     .catch((err) => {
          err ? console.error(err) : console.log('Success!')
     })