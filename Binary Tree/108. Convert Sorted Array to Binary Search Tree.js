/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 
 108. Convert Sorted Array to Binary Search Tree
 Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
 */

const sortedArrayToBST = (nums) => {
    
  return helper (0, nums.length-1, nums);
    
    function helper (left, right, nums) {
        if (left > right) return null;
        let mid = Math.trunc((left + right)/2);
        let root = new TreeNode(nums[mid]);
        
        root.left = helper(left, mid-1, nums);
        root.right = helper(mid+1, right, nums);
        return root;
    }
}





const sortedArrayToBST2 = (nums) => {
 //   if (nums.length === 1) return TreeNode(nums[0]);
    
    return helper(0,nums.length-1,nums);
                 
        function helper (left,right,nums) {
            if (left > right) return null;
            let mid = Math.trunc((left + right)/2);
            let root = new TreeNode(nums[mid]);
            root.left = helper (left, mid-1, nums);
            root.right = helper (mid+1,right,nums);
            return root;
        }
}




var sortedArrayToBST1 = function(nums) {
    return BSTHelper(nums, 0, nums.length - 1)
};

function BSTHelper(nums, left, right){
    
    if(left > right){
        return null
    }
    
    const midIdx = Math.floor((left + right) / 2)
    const currentNode = new TreeNode(nums[midIdx])
    currentNode.left = BSTHelper(nums, left, midIdx - 1)
    currentNode.right = BSTHelper(nums, midIdx + 1, right)
    return currentNode
}