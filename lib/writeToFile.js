const fs = require('fs');

// A function to use the data collected to create the SVG file
function writeToFile() {
    const fileName = `./examples/${answers.text}.svg`;

    fs.writeFile(fileName, svg, (err) =>
        err ? console.log(err) : console.log('Your logo has been created!'))
}