// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * "abcabcbb" -> a ab abc abca 发现重复 断开 再连着重复地方向后找没有意义 abc abcb 断  返回abc 长度3
*  "pwwkew" -> p pw pww wk wke 返回wke  
    不重复 一直往后叠加 重复断开 left向后走
    需要left监控子串头 hash存储当前子串  max记录目前出现的最长子串长度
    o(1) hash复杂度为常数
 */

var lengthOfLongestSubstring = function(s) {
  let hash = {};
  let left = 0;
  let max = 0;
  let ssize = s.length
  for(let i=0; i<ssize; i++) {
    let v = s[i] 
    // 循环取当前字符 再一次判断 left ~ i 之间存不存在 v ？ 存在 断开 再向后叠加无意义，不存在 max++
    if(hash[v] >= left) {   //取到的索引在left之后 即出现了重复值
      left = hash[v] + 1;   //放弃出现重复的子串 在出现重复的索引往后加1再查找
    } 
    hash[v] = i   //遍历过的数据下标都存在hash中 独立索引 出现重复hash键对应值加1
    let currentLen = i - left + 1   //终点-起点+1
    if(max < currentLen) max = currentLen
  } 
  return max  
};