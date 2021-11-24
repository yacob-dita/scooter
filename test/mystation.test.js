const Mystation = require("../src/mystation");
describe("Mystation class",()=>{
    const testMystation = new Mystation("Harwin",30);
    test("create a mystation instance",()=>{
        expect(testMystation).toBeDefined();
        expect(testMystation instanceof Mystation).toBeTruthy();
    });
    test("create a mystation instance",()=>{

        expect(()=> new Mystation()).toThrowError("station must have locationId")
        // the below code show that i can change the value in the object
        // testMystation.locationId = "Hello"

        expect(testMystation.locationId).toBe("Harwin")
    });

})
