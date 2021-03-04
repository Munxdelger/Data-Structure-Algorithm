/**
 * @param {string} s
 * @return {number}
 
 3. Longest Substring Without Repeating Characters
 Given a string s, find the length of the longest substring without repeating characters.
 Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 
 */

const lengthOfLongestSubstring = (s) => {    
    let alphas = new Map();
    let maxLen = 0;  
    let p1 = 0;
    
    for (let i=0; i < s.length; i++) {
        if (alphas.has(s[i])){
            maxLen = Math.max(maxLen, i-p1);  
            for (let j = p1; j < alphas.get(s[i]); j++) {
                alphas.delete(s[j]);
            }
            p1 = alphas.get(s[i]) + 1;
            alphas.set(s[i], i);    
        } else {
            alphas.set(s[i], i);
        }
    }    
    return Math.max(maxLen, alphas.size);
}



/*
var lengthOfLongestSubstring = function(s) {
    
    let alphaCol = {};
    let maxLen = 0;
    for (let i=0; i < s.length; i++) {
        if (alphaCol.hasOwnProperty(s[i])){
            if (maxLen < Object.keys(alphaCol).length){
                maxLen = Object.keys(alphaCol).length;
            }
            i = alphaCol[s[i]];
            alphaCol = {};
        } else {
                alphaCol[s[i]] = i;
        }
    }
 
    return maxLen < Object.keys(alphaCol).length ? Object.keys(alphaCol).length : maxLen;    
};

*/
