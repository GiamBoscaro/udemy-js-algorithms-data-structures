/** 
 * Implement radix sort (integers only)
 * */

function getDigit(v, p) {
    return Math.floor(Math.abs(v) / 10 ** p) % 10;
}

function digitsCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitsCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    const k = maxDigits(arr);
    for (let i = 0; i < k; i++) {
        let support = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            const d = getDigit(arr[j], i);
            support[d].push(arr[j]);
        }
        arr = [].concat(...support);
    }
    return arr;
}