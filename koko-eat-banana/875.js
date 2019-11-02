// 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。
// 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。
// 如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  
// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。
// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）
// K一直是一个固定值

/**
 * 
 * @param {array} piles
 * @param {int} H
 * @return {int} lo
 * @func 求最慢的吃法
 */ 

/* 
1 .. 11  时间复杂度 O(n)

二分查找  时间复杂度 log2N => 8  3
5根/小时，若可以吃到H小时，只要再去左边找就可以，反之，找右边；每次都可以放掉一般的尝试
1 .. 4 找2
3 .. 4 找到4 
*/

const canEatAllBananas = (piles, H, mid) => {
    // 能吃完
    let h = 0;
    for (let pile of piles) {
      h += Math.ceil(pile / mid);
    }
    return h <= H;
  }
  
  const minEatingSpeed = (piles, H) => {
    let lo = 1;
    let hi = Math.max(...piles);
    let mid = 0;
    
    // console.log(1 .. hi   最小)  中间试下;
    while(lo <= hi) {
      mid = lo + ((hi-lo) >> 1);
      console.log(lo, mid, hi, '++++');
      if (canEatAllBananas(piles, H, mid)) {
        hi = mid - 1; // 取它的左边 
      } else {
        lo = mid + 1; //取它的右边
      }
    }
    console.log(lo, mid, hi, '------');
    return lo;
  }
  console.log(minEatingSpeed([3, 6, 7, 11], 8));
  