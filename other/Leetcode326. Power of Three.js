/**
 * @param {number} n
 * @return {boolean}
 
326. Power of Three

Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

Constraints:
-231 <= n <= 231 - 1
 */

const isPowerOfThree = n => { 
    return n > 0 && 1162261467 % n === 0;
}


const isPowerOfThree2 = n => {  
    if (n === 0) return false;
    
//     let trunced = Math.trunc(Math.log10(n)/Math.log10(3)); 
//     let x = trunced - Math.log10(n)/Math.log10(3);
    
//     return x === 0 ? true : false;
    
    return (Math.log10(n)/Math.log10(3)) % 1 === 0 ? true : false;
}



var isPowerOfThree1 = function(n) {
    if (n < 1){
        return false;
    }
    while(n % 3 === 0){
        n = n / 3;
    }

    return n === 1;
};