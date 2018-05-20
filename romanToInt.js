/**
 * @param {string} s
 * @return {number}
 */
 function strToInt(c) {
   switch (c) {
     case 'I': return 1;
     case 'V': return 5;
     case 'X': return 10;
     case 'L': return 50;
     case 'C': return 100;
     case 'D': return 500;
     case 'M': return 1000;
     default: return -1;
   }
 }


 const romanToInt = function (s) {
   let num = strToInt(s.charAt(0));
   let pre;
   let curr;

   for (let i = 1; i < s.length; i += 1) {
     curr = strToInt(s.charAt(i));
     pre = strToInt(s.charAt(i - 1));
     if (curr <= pre) {
       num += curr;
     } else {
       num = num - pre * 2 + curr;
     }

   }

   return num;
 };
