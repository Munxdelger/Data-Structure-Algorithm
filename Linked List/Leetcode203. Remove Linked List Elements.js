/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 
 203. Remove Linked List Elements
 
 Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Constraints:

The number of nodes in the list is in the range [0, 104].
1 <= Node.val <= 50
0 <= k <= 50
 
 */

const removeElements = (head, val) => {
    let prev = new ListNode();
    prev.next = head;
    let neet = prev;
    
    while(prev !== null) {
        while (prev.next !== null && prev.next.val === val){
            prev.next = prev.next.next;
        }
        prev = prev.next;
    }
    return neet.next;
}


var removeElements1 = function(head, val) {
    let temp = new ListNode();
    let cur = temp;
    while (head !== null) {
        if (head.val !== val) {
            cur.next = head;
            cur = cur.next;
        }
         head = head.next;
    }
    cur.next = head; // we didn't add last head.next's null
    return temp.next;
};
