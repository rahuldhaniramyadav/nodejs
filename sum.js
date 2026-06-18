// modules protect their varaiables and functions from leaking

console.log("SUM");
export function calculateSum(a, b) {
	console.log(a + b);
}

export var x = 100;
// module.exports = calculateSum;

// module.exports = {x: x, calculateSum: calculateSum};
// module.exports = {x, calculateSum};