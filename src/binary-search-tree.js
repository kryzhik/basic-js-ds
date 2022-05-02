const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

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
// class BinarySearchTree {
//   constructor() {
//     this.rootin = null;
//   }
  
//   root() {
//    return this.rootin.data;  
//   }

//   add(data) {
//     let newNode = new Node(data);
//     if (this.rootin === null) {
//      this.rootin = newNode;
//     }
//     else {
//       this.insertNode(this.rootin, newNode);
//     }
//     // let current = this.root;
//     // const addSide = side => {
//     //   if (!current[side]) {
//     //     current[side] = node;
//     //     return this;
//     //   };
//     //   current = current[side];
//     // };
//     // while (true) {
//     //   if (data === current.data) {
//     //     current.count++;
//     //     return this;
//     //   };
//     //   if (data < current.data) addSide('left');
//     //   else addSide('right');
//     // };
//   }
//   insertNode(node, newNode) {
//     if (newNode.data < node.data) {
      
//       if (node.left === null) {
//         node.left = newNode;
//       } else {
//       this.insertNode(node.left,newNode);
//       }
//     } else {
//       if (node.right === null) {
//         node.right = newNode;
        
//       } else {
//       this.insertNode(node.right,newNode);
//       }
//     } 
//   }
  

//   has(data) {
//     const found = this.find(data);
//     if (found) return true;
//     return false;
     
//   }

//   find(data) {
//     if (!this.rootin) return null;
//     let current = this.rootin;

//     while(current) {
//       if (data == current.data) return current.data;
//       if (current.right && data > current.data) current = current.right;
//       else current = current.left;
//     }
//     return null;
//   }

//   remove(/* data */) {
    
//   }

//   min() {
//     if (!this.rootin) return null;
//     let current = this.rootin;
//     while (current.left) {
//       current = current.left;
//     }
//     return current.data;

//   }

//   max() {
//     if (!this.rootin) return null;
//     let current = this.rootin;
//     while (current.right) {
//       current = current.right;
//     }
//     return current.data;
//   }
//   toString() {
//     return JSON.stringify(this.rootin);
//   }
// }

// let arr = new BinarySearchTree();
// arr.add(2);
// arr.add(1);
// arr.add(5);
// arr.add(7);
// arr.add(9);
// arr.add(11);
// arr.max();

// console.log(arr.toString())
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }

  root() {
    
    if (this.mainRoot === null) return 'no root';
    else return this.mainRoot.data;
    
  }
  add(data) {
    const node = this.mainRoot;
    if (node === null) {
      this.mainRoot = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  min() {
    let current = this.mainRoot;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  max() {
    let current = this.mainRoot;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.mainRoot;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  has(data) {
    let current = this.mainRoot;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.mainRoot = removeNode(this.mainRoot, data);
  }
 
   

 
  
}
let tree = new BinarySearchTree();
tree.add(2);
      tree.add(3);
      tree.add(4);
console.log(tree.root())
module.exports = {
  BinarySearchTree
};