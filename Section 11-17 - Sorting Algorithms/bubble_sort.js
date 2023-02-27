/** 
 * Implement bubble sort 
 * */

function swap(arr, i1, i2) {
    return [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function bubbleSort(arr) {
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 1; i < arr.length - j; i++) {
            if (arr[i - 1] > arr[i])
                swap(arr, i, i - 1);
        }
    }
}
