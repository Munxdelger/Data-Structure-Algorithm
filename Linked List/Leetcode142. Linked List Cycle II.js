/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 
 142. Linked List Cycle II
 
 Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 Follow up: Can you solve it using O(1) (i.e. constant) memory?
 
 */ 

var detectCycle = function(head) {
    let s = head;
    let f = head;
    let check = head;
    
    while (f !== null && f.next !== null) {
        f = f.next.next;
        s = s.next;
        if ( f === s){
            while (check !== s){
                s = s.next;
                check = check.next;
            }
            return s;
        }
    }
    return null;
}

/*
var detectCycle = function(head) {
    if (head === null || head.next === null) return null;
    let slow = head;
    let fast = head;
    let check = head;
    
    while(fast !== null && fast.next !== null ){
        slow = slow.next;
        fast = fast.next.next;
        if(fast === null || fast.next === null){
            return null;
        }
        if(fast === slow){
            break;
        }
    }
    
    while (check !== slow) {
        check = check.next;
        slow = slow.next;
    }
    return slow;
};
*/