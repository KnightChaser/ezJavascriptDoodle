// Object

const horny = {
    name : "knightchaser",
    job  : "college student",
    age  : 20
}

console.log(horny.name);
console.log(horny.job);
console.log(horny.age)

horny.hairColor = "black";
horny.hobby = "doing something js";
delete horny.age;
console.log(horny);

// object function
function makeHornyObject(name, age) {
    return {
        name : name,
        age  : age,
        job  : "Horny"
    }
}

function isAdult(person) {
    if (!("age" in person) && person.age < 20)
        return `${person.name} is an adult`;
    return `${person.name} is not an adult`;
}

const Mike = makeHornyObject("Make", 30);
console.log(Mike);
console.log("name" in Mike);                // true
console.log("birthday" in Mike);            // false
console.log(isAdult(Mike));

// circulation
for(key in Mike)
    console.log(`${key} => ${Mike[key]}`);