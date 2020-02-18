// 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）
/**
 *     3                  [
      / \                  [3],
      9  20       =>       [9,20], 
        /  \               [15,7]
      15   7              ]

多看几遍题解 https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-ci-bian-li-by-leetcode/

  BFS宽度优先搜索   level : [] 默认空数组 遍历的层级
  递归时在于把 '层' 这个信息向下传

*/


var levelOrder = function(root) {
  let levels = []
  if(!root) {
    return levels
  }
  function walk(node, level) {  //遍历当前结点，层
    if(levels.length === level) {   //当前层=总记录的层 => 首次走到当前数组 push一个空数组
      levels.push([])
    }
    levels[level].push(node.val)  //同一层级 push进当前同数组
    if(node.left) {             //分别遍历左右结点
      walk(node.left, level + 1)
    }
    if(node.right) {
      walk(node.right, level + 1)
    }
  }
  walk(root, 0)
  return levels;
}


