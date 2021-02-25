/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 
 572. Subtree of Another Tree
 Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
 
 */

const isSubtree = (s,t) => {
    
    if (s === null) return [];
    if (t === null) return [];
     
    let array = [];
    const helper = node => {
        if (node === null) {
           return array.push("null");
        }
        array.push('"'+ node.val +'"');
        helper(node.left);
        helper(node.right);
    }
      
    helper(s);
    let arrS = [...array];
    array = [];
    helper(t);
    let arrT = [...array];
    
 //console.log(arrS, arrT) ;
    return arrS.join(",").includes(arrT.join(","));
    
}
