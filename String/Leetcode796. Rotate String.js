/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 
 796. Rotate String
 
 We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false

 */


let rotateString = (A, B) => {
    if (A.length !== B.length) return false;
    if ( A === B) return true;
    if (A.length === 0) return true;
    
    B = B + B;
    return B.indexOf(A) > -1 ? true : false;
}



var rotateString1 = function(A, B) {
    if(A === B) return true;
    let arrA = A.split('');
    let arrB = B.split('');

    let i=0;
    while (i < arrA.length) {
        let temp = arrA.shift();
        arrA.push(temp);
        if (helper(arrA, arrB)){
            return true;
        }
        i++;
    }
    return false;
    
    function helper (arr1, arr2) {
        if (arr1.length !== arr2.length){
            return false;
        } else {
            let i=0;
            while(i < arr1.length){
                if (arr1[i] !== arr2[i]){
                    return false;
                }
                i++;
            }
        }
        return true;
    }
};