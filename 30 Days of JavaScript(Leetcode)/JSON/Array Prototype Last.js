/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function () {
  // If there are no elements in the array, it should return -1.
  // Give Array size will be empty, return -1
  // Otherwise we have to return last_Element of the array
  // this == Array (global level par)
  if (this.length == 0) {
    return -1;
  }
  return this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
