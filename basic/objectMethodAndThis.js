// object's method and this

// this directs an object according to the runtime situation
// However, array function doesn't have this property.
// If you use this keyword within the arrow function, it imports this keyword from another (unexpected)

let horny = {
    name : "knightchaser",
    job  : "horny",
    showName : function() {
        console.log(this.name)      // use this
    }
};

let man = horny;
horny.showName();
man.showName();

man = null;
horny.showName();                  // it still works
// man.showName();                 // error (inaccessible)

// use arrow function with this?
let something = {
    name : "knightchaser",
    sayThis : () => {
        console.log(this);          // very discouraged to use this in arrow func
    }
}

something.sayThis();                // very unexpected