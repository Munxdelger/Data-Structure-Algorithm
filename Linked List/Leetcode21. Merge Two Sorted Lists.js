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
 
21. Merge Two Sorted Lists
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
 */

const mergeTwoLists = (l1, l2) => {    
    
    let dummy = new ListNode(0);
    let cur = dummy; 
    while(l1 !== null && l2 !== null){
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    // if (l1 === null) cur.next = l2;
    // if (l2 === null) cur.next = l1;
    cur.next = l1 || l2;
    return dummy.next;
}




var mergeTwoLists1 = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    
    if(l1.val < l2.val){
        l1.next = mergeTwoLists (l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists (l1, l2.next);
        return l2;
        
    }
};
