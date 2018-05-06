/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {


  let result;
  if(x<0){
    x = Math.abs(x);
    result = -reversePositiveNumber(x);
  }else {
    result = reversePositiveNumber(x);
  }
  const left = -(Math.pow(2, 31));
  const right = (Math.pow(2,31)-1);
  console.log(left);
  console.log(right);

  if(left<=result&&result<=right){
    return result;
  }

  return 0;


  function reverseString(s){
      return s.split("").reverse().join("");
  }


   function reversePositiveNumber(x){

    const reversedNumber = parseInt(reverseString(x.toString()));

    return reversedNumber;
  }


};

console.log(reverse(1534236469));

//通过leetcode测试  https://leetcode-cn.com/problems/reverse-integer/description/
