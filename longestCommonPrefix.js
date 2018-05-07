/**
 * @param {string[]} strs
 * @return {string}
 */
var findLongestCommonPrefix = function (strs) {
    if(strs == null || strs.length == 0) return "";

    var commonPrefix = strs[0];


    for(let i = 1 ; i<strs.length ; i++){
        var str = strs[i];

        let j = 0;
        for(; j < commonPrefix.length ; j++){
           if(commonPrefix[j] != str.charAt(j)){
                break;
           }
        }
        commonPrefix = commonPrefix.slice(0,j);
    }

    return commonPrefix;
};
//https://leetcode-cn.com/problems/longest-common-prefix/description/  已通过
console.log(longestCommonPrefix(['ak','a']));
