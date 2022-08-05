// packages needed
const inquirer = require('inquirer')
const fs = require('fs')
const generatePage = require('./utils/generatePage')
const { nextTick } = require('process')

// variables as objects to pass into inquirer
const name =
{
    type: 'input',
    name: 'name',
    message: "What's the person's name?",
}

const ID =
{
    type: 'input',
    name: 'id',
    message: "What's the person's ID?",
}

const email =
{
    type: 'input',
    name: 'email',
    message: "What is the person's email address?",
}

const nextAction = 
{
    type: 'list',
    name: 'addOrFinish',
    message: 'What would you like to do next?',
    choices: [
        'Add an engineer',
        'Add an intern',
        'Finish building the team'
    ]
}

// create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your team manager?',
    },

    ID,
    email,

    {
        type: 'input',
        name: 'officeNum',
        message: "What is the manager's office number?",
    },

    nextAction
]

// function to start inquirer
function getAnswers() {
    return inquirer.prompt(questions).then(answer => {
        switch(answer.addOrFinish) {

            // checks what choice was selected
            case 'Add an engineer':
                inquirer.prompt([
                    name,
                    ID,
                    email,
                    {
                        type: 'input',
                        name: 'github',
                        message: "What's the engineer's github username?",
                    },
                    nextAction
                ])
                break

            case 'Add an intern':
                inquirer.prompt([
                    name,
                    ID,
                    email,
                
                    {
                        type: 'input',
                        name: 'school',
                        message: "What's the intern's school?",
                    },
                
                    nextAction
                ])
                break
            case 'Finish building the team':
                    console.log("File created!")
        }
    })
}
getAnswers()