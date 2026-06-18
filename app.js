var a = 10;
var b = 20;

console.log(a+b);


console.log("NODEJS")


console.log(global);

//<ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   navigator: [Getter],
//   sessionStorage: [Getter/Setter]
// }

console.log(this);

// {}

console.log(globalThis); // same as global
