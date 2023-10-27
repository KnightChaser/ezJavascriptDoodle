// argument is a local variable that is accessible to every parameter to the function
// it's an object of Array type and length
// it doesn't have any Array embedded object

// Or... rest parameters! it's more convenient!
// Array and support any array things
function add(...numbers) {
    let result = 0;
    numbers.forEach((number) => {
        result += number;
    })
    console.log(result);
}

add(1, 2, 3);                           // 6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);     // 55

// rest parameters should be place at the last
function User(name, age, ...skills) {
    this.anem = name;
    this.age = age;
    this.skills = skills;       // Users may have multiple points
}

const user1 = new User("knightchaser", 20, "Assembly x64", "C", "C++");
const user2 = new User("jaclyn", 21, "Javascript", "React.js", "three.js");
console.log(user1);
console.log(user2);