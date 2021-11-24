const Person = require('../src/person')

describe('Person class', () => {
    
    test('is an instance of a Person', () => {
        const testPerson = new Person("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testPerson instanceof Person).toBeTruthy()
    })
    test('has a name', ()=>{
        const testPerson = new Person("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testPerson.name).toBe("Ann")
    })
    test('has a license', ()=> {
        const testPerson = new Person("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testPerson.license).toBe("07532118")
    })
    test('has a email', ()=> {
        const testPerson = new Person("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testPerson.email).toBe("anab@hotmail.com")
    })
    test('has a phone', ()=> {
        const testPerson = new Person("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testPerson.phone).toBe("214-255-5555")
    })
})