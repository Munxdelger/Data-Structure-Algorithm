/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 33. Search in Rotated Sorted Array
 There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is guaranteed to be rotated at some pivot.
-104 <= target <= 104
 
 */

var search = function(nums, target) {
    let low = 0;
    let high = nums.length-1;
      
    while(low <= high){
        let mid = Math.trunc(low + (high-low)/2);
        if (nums[mid] === target){
            return mid;
        } 
        // left sorted
        if (nums[low] > nums[high] && nums[mid] >= nums[low]) {
            if (nums[mid] > target && nums[low] <= target){
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { // right sorted
            if ( nums[mid] < target && nums[high] >= target){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
    }
    return -1;
};