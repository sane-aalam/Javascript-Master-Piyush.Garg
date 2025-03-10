// Write a function createHelloWorld.
// It should return a new function that always returns "Hello World".

// 😃 Deep working
// :: Interview question - play with code
var fun = function () {
  return function add(a, b) {
    const sum = a + b;
    return sum;
  };
};

var numSum = fun();
console.log(numSum); // [Function: add]
var result = numSum(3, 4); // call inner calls
console.log(result);

/**
 * @return {Function}
 */

// Leetcode solution -
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
f();
