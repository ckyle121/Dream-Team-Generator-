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