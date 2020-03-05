// 腐烂的橘子
/**
 * 网格gird 首先考虑dfs或者bfs
 * 这里没向前一步 就把四个方向上全部污染 类似于遍历每一层级的节点，再遍历下一层，并且需要求最短路径 => 广度优先 bfs
 * 用gird[row][col] = 2 标记以访问 visited
 * 遍历与污染前进的操作 分开 函数curry调用
 */

var orangesRotting = function(grid) {
  // 1. 初始化
  let time = 0;   //腐烂经过的时间
  let queue = []; //坏橘坐标队列
  let foc = 0;    //fresh orange count = 0
  for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[i].length; j++){
         if(grid[i][j] === 2) queue.push([i, j ,0]);
         if(grid[i][j] === 1) foc++;
      }
  }
  console.log(queue, foc)

  // 开始遍历队列中的坏橘
  while(queue.length){
      let cur = queue.shift();
      console.log(cur)
      time = cur[2];//腐烂时间
      rotting(cur[0], cur[1], cur[2]);
  }

  // 处理腐烂感染过程
  function rotting(row, col, time){
  let direction = [[-1,0], [0,1], [1,0], [0,-1]]; //先四个方向（广度）遍历
  for(let d=0; d<4; d++){
  let r = row + direction[d][0];
  let c = col + direction[d][1]; //当前坐标向四个方向移动
  // 在gird内且是新鲜可感染的橘子，置2; 否则continue
  if(r<0 || r>=grid.length || c<0 || c>=grid[0].length || grid[r][c] !== 1) {continue} else {
      grid[r][c] = 2;
      foc --;
      queue.push([r, c, time+1])
  }
  }
  }
  // 最后所有橘子都一定会坏,否则就没有坏橘
  return foc > 0 ? -1 : time
};