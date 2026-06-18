
// const calculateSum = require("./sum");
// const {calculateSum} = require("./calculate/sum");
// const {calculateSubtract} = require("./calculate/subtract");

const {calculateSum, calculateSubtract} = require("./calculate");

// import {calculateSum, x} from "./sum.js";

var a = 10;
var b = 20;

console.log(a+b);
console.log(calculateSum(a, b)); 
console.log(calculateSubtract(a, b));

// console.log(globalThis); // same as global