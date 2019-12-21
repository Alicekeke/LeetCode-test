const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 5
      },
      right: {
        val: 6,
        left: {
          val: 8
        }
      }
    },
    right: {
      val: 7,
      right: {
        val: 9
      }
    }
  },
  right: {
    val: 3
  }
}

let arr = []
// 手动维护一个栈
const preOrder = function (tree) {
  if (tree) {
    arr.push(tree.val)
    preOrder(tree.left)
    preOrder(tree.right)
  }
  return arr
}
console.log(preOrder(tree))

// 爆栈
// function foo () {
//   foo()
// }
// foo()

// 遍历二叉树
// 只能操作数组的末尾一项
function loopPreOrder(tree) {
  let stack = []
  let res = []
  let current = tree
  stack.push(current)
  while (stack.length > 0) {
    while (current) {
      res.push(current)
      stack.push(current)
      current = current.left
    }
    // 弹出左子数
    current = stack.pop()
    // 去到右子树
    current = current.right
  }
  return res
}

console.log(loopPreOrder(tree))