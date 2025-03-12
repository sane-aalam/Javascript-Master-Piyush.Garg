

// Leetcode javascript(concepts):-
// 😻 : #day02 

/**
 * @param {string} val
 * @return {Object}
 */

// he expect function takes an input val and returns an object containing two methods: toBe and notToBe. These methods take another value as an argument and perform strict equality or inequality checks.
// If the condition is met, they return true; otherwise, they throw an error.
var expect = function(val) {
    // object inside with function 
    // function-1 for toBe.
    // function-2 for noToBe.
    return {
        toBe: function(userValue){
            // stictly checking data_Type + data_Value
            if(userValue === val){
                return true;
            }else{
                 throw new Error("Not Equal");
            }
        },
        notToBe: function(userValue){
            if(userValue !== val){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */