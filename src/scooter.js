class Scooter {
    static currentId = 0;
    constructor(maxRange=32){
        this.maxRange = maxRange;
        this.batteryLevel = 0;
        this.status = "outofservice";
        this.location = "GPS";
        this.Id= this.constructor.currentId

    }
    setStatus(status){
        this.status = status;
    }
    // create method to checkout and return scooter, generate alert(may go in app)
    setRecharge(){
        this.batteryLevel= 100
        this.setStatus("inservice")
    }
    setMove(){
        this.batteryLevel = 50;
    }
    // allScooter(){
    //     this.scooter = scooter;

    // }
}
let scootersA = new Scooter(1)
let scootersB = new Scooter(2);
console.log(scootersA);
console.log(scootersB);
module.exports = Scooter;