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
