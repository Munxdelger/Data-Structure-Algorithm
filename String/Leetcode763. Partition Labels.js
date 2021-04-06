/**
 * @param {string} S
 * @return {number[]}
 
 763. Partition Labels
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
Note:
S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 */


var partitionLabels = function(S) {
    
    let alpha = new Array(25).fill(-1);
    
    for(let i=0; i < S.length; i++) {
        alpha[S[i].charCodeAt(0)-97] = i;
    }
    
    let result = [];
    let p1 = 0;
    let p2 = 0;
    
    for(let i=0; i < S.length; i++) {        
        if (alpha[S[i].charCodeAt(0)-97] > p2) {   // p2 = Math.max(alpha[S[i].charCodeAt(0)-97], p2);
            p2 = alpha[S[i].charCodeAt(0)-97];
        } 
        if ( i === p2) {
            result.push(p2-p1+1);
            p1 = p2 + 1;
            p2 = p1;
        }
    }
   return result;
        
};

// Time Complexity O(n), Space Complexity  O(1)