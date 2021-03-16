/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*
48. Rotate Image
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
Constraints:

matrix.length == n
matrix[i].length == n
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

// First, diagonally swap elements
const rotate = matrix => {    
    for (let i=0; i < matrix.length; i++){
        for (let j=0; j < i; j++) {   
           [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }
    
    // Second, reverse left half to right half horizontally
    let n = matrix.length;
    for (let i=0; i < n; i++){
        for (let j=0; j < n/2; j++) { 
           [matrix[i][j], matrix[i][n-1-j]] = [matrix[i][n-1-j],matrix[i][j]];
        }
    }
}


// Rotate Groups of Four Cells
var rotate1 = function(matrix) {
    let n = matrix.length;
 
    for (let i=0; i < n/2; i++) { 
        let start = i;
        let end = n-1-i; 
        
        for (let j=0; j < end-start; j++) {  
            
            let temp = matrix[i][start+j];
            matrix[i][start+j] = matrix[end-j][i];
            matrix[end-j][i] = matrix[end][end-j];
            matrix[end][end-j] = matrix[start+j][end];
            matrix[start+j][end] = temp;
        } 
    }
};
