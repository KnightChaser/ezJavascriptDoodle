// super ez comparison
console.log(10 > 5);        // true 
console.log(10 == 5);       // false
console.log(10 != 5);       // true

// fucking weird
const a = 1;
const b = "1";
console.log(a == b);        // loose comparison  -> true
console.log(a === b);       // strict comparison -> false (recommended)

const age = 20;
if (age > 19) {
    console.log("Welcome to the boombombambamm nightclub");
} else if (age == 19) {
    console.log("WELCOME TO THE BOMBOMBAAMABAMM club for the first time!!!");
} else {
    console.log("Kiddos ain't welcomed");
}