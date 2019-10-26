class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let newTail = current;

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return undefined;

		let removedHead = this.head;
		this.head = this.head.next;
		this.length--;

		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return removedHead;
	}

	unshift(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;

		let count = 0;
		let current = this.head;

		while (count < index) {
			current = current.next;
			count++;
		}

		return current;
	}

	set(index, val) {
		let node = this.get(index);
		if (!node) return false;

		node.val = val;

		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		else if (index === 0) {
			this.unshift(val);
			return true;
		} else if (index === this.length) {
			this.push(val);
			return true;
		}

		let newNode = new Node(val);
		let prevNode = this.get(index - 1);

		newNode.next = prevNode.next;
		prevNode.next = newNode;
		this.length++;

		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let prevNode = this.get(index - 1);
		let removedNode = prevNode.next;
		prevNode.next = prevNode.next.next;
		this.length--;

		return removedNode;
	}

	print() {
		const arr = []
		let current = this.head
		while (current) {
			arr.push(current.val)
			current = current.next
		}
		return arr
	}

	reverse() {
		let currentNode = this.head
		this.head = this.tail
		this.tail = currentNode
		let prevNode = null
		let nextNode

		for (let i = 0; i < this.length; i++) {
			nextNode = currentNode.next
			currentNode.next = prevNode
			prevNode = currentNode
			currentNode = nextNode
		}

		return this.print()
	}
}
