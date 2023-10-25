// computed property

let n = "name";
let a = "age";

const user = {
    [n] : "boomboombambab",     // -> user.name, [...] was substituted
    [a] : 30,                   // -> user.age,  [...] was substituted
    [1 + 4] : "asdf"            // -> user.5,    [...] was substituted
};

// Every property within the object has been precomputed
console.log(user);