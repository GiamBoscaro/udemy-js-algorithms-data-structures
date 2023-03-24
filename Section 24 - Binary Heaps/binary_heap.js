/**
 * Implement a max binary heap
 */

class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let childIndex = this.values.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);
        while (this.values[parentIndex] < this.values[childIndex]) {
            [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]];
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
        return childIndex;
    }

    extract() {
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        const result = this.values.pop();
        if (this.values.length === 0) { return result; }
        let index = 0;
        let leftIndex, rightIndex;
        while (true) {
            leftIndex = 2 * index + 1;
            rightIndex = 2 * index + 2;
            let swapIndex = null;
            if (leftIndex < this.values.length) {
                if (this.values[index] < this.values[leftIndex]) {
                    swapIndex = leftIndex;
                }
            }
            if (rightIndex < this.values.length) {
                if (this.values[index] < this.values[rightIndex]) {
                    if (swapIndex === null || this.values[rightIndex] > this.values[leftIndex]) {
                        swapIndex = rightIndex;
                    }
                }
            }
            if (swapIndex === null) { break; }
            [this.values[index], this.values[swapIndex]] = [this.values[swapIndex], this.values[index]];
            index = swapIndex;
        }
        return result;
    }

    max() {
        return this.values[0];
    }
}