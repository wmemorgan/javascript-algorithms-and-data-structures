class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // Edge case check
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value == current.value) return undefined;

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    // Return the value or undefined if not found
    if (!found) return undefined;
    return currentNode;
  }

  contains(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return (found = true);
      }
    }

    return found;
  }

  BFS() {
    if (!this.root) return undefined

    let node = this.root
    const queue = []
    const visited = []

    queue.push(node)

    while (queue.length > 0) {
      node = queue.shift()
      visited.push(node.value)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return visited
  }

  DFSPreOrder() {
    if (!this.root) return undefined

    const visited = []
    const current = this.root

    // Base case
    traverse(current)
    return visited

    function traverse(node) {
      visited.push(node.value)

      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
  }

  DFSPostOrder() {
    if (!this.root) return undefined

    const visited = []
    const current = this.root
    traverse(current)
    return visited

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)

      visited.push(node.value)
    }
  }

  DFSInOrder() {
    if (!this.root) return undefined

    const visited = []
    const current = this.root
    traverse(current)
    return visited

    function traverse(node) {
      if (node.left) traverse(node.left)
      visited.push(node.value)
      if (node.right) traverse(node.right)
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log("DFSPreOrder", tree.DFSPreOrder())
console.log("DFSPostOrder", tree.DFSPostOrder())