/**
 * 26: 删除列表中的重复项
 * @param {*} nums 
 */
var removeDuplicates = function(nums) {
    const size = nums.length;
    let slowP = 0;
    
    for (let fastP = 0; fastP < size; fastP++) {
      if(nums[fastP] !== nums[slowP]) {
        slowP ++;
        nums[slowP] = nums[fastP];  //关键点 快慢指针指向的节点值不同时 慢指针替换为快指针拿到的最新的值 保证其不存在重复项 
      }
    }
    return slowP + 1  //那这样慢指针只有在每拿到不同的值时才动一次 即去重后数组count
}

console.log(removeDuplicates([1,1,2]))

// ---------链表结构-----------
function ListNode(val) {
  this.val = val
  this.next = null
  return this
}

var removeDuplicates = function(head) {
  if(head == null || head.next == null) return head;
  var cur = head;
  while(cur != next) {
    if(cur.next.val = cur.val) {
      cur.next = cur.next.next; //指向下一个的下一个节点
    } else {
      cur = cur.next  //向后移一位
    }
  }
}

const n1 = ListNode(1)  //头指针
const n2 = ListNode(2)
const n3 = ListNode(3)



/**
 * 27题：移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let size = nums.length;
    let slowP = 0;
    for(let fastP = 0; fastP < size; fastP ++) {
      if(nums[fastP] == val)  //拷贝覆盖
      {
        nums[slowP] = nums[fastP]
        slowP ++
      }
    } 
    return slowP;
};

console.log(removeElement([3,2,2,3], 2))