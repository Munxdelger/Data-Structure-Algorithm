/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 
 1773. Count Items Matching a Rule
 You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

Constraints:

1 <= items.length <= 104
1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
ruleKey is equal to either "type", "color", or "name".
All strings consist only of lowercase letters.
 
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    let index = (ruleKey === "type" ? 0: (ruleKey === "color") ? 1 : 2);
    
    for (let i=0; i < items.length; i++) { 
        if (items[i][index] === ruleValue) {
            count++;
        }
    }
    return count;
};