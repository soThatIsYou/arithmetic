/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
  let len = s.length;
  let flag = true;
  for (let i = 0; i < len; i++) {
    let char = s.charAt(i);
    let isEmpty = stack.length === 0;
    let stackTop = stack[stack.length - 1];

    const match = function (matchStr) {
      if (!isEmpty && stackTop === matchStr) {
        stack.pop();
      } else {
        flag = false;
      }
    }

    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    } else if (char === ']') {
      match('[')
    } else if (char === '}') {
      match('{')
    } else if (char === ')') {
      match('(');
    } else {
      return false;
    }
  }
  if(stack.length !== 0) {
    return false;
  }else {
    return flag;
  }
};

//https://leetcode-cn.com/problems/valid-parentheses/description/
