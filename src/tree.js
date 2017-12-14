/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    const newNode = new Tree(value);
    if (newNode) {
      this.children.push(newNode);
      return this;
    } 
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    if (this.value === value || !this.children[value]) return true;
    this.children.forEach((child) => {
      if (child && child.contains(value)) return true;
    });
    if (!this.contains(value)) return false; 
  }
}
module.exports = Tree;

