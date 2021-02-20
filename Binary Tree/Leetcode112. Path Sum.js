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
 * @param {number} sum
 * @return {boolean}
 */
/*
root = null bval yu butsaah? 
leaf node (gantshan node) esvel svvliin node bwal yu butsaah?
goliin node bval bval ? ;

*/

/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
 
Input: root = [1,2,3], targetSum = 5
Output: false

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000

*/


var hasPathSum = function(root, sum) {
    if (root === null) return false;
    
    if (root.left === null && root.right ===null){
        return root.val === sum;
    }
    
    return (hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val));
    
    
};

// Time Complexity O(n), Space Complexity O(n)