// 20 有效括号 https://leetcode-cn.com/problems/valid-parentheses/
//  1. 栈解 (较优解)
//  2. 正则匹配替换解
// 遍历字符串 依次对比开括号 对应闭括号进栈 对比闭括号 若当前的闭括号能与栈内括号相同 则消除出栈 直到栈空 证明有效有效

var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if(s[i] == "("){
            stack.push(")");
        }else if(s[i] == "{"){
            stack.push("}");
        }else if(s[i] == "["){
            stack.push("]");
        }else if(stack.pop() != s[i] ){ 
            return false;
        }
    }
    return !stack.length;
};


// 正则匹配 遍历字符串 匹配 "() [] {}" 置换为空 因为每次都替换两个 所以只需要循环字符串长度的1/2 最后判断字符串是否空
var isValid = function(s) {
    var len=s.length/2;
for(var i=0;i<len;i++){
    s= s.replace("[]",'');
    s= s.replace("()",'');
    s= s.replace("{}",'');
}
return s.length>0 ?false:true;
};

console.log(isValid("(]"))