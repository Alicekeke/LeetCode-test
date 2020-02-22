
// 输入罗马字符 转对应整数 罗马数字是按照较大数在左 小数在右排列 注意 4 9 这种边界值 右边代表的值比左边大

// 解题方法： 1.hashmap把情况（包括特殊情况）列出，正则匹配 {效率低}
//           2. 只存有效字符，依次左->右查找 大值小值左边 做加法（）叠加，否则做减法  {较优解！内存消耗小}

// hashmap的解法注意情况的判断 遍历到最后一个直接跳出循环 不要破坏原数组；
//              到需要停下来减的情况 指针要继续往后走，不然会出现重复值

// 正则解法
var romanToInt = function(s) {
 let res = 0
 const hash = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000, 
            'IV': 4,'IX': 9,'XL': 40,'XC': 90,'CD': 400,'CM': 900,} //包括特殊情况
    //String方法match 检索所有匹配值 有/g返回捕获到的字符串数组 无/g返回捕获组
 const special = s.match(/(IV)|(IX)|(XL)|(XC)|(CD)|(CM)|(\w)/g)   
 console.log(special)
 for (let el of special) {
   res += hash[el]
 }
 return res
};



// hashmap遍历解法 
var romanToInt = function(s) {
  let res = 0
  const hash = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
  for(let i=0; i < s.length; i++){
    if (i == s.length - 1) {        //如果遍历到最后一个,直接加上其值，并跳出循环；
      res = res + hash[s[s.length - 1]];
      break;
    }
    if (hash[s[i]] < hash[s[i + 1]]) {  //右值减左值的特殊情况
        res += hash[s[i + 1]] - hash[s[i]];
        i++;  // !!! 这里指针向后 不然下一次循环对比的值会重复
    } else {
        res += hash[s[i]];
    }
  }
  return res
}


console.log(romanToInt("LVIII"))