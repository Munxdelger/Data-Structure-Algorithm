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
 
 145. Binary Tree Postorder Traversal
 Given the root of a binary tree, return the postorder traversal of its nodes' values.
 
 Constraints:

The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 
 */

const postorderTraversal = (root) => {
    if (root === null) return [];
    
    let stack = [root];
    let res = [];
    
    while (stack.length > 0) {
        let cur = stack[stack.length-1];
        
        if (cur.left){
            stack.push(cur.left);
            cur.left = null;
        } else if (cur.right) {
            stack.push(cur.right);
            cur.right = null;
        } else {
            res.push(stack.pop().val);
        }
    }
    return res;
}


/*
const postorderTraversal = (root, res = []) => {
    if (!root) return [];
    if (root.left) postorderTraversal(root.left, res);
    if (root.right) postorderTraversal(root.right, res);
    res.push(root.val);
    
    return res;
}

*/

/*
const postorderTraversal = (root) => {
    let res = [];
    traverse(root);
    return res;
    
    function traverse(node){
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        res.push(node.val);
    }
}
*/
/*
var postorderTraversal = function(root) {
    let result = [];
    
    if (root !== null){
        result = result.concat(postorderTraversal(root.left));
        result = result.concat(postorderTraversal(root.right));
        result.push(root.val);
    }
    return result;
};

*/