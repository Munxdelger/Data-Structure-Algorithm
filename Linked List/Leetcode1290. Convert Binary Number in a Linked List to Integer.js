/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 
 1290. Convert Binary Number in a Linked List to Integer
 
 Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880
 */

var getDecimalValue1 = function(head) {
    let p1 = head;
    let s = "";
    
    while (p1 !== null) {
        s = s + p1.val;
        p1 = p1.next;
    }
    return parseInt(s, 2);
};


//        1           1         0      1
// v=0    ^ 
//   v= v*2 + 1= 1 , 1*2+1= 3,    6,    6*2+1=13

var getDecimalValue = function(head) {
    let p1 = head;
    let number = 0;
    
    while (p1 !== null) {
        number = number * 2 + p1.val;
        p1 = p1.next;
    }
    return number;
};
