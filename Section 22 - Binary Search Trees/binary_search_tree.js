/**
 * Implement a binary search tree
 */

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (currentNode.val === val) { return undefined; }
            if (val < currentNode.val) {
                if (!currentNode.left) {
                    currentNode.left = new Node(val);
                    return this;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = new Node(val);
                    return this;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    find(val) {
        if (!this.root) { return false; }
        let currentNode = this.root;
        while (true) {
            if (currentNode.val === val) { return true; }
            if (currentNode.val < val) {
                if (!currentNode.left) {
                    return false;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    return false;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    bfs() {
        // Implementation with List Queue
        const queue = new Queue();
        const result = [];
        queue.enqueue(this.root);
        while (queue.size > 0) {
            // dequeue returns a Queue Node, .val return its data, that is the actual Tree Node
            const node = queue.dequeue().val;
            // node.val is the numeric value of the Tree Node
            result.push(node.val);
            if (node.left)
                queue.enqueue(node.left);
            if (node.right)
                queue.enqueue(node.right);
        }
        return result;
    }

    preorder() {
        const result = [];
        const traverse = (node) => {
            result.push(node.val);
            if (node.left) { traverse(node.left); }
            if (node.right) { traverse(node.right); }
        }
        traverse(this.root);
        return result;
    }

    postorder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) { traverse(node.left); }
            if (node.right) { traverse(node.right); }
            result.push(node.val);
        }
        traverse(this.root);
        return result;
    }

    inorder() {
        const result = [];
        const traverse = (node) => {
            if (node.left) { traverse(node.left); }
            result.push(node.val);
            if (node.right) { traverse(node.right); }
        }
        traverse(this.root);
        return result;
    }
}