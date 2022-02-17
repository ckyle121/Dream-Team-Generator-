// create Manager card 
const generateManager = function(manager){
    return `
    <div class="col4">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">E-mail: <a href="mailto: ${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.office}</p>
            </div>
            
        </div>
    </div>
    `
};

// create Engineer card 
const generateEngineer = function (engineer){
    return `
    <div class="col4">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">E-mail: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.github}"></a>${engineer.github}</p>
            </div>

        </div>
    </div>
    `
};

//create Intern card
const generateIntern = function(intern){
    return `
    <div class="col4">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">E-mail: <a href="mailto: ${intern.email}">${intern.email}</a></p>
                <p class="github">School: ${intern.school}</p>
            </div>

        </div>
    </div>
    `
};

// Create Employee card
const generateEmployee = function(employee){
    return `
    <div class="col4">
        <div class="card">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Employee</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${employee.id}</p>
                <p class="email">E-mail: <a href="mailto: ${employee.email}">${employee.email}</a></p>
            </div>

        </div>
    </div>
    `
};

// add cards together 
const generateTeam = function(data){

    // create array to hold employee cards
    employeeCards = [];

    // loop through response to assign each employee entered to a card
    for (let i in data){
        const employee = data[i];
        const role = data.employee.role;

        if (role === 'Manager'){
            const managerCard = generateManager(employee);
            employeeCards.push(managerCard);
        }

        if (role === 'Engineer'){
            const engineerCard = generateEngineer(employee);
            employeeCards.push(engineerCard);
        }

        if (role === 'Intern'){
            const internCard = generateIntern(employee);
            employeeCards.push(internCard);
        }

        if (role === 'Employee'){
            const employeeCard = generateEmployee(employee);
            employeeCards.push(employeeCard);
        }
    };

    // join strings in array to one string
    const teamMembers = employeeCards.join('');

    // add team members div to HTML page
    const generateTeamHTML = generateHTML(teamMembers);

    return generateTeamHTML;
};

// create html page
const generateHTML = function (teamMembers){
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dream Team Profile</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <link rel="stylesheet" href="../dist/style.css">
        </head>
        <body>
            <header>
                <nav class="navbar">Dream Team Profile</nav>
            </header>
            <main>
                <div class="container">
                    <div class="row justify-content-center" id="team-cards">
                        ${teamMembers}
                    </div>
                </div>
            </main>
        </body>
    </html>
    `
}

// export generateHTML to index
module.exports = generateHTML;