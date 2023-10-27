const car = {
    wheels : 4,
    drive() {
        console.log("GTA MOD ACTIVATED, ACCELERATE!!!");
    }
}

const bmw = {
    color : "miku light blue",
    navigation : true
}

bmw.__proto__ = car;
console.log(bmw);
console.log(bmw.wheels);        // 4  (got inherited by __proto__)
console.log(bmw.__proto__);     // { wheels: 4, drive: [Function: drive] }

// Inheritance can be linked multiple times by prototype

const lamborgini = {
    isSupercar : true,
    isGigachad : true,
    zeroTo100 : 0.00001,
    engine : "superUltraEngine"
};

lamborgini.__proto__ = bmw;                     // lamborgini -> bmw -> car
console.log(lamborgini);
console.log(lamborgini.color);                  // "miku light blue"
console.log(lamborgini.wheels);                 // 4
console.log(lamborgini.__proto__);              // { color: 'miku light blue', navigation: true }
console.log(lamborgini.__proto__.__proto__)     // { wheels: 4, drive: [Function: drive] }
console.log(Object.keys(lamborgini));           // [ 'isSupercar', 'isGigachad', 'zeroTo100', 'engine' ]
console.log(Object.values(lamborgini));         // [ true, true, 0.00001, 'superUltraEngine' ]

// Print every property in the given object
for(property in lamborgini) {
    if(lamborgini.hasOwnProperty(property)) {
        console.log(`O ${property}`);           // directly have  
    } else {
        console.log(`X ${property}`);           // indirectly have (inherited)
    }
}

// apply to the constructor function
// to use prototype inheritance more conveniently
const superCar = function(color, owner) {
    this.color = color;
    this.owner = owner;
    this.isCool = true;
    this.drive = function () {
        console.log("Gigachad driving mod activated");
    }
}

// Only one prototype setting will be broadly applied to the superCar instances
// superCar.prototype = { ... } is discouraged because the constructor will be wiped out
superCar.prototype.wheels = 4;
superCar.prototype.engine = "superHighEndEngine";
superCar.prototype.honk = function () {
    return "Honk Honk";
}

const ferrari = new superCar("Miku mint blue", "knightchaser");
console.log(ferrari);
console.log(ferrari.engine);        // "superHighEndEngine"
console.log(ferrari.honk);
console.log(ferrari instanceof superCar);           // true (is "ferrai" instance made from "superCar"?)
console.log(ferrari.constructor === superCar);      // true (because ferrari is instance of superCar)
