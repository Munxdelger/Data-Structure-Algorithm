/**
 * @param {number} n
 * @return {number}
 
 172. Factorial Trailing Zeroes
 Given an integer n, return the number of trailing zeroes in n!.   0 <= n <= 104

Follow up: Could you write a solution that works in logarithmic time complexity?
 
 */

//   Time Complexity O(log5(n)), Space Complexity O(1)


const trailingZeroes1 = n => {
    let ans = 0;
    
    let i=5;
    while (n/i > 0) {
        ans += Math.trunc(n/i);
        i *= 5;
    }
    return ans;
}

var trailingZeroes2 = function(n) {
    var ans = 0;
    
    while (n > 4){
        n = Math.trunc( n/5 ) ;  
        ans = ans + n;
    }
    return ans;
};






var trailingZeroes = function(n) {  
    let count = 0;
    while(n > 4 ){
        let k = n;
        while (k % 5 === 0) {
            count ++;
            k = k / 5;
        }
        n--;
    }
    return count;
    
};