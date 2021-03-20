/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 
 190. Reverse Bits
 Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
Follow up:

If this function is called many times, how would you optimize it?

Constraints:

The input must be a binary string of length 32
 */

var reverseBits = function(n) {
    let result = 0;
    
    for (let i=0; i <32; i++) {
        let bit = n & 1;    
        result = (result * 2) + bit;  
        n = n >> 1;  
    }
    return result;
};

var reverseBits1 = function(n) {
    var sum = 0
    for(var i = 0;i < 32; i ++){
	/*like 'pick up digit' at Decimal arithmetic */
    var d = n % 2
    sum = sum * 2 + d
    n=(n-d)/2
    }
    return sum
};

/*
var reverseBits = function(n) {
    var tmp;
    
    for(var i=0; i<16; i++) {
        tmp = n[i];
        n[i] = n[31-i];
        n[31-i] = tmp;
    };
    return n;
  
};
*/