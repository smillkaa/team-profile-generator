// packages needed
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const inquirer = require('inquirer')
const fs = require('fs')
const generatePage = require('./utils/generatePage')

let teamArray = []

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
        name: 'managerName',
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


function initialQuestion() {
    return inquirer.prompt(questions).then(res => {
        const manager = new Manager(res.managerName, res.id, res.email, res.officeNum)
        teamArray.push(manager)
        getAnswers(res)
    })
}

// function to start inquirer
function getAnswers(answer) {
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
                ]).then(res => {
                    const engineer = new Engineer(res.name, res.id, res.email, res.github)
                    teamArray.push(engineer)
                    getAnswers()

                })
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
                ]).then(res => {
                    const intern = new Intern(res.name, res.id, res.email, res.school)
                    teamArray.push(intern)
                    getAnswers()
                })
                break
            case 'Finish building the team':
                const writeToFile = data => {
                    fs.writeFile('./dist/index.html', data, err => {
                        if (err) {
                            console.log(err)
                            return
                        } else {
                            console.log("File created!")
                        }
                    })
                }
            }
}

initialQuestion()