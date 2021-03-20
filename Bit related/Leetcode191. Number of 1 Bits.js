/**
 * @param {number} n - a positive integer
 * @return {number}
 
 191. Number of 1 Bits
 Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 
Input: n = 00000000000000000000000000001011
Output: 3

The key idea here is to realize that for any number nn, doing a bit-wise AND of nn and n - 1n−1 flips the least-significant 11-bit in nn to 00. 
 */

var hammingWeight = function(n) {
    let c = 0;
    while(n !== 0){
      n = n & (n-1);
      c++;        
    }
 return c;
};