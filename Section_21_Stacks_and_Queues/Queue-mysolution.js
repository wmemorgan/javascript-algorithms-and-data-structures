class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = this.first;
		} else {
      this.last.next = newNode;
      this.last = newNode
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.first) return null;

    let tempNode = this.first;

    if (this.size === 1) {
      this.last = null
    }

    this.first = tempNode.next
    this.size--;
    
		return tempNode.value;
	}
}
