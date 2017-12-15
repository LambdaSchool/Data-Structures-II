/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const newNode = new Tree(value); // creates a new tree
    this.children.push(newNode); // pushes newNode to children
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.value === value) return true; // forms the base case of contains
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.value === value) return true;
      if (child.children[0] && child.contains(value)) return true;
    }
    return false;
  }
}

module.exports = Tree;
