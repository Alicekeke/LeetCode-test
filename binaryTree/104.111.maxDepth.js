
// 二叉树最大深度 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
// 二叉树最小深度https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

// 解题思路， 左右子树先递归向下 找到叶子结点 初始化为0，在向上爬 在左右子树深度里求最大/最小加1 直到结束
// 最大
var maxDepth = function(root) {
  if(root === null)  return 0;
 let lefth = maxDepth(root.left)
 let righth = maxDepth(root.right)
  return Math.max(lefth, righth) + 1
};

// 最小
var minDepth = function (root) {
  if(root === null)  return 0;
   let lefth = minDepth(root.left)
   let righth = minDepth(root.right)
  // 如果左或右子树为null 则取最大1 不然构不成一条路劲
  if(!root.left || !root.right) return Math.max(lefth, righth) + 1
  return Math.mmin(lefth, righth) + 1
}