/**
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
 */

function findLongestSubstring(str) {
    let support = {};
    let i = 0;
    let start = 0;
    let maxSubString = 0;
    while (i < str.length) {
        const c = str.charAt(i);
        if (!support[c]) {
            support[c] = ++i;
        } else {
            if ((i - start) > maxSubString)
                maxSubString = i - start;
            start = support[c];
            i = start;
            support = {};
        }
    }
    if ((i - start) > maxSubString)
        maxSubString = i - start;
    return maxSubString;
}
