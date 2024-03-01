const input = require("readline-sync");

let C = input.questionInt("Enter the number:");


let F;

// C/5 = (F-32)/9
F = Math.floor(9/5*C) + 32

console.log(F);