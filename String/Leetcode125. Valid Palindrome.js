/**
 * @param {string} s
 * @return {boolean}
 
 125. Valid Palindrome
 
 Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 
 */

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^0-9a-z]+/g,'');   // not number and not alphabet characteriig delete hiij bn
    let start = 0;
    let end = s.length-1;
    
    while( start < end) {
        if( s[start] !== s[end]) {
            return false;
        };
        start++;
        end--;
    };
    return true;
};


var isPalindrome1 = function(s) {
    
    let compactS = s.match(/[A-Za-z0-9]/g);
    
    if (compactS === null){
        return true;
    } else {
        compactS = compactS.join("").toLowerCase();
    }

    for (let i=0; i < compactS.length/2; i++ ){
        if (compactS[i] !== compactS[compactS.length-1-i]){
            return false;
        }
    }           
    return true;
};