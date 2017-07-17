class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    const newTree = new Tree(value);
    this.children.push(newTree);
  }
  contains(arg) {
    let bool = false;
    this.children.forEach((item) => {
      for (let i = 0; i < item.children.length; i++) {
        let currentChildren = item.children[i];
        while (currentChildren !== undefined) {
          if (currentChildren.value === arg) {
            bool = true;
            return true;
          }
          currentChildren = currentChildren.children;
        }
      }
      if (item.value === arg) {
        bool = true;
        return 0;
      }
    });
    return bool;
  }
}

module.exports = Tree;
