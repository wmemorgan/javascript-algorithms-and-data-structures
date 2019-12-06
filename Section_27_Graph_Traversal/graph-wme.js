class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
	}

	addEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1].push(vertex2);
			this.adjacencyList[vertex2].push(vertex1);
		} else {
			console.log("Vertex does not exist");
			return undefined;
		}
	}

	removeEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
				v => v !== vertex2
			);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
				v => v !== vertex1
			);
		} else {
			console.log("Vertex does not exist");
			return undefined;
		}
	}

	removeVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			if (this.adjacencyList[vertex].length > 0) {
				for (let edge of this.adjacencyList[vertex]) {
					this.removeEdge(vertex, edge);
				}
			}

			delete this.adjacencyList[vertex];
		} else {
			console.log("Vertex does not exist");
			return undefined;
		}
	}

	dfsRecursive(startingVertex) {
		const results = [];
		const visitedVertices = {};
		const adjacencyList = this.adjacencyList;
		function dfs(vertex) {
			if (!vertex) return null;
			visitedVertices[vertex] = true;
			results.push(vertex);

			for (let neighbor of adjacencyList[vertex]) {
				if (!visitedVertices[neighbor]) dfs(neighbor);
			}
		}

		dfs(startingVertex);

		console.log(`visitedVertices: `, visitedVertices);
		return results;
	}

	dfsIterative(startingVertex) {
		const stack = [startingVertex];
		const visitedVertices = {};
		const results = [];

		while (stack.length) {
			const removedVertex = stack.pop();
			if (!visitedVertices[removedVertex]) {
				visitedVertices[removedVertex] = true;
				results.push(removedVertex);

				for (let neighbor of this.adjacencyList[removedVertex]) {
					if (!visitedVertices[neighbor]) stack.push(neighbor);
				}
			}
		}

		return results;
    }
    
    bfs(startingVertex) {
        const queue = [startingVertex]
        const visitedVertices = {};
        const results = [];

        while (queue.length) {
            const removedVertex = queue.shift()
            if (!visitedVertices[removedVertex]) {
                visitedVertices[removedVertex] = true
                results.push(removedVertex)

                for (let neighbor of this.adjacencyList[removedVertex]) {
                    if (!visitedVertices[neighbor]) queue.push(neighbor)
                }

            }
        }

        return results
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//console.log(`BEFORE: `, g.adjacencyList)
console.log("dfsRecursive: ", g.dfsRecursive("A"));
console.log("dfsIterative: ", g.dfsIterative("A"));
console.log("bfs: ", g.bfs("A"));
//console.log(`AFTER: `, g.adjacencyList)
