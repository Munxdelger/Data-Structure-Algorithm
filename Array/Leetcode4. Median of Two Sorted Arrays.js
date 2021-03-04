/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 
4. Median of Two Sorted Arrays
 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

Constraints:
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106

Follow up: The overall run time complexity should be O(log (m+n)).

*/

// Follow up: The overall run time complexity should be O(log (m+n)).
/ * I used .sort((a,b) => a-b)  Time Complexity is O((n+m)log(n+m))   */

var findMedianSortedArrays = function(nums1, nums2) {

    let numMerge = nums1;
    numMerge.push(...nums2);
    numMerge.sort((a,b) => a-b);
    
    if (numMerge.length % 2 === 1){
        return numMerge[Math.trunc(numMerge.length/2)];
    } else {
        return (numMerge[numMerge.length/2] + numMerge[(numMerge.length/2) - 1])/2;
    }
};