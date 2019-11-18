// 部分浏览器、平台有可能不支持es6新特性
// es5解法

var distributeCandies = function (candies) {
  // 糖果种类数
  var count = 0 //种类数
  let obj = {}
  candies.forEach(function(item) {
    // 如果之前出现过
    if (!obj[item]) { //如果之前没有出现在obj对象
      obj[item] = 1 //设置标记值，表明他出现过了
      count ++ //加上种类数
    }
  });
  return count >= ( candies.length / 2 ) ? (candies.length >> 1) : count
  // 可能出现奇数除以2 出现小数的情况 位移 右移一位
}

console.log(distributeCandies([1,1,2,2,3,3]))