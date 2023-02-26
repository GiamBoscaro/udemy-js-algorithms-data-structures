/**
 * Write a function called stringifyNumbers which takes in an object
 * and finds all of the values which are numbers and converts them to
 * strings. Recursion would be a great way to solve this!
 */

function stringifyNumbers(obj) {
    const newObj = {};
    for (let k in obj) {
        const data = obj[k];
        if (typeof data === 'object' && !Array.isArray(data)) {
            newObj[k] = stringifyNumbers(data);
        } else if (typeof data === "number") {
            newObj[k] = data.toString();
        } else {
            newObj[k] = data;
        }
    }
    return newObj;
}