function ListNode (val) {
  this.val = val;
  this.next = null;
}

var partition = function(head, x) {
  // 虚拟节点 工具人(划掉) 工具节点
  var smaller = anotherSmaller = new ListNode(-1);  //1. -1是一个垫片 承接原链表中的头结点   2. anotherSmall保存着对smaller节点的引用
  var bigger = anotherBigger = new ListNode(-1);
  while(head) {
    // console.log(head.val)
    if(head.val < x) {
      smaller.next = head //进入较小值分区
      smaller = smaller.next
    } else {
      bigger.next = head
      bigger = bigger.next
    }
    // 合并两个分区 问题来了 bigger的next应该是head最大的那个值 怎么
    head = head.next
  }
  smaller.next = anotherBigger.next //anotherBigger的下一个节点 就是bigger刚分区进入的第一个节点
  bigger.next = null  //链表的最后一个节点都为空
  return anotherSmaller.next
}

const n1 = new ListNode(1);
const n2 = new ListNode(4);
const n3 = new ListNode(7);
const n4 = new ListNode(2);
const n5 = new ListNode(3);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(partition(n1,3 ));


// console.log(n1)

