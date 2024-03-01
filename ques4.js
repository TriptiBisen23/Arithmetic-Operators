const input = require("readline-sync");

let a = input.questionInt("enter the 1 number:");
let b = input.questionInt("enter the 2 number:");

O= a+b ;
S = a-b;
M = a*b;
D = a/b;
ID = Math.floor(a/b);
Mu = a%b;

console.log(O,S,M,D,ID,Mu);
