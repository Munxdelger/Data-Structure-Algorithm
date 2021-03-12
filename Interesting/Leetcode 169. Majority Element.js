/**
 * @param {number[]} nums
 * @return {number}
 
 169. Majority Element
 Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Input: nums = [2,2,1,1,1,2,2]
Output: 2

n == nums.length
1 <= n <= 5 * 104
-231 <= nums[i] <= 231 - 1
 */

var majorityElement = function(nums) {
    let count = 0;
    let candidate;
    
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
           candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;  
};



const majorityElement2 = nums => {
    let hash = {};
    
    for (let i=0; i < nums.length; i++) {
        if (hash.hasOwnProperty(nums[i])) {
            hash[nums[i]]++;
        } else {
            hash[nums[i]] = 1;
        }
        if (hash[nums[i]] > nums.length/2){
            return nums[i];
        }
    }
}

const majorityElement1 = nums => {
    let hash = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])){
            hash.set(nums[i],hash.get(nums[i]) + 1);
        } else {
            hash.set(nums[i], 1);  
        }
        if (hash.get(nums[i]) > nums.length/2){
            return nums[i];
        }
    }
}