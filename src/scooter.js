class Scooter{
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
}
let scooter1 = new Scooter();
console.log(scooter1);
module.exports = Scooter;