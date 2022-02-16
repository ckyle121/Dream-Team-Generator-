// import Intern constructor
const Intern = require('../lib/Intern');

describe('Intern', () =>{
    // create new test Intern 
    const intern = new Intern('Caroline', 23, 'carolinekyle21@gmail.com','Intern','Vanderbilt University');

    // test for intern name 
    test('test intern has name', () => {
        expect(intern.name).toEqual(expect.any(String));
    });

    // test for intern id as number 
    test('intern has a number ID', () => {
        expect(intern.id).toEqual(expect.any(Number));
    });

    // test for intern email
    test('intern has an email', () => {
        expect(intern.email).toEqual(expect.stringContaining('@'));
    });

    // test intern has role of employee
    test ('intern has role of employee', () => {
        expect(intern.role).toBe('Intern');
    });

    // test intern has a school name
    test('intern has a school name', () => {
        expect(intern).toEqual(expect.any(String));
    });
});