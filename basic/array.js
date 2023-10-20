// array is something you might love
// array is kinda <vector> in C++ with containing various data

// just for indexing
// just for-of (can't get index)

let days = ["monday", "tuesday", "wednesday"];
days[0] = "Friday";
days.push("Thursday");
days.unshift("Sunday");

console.log(days);
console.log(days.length);

for (let index = 0; index < days.length; index++)
    console.log(`${index} => ${days[index]}`);

for (let day of days)
    console.log(`${day} in ${days}`);