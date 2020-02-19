/**
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
    输出:
    [
      ["ate","eat","tea"],
      ["nat","tan"],
      ["bat"]
    ]
    异位：字母相同 排列不同。
   解题：字母相同排列不同，把字母打散，按照新的排序规则（sort）再排一次,结果就相同了; hash存储; hash对象拆分数组
 */
var groupAnagrams = function(strs) {
    let hash = {}
    for(let str of strs) {
      let key = [...str].sort().join('')  //这里注意字符串没有sort方法 要转为数组
      if(hash[key] === undefined) hash[key] = []; //分类外层数组   重复的hash键会被覆盖
      hash[key].push(str) //按照key分好组
    }
    // {} => [] object.keys返回hash中键数组， 数组里面每一项也是一个数组 map按key把对象拆开 成数组
    return Object.keys(hash).map(key => hash[key])
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

// 重新排序解题讨巧 hash键值存储高效