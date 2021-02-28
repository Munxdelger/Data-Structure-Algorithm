/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 
 2. Add Two Numbers
 
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 
 
 
 */

const addTwoNumbers = (l1, l2) => {
    
    let result = new ListNode(-1);
    let cur = result;
    
    let carry = 0;    
    while (l1 !== null || l2 !== null) {
        let n1 = (l1 === null ? 0 : l1.val);
        let n2 = (l2 === null ? 0 : l2.val);

        let sum = n1 + n2 + carry;
        carry = Math.trunc(sum / 10);
        cur.next = new ListNode (sum % 10);
        cur = cur.next;
        
        if (l1 !== null){
            l1 = l1.next;
        }
        if (l2 !== null){
            l2 = l2.next;
        }
    }
    if (carry > 0){
        cur.next = new ListNode(carry);
    }
    return result.next;
}



/*
var addTwoNumbers = function(l1, l2) {
    
    let list = new ListNode(-1);
    let cur = list;
    
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let n1 = 0;
        if (l1 !== null) {
            n1 = l1.val;
        }
        let n2 = 0;
        if (l2 !== null) {
            n2 = l2.val;
        }
        let sum = n1 + n2 + carry;
        carry = Math.trunc(sum / 10);
        
        list.next = new ListNode(sum % 10);
        list = list.next;
        
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
        
    }
    if (carry > 0) {
        list.next = new ListNode(carry);
    }
    return cur.next;
};
*/