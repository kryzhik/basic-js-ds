const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
//  class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.size = null;
//   }
//   getUnderlyingList() {
//     let current = this.first;
//     while (current) {
//         console.log(current.value)
//         current = current.next;
//     }
//   }

//   enqueue(value) {
//     let node = new ListNode(value);
//     if (!this.first) {
//       this.first = node;
//       this.size = node;
      
//     } else {
//       this.size.next = node;
//       this.size = node;
//     }

//   }

//   dequeue() {
//     let newNode;
//     if (this.first !== null) {
//         newNode = this.first.value;
//         this.first = this.size.next;
        
//     }
//     console.log(newNode);
//     return newNode;
    
//   }
// }


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    // this.length = 0;
  }
  getUnderlyingList() {
    // let current = this.head;
    // while (current) {
    //     JSON.stringify(current.value);
    //     current = current.next;
    // }
    return JSON.stringify(this.head);
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
      
    } else {
      this.head = node;
      this.tail = node;
    }
    // this.length++;

  }

  dequeue() {
    let current = this.head;
    this.head = this.head.next;
    
    return current.value;
    
  }
}
module.exports = {
  Queue
};
let arr = new Queue();
arr.enqueue(1);
arr.enqueue(2);
arr.enqueue(2);
arr.enqueue(2);
arr.enqueue(2);
arr.enqueue(2);
arr.getUnderlyingList();
arr.dequeue();
console.log(arr.getUnderlyingList())
