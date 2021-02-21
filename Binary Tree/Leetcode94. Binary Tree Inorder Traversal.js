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
 */

/*
94. Binary Tree Inorder Traversal
Given the root of a binary tree, return the inorder traversal of its nodes' values.


1) Create an empty stack S.
2) Initialize current node as root
3) Push the current node to S and set current = current->left until current is NULL
4) If current is NULL and stack is not empty then 
     a) Pop the top item from stack.
     b) Print the popped item, set current = popped_item->right 
     c) Go to step 3.
5) If current is NULL and stack is empty then we are done.
*/
const inorderTraversal = (root) => {
    let res = [];
    let stack = [];
    let cur = root; 
    
    while(cur !== null || stack.length > 0){
        while(cur !== null){
            stack.push(cur);
            cur = cur.left;
        }
        
        let temp = stack.pop();
        res.push(temp.val);
        cur = temp.right;
    }
    return res;
}


/*
var inorderTraversal = function(root) {
   // if (!root) return [];
    let res = [];
    
    if (root !== null){
        res = res.concat(inorderTraversal(root.left));
        res.push(root.val);
        res = res.concat(inorderTraversal(root.right));
    }
    return res;
};
*/
