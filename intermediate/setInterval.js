// Run function after the certain time
let second = 0;
function showTime(id) {
    console.log(`${id} has been horny for ${second++} sec.`);
    if (second > 10) {
        console.log(`${id} got escaped from the horny jail!!!`);
        clearInterval(tID);
    }
}

// function name, delay(ms), parameters(args)
// using setInterval()'s return value, it's able to control setInterval()
const tID = setInterval(showTime, 1000, "knightchaser");