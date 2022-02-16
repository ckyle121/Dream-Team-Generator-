//import Engineer constructor 
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    // create new test Engineer
    const engineer = new Engineer('Caroline', 22, 'carolinekyle21@gmail.com', 'Engineer','ckyle121') 
    
    // test for engineer name 
    test('test engineer has name', () => {
        expect(engineer.name).toEqual(expect.any(String));
    });

    // test for engineer id as number 
    test('engineer has a number ID', () => {
        expect(engineer.id).toEqual(expect.any(Number));
    });

    // test for engineer email
    test('engineer has an email', () => {
        expect(engineer.email).toEqual(expect.stringContaining('@'));
    });

    // test engineer has role of engineer 
    test ('engineer has role of employee', () => {
        expect(engineer.role).toBe('Engineer')
    });

    // test engineer has entered GitHub username
    test('engineer has github username', () => {
        expect(engineer.github).toEqual(expect.any(String));
    });
});