/**
 * @param {string} s
 * @return {number}
 
 387. First Unique Character in a String
 
 Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1. Note: You may assume the string contains only lowercase English letters.

Examples:
s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 
 */


const firstUniqChar = s => {
    let dic = new Array(26).fill(0);
    
    for (let i=0; i < s.length; i++) {
        if (dic[s[i].charCodeAt(0) - 97] === 0){
            dic[s[i].charCodeAt(0) - 97] = 1;
        } else if (dic[s[i].charCodeAt(0) - 97] === 1){
            dic[s[i].charCodeAt(0) - 97] = -1;
        }
    }
    
    for (let i=0; i < s.length; i++) {
        if (dic[s[i].charCodeAt(0) - 97] === 1){
           return i;
        }
    }
    return -1;
}






var firstUniqChar1 = function(s) {
  
    let alph = new Array(26).fill(0);
    
    for ( let i=0; i < s.length; i++){
        let current = s[i];
        let index = current.charCodeAt(0) - "a".charCodeAt(0);
        alph[index]++;
    };
    
    for ( let i=0; i < s.length; i++){
       let current = s[i];
        let index = current.charCodeAt(0) - "a".charCodeAt(0);
        if (alph[index] === 1){
            return i;
        }
    }   
   return -1;
};

// O(n)  O(1)