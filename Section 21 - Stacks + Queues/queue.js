/**
 * Implement a queue
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) return undefined;
        const result = this.first;
        this.first = result.next;
        if (--this.size === 0) {
            this.last = null;
        }
        return result;
    }

    peek() {
        if (this.size === 0) return undefined;
        return this.first.val;
    }

    print() {
        const arr = [];
        let current = this.first;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}