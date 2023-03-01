/** 
 * Implement merge sort 
 * */

function merge(a1, a2) {
    let i = 0; let j = 0;
    let result = [];
    // Stops when completes the iteration of one of
    // the two arrays
    while (i < a1.length && j < a2.length) {
        if (a1[i] <= a2[j]) {
            result.push(a1[i]);
            i++;
        } else {
            result.push(a2[j]);
            j++;
        }
    }
    // Pushes the remaining values
    result = result.concat(a1.slice(i));
    result = result.concat(a2.slice(j));
    return result;
}

function mergeSort(a) {
	if (a.length <= 1) return a;
	const middle = Math.floor(a.length/2);
	const a1 = mergeSort(a.slice(0, middle));
	const a2 = mergeSort(a.slice(middle));
 	return merge(a1, a2);
}