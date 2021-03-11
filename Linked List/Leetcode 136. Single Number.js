/**
 * @param {number[]} nums
 * @return {number}
 
 136. Single Number
 
 Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

Input: nums = [4,1,2,1,2]
Output: 4
 
 */
var singleNumber = function(nums) {
    let res = 0;
    
    for (let i=0; i < nums.length; i++) {
        res ^= nums[i];       // Binary XOR operator used
    }
    return res;
};