// 设计一种算法，打印所有n对合法的的括号

/**
 * 考虑用dfs，因为它要返回所有符合条件的解，按深度遍历
 * 
 *    result: 所有结果集
 *    list: 当前的单个解  （result和list都会随着dfs的过程不断更新）
 *    pos: 记录当前的访问到的位置
 *    visited： 结点有无访问状态  （求最短路径或最优解时）
 * 
 *  当前给定了n，已知长度，不需要记录出口，n满了直接跳出。
 *  先判断left和right是否valid，在加入lst，其实也可以将所有情况加入再排除invalid，这种事先判断情况 即剪枝
 */

 /**
 * @param {number} n
 * @return {string[]}
 */
function dfs(left, right, list, result){
  if(left === 0 && right === 0){  // 左右括号都为0，退出条件
      result.push(list)
  }
  // dfs只有两种情况，加入list或不加，提前判断加入括号是否有效
  if(left > 0){   //左括号无所谓增加 有就放
      dfs(left - 1, right, list + '(', result)    //放入哪边括号 剩余-1
  }
  //已有的左括号>右括号才能放入，即剩下的左括号<右括号
  if(left < right){ 
      dfs(left, right - 1, list + ')', result)
  }
}
var generateParenthesis = function(n) {
  let result = [];
  let list = '';
  // 已知n，不需要记录当前情况来判断退出条件
  dfs(n, n, '', result);
  return result;
};