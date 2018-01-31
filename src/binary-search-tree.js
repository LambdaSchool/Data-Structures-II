// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
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
    if (this.value === null) {
      let bst = new BinarySearchTree(value);
      console.log('new', value);
      return;
    }
    if (value > this.value) {
      console.log('greater than', value);
      if (!this.right) {
        this.right = value;
        console.log('this.right', value);
        return;
      }
      let right = this.right;
      console.log(right.insert(value));
      right.insert(value);
    }
    if (value <= this.value) {
      if (!this.left) {
        this.left = value;
        return;
      }
      let left = this.left;
      console.log(left.insert(value));
      left.insert(value);
    }
  }
  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively
  contains(target) {

  }
  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process
  depthFirstForEach(cb) {

  }
  // Traverses the tree in a breadth-first manner, i.e. in layers, starting
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.
  breadthFirstForEach(cb) {

  }
}

let binarySearchTree = new BinarySearchTree(5);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(6);

module.exports = BinarySearchTree;
