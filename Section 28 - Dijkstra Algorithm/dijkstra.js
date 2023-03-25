/**
 * Implement Dijkstra Algorithm
 */


function dijkstra(graph, start, end) {

    const init = () => {
        const keys = graph.bfs();
        keys.forEach(e => {
            previous[e] = null;
            if (e === start) {
                distances[e] = 0;
                queue.enqueue(e, 0);
            } else {
                distances[e] = Infinity;
                queue.enqueue(e, Infinity);
            }
        });
    };

    const buildPath = (vertex) => {
        const path = [];
        while (previous[vertex]) {
            path.push(vertex);
            vertex = previous[vertex];
        }
        return path.concat(vertex).reverse();
    }

    const visited = [];
    const previous = {};
    const distances = {};
    const queue = new PriorityQueue();

    init();

    while (queue.values.length > 0) {
        let currentVertex = queue.dequeue().value;
        // If the target node is reacher, builds the final path
        if (currentVertex === end) { return buildPath(currentVertex); }
        // To remember this node has been already visited
        visited.push(currentVertex);
        // All the nodes adjacent to the current one
        const adjacentNodes = graph.adjacencyList[currentVertex];
        for (let obj of adjacentNodes) {
            const node = obj.node;
            const distance = obj.weight;
            if (!visited[node]) {
                // distance of the current vertex from the start + distance of the adjacent node
                // from the current vertex = distance of the adjacent node from the start
                const totalDistance = distances[currentVertex] + distance;
                // saves the distance of the vertex from start only if
                // it is smaller than the previous one (found a shortest distance)
                if (totalDistance < distances[node]) {
                    // total distance of the adjacent node from start
                    distances[node] = totalDistance;
                    // the distance of the adjacent node from the start
                    // is calculated coming from the current vertex
                    previous[node] = currentVertex;
                    queue.enqueue(node, totalDistance);
                }
            }
        }
    }

    return undefined;
}