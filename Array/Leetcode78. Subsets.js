/**
 * @param {number[]} nums
 * @return {number[][]}
 
78. Subsets
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */


/*
[1,2,3,4]
0000= [] 0001 = [4] 0010 = [3] 0011 [3,4] 0100 0101 0110 0111 1000 
*/


const subsets = nums => {
    let result = [];
    let length = Math.pow(2,nums.length);
    
    for(let i=0; i < length; i++){              // i = 9  1001 & 1000(num) = 1000 
        let num = i; 
        let cur = []
        let index = 0;
        while (num !== 0) {
            if ((1 & num) > 0){
                cur.push(nums[index]);   
            }
            index++;
            num = num >> 1;   
        }
        result.push(cur);
    }
    return result;
}




var subsets1 = function(nums) {   
    let result = [[]];
      
    for (let i=0; i < nums.length; i++) {
        let len = result.length;
        for (let j=0; j < len; j++) {
            let cur = [...result[j]];
            cur.push(nums[i]);   // cur = [1]
            result.push(cur);    // result = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]          
        }
    }
    return result; 
};