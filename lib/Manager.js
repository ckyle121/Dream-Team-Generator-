// import Employee constructor 
const Employee = require('./Employee');
class Manager extends Employee{
    constructor (name, id, email, role, office){
        // pass original parameters of employee to super function
        super(name, id, email, role);
        this.office = office;
    };

    getOffice(){
        return this.office;
    };
};

//export Manager constructor
module.exports = Manager; 