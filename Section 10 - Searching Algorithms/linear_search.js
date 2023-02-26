/**
 * Write a function called linearSearch which accepts an
 * array and a value, and returns the index at which the
 * value exists. If the value does not exist in the array,
 * return -1. 
 * Don't use indexOf to implement this function!
 */

function linearSearch(a, v) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === v) return i;
    }
    return -1;
}