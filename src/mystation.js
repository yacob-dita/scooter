class Mystation {
    static currentId = 0;
    static station = [];
    // static getNumberOfLocation(){
    //     return Mystation.station.length
    // };

    constructor(locationId,spaceCapacity){
        if(locationId===undefined) throw new Error("station must have locationId")
        this.id = this.constructor.currentId++;
        this.locationId = locationId;
        this.spaceCapacity = spaceCapacity;
        this.AvailableScooterNo = [];
        this.scooter = [];
        this.constructor.station.push(this);

    }
    static getNumberOfLocation(){
        return Mystation.station.length
    };
    addScooter(scooter){
        this.scooter.push(scooter);
    };
}
// let e3 = new Mystation("002",23);
// let e4 = new Mystation('022',12);
// let e1 = new Mystation('34');
// let e2 = new Mystation('43')
// console.log(e3);
// console.log(e4);
// console.log(e1);
// console.log(e2);
// console.log(Mystation.getNumberOfLocation());
module.exports = Mystation;