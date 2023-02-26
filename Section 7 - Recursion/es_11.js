/**
 * Write a recursive function called nestedEvenSum. Return the sum
 * of all even numbers in an object which may contain nested objects.
 */

function nestedEvenSum(obj) {
    let sum = 0;
    for (let k in obj) {
        const data = obj[k];
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            sum += nestedEvenSum(data);
        } else if (typeof data === "number" && data % 2 === 0) {
            sum += data;
        }
    }
    return sum;
}