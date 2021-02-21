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
 * @return {number[]}
 
Given the root of a binary tree, return the preorder traversal of its nodes' values.
Input: root = [1,null,2,3]
Output: [1,2,3]

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

 */

var preorderTraversal = function solution(root) {
    
    let res = [];
    traverse(root)
    return res;
    
    function traverse(node){
        if (!node) return [];
        res.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
};

/*
var preorderTraversal = function(root) {
    let result = [];
    
    if (root !== null){
        result.push(root.val);
        result = result.concat(preorderTraversal(root.left));
        result = result.concat(preorderTraversal(root.right));
    }
    return result;
};
*/