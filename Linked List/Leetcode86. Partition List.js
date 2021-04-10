/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x2
 * @return {ListNode}
 
 86. Partition List
 Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.
Constraints:
The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200
 */

const partition = (head, x) => {
    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    
    let bigger = new ListNode();
    let curbig = bigger;
    
    while (cur.next !== null) {
        if (cur.next.val >= x) {
            curbig.next = cur.next;
            curbig = curbig.next;
            cur.next = cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    curbig.next = null;
    cur.next = bigger.next;
    return dummy.next;
}


var partition1 = function(head, x) {  
    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    
    let bigger = new ListNode();
    let curBig = bigger;
    
    while (cur.next !== null) {
        if (cur.next.val >= x){
            curBig.next = cur.next;
            curBig = curBig.next;
            cur.next = cur.next.next; 
            continue;
        }
        cur = cur.next;
    }
    curBig.next = null;
    
    cur.next = bigger.next;
    return dummy.next;
};