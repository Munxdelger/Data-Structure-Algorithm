/**
 * @param {number[]} nums
 * @return {boolean}
 
 217. Contains Duplicate
 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
 
 */

const containsDuplicate = nums => {
    
    for (let i=0; i < nums.length; i++){
        for(let j=i+1; j < nums.length; j++){
            if (nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
}



const containsDuplicate3 = nums => {
    let hash = {};
    
    for(let i=0; i < nums.length; i++){
        if(hash.hasOwnProperty(nums[i])){
            return true;
        } else{
            hash[nums[i]] = 1;
        }
    }
    return false;
}



const containsDuplicate2 = nums => {
    nums.sort((a,b) => a - b);
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            return true;
        }
    }
    return false;
}

var containsDuplicate1 = function(nums) {
    let mySet = new Set();
    
    for(let el of nums){
        mySet.add(el);
    }

     return mySet.size !== nums.length ? true : false;
};