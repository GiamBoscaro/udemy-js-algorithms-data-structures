/**
 * Write a recursive function called isPalindrome which returns
 * true if the string passed to it is a palindrome (reads the
 * same forward and backward). Otherwise it returns false.
 */

function isPalindrome(str) {
    if (str[0] !== str[str.length - 1]) return false;
    if (str.length < 2) return true;
    return isPalindrome(str.substring(1, str - length - 1));
}