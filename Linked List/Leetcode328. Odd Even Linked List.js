/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 
 328. Odd Even Linked List
 Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.
Constraints:

The number of nodes in the linked list is in the range [0, 104].
-106 <= Node.val <= 106

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
 
 */

const oddEvenList = head => {
    if (head === null) return null;
    
    let odd = head;
    let even = head.next;
    let evenChain = even;
    
    while(even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenChain;
    return head;
}

var oddEvenList1 = function(head) {
    let snooze = new ListNode();
    let res = snooze;
    
    let snooze1 = new ListNode();
    let res1 = snooze1;
    
    let cur = head;  
    while ( cur !== null && cur.next !== null ) { 
        res.next = cur;
        res = res.next;
        res1.next = cur.next;
        res1 = res1.next;      
        cur = cur.next.next;
    }
    if (cur !== null){
        res.next = cur;
        res = res.next;
    }
    res1.next = null;
    res.next = snooze1.next;
    return snooze.next;
};