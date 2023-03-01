/** 
 * Implement quick sort 
 * */

function swap(arr, i1, i2) {
    return [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let counter = start;
    const pivot = arr[counter];
    for (let j = start + 1; j <= end; j++) {
        if (arr[j] <= pivot) {
            swap(arr, j, ++counter);
        }
    }
    swap(arr, start, counter);
    return counter;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}