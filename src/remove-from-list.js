const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

  let list = l.filter(el=> el !== k);
  console.log(list);
  const result = {};
  
  for (let i = 0; i < list.length; i++) {
    const newNode = new ListNode(list[i]);

  // Если нет head или tail, делаем новым узлом head и tail.
  if (!result.head || !this.tail) {
    result.head = newNode;
    result.tail = newNode;

  }

  // Присоединяем новый узел к концу связного списка.
  // Берём последний узел и указываем, что его next будет новым узлом.
  result.tail.next = newNode;

  // Переназначаем tail на новый узел.
  result.tail = newNode;

  
  }
  return result; 
}
console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
module.exports = {
  removeKFromList
};
