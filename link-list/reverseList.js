function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
  // 链表空 返回头结点
  if(!head || !head.next) return head;
  let cur = head; 
  let pre = null; // 前驱结点
  while(cur) {
    const next = cur.next; //后继结点
    cur.next = pre; //  当前结点指向前一个结点
    // 如果当前结点是头结点   后移一位
    pre = cur;
    cur = next;
  }
};

// ------递归解法-------

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const reverseList = (head) => {
  if(head == null || head.next == null) {
    return head;
  } else {
    let newHead = reverseList(head.next);
    head.next.next = head //反转
    head.next = null; //原地干掉原来的next 有newHead 没有破坏链表
    return newHead;
  }
};