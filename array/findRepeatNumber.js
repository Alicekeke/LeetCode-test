/**
 * 题目描述
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字
 */

var findRepeatNumber = function (nums) {
  let hash = {};
  // for in循环遍历的是数组的键值(索引)，而for of循环遍历的是数组的值
  for (let num of nums) {
    if (hash[num] !== undefined) {
      return num
    } else {
      hash[num] = true
    }
  }
};