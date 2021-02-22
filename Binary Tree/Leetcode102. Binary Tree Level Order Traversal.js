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
 * @return {number[][]}
 
102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

 */
var levelOrder = function(root) {
   if (root === null) return [];
    
    let queue = [root];
    let result = [];
    
    while (queue.length > 0) {
        let len = queue.length;
        let level = [];
        for (let i=0; i < len; i++){
            let cur = queue.shift();
            if (cur !== null) level.push(cur.val); 
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        result.push(level);
    }
    return result;
};