const Person = require("./person");

class User extends Person {
    constructor(name,license,email, phone,age){
        if (age <18 ) throw new Error("user must be 18 older");
        super(name,license,email,phone)
        this.paymentMethode = []
        this.rentHistory= []
        // this.idNumber= idNumber
        this.currentScooter = []
        this.age = age;
    }
    addPaymentMethod(methodeName){
         this.paymentMethods.push(methodeName);
    }

}
// let testperson1 =new User('Anna',"243435355","dhdgd@gmail.com","2445354545");
// console.log(Person.people);

module.exports = User;