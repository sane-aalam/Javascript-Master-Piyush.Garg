

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

//* Intuition 💡
// Imagine you're a wizard 🧙‍♂️, and you need to create magical counting devices! Each device should have its own secret number 🤫 and buttons to make it count up ⬆️, count down ⬇️, or go back to its original value ↩️. This function helps you make those enchanted counters! ✨

//* Approach 🚶‍♀️
// The Power of Closures:
// The secret ingredient is a JavaScript closure! 🔒 The createCounter function crafts a local variable (curr) to hold the current count. The special increment, decrement, and reset functions live inside createCounter, giving them a magical bond 🔗 with curr. They remember 🧠 and can change ✍️ curr even after createCounter has finished its spell! 🪄

// An Object of Wonders:
// createCounter then conjures up an object 🎁 with three amazing abilities:

// increment(): Makes curr grow by 1 🌱 and reveals the new value! 👁️
// decrement(): Shrinks curr by 1 🍂 and shows the diminished value! 👁️
// reset(): Whispers a magic word 🗣️, setting curr back to its original form 🥚 and displaying the untouched value! 👁️
// Pre-Flight Check:
// Using ++curr and --curr is essential! ✅ This ensures that the functions return the updated value right away! 🚀

// Complexity Analysis ⏱️🧠
// Time Complexity: Each spell is super fast! ⚡

// createCounter(init): O(1) - Instant creation! ✨
// increment(): O(1) - Lightning-fast increase! ⚡
// decrement(): O(1) - Speedy decrease! ⚡
// reset(): O(1) - Quick restoration! ⚡
// Space Complexity: Very economical! 🌿

// createCounter(init): O(1) - Uses a tiny amount of memory! 🤏

//#Day03 - we have learn about (function inside object),(object inside method)

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    // play with tempNumber
    // not modify original data 
    let tempNumber = init;
    return {
        increment: function (){
            return ++tempNumber;
        },
        decrement : function(){
            return --tempNumber;
        },
        reset : function (){
            return tempNumber = init;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */