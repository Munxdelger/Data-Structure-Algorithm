/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

A leaf is a node with no children.
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Input: root = [1,2,3], targetSum = 5
Output: []

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
*/
var pathSum = function(root, targetSum) {
  
    let res = [];
    
    let helper = (root, targetSum, myList) => {
        if (root === null) return;
        myList.push(root.val);  
        
        if (root.left === null && root.right === null){   // last leaf
            if (root.val === targetSum){
                res.push(myList);
                return;
            }
        }
        
        if (root.left){
            helper(root.left, targetSum-root.val, [...myList]);
        }
        if ( root.right){
            helper(root.right, targetSum-root.val,[...myList]);
        }  
    }
    helper(root, targetSum, []);
    return res;
};

// Time Complexity O(n^2); Space Complexity O(n)