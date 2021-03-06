const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert = (value) => {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          // go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          // go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  };
  lookup = (value) => {
    let currentNode = this.root;
    while (true) {
      if (!currentNode.left && !currentNode.right) null;
      if (value === currentNode.value) {
        return currentNode;
      } else {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        }
      }
    }
  };

  DFSInorder = () => {
    return traverseInorder(this.root, []);
  };
  DFSPostorder = () => {
    return traversePostorder(this.root, []);
  };
  DFSPreorder = () => {
    return traversePreorder(this.root, []);
  };
  //remove
}

const traverseInorder = (node, list) => {
  if (node.left) {
    traverseInorder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInorder(node.right, list);
  }
  return list;
};

const traversePreorder = (node, list) => {
  list.push(node.value);
  if (node.left) {
    traversePreorder(node.left, list);
  }
  if (node.right) {
    traversePreorder(node.right, list);
  }
  return list;
};

const traversePostorder = (node, list) => {
  if (node.left) {
    traversePostorder(node.left, list);
  }
  if (node.right) {
    traversePostorder(node.right, list);
  }
  list.push(node.value);
  return list;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
// console.log(tree.DFSPostorder());
tree.DFSPostorder();
