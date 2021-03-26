// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the name of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description about your project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description about your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add any usage information'
    },
    {
        type: 'confirm',
        name: 'contributionsConfirm',
        message: 'Any Contributions?',
        default: true
    },
    {
        type: 'input', 
        name: 'contributions',
        message: 'Please enter any contributions.',
        when ({contributionsConfirm}) {
            if (contributionsConfirm) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to include any tests?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add your tests and examples on running them.',
        when ({confirmTests}) {
            if (confirmTests) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to apply to your project?',
        choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0', 'ISC Licsnse', 'No License']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address for any questions about your project',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileData) {
    
    return new Promise((resolve, reject) => {
        fs.writeFile('README.md', fileData, (err) => {
            if (err) {
                reject(err)
                return;
            };
            
            resolve({
                ok: true,
                message: 'README created'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(projectInfo => {
        return generateMarkdown(projectInfo) 
    })
    .then(pageData => {
        return writeToFile(pageData);
    })
    .then(response => {
        console.log(response);
    })    
    .catch(error => {
        console.log(error);
    });