/**
 * @param {string} s
 * @return {number}
 
 3. Longest Substring Without Repeating Characters
 Given a string s, find the length of the longest substring without repeating characters.
 Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 
 */



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