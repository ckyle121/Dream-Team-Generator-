//import Manager constructor 
const Manager = require('../lib/Manager');

describe('Manager', () => {
    // create new test manager
    const manager = new Manager('Caroline', 20, 'carolinekyle21@gmail.com','Manager', 302);

    // test for manager name 
    test('test manager has name', () => {
        expect(manager.name).toEqual(expect.any(String));
    });

    // test for manager id as number 
    test('manager has a number ID', () => {
        expect(manager.id).toEqual(expect.any(Number));
    });

    // test for manager email
    test('manager has an email', () => {
        expect(manager.email).toEqual(expect.stringContaining('@'));
    });

    // test manager has role of Manager
    test ('manager has role of Manager', () => {
        expect(manager.role).toBe('Manager')
    });

    // test manager has office number 
    test('manager has office number', () => {
        expect(manager.office).toEqual(expect.any(Number));
    });
});
