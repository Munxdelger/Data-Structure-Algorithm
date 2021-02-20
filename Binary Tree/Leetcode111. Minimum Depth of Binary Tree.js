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
 * @return {number}
 */
/*
 root = [3,9,20,null,null,15,7]
 queue = [3];


*/

/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Input: root = [3,9,20,null,null,15,7]
Output: 2

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

Constraints:

The number of nodes in the tree is in the range [0, 105].
-1000 <= Node.val <= 1000
*/

 const minDepth = (root) => {
    if (root === null) return 0;
     
    let queue = [root];
    let depth = 1;

     while (queue){
         let len = queue.length;
         for ( let i=0; i < len; i++){
             let cur = queue.shift();
             
             if (cur.left === null && cur.right === null){
                 return depth;
             }
             
             if ( cur.left){
                queue.push(cur.left);
             }
             if (cur.right){
                queue.push(cur.right);
             }
         }
         depth++
     }
     return depth;  
}


/*
var minDepth = function(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    
    if (root.left === null){
       return  Math.min(minDepth(root.right))+1;
    }
    if (root.right === null){
        return Math.min(minDepth(root.left))+1;
    }
    return Math.min(minDepth(root.left), minDepth(root.right))+1;
};

// DFS O(n)

*/