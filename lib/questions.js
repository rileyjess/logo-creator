const inquirer = require('inquirer');

const questions = [
    // Enter text for logo, up to three characters
    {
        name: 'text',
        message: 'What text would you like to include in the logo? (Cannot include more than 3 characters.)',
        type: 'input',
        validate: (response) => {
            if(response.length > 3) {
                return console.log("Text cannot exceed 3 characters. Please try again.")
            }
        }
    },
    
    // Enter a text color - keyword or hexidecimal
    {
        name: 'textColor',
        message: 'Please enter a color for the logo text. (e.g. green or #228C22)',
        type: 'input',
    },
    
    // Choose a shape - circle, triangle, or square
    {
        name: 'shape',
        message: 'What shape would you like the logo to be?',
        type: 'list',
        options: ['circle', 'triangle', 'square'],

    },
    
    // Enter a shape color - keyword or hexidecimal
    {
        name: 'shapeColor',
        message: 'Please enter a color for the shape. (e.g. green or #228C22)',
        type: 'input',
    },
]

module.exports = CLI;