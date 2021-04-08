/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 
 392. Is Subsequence
Given two strings s and t, check if s is a subsequence of t.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not). 
 */
var isSubsequence = function(s, t) {
    
    let p1=0;
    let p2=0
    while (p1 < s.length && p2 < t.length ){
        if (s[p1] !== t[p2]){
            p2++;
        }else {
            p1++;
            p2++;
        }
    }
   return s.length === p1 ? true : false;
};

// O(n), O(1);