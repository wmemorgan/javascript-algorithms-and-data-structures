class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = this.head;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		let removedTail = this.tail;
		if (!this.head) {
			return undefined;
		} else if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}

		this.length--;
		removedTail.prev = null;
		return removedTail;
	}

	shift() {
		if (!this.head) return undefined;

		let removedHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = removedHead.next;
			this.head.prev = null;
		}

		this.length--;
		removedHead.next = null;

		return removedHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			let oldHead = this.head;
			this.head = newNode;
			this.head.next = oldHead;
			oldHead.prev = this.head;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (!this.head || index < 0 || index >= this.length) return null;
		if (this.length === 1) return this.head;

		let foundNode;
		if (index <= this.length / 2) {
			foundNode = this.head;
			for (let count = 0; count < index; count++) {
				foundNode = foundNode.next;
			}
		} else {
			foundNode = this.tail;
			for (let count = this.length - 1; count > index; count--) {
				foundNode = foundNode.prev;
			}
		}

		return foundNode;
	}

	set(index, val) {
		let currentNode = this.get(index);
		if (!currentNode) return false;
		else {
			currentNode.val = val;
		}

		return true;
	}

	insert(index, val) {
		if (!this.head || index < 0 || index >= this.length) return false;
		if (this.length === index) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		const newNode = new Node(val);
		let beforeNode = this.get(index - 1);
		let afterNode = beforeNode.next;

		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;

		this.length++;
		return true;
	}

	remove(index) {
		// Edge case checks
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) return this.pop();
		if (index === 0) return this.shift();

		let removedNode = this.get(index);
		let beforeNode = removedNode.prev;
		let afterNode = removedNode.next;

		beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // Severe connections of removedNode
    removedNode.next = null
    removedNode.prev = null
    
    this.length--;
    
		return removedNode;
	}
}

// insert(index, val) {
//   const newNode = new Node(val)
//   if (this.length === index) return this.push(newNode)

//   let currentNode = this.get(index)
//   newNode.next = currentNode
//   newNode.prev = currentNode.prev
//   currentNode.prev.next = newNode
//   currentNode.prev = newNode

//   this.length++
//   return this
// }
