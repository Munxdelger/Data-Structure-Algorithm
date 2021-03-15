/**
 * @param {string} s
 * @return {boolean}
 
 680. Valid Palindrome II
 Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
 
 */

var validPalindrome = function(s) {
    let i = 0,
        j = s.length - 1;
    
    let errors = 1;
    
    while(i < j) {     
        if(s[i] === s[j]) {
            i++;
            j--;
        } else if (s[i+1] === s[j] && s[i+2] === s[j-1] && errors){
            i++
            errors--
       } else if (s[i] === s[j-1] && errors){
           j--
           errors--;
        } else {
            return false
        }
    }
    return true;
};



var validPalindrome1 = function(str) {
  let start = 0;
  let end = str.length - 1;

  while(start < end) {
    if(str[start] !== str[end]) {
    //check both ways, slice here is not so intuitive
      return isValidYet(str.slice(start, end)) || isValidYet(str.slice(start + 1, end + 1));
    }
    start++;
    end--;
  } 
  return true;
}

// just checking is regular palindrome
function isValidYet(s) {
  for(let i = 0; i < s.length / 2; i++) {
    if(s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
