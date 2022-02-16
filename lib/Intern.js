// import Employee constructor 
const Employee = require('./Employee');
class Intern extends Employee{
    constructor (name, id, email, role, school){
        // pass original parameters of employee to super function
        super(name, id, email, role);
        this.school = school;
    };

    getSchool(){
        return this.school;
    };
};

//export Intern constructor
module.exports = Intern; 