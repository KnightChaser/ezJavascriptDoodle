// destruct(dissect) array and allocate that to the variable
let idList = ["boomboom", "bambam", "knightchaser", "h0rny"];
let [user1, user2, user3, user4] = idList;

console.log(user1);     // boomboom
console.log(user2);     // bambam
console.log(user3);     // knightchaser
console.log(user4);     // h0rny

let [a = 100, , b = 300, c, d, e = 1234] = [10, 20, 30, 40];
console.log(a);     // 10
console.log(b);     // 20
console.log(c);     // 30
console.log(d);     // undefined
console.log(e);     // 1234

// swap (that's fucking insane)
let [boomboom, bambam] = [1, 2];
[boomboom, bambam] = [bambam, boomboom];
console.log(boomboom);          // 2 <-- 1
console.log(bambam);            // 1 <-- 2


// also destruct object
let user = {id: "knightchaser", balance: "1230848190000"};
let {id, balance, fiatCurrency = "KRW"} = user;     // by order
                                                    // Ofc able to set default values 
console.log(`${id} has ${balance} ${fiatCurrency}.`);
