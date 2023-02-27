/** 
 * Implement insertion sort 
 * */

function insertionSort(arr) {
    if (arr.length === 0) return [];
    let currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        let j = i - 1;
        while (arr[j] > currentVal) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = currentVal;
    }
}