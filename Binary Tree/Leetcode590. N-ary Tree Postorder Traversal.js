/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 

590. N-ary Tree Postorder Traversal
Given an n-ary tree, return the postorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Constraints:

The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 10^4]

Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]

Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
 
 */

const postorder = root => {   
   if (root === null) return [];    
    
    let stack = [root];
    let res = [];
    
    while (stack.length > 0){
        let cur = stack[stack.length-1];
        let children = stack[stack.length-1].children;
        if ( children.length === 0){
            res.push(stack.pop().val);
        }
        for ( let i=children.length-1; i >= 0; i--) {
            stack.push(children[i]);
        }
        cur.children = [];
    }
    return res;
}

/*
var postorder = function(root) {
    let res = [];

    const helper = node => {
        if (node === null) return;
        node.children.forEach(child => {
            helper(child);
        })
        
        res.push(node.val)
    }
    
    helper(root);
    return res;
};

*/