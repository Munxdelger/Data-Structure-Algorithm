/**
 * @param {number[]} nums
 * @return {number}
 
 268. Missing Number
 Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
 */  

var missingNumber = function(nums) {

    const res = new Array(nums.length+1).fill(-1);
	
    for(const el of nums) {
        res[el] = el;
    }
    
	// the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
};



const missingNumber3 = nums => {   // O(n), O(1)
    let mask = nums.length;
    
    for(let i=0; i < nums.length; i++){
        mask ^= nums[i] ^ i;
    }
    return mask;
}

var missingNumber2 = function(nums) {   // O(n), O(1)     
       
    let sum2 = 0;
    let len = nums.length;
    for (let i=0; i < len; i++){
        sum2 += nums[i];
    }
    return len*(len+1)/2 - sum2;
};



var missingNumber1 = function(nums) { // O(nlogn), O(1)
    
    nums.sort((a,b) => a-b);
    
    for (let i=0; i < nums.length; i++){
        if (nums[i] !== i){
            return i;
        }
    }
    return nums.length;
};