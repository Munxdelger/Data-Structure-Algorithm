/**
 * @param {number} n
 * @return {boolean}
 
 231. Power of Two
 
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x. 

Constraints:
-231 <= n <= 231 - 1

Follow up: Could you solve it without loops/recursion?

 */

// 1 10  100 1000 10000  
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    
    n = n & (n-1);
    
    return n === 0 ? true : false;
};