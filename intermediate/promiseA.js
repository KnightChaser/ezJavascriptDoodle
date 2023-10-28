// Promise call some callback functions after succeeding or 
// failing the allocated tasks

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("OK");
        reject(new Error("Got some unexpected errors!"));
    }, 1000)
})

// using promise
console.log("Starting...");
pr.then(result => {
    // if get succeess
    console.log(result);
}).catch((err) => {
    // if get fail
    console.log(`error occured => ${err}`);
}).finally(() => {
    // anyway it gonna run, finally
    console.log("All process finished...");
})