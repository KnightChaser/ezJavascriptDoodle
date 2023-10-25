// string method (misc but useful)

// backtick(`) is fucking convenient
const lmfao = `Even
backtick(\`) can handle
MULTIPLE lines of string literals
unlike other foolish quotation marks :p`;
console.log(lmfao);                     // just print
console.log(lmfao.length);              // measure stirng length in byte
console.log(lmfao[17]);                 // access like an array (start from zero)
console.log(lmfao.toUpperCase());       // capitalize everything
console.log(lmfao.toLowerCase());       // uncapitalize everything
console.log(lmfao.indexOf("handle"));   // find the word position "handle"

console.log(lmfao.slice(100));
console.log(lmfao.slice(0, 5));
console.log(lmfao.slice(2, -40));

console.log(lmfao.substring(12, 10));
console.log(lmfao.substring(10, 12));    // invertible

let id = "   boomboom             login   f";
console.log(id.trim());                  // trimming

// example usage
function noPepsiFilter(str) {
    // will return x >= 0 if the target has been found
    if (str.toLowerCase().indexOf("pepsi") > -1) {
        console.log("No fucking pepsi");
    } else {
        console.log("Good");
    }
}

noPepsiFilter("My friends like Pepsi");
noPepsiFilter("I like Coca-Cola");