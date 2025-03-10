// Given an integer n, return a counter function.
//This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Let's consider, we have n = 10
// ['call' , 'call', 'call']
// [11,12,13] - will be result of the array
/*
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
*/

// last question - #Day01 Leetcode problem
// we have understand function inside function
// closure
// function connected with all referrenes(lexical enviromnents)

function fun() {
  var a = 6;
   function f(b) {
    var sum = a + b;
    return sum;
  }
  a = 5;
  return f;
}

var outterFunctionInvoked = fun();
var innnerFunctionInvoked = outterFunctionInvoked(10);
console.log(innnerFunctionInvoked);

// result : 15
// result : 16 (why not) you have good understanding(NOT)

// came into the actual leetcode problem

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
  return function() {
      return n++;
  }
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/