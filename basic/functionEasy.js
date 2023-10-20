// writing function

function showHorny(name = "Someone") {
    let message = `${name} is horny`;     // this is an internal variable only used within the function
    console.log(message);
}

function add(something1, something2) {
    return something1, something2
}

showHorny("knightchaser");
showHorny("Jaclyn");
showHorny();                    // Didn't give a parameter

console.log(add(1, 1));         // 1
console.log(add(1/0, []));      // []
console.log(add());             // undefined