// Welcome to the object-oriented programming!
// Class is a new specification since Javascript ES6 syntax.

class User {

    // constructor function -> goes to the prototype(__proto__). Check to the browser
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduction() {
        console.log(`User ${this.name} is ${this.age} years old!`);
    }
}

const klojure = new User("Klojure", 20);
klojure.introduction();