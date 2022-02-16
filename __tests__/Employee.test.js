//import Employee constructor 
const Employee = require('../lib/Employee');

describe('Employee', () => {
    // create new test employee
    const employee = new Employee('Caroline', 21, 'carolinekyle21@gmail.com','Employee');

    // test for employee name 
    test('test employee has name', () => {
        expect(employee.name).toEqual(expect.any(String));
    });

    // test for employee id as number 
    test('employee has a number ID', () => {
        expect(employee.id).toEqual(expect.any(Number));
    });

    // test for employee email
    test('employee has an email', () => {
        expect(employee.email).toEqual(expect.stringContaining('@'));
    });

    // test employee has role of employee
    test ('employe has role of employee', () => {
        expect(employee.role).toBe('Employee')
    });
});
