/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 
 378. Kth Smallest Element in a Sorted Matrix
 Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Constraints:

n == matrix.length
n == matrix[i].length
1 <= n <= 300
-109 <= matrix[i][j] <= -109
All the rows and columns of matrix are guaranteed to be sorted in non-degreasing order.
1 <= k <= n2

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
 
 */
//  [[1,5,9],[10,11,13],[12,13,15]]
//  1:0:0;     10:1,       12:2     



var kthSmallest = function(matrix, k) {
    let res = [];
    
    for(let i=0; i < matrix.length; i++ ){
        res.push(...matrix[i]);
    }
    res.sort((a,b) => a - b);
    return res[k-1];   
};
