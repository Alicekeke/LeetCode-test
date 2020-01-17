/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var removeElements = function(head, val) {
  // 若当前结点指向的下一个结点是val 直接指向下下个结点 next.next
  const dummy = { next: head }  //哨兵结点，代替头结点 在遍历时为可能是val的节点服务  保持链表
  let current = dummy;  //当前结点先指向哨兵结点
  while(current && current.next) {
    let next = current.next
    if(next.val == val) {
      current.next = next.next    //直接指向下下个结点移除
    }
    if(next.val != val) { //不用移除
      current = next
    }
  }
  return dummy.next //返回dummy指向的下一个结点

};

// 构造函数new出来
const n1 = new ListNode(0);
const n2 = new ListNode(1);
const n3 = new ListNode(2);
const n4 = new ListNode(3);
const n5 = new ListNode(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

console.log(n1, 2);