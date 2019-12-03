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
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Hong Kong");
g.addVertex("Los Angeles");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Dallas", "Hong Kong");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Dallas", "Los Angeles");
g.addEdge("Hong Kong", "Tokyo");

console.log(g.adjacencyList);
