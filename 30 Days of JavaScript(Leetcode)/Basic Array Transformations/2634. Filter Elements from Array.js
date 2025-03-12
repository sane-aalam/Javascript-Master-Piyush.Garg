

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// filtering function fn, return a filtered array filteredArr.
// expression fn(arr[i], i) evaluates to a truthy value.
// Map,filter,reduce(deep working)

var filter = function(arr, fn) {
    let N = arr.length;
    let filterArray = [];

    // The function filters out values that are not greater than 10
    for(let i = 0; i<N; i++){
        // this expression will be true
        if(fn(arr[i],i)){
            filterArray.push(arr[i]);
        }
    }
    // return result
    return filterArray;
};