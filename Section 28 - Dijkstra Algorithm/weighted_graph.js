/**
 * Implement a weighted graph
 */

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight) {
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    bfs() {
        if (this.adjacencyList.length === 0) { return []; }

        const result = [];
        const queue = [];
        const visited = {};

        const start = Object.keys(this.adjacencyList)[0];
        queue.push(start);
        visited[start] = true;
        while (queue.length > 0) {
            const vertex = queue.shift();
            result.push(vertex);
            for (let obj of this.adjacencyList[vertex]) {
                const e = obj.node;
                if (!visited[e]) {
                    visited[e] = true;
                    queue.push(e);
                }
            }
        }
        return result;
    }
}