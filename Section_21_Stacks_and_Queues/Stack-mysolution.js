class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = this.first;
		} else {
			let tempNode = this.first;
			this.first = newNode;
			this.first.next = tempNode;
		}
		return ++this.size;
	}

	pop() {
		if (!this.first) return null;

		let tempNode = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = this.first;
		} else {
			this.first = this.first.next;
		}

		this.size--;
		return tempNode.value;
	}
}
