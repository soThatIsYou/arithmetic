/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {



  const valIndex = nums.findIndex(value => value === target);

  if (valIndex !== -1) {
    console.log('第一个if');
    return valIndex;
  }
  if (target > nums[nums.length-1]) {
    console.log('第二个');
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      console.log(i);
      return i;
    }
  }

};



//foreach 不能用return/break 跳出循环
