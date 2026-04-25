class Car {

    // Attribute
    // Constructor
    constructor(assigned_value) {
        this.name = assigned_value
    }

    drive() {
        console.log("Driving the Car", this.name);
    }

    detailsOfCar() {
        console.log("Details of the Car", this.name)
    }
}

let car1 = new Car("Tata_Punch");
car1.drive();
car1.detailsOfCar();