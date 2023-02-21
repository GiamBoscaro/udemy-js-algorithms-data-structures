/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)
Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function sameFrequency(n1, n2) {
    const support = {};
    for (let c of n1.toString()) {
        support[c] = ++support[c] || 1;
    }
    const support2 = {};
    for (let c2 of n2.toString()) {
        support2[c2] = ++support2[c2] || 1;

    }
    for (let k in support) {
        if (support[k] !== support2[k]) {
            return false
        }
    }
    return true;
}
