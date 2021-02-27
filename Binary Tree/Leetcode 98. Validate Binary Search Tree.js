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
 * @return {boolean}
 
 98. Validate Binary Search Tree
 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
 
 */

const isValidBST = root => {
    if (!root) return true;
    
    let stack = [];
    let prev = Math.pow(-2, 31)-1;
    
    while (root !== null || stack.length > 0) {
        while (root !== null) {
            stack.push(root);
             root = root.left;
        }
        
        root = stack.pop();
        if (root.val <= prev) {
            return false;
        }
        prev = root.val;
        root = root.right;
    }
    return true;
}

/*
const isValidBST = root => {
    if (root === null) return true;
    
    let stack = [[root, Math.pow(-2,31)-1, Math.pow(2,31)]];
  //  let stack = [[root, -Infinity, Infinity]];
    
    while (stack.length > 0) {
        let [cur, min, max] = stack.pop();
        
        if (cur.val <= min || cur.val >= max) return false;

        if(cur.right){
            stack.push([cur.right, cur.val, max]);
        }
        
        if(cur.left){
           stack.push([cur.left, min, cur.val]);
        }
    }
    return true;
}
*/

/*
var isValidBST = function(root) {
    if (root === null) return true;
    
    const helper = (node, min, max) => {
        if (!node) return true;
        
        if (node.val <= min || node.val >= max) return false;
    
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }
    return helper(root, -Infinity, Infinity);
};

*/
