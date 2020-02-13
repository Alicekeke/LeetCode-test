  // 110.平衡二叉树
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
  var isBalanced = function (root) {
    // 传任意结点，返回当前节点的高度
    function height(node) {
      if (node === null) {
        return 0; //叶子结点，返回null
      }
      let h = Math.max(height(node.left), height(node.right)) + 1; //递归 在左右子树选较大高度值，加一即当前结点高度
      return h;
    }
    if (!root) return true; //该树没有任何叶子结点，即为平衡二叉树
    // 判断高度差绝对值是否超过1，且要递归判断每个节点的子树
    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
  };