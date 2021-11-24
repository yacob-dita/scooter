class Person {
    static currentId = 0;
    static people = [];
    constructor(name,license,email,phone) {
        if (name === undefined) throw new Error("person must have a name");
        this.name = name;
        this.email= email
        this.license= license
        this.phone= phone
        this.id = this.constructor.currentId++;

        this.constructor.people.push(this)

        // this.constructor.people = [...this.constructor.people, this];
    }
}
// let name = "jack"
// let license = "454666"
// let email = "jack@gmail.com"
// let phone = "555-5555-555";
//  let testperson = new Person(name,license,email,phone);
//  console.log(Person.people);
module.exports = Person;