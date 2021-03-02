/**
 * @param {number[]} nums
 * @return {number[][]}
 
15. 3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
 
 */
// Used Time Complexity O(n^2), O(1);

const threeSum = (nums) => {    
    nums.sort((a,b) => a-b);
    let result = [];
    
    const twoSum = (nums, target, index) => {
        let result1 = [];
        let low = index + 1;
        let firstLow = low;
        let high = nums.length-1;
        let firstHigh = high;
            
        while (low < high) {
            if (nums[low] + nums[high] === target){
                result1.push([nums[index], nums[low], nums[high]]);
                low++;
                high--;
            } else if (nums[low] + nums[high] < target){
                low++;
            } else {
                high--;
            }
            while (low !== firstLow && nums[low] === nums[low-1] && low < high){
                low++;
            }
            while (high !== firstHigh && nums[high] === nums[high+1] && low < high){
                high--;
            }
        }
        return result1;
    }
    
    let i=0;
    while (i < nums.length){
        let target = 0 - nums[i];
        let foundArr = twoSum(nums, target, i);
        result.push(...foundArr);
        i++;
        while (i < nums.length && nums[i] === nums[i-1]){
            i++;
        }
    }    
    return result;    
}






























/*
var threeSum = function (nums) {
    nums = nums.sort((a,b) => a-b);
    let arr = [];
    
    for(let i=0; i < nums.length-2; i++) {
        while (nums[i] === nums[i-1]){
            i++; // Skip if we already checked for this element before. This makes sure we record it at least once    
        }
        let j = i + 1, k = nums.length - 1;
        while ( j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                arr.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j+1]){
                    j++;
                }
                j++;
            }
            
            if (sum > 0) k--;
            if (sum < 0) j++;
        }
    }
    return arr;
};

*/