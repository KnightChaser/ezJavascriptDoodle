// tackling multiple callbacks by promise
function getRandomBoolean() {
    return Math.random() < 0.5;
}

const f1 = () => {
    return new Promise((result, reject) => {
        setTimeout(() => {
            result("Order #1 shipped!");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(`f2 got a message => ${message}`);
    return new Promise((result, reject) => {
        setTimeout(() => {
            if(getRandomBoolean())
                result("Order #2 shipped!");
            else
                reject("Order #2 got wrecked! X_X");
        }, 500);
    });
};

const f3 = (message) => {
    console.log(`f3 got a message => ${message}`);
    return new Promise((result, reject) => {
        setTimeout(() => {
            result("Order #3 shipped!");
        }, 500);
    });
};

// Promise.all (parallely)
// console.time("promiseAll");
// Promise.all([f1(), f2(), f3()])
//     .then((result) => {
//         console.log(`Promise.all got a message => ${result}`);  // Undefined if it doesn't have anything
//         console.timeEnd("promiseAll");
//     })
//     .catch((error) => console.error(`Promise.all error => ${error}`));

// // Promise chaining
// // Every chain task will be executed by order
console.log("Let's start!");
console.time("promise");
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(`Final message => ${res}`))
    .catch((error) => {
        console.error(`Got some error during the process! => ${error}`)
    })
    .finally(() => {
        console.log("Every order has been finished! Is everything okay?");
        console.timeEnd("promise");
    });