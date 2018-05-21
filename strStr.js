/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack == null || needle == null || needle.length > haystack.length) {
    return -1;
  }
  if (haystack.length === 0 || needle.length === 0) {
    return 0;
  }

  for (let i = 0; i <= (haystack.length - needle.length); i += 1) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
//https://leetcode-cn.com/problems/implement-strstr/description/

//emmmm.....明明有这个函数
