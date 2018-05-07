/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var result = [];


  while(l1.length > 0 && l2.length > 0){
    if(l1[0] < l2[0]){
      result.push(l1.shift());
    }else{
      result.push(l2.shift());
    }
  }
  return result.concat(l1, l2);
};
console.log(mergeTwoLists([1,2,4],[1,3,4]));
// js 链表？
