/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

// Javascript [piysuh.garg playlist help to solve this problem]
// [how to fetch API_DATA into javascript]
// async-await used to resolve the promise
// to handle async task, we need to used promise
// - like network requests, file I/O, or database queries
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
//  This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

var addTwoPromises = async function (promise1, promise2) {
  const [num1, num2] = await Promise.all([promise1, promise2]);
  console.log(num1); // 2
  console.log(num2); // 5
  return num1 + num2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
