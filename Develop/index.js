// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description for your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation steps?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are your contributors?',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        name: 'license',
        choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0'],
    },
    {
        type: 'input',
        message: 'What tests can be run on your application and how?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Whis your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) =>
    generateMarkdown(response)
    )
}

// Function call to initialize app
init();
