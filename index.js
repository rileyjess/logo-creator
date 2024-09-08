const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const writeToFile = require('./lib/writeToFile.js');

function init() {
    return inquirer
        .prompt(questions)
}
    
init() 
    .then((answers) => {
        writeToFile(answers);
    })
     .catch((err) => {
          err ? console.error(err) : console.log('Success!')
     })