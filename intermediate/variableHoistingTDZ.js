// Variable
// Hoisting
// TDZ(Temporal Dead Zone)

// if you create a variable with "var", you can redeclare!
var boomboom = "bambam";
console.log(boomboom);
var boomboom = "wtf";       // okay
console.log(boomboom);

// temporal dead zone (unable to use) //
console.log(bambam);        // even variable made by var can be used before declaration
                            // it's usually called hoisting
// end of temporal dead zone (of var bambam) //
var bambam = "boomboom";    // however, only the declaration was hoisted and values
                            // are not transferred. that's a caution point!

// var proceeds creation and reset(as undefined) at the same time, then allocate.
// let proceeds creation, reset, and allocation respectively.
// const proceeds everything, because it's immutable

// Just use let!!!!
// var is just damn suky blyat 
// var is practically deprecated and not encouraged to use.