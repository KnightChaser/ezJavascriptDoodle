// math! math! math!

// number notation conversion
let num = 1234567890;

console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));
console.log(num.toString(36));

// constants
console.log(Math.PI);
console.log(Math.LN2);

// integer handling
console.log(Math.floor(5.123));
console.log(Math.ceil(5.123));
console.log(Math.round(5.123));

// floating point handling
const BTCbalance = 17.23481;
console.log(BTCbalance.toFixed(2));
console.log(BTCbalance.toFixed(9));

// check if it's NaN(Not a Number)
let x = Number("boomboombambambamb");       // NaN
console.log(x == NaN);                      // false
console.log(x === NaN);                     // false
console.log(NaN == NaN);                    // false
console.log(NaN === NaN);                   // false
console.log(isNaN(x));                      // true
console.log(isNaN(3));                      // false

// parsing
let margin = "1235323.222px";
console.log(parseInt(margin));              // 1235323
console.log(Number(margin));                // NaN
console.log(parseFloat(margin));            // 1235323.222

// random
console.log(Math.random())
console.log(Math.floor(Math.random() * 100) + 1)        // 1 to 100

// exponential
console.log(Math.pow(2, 10));
console.log(Math.pow(5, 25));

// square root and cubic root
console.log(Math.sqrt(16));
console.log(Math.cbrt(16));