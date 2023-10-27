// Easier and shorter

let oneTwoThree = [1, 2, 3];
let fourFiveSix = [4, 5, 6];
let oneToNine = [0, ...oneTwoThree, ...fourFiveSix, 7, 8, 9];
console.log(oneToNine);
// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8, 9
// ]  

let skill = [ "hackCIA", "hackNIS", "hackGCHQ", "hackYourComputer", "watchYourBrowserHistory" ];
let userA = { name : "kn1ght", age : 20 };
let userB = { ...userA, money : "12388129499000", skill : [...skill] };
userB.hobbies = "running his blog";
console.log(userB);
// {
//     name: 'kn1ght',
//     age: 20,
//     money: '12388129499000',
//     skill: [
//       'hackCIA',
//       'hackNIS',
//       'hackGCHQ',
//       'hackYourComputer',
//       'watchYourBrowserHistory'
//     ],
//     hobbies: 'running his blog'
// }