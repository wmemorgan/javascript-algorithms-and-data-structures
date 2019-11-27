class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(element) {
		this.values.push(element);
		if (this.values.length > 1) {
			this.bubbleUp(element);
		}
	}

	bubbleUp(element) {
		let index = this.values.length - 1;

		while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex]
            if (element <= parent) break;
			// Swap the parent index with the element value and
            // element index with the parent value
            this.values[parentIndex] = element;
			this.values[index] = parent;
			// Set index to parentIndex value and start over
			index = parentIndex;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
// heap.insert(55);
// heap.insert(37);
// heap.insert(19);
// heap.insert(205);

console.log(heap);
