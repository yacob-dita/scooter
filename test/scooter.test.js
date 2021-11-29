const Scooter = require('../src/scooter');

describe("Scooter class", () => {
    const testScooter = new Scooter();
    test("Creates a scooter instance", () => {
        expect(testScooter).toBeDefined();
        expect(testScooter instanceof Scooter).toBeTruthy();
    });

    test("has an Id of type number", () => {
        expect(typeof testScooter.Id).toBe("number");
        expect(testScooter.Id).toBe(0);
    });

    // test("can get a scooter by Id", () => {
    //     const scooter = Scooter.getScooterById(testScooter.Id);
    //     expect(scooter instanceof Scooter).toBeTruthy();
    //     expect(scooter).toBe(testScooter(scooter.Id));
    // });

    test("Scooter has to start with 0 battery level", () => {
        expect(testScooter.batteryLevel).toBe(0);
    });

    test("Scooter has start in maintenance status", () => {
        expect(testScooter.status).toBe("outofservice");
    });

    test("Scooter must have a max range defaulting to 32km", () => {
        expect(testScooter.maxRange).toBe(32);
    });

    test("Scooter can recharge, updating battery level to 100 and status to Available", () => {
        testScooter.setRecharge();
        expect(testScooter.batteryLevel).toBe(100);
        expect(testScooter.status).toBe("inservice");
    });

    test("Scooter can move, descreasing battery level proportionally to max range", () => {
        testScooter.setMove(16);
        expect(testScooter.batteryLevel).toBe(50);
    });

    test("Scooter won't move if not enough battery", () => {
        testScooter.setMove(50);
        expect(testScooter.batteryLevel).toBe(50);
    });

    // test("Can list all scooters", () => {
    //     const scootersA =  new Scooter(1);
    //     expect(scootersA.number).toBe(1);
    //     const testScooterB = new Scooter(1);
    //     const scootersB = Scooter.allScooters();
    //     expect(scootersA.number).toBe(1);
    //     expect(scootersB.number).toBe(1);
    //     expect(scootersB.every(scooter => scooter instanceof Scooter)).toBeTruthy();
    // });

    // test("Can list only available scooters", () => {
    //     const scooters =   new Scooter();
    //     expect(scooters.length).toBe(2);
    //     const availableScooters = Scooter.availableScooters();
    //     expect(availableScooters.length).toBe(1);
    //     expect(availableScooters.every(scooter => scooter.status === "Available")).toBeTruthy();
    // });
});
