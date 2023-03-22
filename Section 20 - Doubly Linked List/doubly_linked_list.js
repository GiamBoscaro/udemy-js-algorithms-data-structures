/**
 * Implement a doubly linked list
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        this.length--;
        const result = this.tail;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return result;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        result.prev = null;
        return result;
    }

    shift() {
        if (!this.head) return undefined;
        this.length--;
        const result = this.head;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return result;
        }
        this.head = this.head.next;
        this.head.prev = null;
        return result;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) { return null; }
        if (index < this.length/2) {
            let i = 0;
            let node = this.head;
            while (i < index) {
                node = node.next;
                i++;
            }
            return node;
        } else {
            let i = this.length -1;
            let node = this.tail;
            while (i > index) {
                node = node.prev;
                i--;
            }
            return node;
        }
    }

    set(index, value) {
        const node = this.get(index);
        if (!node) { return false; }
        node.val = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index >= this.length) { return false; }
        if (index === 0) { this.unshift(value); }
        else if (index === this.length) { this.push(value); }
        else {
            const previousNode = this.get(index - 1);
            const newNode = new Node(value);
            newNode.next = previousNode.next;
            newNode.prev = previousNode;
            previousNode.next = newNode;
        }
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) { return undefined; }
        if (index === 0) { return this.shift(); }
        if (index === this.length -1) { return this.pop(); }
        const previousNode = this.get(index - 1);
        const nodeToBeRemoved = previousNode.next;
        previousNode.next = nodeToBeRemoved.next;
        nodeToBeRemoved.next.prev = previousNode;
        nodeToBeRemoved.next = null;
        nodeToBeRemoved.prev = null;
        this.length--;
        return nodeToBeRemoved;
    }

    reverse() {
        let currentNode = this.head;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        for (let i = 0; i < this.length; i++) {
            let next = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = next;
            currentNode = next;
        }
        return this;
    }

    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}