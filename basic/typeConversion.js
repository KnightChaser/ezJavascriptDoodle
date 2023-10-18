// Type confusion
// If you ignore about this, you should will be paying for your idiotic decision someday.

console.log(String(1234));								// "1234"
console.log(String(1 + 2));								// "3"
console.log(String(1/0 + []));						// "Infinity"

console.log(Number(true));								// 1
console.log(Number(false));								// 0
console.log(Number(null));								// 0
console.log(Number(undefined));						// NuN
console.log(Number("1234"));							// 1234
console.log(Number("12EA"));							// NaN
console.log(Number(Infinity));						// Infinity

console.log(Boolean(1));									// true
console.log(Boolean("Boomboombaambaam"));	// true
console.log(Boolean(1/0));								// true
console.log(Boolean(-Infinity));					// true
console.log(Boolean("0"));								// true
console.log(Boolean(" "));								// true
console.log(Boolean(0));									// false
console.log(Boolean(""));									// false
console.log(Boolean(null));								// false
console.log(Boolean(undefined));					// false
console.log(Boolean(NaN));								// false

// Thanks for inventing Javascript!!!
