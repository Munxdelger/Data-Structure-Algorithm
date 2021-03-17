/**
 * @param {number[]} nums
 * @return {number[][]}
 
46. Permutations
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.

 */

const helper = (start, nums, result) => {
    if (start >= nums.length){
        result.push([...nums]);
        return;
    }
    
    for (let i= start; i < nums.length; i++) {
        [nums[start],nums[i]] = [nums[i],nums[start]];
        helper(start+1, nums, result);
        [nums[start],nums[i]] = [nums[i],nums[start]];
    }
}

var permute = function(nums) {
    let result = [];
    helper(0, nums, result);
    return result;
};