// 给定两个二进制字符串，返回他们的和（用二进制表示 https://leetcode-cn.com/problems/add-binary/
// 思路： 转数组 对齐（高位补零） 按位相加（每位的和对2取模 得到该位的数） 进位 该位相加>=2 进1位） 最高位根据最后剩下的进位判断是否加

var addBinary = function(a, b) {
 let res = [];
 let arr1 = a.split('');  //字符串没有push, unshift操作 要转数组
 let arr2 = b.split('');
 let n1 = arr1.length;
 let n2 = arr2.length;
 let carry = 0;
  if (n1 < n2) {
      for (var i = 0; i < n2 - n1; ++i) {   //计算两个字符串的位差
          arr1.unshift(0); //根据位差向开头加0 -> 高位补0
      }
  }
  if (n1 > n2) {
      for (var i = 0; i < n1 - n2; ++i) {
          arr2.unshift(0);  
      }
  }
  for (var i = Math.max(n1, n2) - 1; i >= 0; i--) {
     let sum = Number(arr1[i]) + Number(arr2[i]) + carry;
      res.unshift(sum % 2);     //相对2取模 sum为2 该位得0 
      carry = sum>=2 ? 1 : 0;  //保留当前进位 顺延到上一位  
  }
  // 循环外 若还有进位 最高位加1
  if (carry) {
      res.unshift(1);
  }
  return res.join('')
};

// console.log(addBinary("1010", "1011"))




// 66. 加一  https://leetcode-cn.com/problems/plus-one/
var plusOne = function (digits) {   //直接在原数组上修改
  let len = digits.length
  for(let i = len - 1; i>=0; i--) {
     if(digits[i] != 9) {
       digits[i] ++;  //非9 即在最后一位加1 && 进位加1  都是加1不管有无进位 
       break; //因为若有进位必定在最后一位进 若当前没有进位 直接加一位就可以跳出循环 返回原数组了 
     } else {
       digits[i] = 0
       if(i === 0) digits.unshift(1)  //若遍历完数组还是0 还有进位 则在最前面加一
     }
  };
  return digits
}
console.log(plusOne([9, 9, 9]))

// 该位为9 & 该位不是9