// import fs for writing files
const fs = require('fs');

// import inquirer to prompt user for response
const inquirer = require('inquirer');

// import constructor functions
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// import generateHTML functions 
const generateTeam = require('./src/generateHTML');

// create array to store user input
const teamMembers = [];

// function using inquirer to prompt user input
function userInput() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name:',
            name: 'name',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    return 'Please enter Employee Name';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Employee ID:',
            name: 'id',
            validate: idInput => {
                if (idInput){
                    return true;
                } else {
                    return 'Please enter Employee ID';
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Employee E-mail:',
            name: 'email',
            validate: emailInput => {
                if (emailInput){
                    return true;
                } else {
                    return 'Please enter Employee Email';
                }
            }
        },        
        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ['Employee','Manager','Engineer', 'Intern']
        }
    ]).then(answers => {
        if (answers.role === 'Manager'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: 'Enter Office Number: ',
                    validate: officeInput => {
                        if (officeInput){
                            return true;
                        } else {
                            return 'Please enter your Office Number';
                        }
                    }
                }
            ])
            .then(response => {
                const manager = new Manager (answers.name, answers.id, answers.email, answers.role, response.office)
                teamMembers.push(manager);
                addEmployee();
            })
        }
        else if (answers.role === 'Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter your school name: ',
                    validate: schoolInput => {
                        if (schoolInput){
                            return true;
                        } else {
                            return 'Please enter your school name';
                        }
                    }
                }
            ]).then(response => {
                const intern = new Intern (answers.name, answers.id, answers.email, answers.role, response.school);
                teamMembers.push(intern);
                addEmployee();
            })
        }
        else if (answers.role === 'Engineer'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter you GitHub Username: ',
                    validate: githubInput => {
                        if(githubInput){
                            return true;
                        } else {
                            return 'Please enter your GitHub Username';
                        }
                    }
                }
            ]).then(response => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, response.github);
                teamMembers.push(engineer);
                addEmployee();
            })
        } 
        else {
            const employee = new Employee(answers.name, answers.id, answers.email, answers.role);
            teamMembers.push(employee);
            addEmployee();
        } 

        // function to add Another Team Member or Generate Template 

        function addEmployee(){
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'add',
                    message: 'Would you like to add another team memeber?'
                }
            ])
            .then(confirm => {
                if (confirm.add === true){
                    userInput(teamMembers);
                }
                else {
                    //let teamHTML = generateTeam(teamMembers)
                    let writeTeam = generateTeam(teamMembers);
                    writeFile(writeTeam);
                }
            });
        };
    });
};

// generate html page using file system 
const writeFile = function(data){
    fs.writeFile('./dist/index.html', data, err =>{
        if (err){
            console.log(err);
            return;
        }

        console.log('The team profile page has been created. Get index.html page in the dist folder.')
    })
}

// call userInput funciton to start prompts 
userInput()
