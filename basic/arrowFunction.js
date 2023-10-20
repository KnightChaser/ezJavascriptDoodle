// Arrow function is a function without name
// and allocated to the variable

// Predeclared functions can be used in advance of function definition
// due to Javascript's hoisting technique. Quite uwuish.
// However, a function expression can be used only after generation.

// Just function
boomboombaambaam();                     // able to call.

function boomboombaambaam() {
    console.log("boomboombaambaam");
}

let add = (somethingA, somethingB) => {
    const result = somethingA + somethingB;
    return result; 
}

// One line
let subtract = (somethingA, somethingB) => (somethingA - somethingB);   // such like lambda
let hornyGenerator = (name) => `${name} is now horny`;

console.log(add(123456789, 987654321));
console.log(subtract(123456789,987654321));
console.log(hornyGenerator("knightchaser"));

// Arrow functions are very very frequently used since ES6.
// KEEP THIS PLUFFY ARROW FUNCTION IN YOUR MIND NOW!!!