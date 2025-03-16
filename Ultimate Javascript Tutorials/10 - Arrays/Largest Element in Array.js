// Given an array arr[].
// The task is to find the largest element and return it.

const findLargestElement = (arr, n) => {
  let largestElement = -1;
  for (let i = 0; i < n; i++) {
    let currElement = arr[i];
    if (currElement > largestElement) {
      largestElement = currElement;
    }
  }
  return largestElement;
};

let arr = [1, 8, 7, 56, 90];
const result = findLargestElement(arr, arr.length);
console.log(result);
