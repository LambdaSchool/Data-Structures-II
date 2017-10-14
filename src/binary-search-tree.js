// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
const Queue = require('./queue-helper');

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
    const myTree = new BinarySearchTree(value);
    if (this.value > value) {
      if (this.left === null) {
        this.left = myTree;
      } else {
        this.left.insert(value);
      } 
    } else if (this.value < value) {
      if (this.right === null) {
        this.right = myTree;
      } else {
        this.right.insert(value);
      }
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.value > target) {
      if (this.left && this.left.contains(target)) {
        return true;
      }
    }
    if (this.value < target) {
      if (this.right && this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb);
    }
  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {
    const newQueue = new Queue();
    newQueue.enqueue(this);
    while (!newQueue.isEmpty()) {
      const lookAt = newQueue.dequeue();
      if (lookAt.left) {
        newQueue.enqueue(lookAt.left);
      }
      if (lookAt.right) {
        newQueue.enqueue(lookAt.right);
      }
      cb(lookAt.value);
    }
  }
}

module.exports = BinarySearchTree;
