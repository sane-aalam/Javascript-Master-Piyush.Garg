/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

// Array.reduce(total,num,index,array){}

// fn(val, nums[1]) - function behide the sence working
// working init - starting_value = 0;
// starting_value = 0 + 1
// starting_value = 1 + 2 = 3
// starting_value = 3 + 4 = 7 
var reduce = function(nums, fn, init) {
    // give in an initial value init which we can consider to perform the reduce method 
    let total = init;
    for(let i = 0; i<nums.length; i++){
        total = fn(total,nums[i]);
    }
    return total;
};