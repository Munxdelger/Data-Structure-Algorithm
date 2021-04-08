/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 
 73. Set Matrix Zeroes
 Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

Constraints:
m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 */

var setZeroes = function(matrix) {
    let rLen = matrix[0].length;
    let cLen = matrix.length;
    
    for (let i=0; i < matrix.length; i++){            // O(n*m)
        for (let j=0; j < matrix[i].length; j++){
            if (matrix[i][j] === 0) {
                matrix[i][j] = "0";
            }
        }
    }
    
    
    for (let i=0; i < matrix.length; i++){          // O(n*m)*(n+m)
        for (let j=0; j < matrix[i].length; j++){
            if (matrix[i][j] === "0") {
                matrix[i][j] = 0;
                for (let k=0; k < matrix[0].length; k++){
                    if (matrix[i][k] !== "0"){
                        matrix[i][k] = 0;
                    }
                }
                for (let k=0; k < matrix.length; k++){
                    if (matrix[k][j] !== "0"){
                        matrix[k][j] = 0;
                    }
                }
            }
        }
    }
    return matrix;
    
};