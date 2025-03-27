/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  // reduce the depth according to dimensional
  // currentvalue = Ek Number simple push kar do
  // currentValue = ek array, reduce depth-1 call for it

  // base case
  if (n <= 0) {
    return arr;
  }

  let res = [];

  function insert(arr, n) {
    // every recusive calls - new size of array
    for (let i = 0; i < arr.length; i++) {
      // n more than 0 ho chaiye to call convert into next flat array
      if (Array.isArray(arr[i]) && n > 0) {
        let newarray = arr[i];
        insert(newarray, n - 1); // recusive calls
      } else {
        res.push(arr[i]);
      }
    }
  }

  insert(arr, n);

  return res;
};
