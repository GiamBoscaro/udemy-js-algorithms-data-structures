/**
 * Implement a stack
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const element = new Node(val);
        if (!this.last) {
            this.last = element;
            this.first = this.last;
        } else {
            element.next = this.last;
            this.last = element;
        }
        return ++this.size;
    }

    pop() {
        if (this.size === 0) return undefined;
        const result = this.last;
        this.last = result.next;
        if (--this.size === 0) {
            this.first = null;
        }
        return result;
    }

    peek() {
        if (this.size === 0) return undefined;
        return this.last.val;
    }

    print() {
        const arr = [];
        let current = this.last;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}