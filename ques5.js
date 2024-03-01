const input = require("readline-sync");

let a = input.questionInt("Enter the 1 number:");
let b = input.questionInt("Enter the 2 number:");

c = Math.floor(a/b) ;
d = a%b ;

console.log(c,d);
