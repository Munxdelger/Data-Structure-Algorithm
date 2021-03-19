/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 
 88. Merge Sorted Array
 
 Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
 */

const merge8 = (nums1,m, nums2, n) => {
    m = m-1;
    n = n-1;
    let index = nums1.length-1;
    
    while(n >= 0) {
        if (m < 0){
            nums1[index] = nums2[n];
            n--;
        } else {
            if (nums1[m] > nums2[n]){
                nums1[index] = nums1[m];
                m--;
            } else {
                nums1[index] = nums2[n];
                n--;
            }
        }
        index--;
    }
}


const merge4 = (nums1, m, nums2, n) => {
    let i = m-1;
    let j = n-1;
    let k = nums1.length-1;
    while(j >= 0){
        if (i < 0 || nums1[i] <= nums2[j]){
            nums1[k] = nums2[j];
            j--;
        }else if (nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }
        k--;
    }
}




var merge6 = function(nums1, m, nums2, n) { 
    let p1 = m-1;
    let p2 = n-1;
    
    for (let i = nums1.length-1; i >= 0; i--){
        if (p2 < 0 || nums1[p1] >= nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
           
        }else if (p1 < 0 || nums1[p1] < nums2[p2]){
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
};



var merge7 = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1; 
    let i = nums1.length - 1;
    while (p2 >= 0) {      // nums1 is already sorted
        if (nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }    
        i--;
    }
    // Time Complexity: O(M + N)
    // Space Complexity: O(1)
};


var merge = function(nums1, m, nums2, n) { 
    nums1.splice(m,n,...nums2);
    nums1.sort((a, b) => a - b);
    return nums1;
};
