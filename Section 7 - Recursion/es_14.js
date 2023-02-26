/**
 * Write a function called collectStrings which accepts an
 * object and returns an array of all the values in the object
 * that have a typeof string
 */

function collectStrings(obj) {
    let newArray = [];
    for (let k in obj) {
        const data = obj[k];
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            newArray.push(...collectStrings(data));
        } else if (typeof data === "string") {
            newArray.push(data);
        }
    }
    return newArray;
}