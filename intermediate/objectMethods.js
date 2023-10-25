function makeObj(key, value) {
    // literally interpret the function
    return {
        [key] : value
    }
}

const objA = makeObj("age", 20);
const objB = makeObj("notepad", "boomboombambam");
console.log(objA);
console.log(objB);

// copy object
const user = {
    name : "knighthcaser",
    bio : "boomboombambam"
};

// const user2 = user;                  // not right way to copy object
const user2 = Object.assign({}, user);  // right way to copy object (deep copy)
user2.bio = "yeahyeahyeahyeah";
console.log(user);
console.log(user2);

// print something
console.log(Object.keys(user));         // print keys
console.log(Object.values(user));       // print values
console.log(Object.entries(user));      // print keys and values in a set

// array -> object
let mondayNFriday = [
    //  key     value
    ["monday", "fuck"],
    ["friday", "yes"]
]
console.log(Object.fromEntries(mondayNFriday));