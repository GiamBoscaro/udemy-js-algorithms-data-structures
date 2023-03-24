/**
 * Implement a priority queue with a binary heap
 */

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push(new Node(value, priority));
        let childIndex = this.values.length - 1;
        let parentIndex = Math.floor((childIndex - 1) / 2);
        if (parentIndex < 0) { return childIndex; }
        while (parentIndex >= 0 && this.values[parentIndex].priority > this.values[childIndex].priority) {
            [this.values[parentIndex], this.values[childIndex]] = [this.values[childIndex], this.values[parentIndex]];
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex - 1) / 2);
        }
        return childIndex;
    }

    dequeue() {
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
                if (this.values[index].priority > this.values[leftIndex].priority) {
                    swapIndex = leftIndex;
                }
            }
            if (rightIndex < this.values.length) {
                if (this.values[index].priority > this.values[rightIndex].priority) {
                    if (swapIndex === null || this.values[rightIndex].priority < this.values[leftIndex].priority) {
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
}