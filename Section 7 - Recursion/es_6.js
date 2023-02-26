/**
 * Write a recursive function called reverse which
 * accepts a string and returns a new string in reverse.
 */

function reverse(str) {
    if (str.length === 1) return str;
    return reverse(str.substr(1)) + str[0];
}
