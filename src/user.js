const Person = require("./person");

class User extends Person {
    constructor(name,license,email, phone){
        super(name,license,email,phone)
        this.paymentMethode = []
        this.rentHistory= []
        // this.idNumber= idNumber
        this.currentScooter = []
    }
    addPaymentMethod(methodeName){
         this.paymentMethods.push(methodeName);
    }

}
let testperson1 =new User('Anna',"243435355","dhdgd@gmail.com","2445354545");
console.log(Person.people);

module.exports = User;