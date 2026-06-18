require("./require");
require("./sum");  // unable access the variable

const calculateSum = require("./sum");

var a = 10;
var b = 20;

console.log(a+b);

console.log(calculateSum(a, b));  //ReferenceError: calculateSum is not defined

// console.log(this); {}

// console.log(globalThis); // same as global

