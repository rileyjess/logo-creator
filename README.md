# SVG Logo Creator

[![Static Badge](https://img.shields.io/badge/License-MIT-lightblue)](https://choosealicense.com/licenses/mit/)

## Description
An application that can generate an SVG logo based on user input for the logo's shape (circle, triangle or square), text (3 characters or less), and color (keyword or hexidecimal code). This application uses Node.js and the inquirer and jest npm packages. 

## Table of Contents
* [Walkthrough Video](#walkthrough-video)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)

## Walkthrough Video


## Installation
Packages used:
* Jest
* Inquirer

To install necessary dependencies, run the following command:
~~~
npm i
~~~
  
## Usage
To use the application, enter "node index.js" in the terminal. Provide answers to list of questions pertaining to the color, text, and shape of the logo. Once all the questions are answered, the message "Generated logo.svg" will appear in the console. The new file will be located in the examples folder. 
  
## License
This project is licensed under the MIT license.
  
## Tests
To run tests, run the following command:
~~~
npm test
~~~