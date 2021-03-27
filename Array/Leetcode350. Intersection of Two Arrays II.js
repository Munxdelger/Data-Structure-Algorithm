/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 
 350. Intersection of Two Arrays II
 
 Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 
 Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

 */


const intersect1 = (nums1, nums2) => {
    
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    
    let i=0;
    let j=0;
    let res = [];
    
    while(i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] > nums2[j]){
            j++;
        } else {
            i++;
        }
    }
    return res;
}


var intersect = function(nums1, nums2) {
    let hash = new Map();
    let result = [];
    
    for (let i=0; i < nums1.length; i++){
        if (hash.has(nums1[i])){
            hash.set(nums1[i], hash.get(nums1[i])+1);
        } else {
            hash.set(nums1[i], 1);
        }
    }

    
    for (let i=0; i < nums2.length; i++){
        if( hash.size === 0){
            break;
        }
        if (hash.has(nums2[i])){
            if (hash.get(nums2[i]) > 0){
                result.push(nums2[i]);
            }
            hash.set(nums2[i], hash.get(nums2[i]) - 1);
            if (hash.get(nums2[i]) === 0){
                hash.delete(nums2[i]);
            }
        }
    }
    return result;
};