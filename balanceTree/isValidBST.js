/**
 * 题目描述
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

    假设一个二叉搜索树具有如下特征：

    1. 节点的左子树只包含小于当前节点的数。
    2. 节点的右子树只包含大于当前节点的数。
    3. 所有左子树和右子树自身必须也是二叉搜索树。

  解题思路： 
      先遍历出所有结点，中序遍历递增顺序
      中序遍历 遍历顺序：左子树 > 结点 -> 右子树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let inOrderList = [];

  function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    inOrderList.push(node.val);
    inOrder(node.right);
  }
  // 从根节点开始遍历 返回结点数组
  inOrder(root)
  for (let i = 0; i < inOrderList.length - 1; i++) {
    // 确保遍历出的结点是递增 ==> 平衡树
    if (inOrderList[i] >= inOrderList[i + 1]) { //结点相等的情况！
      return false
    }
  }
  return true
};