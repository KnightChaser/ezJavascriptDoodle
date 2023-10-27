// CHANGE FUNCTION THIS VALUE!!!

// call
const horny = {
    name : "knightchaser"
};

const biden = {
    name : "JoeBiden"
};

function showThisName() {
    console.log(this.name);
};

showThisName();             // undefined or something (this is windows)
showThisName.call(horny);   // "knightchaser" (parameter will be used for searching this)
showThisName.call(biden);   // "JoeBiden"

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(horny, 2004, "pro horny auditor");
console.log(horny);
// {
//     name: 'knightchaser',
//     birthYear: 2004,
//     occupation: 'pro horny auditor'
// }


// Apply 
// Same as call, but get parameters as arrays
update.apply(biden, [1999, "US political dancer"]);
console.log(biden);
// {
//     name: 'JoeBiden',
//     birthYear: 1999,
//     occupation: 'US political dancer'
// }

const number = [214, 3895, 1000, 292, 99, 1923, 937, 888];
console.log(`Max number => ${Math.max(...number)}`);            // spread syntax
console.log(`Max number => ${Math.max.apply(null, number)}`);   // apply
console.log(`Max number => ${Math.max.call(null, ...number)}`); // call

// Bind (permanently change this property)
const updateHorny = update.bind(horny);     // this function always gets "horny" as this property
updateHorny(2004, "World champion h0rny meme website manager");
console.log(horny);         // we didn't specify this property explicitly but
                            // it automatically set this as object horny as a default
                            // due to bind()
// {
//     name: 'knightchaser',
//     birthYear: 2004,
//     occupation: 'World champion h0rny meme website manager'
// }


// Another application
const user = {
    name : "Krisse",
    showName : function() {
        console.log(`${this.name}, welcome back!`);
    }
};

user.showName();        // "Krisse, welcome back!"
let fn = user.showName;
fn();                   // "undefined, welcome back!"       <--- lost this property (method gets this at something after dot(.))
fn.call(user);          // "Krisse, welcome back!"          <--- set this property manually
fn.apply(user);         // "Krisse, welcome back!"

// Or just use bind method.
let boundFn = fn.bind(user);
boundFn();              // "Krisse, welcome back!"