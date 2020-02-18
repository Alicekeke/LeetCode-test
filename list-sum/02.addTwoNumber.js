// 两个非空链表表示两个非负的整数。其中，其各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// eg   
//    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
//    输出：7 -> 0 -> 8
//    原因：342 + 465 = 807

// 按位相加 2+5=7 ；4+6=0 （进1）；3+4+1=8
// 相加后倒序即为 实际相加的值

// 实现思路 ：先遍历两个节点 :拿到头结点依次向后遍历，若该位没有值(遍历完)则置为0
// 计算进位，parseInt进位1 则在后一个val计算加1
// 利用哨兵结点 让目标结点链接，返回哨兵结点.next
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var addTwoNumbers = function(l1, l2) {
  let dummyHeader = new ListNode(0)
  let current = dummyHeader //链接目标结点的链表
  let pCurrent = l1, qCurrent = l2;
  let carry = 0;  //进位
  while (pCurrent !== null || qCurrent !== null) {
    // 若相加数位数不一样 初始化为0
    let pVal = pCurrent !== null ? pCurrent.val : 0
    let qVal = qCurrent !== null ? qCurrent.val : 0
    let sum = pVal + qVal + carry
    carry = parseInt(sum / 10);
    // 若相加>10 取个位数  17 => 7
    let node = new ListNode(sum % 10)
    current.next = node
    current = current.next
    if(pCurrent !== null) pCurrent = pCurrent.next
    if(qCurrent !== null) qCurrent = qCurrent.next
  }
  // 判断最后一位进位是否为>0 如果为>0 需要另外一个结点存储
  if (carry > 0) {
    current.next = new ListNode(carry)
  }
  return dummyHeader.next
}

let list1 = {val: 2, next:{val: 4, next:{val:3, next: null}}}
let list2 = {val: 5, next:{val: 6, next:{val:4, next: null}}}
console.log(addTwoNumbers(list1, list2))
