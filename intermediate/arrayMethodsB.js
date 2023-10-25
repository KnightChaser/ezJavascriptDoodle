// Array.sort() and Array.reduce();

// - Array.sort()
let arrString = ["a", "j", "z", "k", "x", "c", "d", "c" ,"o"]
arrString.sort();
console.log(arrString);             // array has been overwritten

let arr = [1, 52, 14, 22, 3];
arr.sort();
console.log(arr);                   // arr.sort() takes it as string

arr.sort((a, b) => {                // have to make manual sorting function
    // will return
    // >0 if a > b
    // =0 if a == b
    // <0 if a < b
    console.log(`arr.sort(a,b) => ${a}, ${b}`);
    return a - b;
});     

console.log(arr);
// Just use popular libraries like Lodash
// It's damn fucking annoying

// - Array.reduce()
let boom = [1, 2, 3, 4, 5];
let result = 0;

// use forEach()
boom.forEach(num => {
    result += num;
});
console.log(result);            // 15

// (or) use Array.reduce()
result = boom.reduce((previous, current) => {
    return previous + current;
}, 0);  // <--- initial value was set to zero(0).
console.log(result);            // 15 (the same)


// do something better with Array.reduce()
let userList = [
    { name : "Jaclyn", age : 20 },
    { name : "Lune", age : 27 },
    { name : "Aaron", age : 15 },
    { name : "Katalina", age : 23 },
    { name : "Harry", age : 17 },
    { name : "Steve", age : 16 }
];

let adultList = userList.reduce((previous, current) => {
    if (current.age > 19) {
        previous.push(current.name);
    }
    return previous;
}, []);

console.log(adultList);     // [ 'Jaclyn', 'Lune', 'Katalina' ]