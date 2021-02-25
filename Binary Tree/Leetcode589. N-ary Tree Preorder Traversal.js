/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 
 589. N-ary Tree Preorder Traversal
 
Given an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Follow up:

Recursive solution is trivial, could you do it iteratively?

Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]

 */

const preorder = root => {
    if (root === null) return [];
    let result = [];
    
    result.push(root.val);
    
    let children = root.children;
    for (let i=0; i < children.length; i++){
        result.push(...preorder(children[i]));
    }
    return result; 
}

/*
var preorder = function(root) {
    if (root === null) return [];
    
    let stack = [root];
    let result = [];
    
    while (stack.length > 0) {
        let cur = stack.pop();
        result.push(cur.val);
        
        let children = cur.children;
        
        for ( let i=children.length-1; i >=0 ; i--){
            stack.push(children[i]);
        }
    }
    return result;
};

*/
