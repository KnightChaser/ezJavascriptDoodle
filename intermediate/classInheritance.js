// Class inherits something by extends keyword

class Car {
    constructor(color) {
        this.color = color;
        this.wheels = 4;
    }

    drive() {
        console.log("driving...");
    }

    stop() {
        console.log("stopping...");
    }
}

class SuperCar extends Car {

    // child class is trying to make a constructor
    constructor(color) {
        // run parent class' constructor
        // required passing variables
        super(color);

        this.isCool = true;
        this.speed = "480kph";
        this.engine = "SuperEngine";
    }

    // method overriding
    drive() {
        console.log("Gigachad driving activated");
    }

    // super keyword to avoiod method override
    stop() {
        super.stop();           // use Parent class method
        console.log("OFF");
    }
}

const lamborgini = new SuperCar("blue");
console.log(lamborgini.color);
lamborgini.drive();
lamborgini.stop();