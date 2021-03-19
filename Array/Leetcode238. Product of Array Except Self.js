/**
 * @param {number[]} nums
 * @return {number[]}
 
238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 
Follow up:
Could you solve it in O(n) time complexity and without using division?
Could you solve it with O(1) constant space complexity? (The output array does not count as extra space for space complexity analysis.)
Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

const productExceptSelf = nums => {
    let zeroCount = 0;
    let len = nums.length;  
    let product = 1;   
    
    for (let i=0; i < len; i++) {
        if (nums[i] === 0){
            zeroCount++;
        } else {
            product *= nums[i];
        }
    }
    
    for (let j=0; j < len; j++) {
        if (nums[j] === 0){
            nums[j] = (zeroCount > 1 ? 0 : product);
        } else {
            nums[j] = (zeroCount > 0 ? 0 : product/nums[j]);
        }
    } 
    return nums;
}


var productExceptSelf1 = function(nums) {
    
    let pre = [];  
    let pro1 = 1;
    let pro2 = 1;
    let len = nums.length;
    
    for(let i=0; i < len; i++) {         // 1,2,3,4
            pre[i] =  pro1;             // p[0]=1, p1=1  p[1]=1 p1=2; p[2]=2; p1=6
            pro1 = nums[i] * pre[i];
    }
    
    for(let i=len-1; i >= 0; i--) {   
        let temp = nums[i];           
        nums[i] =  pro2;             
        pro2 = temp * nums[i];       
     
        pre[i] = pre[i]*nums[i];
    }   
    return pre;
};
