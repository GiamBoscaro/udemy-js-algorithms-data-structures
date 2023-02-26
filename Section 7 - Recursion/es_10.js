/**
 * Write a recursive function called capitalizeFirst.
 * Given an array of strings, capitalize the first
 * letter of each string in the array.
 */

function capitalizeFirst(a) {
    if (a.length === 0) return [];
    let str = a[0];
    str = str[0].toUpperCase() + str.substring(1);
    return [str].concat(capitalizeFirst(a.slice(1)));
}