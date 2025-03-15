// Write a function createHelloWorld.
// It should return a new function that always returns "Hello World".

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
  // result : 16 (why not) -
  