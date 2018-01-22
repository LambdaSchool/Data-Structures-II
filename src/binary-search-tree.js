// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require('./queue-helper');

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value
  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value >= this.value) {
      if (this.right === null) this.right = newNode;
      else this.right.insert(newNode.value);
    }
    else {
      if (this.left === null) this.left = newNode;
      else this.left.insert(newNode.value);
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
      let containsValue = false;
      if (target === this.value) return containsValue = true;
      if (target < this.value && this.left) containsValue = this.left.contains(target);
      if (target > this.value && this.right) containsValue = this.right.contains(target);
      return containsValue;
    }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb);
    if (this.right) this.right.depthFirstForEach(cb);
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const queue = new queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (node.left) {
        queue.enqueue(node, left);
      }
      if (node.right) {
        queue.enqueue(node, right);
      }
    cb(node.value);
    }
  }
}

const primeNumbers = new BinarySearchTree(13);
primeNumbers.insert(5);
primeNumbers.insert(7);
primeNumbers.insert(23);
primeNumbers.insert(17);


module.exports = BinarySearchTree;
