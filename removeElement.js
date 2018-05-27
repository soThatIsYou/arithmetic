/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function remove(nums, val) {
  const valIndex = nums.findIndex(function(value){
    return value === val;
  })
  console.log(valIndex);
  if (valIndex!==-1) {
    nums.splice(valIndex,1);
    remove(nums,val);
  }

  return nums.length


};

console.log(removeElement([3,2,3,1,1],1));

//https://leetcode-cn.com/problems/remove-element/description/  通过
