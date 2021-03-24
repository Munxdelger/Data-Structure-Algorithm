/**
 * @param {string[]} strs
 * @return {string[][]}
 
 49. Group Anagrams
 Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lower-case English letters.

 */
const groupAnagrams = strs => {
    let hash = {};     
    for(let i=0; i < strs.length; i++){
        let joined = getKey(strs[i]);
        if(hash[joined]) {
            (hash[joined]).push(i);
        } else {
            hash[joined] = [i];
        }
    }
    
    let result = [];
    for(let el in hash){
        result.push(hash[el].map(index => strs[index]));
    }
    return result;
    
    function getKey(s) {
        let a = new Array(26).fill(0);
                                   
        for(let el of s){
            a[el.charCodeAt(0)-97]++;
        }
        
        return a.toString();
        
        
        // let str = "";
        // for(let i=0; i < 26; i++){
        //     str += String.fromCharCode(i+97).repeat(a[i]);
        // }
        // return str;
    }
} 

const groupAnagrams2 = strs => {
    let hash = {};        
    for(let i=0; i < strs.length; i++){
        let joined = getKey(strs[i]);
        if(hash[joined]) {
            (hash[joined]).push(i);
        } else {
            hash[joined] = [i];
        }
    }
    
    let result = [];
    for(let el in hash){
        result.push(hash[el].map(index => strs[index]));
    }
    return result;
    
    function getKey(s) {
        let sorted = s.split("");
        sorted.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
        let joined = sorted.join("");
        return joined;
    }
} 
    


// Time Complexity n*mlogm
var groupAnagrams1 = function(strs) {
    let hash = {};
    
    for(let i=0; i < strs.length; i++){
        let sorted = strs[i].split("");
        sorted.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
        let joined = sorted.join("");
        if(hash[joined]) {
            (hash[joined]).push(i);
        } else {
            hash[joined] = [i];
        }
    }
    
    let result = [];
    for(let el in hash){
        result.push(hash[el].map(index => strs[index]));
    }
    return result;
} 
