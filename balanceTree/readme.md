# 求解二叉树的常用套路 —— 递归

何为递归？程序反复调用自身即是递归。这就说明它每一级的功能都是一样的，因此我们只需要关注一级递归的解决过程即可。    

关于使用递归：我们需要关心的主要是以下三点：

- 整个递归的终止条件。
- 一级递归需要做什么？
- 应该返回给上一级的返回值是什么？


因此，也就有了我们解递归题的三部曲：

- 找整个递归的终止条件：递归应该在什么时候结束？
- 找返回值：应该给上一级返回什么信息？
- 本级递归应该做什么：在这一级递归中，应该完成什么任务？

### 例1：二叉树最大深度
套用模板：
- 找终止条件。 什么情况下递归结束？当然是树为空的时候，此时树的深度为0，递归就结束了。

- 找返回值。 应该返回什么？题目求的是树的最大深度，我们需要从每一级得到的信息自然是当前这一级对应的树的最大深度，因此我们的返回值应该是当前树的最大深度，这一步可以结合第三步来看。

- 本级递归应该做什么。 首先，还是强调要走出之前的思维误区，此时就三个节点：root、root.left、root.right，其中根据第二步，root.left和root.right分别记录的是**当前**root的左右子树的最大深度。那么本级递归应该做什么就很明确了，自然就是在root的左右子树中选择较大的一个，再加上1就是以root为根的子树的最大深度了，然后再返回这个深度即可。

```js
var maxDepth = function(root) {
    if(root === null){
        return 0;
    }
    let h = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    return h
};
```

### 平衡二叉树

1. 二叉搜索树 = 二叉树 + （左节点所有值小于根节点 && 右节点所有值大于于根节点 ）
2. 带有平衡条件：每个结点的左右子树的高度之差的绝对值不大于1

为什么需要AVL ？      
在二叉搜索树中, 如果我们按照顺序插入元素, 那么二叉搜索树会形成最坏的情况: 退化为链表, AVL就是为了解决这种不平衡的问题       

核心思路：      
1. height函数传任意结点，递归返回当前结点的高度   
2. 判断高度差绝对值是否超过1 并且 递归调用isBalance判断当前每个节点的**子树是否为平衡二叉树**



- [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
- [二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
- [两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)
- [平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/comments/)
- [对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/comments/)
- [翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
- [合并二叉树](https://leetcode-cn.com/problems/merge-two-binary-trees/)
- [最大二叉树](https://leetcode-cn.com/problems/maximum-binary-tree/)
- [删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)