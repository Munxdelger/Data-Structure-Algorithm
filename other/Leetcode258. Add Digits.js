/**
 * @param {number} num
 * @return {number}
 
258. Add Digits
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Constraints:
0 <= num <= 231 - 1
 
Follow up: Could you do it without any loop/recursion in O(1) runtime?

 */

const addDigits1 = num => {
    let sumDigits = 0;
    
    while(num > 0) {
        sumDigits += num % 10;
        num = Math.trunc(num/10);
        
        if(num === 0 && sumDigits > 9) {
            num = sumDigits;
            sumDigits = 0;
        }
    }
    return sumDigits;
}



var addDigits = function(num) {
    
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
};