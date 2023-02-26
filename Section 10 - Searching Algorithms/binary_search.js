/**
 * Write a function called binarySearch which accepts a sorted array
 * and a value and returns the index at which the value exists.
 * Otherwise, return -1.
 */

// SOLUTION 1
function binarySearch(a, v) {
    let currentArray = a;
    let offset = 0;

    while (currentArray.length > 0) {
        const middle = Math.floor(currentArray.length / 2);
        const middleElement = currentArray[middle];
        if (middleElement === v) return offset + middle;
        if (middleElement > v) {
            currentArray = currentArray.slice(0, middle);
        } else {
            offset = offset + middle + 1;
            currentArray = currentArray.slice(middle + 1);
        }
    }

    return -1;
}

// SOLUTION 2
function binarySearch(a, v) {
    var start = 0;
    var end = a.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (a[middle] !== v && start <= end) {
        if (v < a[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return a[middle] === v ? middle : -1;
}