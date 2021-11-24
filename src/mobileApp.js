const Scooter =  ('./scooter')
const User = ('./User')

class MobileApp {
    constructor(name,license,email,phone){
        
        this.paymentMethods =[]
        this.rentHistory = []
        this.currentScooters = []

    }
    addPaymentMethods(methodeName){
        this.paymentMethods.push(methodeName)
    }
    verifyAgeLimit(age){
        return age >= 18;
        // Todo: require mm/dd/yr
    }
    // Todo register  new user
    registerUser(user){
       if(this.verifyAgeLimit(user.age)){
           return createNewUser;
       }

    }
    signInUser(){
        // Todo: sign in user
    }
    listLocation(){
        // Todo:list available location
    }
    listAvailableScooter(){
        // Todo:list of available scooters
    }
    rentScooter(){
        // todo: rent scooter
    }
    rentScooter(){
        // Todo:return scooter
    }
    reportBroken(){
        // Todo: require for renewal scooter
    }
}
module.exports = MobileApp;