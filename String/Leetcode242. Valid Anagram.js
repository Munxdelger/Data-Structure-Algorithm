/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 
 242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let alpha = new Array(26).fill(0);
    
    for (let i=0; i < s.length; i++){
        alpha[s[i].charCodeAt(0) - 97]++;
    }
    
    for (let j=0; j < t.length; j++){
        alpha[t[j].charCodeAt(0) - 97]--;
    }
    
   for(let i=0; i < alpha.length; i++){
       if (alpha[i] !==0){
           return false;
       }
   }
    return true;
    
};


var isAnagram1 = function(s, t) {
    
    s = s.split("");
    t = t.split("");
    
    s.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
    t.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
    
    return s.join("") === t.join("")
    
};