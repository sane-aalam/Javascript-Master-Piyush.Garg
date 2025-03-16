// Given an array arr[].
// The task is to find the largest element and return it.

// student1 rank
// student2 rank2

const secondLargestElement = (arr, n) => {
  let firstLargestElement = -1;
  let secondLargestElement = -1;

  for (let currindex = 0; currindex < n; currindex++) {
    let currentElement = arr[currindex];
    if (currentElement > firstLargestElement) {
      secondLargestElement = firstLargestElement;
      firstLargestElement = currentElement;
    } else if (
      currentElement < firstLargestElement &&
      currentElement > secondLargestElement
    ) {
      secondLargestElement = currentElement;
    }
  }
  return secondLargestElement;
};

let arr = [1, 8, 7, 56, 90];
const result = secondLargestElement(arr, arr.length);
console.log(result);
