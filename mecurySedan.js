class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passenger, numberofWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadpassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + "does not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine has started.");
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    checkService() {
        if (this.mileage > 30000) {
            console.log("time for maintenance")
        }
    }
}

let myCar = new Car('mercury', 'coupe', '2005', 'black', 50000)

myCar.start()
myCar.loadpassenger(5)
myCar.checkService()

console.log(myCar)