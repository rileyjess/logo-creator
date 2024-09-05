// Questions to collect user inputs about the features of the logo that will be created

const questions = [
    // Enter text for logo, up to three characters
    {
        name: 'text',
        message: 'What text would you like to include in the logo? (Cannot include more than 3 characters.)',
        type: 'input',
        validate: (text) => {
            if (text.length > 3) {
                return "Text cannot exceed 3 characters. Please try again.";
            }
            return true;
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
        choices: ['Circle', 'Triangle', 'Square'],
    },

    // Enter a shape color - keyword or hexidecimal
    {
        name: 'shapeColor',
        message: 'Please enter a color for the shape. (e.g. green or #228C22)',
        type: 'input',
    },
];

module.exports = questions;