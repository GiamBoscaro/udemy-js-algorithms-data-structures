/**
 * Implement a singly linked list
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            // case when list was empty, list becomes
            // a single node list
            this.head = newNode;
            this.tail = this.head;
        } else {
            // adds new node to the current tail
            this.tail.next = newNode;
            // new tail becomes the new node
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let pre = current;
        while (current.next) {
            pre = current;
            current = current.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) { return null; }
        let i = 0;
        let node = this.head;
        while (i < index) {
            node = node.next;
            i++;
        }
        return node;
    }

    set(index, value) {
        const node = this.get(index);
        if (!node) { return false; }
        node.val = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) { return false; }
        if (index === 0) { this.unshift(value); }
        else if (index === this.length) { this.push(value); }
        else {
            const previousNode = this.get(index - 1);
            const newNode = new Node(value);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
        }
        this.length++;
        return true;
    }
    

    remove(index) {
        if (index < 0 || index >= this.length) { return null; }
        if (index === 0) {
            const nodeToBeRemoved = this.head;
            this.head = this.head.next;
            this.length--;
            return nodeToBeRemoved;
        }
        const previousNode = this.get(index - 1);
        const nodeToBeRemoved = previousNode.next;
        previousNode.next = nodeToBeRemoved.next;
        this.length--;
        return nodeToBeRemoved;
    }
    
    reverse() {
    	let currentNode = this.head;
      this.head = this.tail;
      this.tail = currentNode;
      var next;
      var previousNode = null;
    	for(let i = 0; i < this.length; i++) {
      	next = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = next;
      }
      return this;
    }
    
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}