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
 * @return {string[]}
 
 257. Binary Tree Paths
 
Given a binary tree, return all root-to-leaf paths.
Note: A leaf is a node with no children.
Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 */

const binaryTreePaths = root => {
    if(root === null) return [];
    
    const result = [];
    let stack = [[root, ""+root.val]];
    
    while(stack.length > 0) {
        let [node, path] = stack.pop();

        if (node.left === null && node.right === null) {
            result.push(path);
        }
        if (node.left) {
            stack.push([node.left, `${path}->${node.left.val}`]);
        }
        if (node.right) {
            stack.push([node.right, `${path}->${node.right.val}`]);
        }
    }
    return result;
}

/*
var binaryTreePaths = function(root) {
    if (root === null) return [];
    let result = [];
    let res = "";

    const helper = (root, res) => { 
        if(root){
            if ( res === ""){
                res = (root.val).toString();
            } else {
                res = res + "->" + (root.val).toString();
            }
        }
        if (root.left !== null){
            helper(root.left, res);
        }
        if (root.right !== null){
            helper(root.right, res);
        }
        if(root.right === null && root.left === null) {
            result.push(res);
        } 
    }
    
    helper(root, res);
    return result;
};

*/