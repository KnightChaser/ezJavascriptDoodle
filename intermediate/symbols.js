// Symbol is used to make a unique identifier

const symbolA = Symbol("symbolA");
const symbolB = Symbol("symbolB");

console.log(symbolA);
console.log(symbolB);
console.log(symbolA.description);       // "symbolA"
console.log(symbolB.description);       // "symbolB"
console.log(symbolA === symbolB);       // false
console.log(symbolA == symbolB);        // false

// symbol can be used to add an unnique property to the target object

const user = {
    name : "knightchaser",
    bio : "boomboombambamsukyblyat"
}

// add something to the object
const showName = Symbol("show name for the object user");
user[showName] = function() {
    console.log(`My name is ${this.name}`);
};
user[showName]();               // "My name is knightchaser"

for (let key in user) {
    console.log(`user.${key} => ${user[key]}`);     // for and other object methods
                                                    // doesn't detect symbols generally
}

// --> Symbol doesn't affect to the target object (no overwriting)