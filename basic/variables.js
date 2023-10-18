// JAVASCRIPT VARIABLES ARE SUCK

// mutables
let asdf = "bombombambam";

// immutables
const name = "knightchaser";
const age = 20;

// nesting
// use ${...} with backtick(`) for nesting some varaibles and calculations
const messageA = `My name is ${name} and ${age} years old`;
const messageB = `20 plus 20 is ${20 + 20}.`
console.log(messageA);
console.log(messageB);

// number literals
console.log(345 + 234);
console.log(345 - 234);
console.log(345 * 234);
console.log(1 / 0);         // infinity
console.log("ASDF" / 2);    // NaN (Not a Number)

// boolean
const yes = true;
const no = false;
console.log(name == "knightchaser");    // true
console.log(age == 123);                // false

// types
console.log(typeof 3);                      // number
console.log(typeof name);                   // string
console.log(typeof false);                  // boolean
console.log(typeof "boomboombammbaam");     // string
console.log(typeof null);                   // object
console.log(typeof NaN);                    // number
console.log(typeof undefined);              // undefined

// It really sucks
console.log(typeof("A" + "B" + "C"))                    // string
console.log(typeof("A" + []))                           // string(?)
console.log(typeof("boomboom" + 777 + "bambam"))        // string
console.log(typeof("boomboom" + (1/0) + "bambam"))      // string
console.log(typeof([] + Infinity + 123))                // string
console.log(typeof(0 + Infinity + 123))                 // number
