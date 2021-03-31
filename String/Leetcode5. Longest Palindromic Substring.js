/**
 * @param {string} s
 * @return {string}
 
5. Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
 
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
 */


const longestPalindrome = s => {
    let start = 0;
    let end = 0;
    let len = 1;
    
    for (let i=0; i < s.length; i++) {
        for (let k=1; i-k >=0 && i+k < s.length; k++){
            if (s[i-k] !== s[i+k]){
                break;
            } else {
                if (1 + 2*k > len){
                    len = 1+2*k;
                    start = i-k;
                    end = i+k;
                }
            }
        }
        
        for (let k=0; i-k >= 0 && i+1+k < s.length; k++){
            if (s[i-k] !== s[i+1+k]){
                break;
            } else {
                if (1+1+2*k > len){
                    len = 1+1+2*k;
                    start = i-k;
                    end = i+1+k;
                }
            }
        } 
    }
    return s.slice(start, end+1);
}




var longestPalindrome1 = function(s) {
    let start  = 0;
    let end = 0;
    let len = 1;
    
    for (let i=0; i < s.length; i++){  
        for (let k=1; i-k >= 0 && i+k < s.length; k++){   // .. i ..
            if (s[i-k] !== s[i+k]){
                break;
            } else {
                if (1+2*k > len){
                    len = 1 + 2*k;
                    start = i-k;
                    end  = i+k;
                }
            }
        }
        
        for (let k=0; i-k >= 0 && i+k+1 < s.length; k++){  // .. i i ..
            if (s[i-k] !== s[i+k+1]){
                break;
            } else {
                if (1+2*k+1 > len){
                    len = 1 + 2*k+1;
                    start = i-k;
                    end  = i+k+1;
                }
            }
        }
    }
    
    return s.slice(start,end+1);
}