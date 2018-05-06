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
  if(-(Math.pow(2, 31))<result<(Math.pow(2,31)-1)){
    return result;
  }

  return result;


  function reverseString(s){
      return s.split("").reverse().join("");
  }


   function reversePositiveNumber(x){

    const reversedNumber = parseInt(reverseString(x.toString()));

    return reversedNumber;
  }


};
