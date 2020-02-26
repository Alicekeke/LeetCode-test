/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * #105 、 #106 、#889
 *  解题： 前序遍历preorder(root, left, right) 中序遍历inorder(left, root, right)
  * preorder = [3,9,20,15,7] 
    inorder = [9,3,15,20,7]
    前序遍历第一位root是3，根据中序root前都是左子树，root后都是右子树，依次递归，拆分，直到子树指向null
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 根据前、中序遍历
var buildTree = function(preorder, inorder) {
  // 遍历到空 直接返回null作为结点
  if(!preorder.length || !inorder.length) return null
  // 前序遍历第一个节点是根节点
  let rootVal = preorder[0]
  // 根据提供的类来创建结点
  let root = new TreeNode(rootVal)
  // 分割左右子树的节点下标
  let inorderI = inorder.indexOf(rootVal)
  // 切割左右子树 slice切割创建并新数组
  root.left = buildTree(preorder.slice(1, inorderI + 1), inorder.slice(0, inorderI))
  root.right = buildTree(preorder.slice(inorderI + 1), inorder.slice(inorderI + 1))
  return root
  };


// 同理：根据中、后序遍历
// eg:   中序遍历 inorder = [9,3,15,20,7]   left,root,right
//       后序遍历 postorder = [9,15,7,20,3]   left,right,root 
  var buildTree = function(inorder, postorder) {
    if(!inorder.length || !postorder.length) return null
    let rootVal = postorder[postorder.length-1]
    let root = new TreeNode(rootVal)
    let inorderI = inorder.indexOf(rootVal)
    // 根据index切割左右子树
    root.left = buildTree(inorder.slice(0, inorderI), postorder.slice(0,inorderI))
    root.right = buildTree(inorder.slice(inorderI + 1), postorder.slice(inorderI, postorder.length - 1))  //后序倒数第一是根节点，切到倒数第二停下
    return root
  };


  // 根据前、后序遍历
  // eg:  输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
  //      输出：[1,2,3,4,5,6,7]
  //根据前序找到左子树遍历到的第一个，就是后序左子树遍历到的最后一个
  var constructFromPrePost = function(pre, post) {
    if(!pre.length || !post.length) return null
    let rootVal = pre[0]
    let root = new TreeNode(rootVal)
    let i = post.indexOf(pre[1])  //i指明左子树个数长度
    root.left = constructFromPrePost(pre.slice(1, i+2), post.slice(0, i+1))
    root.right = constructFromPrePost(pre.slice(i+2), post.slice(i+1, post.length-1))
    return root
  };