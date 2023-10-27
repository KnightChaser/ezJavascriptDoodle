// lexical environment
function makeAdder(x) {
    // the "return function(y)" can access to x allocated to makeAdder(upper)
    return function(y) {
        return x + y;
    }
}

const add3 = makeAdder(3);      // It has an anoymous function and x = 3
console.log(add3(2));           // 5 (2(local) + 3(upper))

const add10 = makeAdder(10);    // It has an anonymous function and x = 10
                                // add(3) and add(10) are independent -> have different lexical space
console.log(add10(5));          // 15 (5(local) + 10(upper))
console.log(add3(1));           // 4 (1(local) + 3(upper))

// Closure in Javascript
// - A combination of the lexical environments and functions
// - Memorize external variables exactly the moment of function creations
// - Persistently accessible after creation

function makeCounter() {
    let num = 0;
    return function() {
        return num++;
    };
}

let counter = makeCounter();    // Now makeCounter.num will be persistently managed
console.log(counter());         // 0
console.log(counter());         // 1
console.log(counter());         // 2