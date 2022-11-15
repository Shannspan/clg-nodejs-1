//'Simple mathematics' program in node.js
//console.log("Assignment1: Sum of two numbers in Node.js");

//Test variable and console log 
// let obj = '{"Name": "Ted", "Age": 4}';
// console.log(JSON.parse(obj));

const process = require('process');
//process.myargv is an array containing the CLI + I am using slice to remove the 2 auto indexed items (being filepaths not needed for this activity)
let myArgv = process.argv.slice(2);

//check to make sure code is working
console.log(myArgv);

//create variables to store the numerals (CLI arguments I have added to array)
let num1 = myArgv[0];
let num2 = myArgv[1];

const sum1 = JSON.parse(`${num1}` + `${num2}`);

console.log(sum1);

// WHY IS THIS CONCATINATING? THIS IS MAKING 20 + 10 = 2010 FIX NEEDED


