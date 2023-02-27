/** 
 * Implement selection sort 
 * */

function swap(arr, i1, i2) {
    return [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function selectionSort(arr) {
    if (arr.length === 0) return;

    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (i !== minIdx)
            swap(arr, i, minIdx);
    }
}