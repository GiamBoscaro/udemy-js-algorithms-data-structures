/**
 * Write a recursive function called flatten which accepts 
 * an array of arrays and returns a new array with all values 
 * flattened.
 */

function flatten(arr) {
    const newArray = [];
    for (let e of arr) {
        if (e instanceof Array) {
            newArray.push(...flatten(e));
        } else {
            newArray.push(e);
        }
    }
    return newArray;
}
