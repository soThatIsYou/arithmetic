/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
if(reverseString(x.toString())===x.toString()){
  return true ;
}
return false;
};


function reverseString(s){
    return s.split("").reverse().join("");
}
//todo 不将整数转为字符串
//通过leetcode测试  https://leetcode-cn.com/problems/palindrome-number/description/
