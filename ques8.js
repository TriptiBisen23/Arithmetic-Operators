const input = require("readline-sync");

let a = input.questionInt("enter the 1 number:");
let b = input.questionInt("enter the 2 number:");

a = a+b;
b = a-b;
a = a-b;

console.log(a,b);
