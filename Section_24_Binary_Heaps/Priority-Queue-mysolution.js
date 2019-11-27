class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
		this.timestamp = Date.now();
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		if (this.values.length > 1) {
			this.bubbleUp(newNode);
		}
	}

	bubbleUp(element) {
		let index = this.values.length - 1;

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];
			if (element.priority >= parent.priority) break;
			// Swap the parent index with the element value and
			// element index with the parent value
			this.values[parentIndex] = element;
			this.values[index] = parent;
			// Set index to parentIndex value and start over
			index = parentIndex;
		}
	}

	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}

		return min;
	}

	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority < element.priority) {
					swap = leftChildIdx;
				} else if (leftChild.priority === element.priority) {
					if (leftChild.timestamp < element.timestamp) {
						swap = leftChildIdx;
					}
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority < element.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				} else if (rightChild.priority === element.priority) {
					if (rightChild.timestamp < element.timestamp) {
						swap = rightChildIdx;
					}
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("child birth", 3);
ER.enqueue("alergic reaction", 1);
console.log(ER);
