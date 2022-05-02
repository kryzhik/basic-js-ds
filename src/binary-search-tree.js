const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//     this.count = 0;
//   }
// }
class BinarySearchTree {
  constructor() {
    this.rootin = null;
  }
  
  root() {
   return this.rootin.data;  
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootin === null) {
     this.rootin = newNode;
    }
    else {
      this.insertNode(this.rootin, newNode);
    }
    // let current = this.root;
    // const addSide = side => {
    //   if (!current[side]) {
    //     current[side] = node;
    //     return this;
    //   };
    //   current = current[side];
    // };
    // while (true) {
    //   if (data === current.data) {
    //     current.count++;
    //     return this;
    //   };
    //   if (data < current.data) addSide('left');
    //   else addSide('right');
    // };
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      
      if (node.left === null) {
        node.left = newNode;
      } else {
      this.insertNode(node.left,newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        
      } else {
      this.insertNode(node.right,newNode);
      }
    } 
  }
  

  has(data) {
    const found = this.find(data);
    if (found) return true;
    return false;
     
  }

  find(data) {
    if (!this.rootin) return null;
    let current = this.rootin;

    while(current) {
      if (data == current.data) return current.data;
      if (current.right && data > current.data) current = current.right;
      else current = current.left;
    }
    return null;
  }

  remove(/* data */) {
    
  }

  min() {
    if (!this.rootin) return null;
    let current = this.rootin;
    while (current.left) {
      current = current.left;
    }
    return current.data;

  }

  max() {
    if (!this.rootin) return null;
    let current = this.rootin;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
  toString() {
    return JSON.stringify(this.rootin);
  }
}

let arr = new BinarySearchTree();
arr.add(2);
arr.add(1);
arr.add(5);
arr.add(7);
arr.add(9);
arr.add(11);
arr.max();

console.log(arr.toString())
 
module.exports = {
  BinarySearchTree
};