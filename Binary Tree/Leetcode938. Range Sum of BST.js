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
 * @param {number} low
 * @param {number} high
 * @return {number}
 
 938. Range Sum of BST
Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
 
 */

var rangeSumBST = function(root, L, R) {
    let sum = 0;
    if(root == null){
        return 0;
    }
    if(L <= root.val && root.val <= R){
        sum = root.val;
    }
    
    if(L <= root.val || R <= root.val ){
        sum += rangeSumBST(root.left, L, R);
    }
    if(root.val <= L || root.val <= R){
        sum += rangeSumBST(root.right, L, R);
    }
    return sum;
    
};

/*
const rangeSumBST = (root, low, high) => {
   
    if (root === null) return 0;
    
    if (root.val >= low && root.val <= high){
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
    } else if (root.val < low){
        return rangeSumBST(root.right, low, high);
    }else{
        return rangeSumBST(root.left, low, high);
    }
}

*/


/*
const rangeSumBST = (root, low, high) => {
    let sum = 0;
      
    const helper = (node, low, high) => {
        if (node.val >= low && node.val <= high ) {
        sum += node.val;
        }
        if (node.left) {
            helper(node.left, low, high);
        }
        if (node.right) {
            helper(node.right, low, high);
        }
    }       
    helper(root, low, high);   
    return sum;
}
*/
