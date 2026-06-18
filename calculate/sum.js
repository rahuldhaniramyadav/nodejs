// modules protect their varaiables and functions from leaking

console.log("SUM");
function calculateSum(a, b) {
	console.log(a + b);
}
// module.exports = calculateSum;

// module.exports = {x: x, calculateSum: calculateSum};
module.exports = {calculateSum};

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;