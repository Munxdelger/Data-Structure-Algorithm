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
 * @return {TreeNode}
 
 897. Increasing Order Search Tree
 Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.
 
Constraints:
The number of nodes in the given tree will be in the range [1, 100].
0 <= Node.val <= 1000

Input: root = [5,1,7]
Output: [1,null,5,null,7]

 */

let increasingBST = root => {
    let a = new TreeNode();
    let cur = a;
    
    const helper = (root) => {
        if (root === null) return;
        helper(root.left);
        cur.right = root;
        cur = cur.right;
        cur.left = null;
        helper(root.right);
    }
    
    helper(root);
    cur.right = null;
    
    return a.right;  
}



/*
var increasingBST = function(root) {
    // DFS inorder
   let arr = [];   
    function helper(root){
        if (root === null) return [];
        helper(root.left);
        arr.push(root);
        helper(root.right);
    }
    helper(root);
    arr.push(null);
   
    for (let i=0; i < arr.length-1; i++) {
        arr[i].right = arr[i+1];
        arr[i].left = null;
    }
    
    return arr[0];    
};

*/