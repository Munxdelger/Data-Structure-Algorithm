/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Input: nums = [3,2,4], target = 6
Output: [1,2]
 
 
 */

const twoSum = (nums, target) => {
    let hash = {};
    let len = nums.length;
    
    for (let i=0; i < len; i++) {
        if (hash.hasOwnProperty(nums[i])){
            return ([hash[nums[i]], i]);
        } else {
            hash[target-nums[i]] = i;
        }
    }
}



/*
var twoSum = function(nums, target) {
    const hash = {};
    
    for(let i=0; i< nums.length; i++){
        if (hash.hasOwnProperty(nums[i])){
            return [hash[nums[i]], i];
        }
        
        const compliment = target - nums[i];
        hash[compliment] = i;
    }
}

*/
/*
var twoSum = function(nums, target) {
    
    for (let i=0; i <nums.length-1; i++){
        for ( let j=i+1; j < nums.length; j++) {
            if ( nums[i] + nums[j] === target) 
                return [i,j];
        }
    }
    
};

*/