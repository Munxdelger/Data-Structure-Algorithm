/**
 * @param {string} columnTitle
 * @return {number}
 171. Excel Sheet Column Number
 Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 
 1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].
 */
var titleToNumber1 = function(columnTitle) {
    let res = 0;
    
    let index = 0;
    for (let i=columnTitle.length-1; i >= 0; i--) {
        res += Math.pow(26,index)* (columnTitle.charCodeAt(i) - 64);
        index++;
    }
    return res;
};


var titleToNumber = function(s) {
   // let number;
    
   let number = s.charCodeAt(0)-64;
    
    for( var i = 1; i < s.length; i++){  
        number = number*26 + s.charCodeAt(i)-64;   
    };
    return number;
};