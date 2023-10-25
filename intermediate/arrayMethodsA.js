// forEach

let arr = ["boom", "bam", "suka", "blyat"];

arr.forEach((name, index) => {
    console.log(`#${index + 1} => ${name}`);
});


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// find
// return the first match
const resultFind = arr.find((item) => {
    return item % 2 === 0;
});

// filter
// return the every math within the range
const resultFilter = arr.filter((item) => {
    return item % 2 === 0;
});

console.log(resultFind);            // 2
console.log(resultFilter);          // [2, 4, 6, 8, 10]

// find
let userList = [
    { name : "knightchaser", age : 20 },
    { nmae : "lyzarhyth0a", age : 17 },
    { name : "rekyguyz0h10", age : 21 },
    { name : "xkaassass1n", age : 18 }
];

const stillNotAnAdult = userList.filter((user) => {
    if (user.age < 19) {
        return true;
    } else {
        return false;
    }
});

console.log(stillNotAnAdult);

// map
// get function and do something, return the processed thing
let newUserList = userList.map((user, index) => {
    // add new property and do something
    return Object.assign({}, user, {
        id: Math.round(Math.random() * (index + 1) * 100000),
        isAdult : user.age > 19,
    })
});

console.log(newUserList);
// example output
// [
//     { name: 'knightchaser', age: 20, id: 11585, isAdult: true },
//     { nmae: 'lyzarhyth0a', age: 17, id: 155023, isAdult: false },
//     { name: 'rekyguyz0h10', age: 21, id: 60009, isAdult: true },
//     { name: 'xkaassass1n', age: 18, id: 83691, isAdult: false }
// ]

// join
let boomboom = ["boomboom", "bam", "bbbbaaammm"]
console.log(boomboom.join("~"));
console.log(boomboom.join(""));

// split
let boomboomString = "boomboom~bam~bbbbaaammm";
console.log(boomboomString.split("~"));
console.log(boomboomString.split("m"));

// is this an array?
let objekt = {
    message : "boombobombombomboommabambam"
}
console.log(typeof objekt);
console.log(typeof userList);
console.log(Array.isArray(objekt));
console.log(Array.isArray(userList));