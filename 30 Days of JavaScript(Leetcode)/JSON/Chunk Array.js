/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let sizeArray = arr.length;
  let matrix2DListContainer = [];
  let subArray = [];

  for (let i = 0; i < sizeArray; i++) {
    let element = arr[i];
    subArray.push(element);
    // current_subArray ka size = given size ke equal mil gaya which means you need to store it right now.
    // It' is chunk array one
    if (subArray.length === size) {
      matrix2DListContainer.push([...subArray]);
      // create new_subarray with new size
      subArray = [];
    }
  }

  // subArray size bacha hua size-1 size-2 size-3 ka bhi ho skta hai,
  if (subArray.length > 0) {
    matrix2DListContainer.push([...subArray]);
  }

  return matrix2DListContainer;
};

/**
 * A chunked array contains the original elements in arr, but consists of subarrays each of length size. 
 * The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
Please solve it without using lodash's _.chunk function.
 */
