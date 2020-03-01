/**
    编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

 *  输入：[1, 2, 3, 3, 2, 1]
    输出：[1, 2, 3]
  https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
 */

var removeDuplicateNodes = function(head) {
  let hash = {}
  var i = new ListNode(0)
  i.next = head
  while(i.next){
      if(hash[i.next.val] == 1) {
          var temp = i.next;  //出现重复。借用结点向后移
          i.next = temp.next;
          temp.next = null;
      } else {
          hash[i.next.val] = 1;   //不存在，赋值，结点向后
          i = i.next
      }
  }
  return head
};