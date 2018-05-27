/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = 0;
    let max = Number.NEGATIVE_INFINITY;
    let leftIndex = 0;
    let rightIndex = nums.length-1;
    let length = nums.length;
    for(var i=0;i<length;++i){
        maxSum=0;
        for(var j=i;j<length;++j){
            maxSum+=nums[j];
            if(max<maxSum){
                leftIndex=i;
                max=maxSum;
                rightIndex=j;
            }
        }
    }
    return max;
};

//https://leetcode-cn.com/problems/maximum-subarray/description/
//todo 分而治之






