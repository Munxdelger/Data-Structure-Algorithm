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
 * @param {number} k
 * @return {number}
 
 230. Kth Smallest Element in a BST
 Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
 
 Constraints:
The number of nodes in the tree is n.
1 <= k <= n <= 104
0 <= Node.val <= 104
 
 */


var kthSmallest = function(root, k) {
    
    const helper = (myTree, res) => {
        if (myTree === null) return;
        if(res.length > 1){
            return;
        }
        helper(myTree.left,res);
        res[0]--;
  
        if (res[0] === 0){
            res.push(myTree.val);
            return;
        }
        return helper(myTree.right,res);        
    }
    
    let res = [k]
    helper(root, res);
    return res[1];
};




const kthSmallest6 = (root, k) => {
    
    let stack = [];
    let cur = root;
    
    while (cur !== null || stack.length > 0){
        while(cur !== null){
            stack.push(cur);
            cur = cur.left;
        }
        let temp = stack.pop();
        k--;
        if (k===0){
            return temp.val;
        }
        cur = temp.right;
    }
}


const kthSmallest1 = (root, k) => {
    let res = [];
    let stack = [];
    let cur = root;
    
    while (cur !== null || stack.length > 0){
        while(cur !== null){
            stack.push(cur);
            cur = cur.left;
        }
        let temp = stack.pop();
        res.push(temp.val);
        cur = temp.right;
    }
    return res[k-1];
}




var kthSmallest8 = function(root, k) {
    
    const helper = (myTree) => {
        if (myTree === null) return [];
        return [...helper(myTree.left),myTree.val, ...helper(myTree.right)];        
    }
    
    let myList = helper(root);
    return myList[k-1];
};
