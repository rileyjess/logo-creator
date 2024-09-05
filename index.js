const inquirer = require('inquirer');
const questions = require('./lib/questions.js');

function init() {
    return inquirer
        .prompt(questions)
}
    
init() 
//     .then((answers) => {
//     })
//      .catch((err) => {
//           err ? console.error(err) : console.log('Success!')
//      })