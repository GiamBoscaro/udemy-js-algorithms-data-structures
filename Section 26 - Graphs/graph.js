/**
 * Implement a graph
 */

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    removeVertex(vertex) {
        for (let v of this.adjacencyList[vertex]) {
            this.removeEdge(v, vertex);
        }
        delete this.adjacencyList[vertex];
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(e => e !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(e => e !== vertex1);
    }

    dfs_recursive() {
        const result = [];
        const visited = {};
        const dfs = (vertex) => {
            if (!vertex) { return; }
            result.push(vertex);
            visited[vertex] = true;
            for (let e of this.adjacencyList[vertex]) {
                if (!visited[e]) {
                    dfs(e);
                }
            }
        }
        dfs(Object.keys(this.adjacencyList)[0]);
        return result;
    }

    dfs_iterative() {
        if (this.adjacencyList.length === 0) { return []; }

        const result = [];
        const stack = [];
        const visited = {};

        stack.push(Object.keys(this.adjacencyList)[0]);
        visited[Object.keys(this.adjacencyList)[0]] = true;
        while (stack.length > 0) {
            const vertex = stack.pop();
            result.push(vertex);
            for (let e of this.adjacencyList[vertex]) {
                if (!visited[e]) {
                    visited[e] = true;
                    stack.push(e);
                }
            }
        }
        return result;
    }

    bfs() {
        if (this.adjacencyList.length === 0) { return []; }

        const result = [];
        const queue = [];
        const visited = {};

        queue.push(Object.keys(this.adjacencyList)[0]);
        visited[Object.keys(this.adjacencyList)[0]] = true;
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            for (let e of this.adjacencyList[vertex]) {
                if (!visited[e]) {
                    visited[e] = true;
                    queue.push(e);
                }
            }
        }
        return result;
    }
}