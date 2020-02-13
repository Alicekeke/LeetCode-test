/**
 * @param {number[]} nums
 * @return {number}
 */
/* 153. 寻找旋转排序数组中的最小值
 154. 寻找旋转排序数组中的最小值 II

 题目描述
     假设按照升序排序的数组在预先未知的某个点上进行了旋转。
     ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
     请找出其中最小的元素。
 思路：二分查找
*/

// 反转后，最大值可能在中间
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor((high - low) / 2) + low; //取中间值
    if (nums[mid] > nums[high]) {
      low = mid + 1; //要取的最小值在左边
    } else if (nums[mid] === nums[high]) {
      // low = low + 1; //不好比较，随便左右
      // 这里应该high--，方便处理重复的值
      high--;
    } else {
      high = mid //最小值在左边，右边不配说自己是high，给我调过来
    }
  }
  return nums[low]
};


// 154. 寻找旋转排序数组中的最小值 II