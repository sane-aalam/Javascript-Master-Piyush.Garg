/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj){
    // case-1 An empty object contains no key-value pairs.
    // case-2 An empty array contains no elements.

    if(Array.isArray(obj) == true){
        return obj.length == 0;
    }else{
         let arrKeyObject = Object.keys(obj);
        return (arrKeyObject.length == 0);
    }
};