// import Employee constructor 
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name, id, email, role, github){
        // pass original parameters of employee to super function
        super(name, id, email, role);
        this.github = github;
    };

    getGitHub(){
        return this.github;
    };
};

//export Engineer constructor 
module.exports = Engineer;