/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 
160. Intersection of Two Linked Lists
 
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
 
It is guaranteed that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Constraints:

The number of nodes of listA is in the m.
The number of nodes of listB is in the n.
1 <= m, n <= 3 * 104
1 <= Node.val <= 105
1 <= skipA <= m
1 <= skipB <= n
intersectVal is 0 if listA and listB do not intersect.
intersectVal == listA[skipA + 1] == listB[skipB + 1] if listA and listB intersect.

Follow up: Could you write a solution that runs in O(n) time and use only O(1) memory?
 
 */

const getIntersectionNode = (headA, headB) => {
    let p1 = headA;
    let p2 = headB;
    
    while (p1 !== p2) {
        if (p1 !== null) {
            p1 = p1.next;
        } else {
            p1 = headB;
        }
        if (p2 !== null) {
            p2 = p2.next;
        } else {
            p2 = headA;
        }
    }
    return p1;
}

const getIntersectionNode3 = (headA, headB) => {
    const seen = new Set();
    while (headA) {
        seen.add(headA);
        headA = headA.next;
    }

    while (headB) {
        if (seen.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};


var getIntersectionNode1 = function(headA, headB) {
    let a = headA;
    let b = headB;
    let la = 0;
    let lb = 0;
    
    
    while(a !== null) {
        la++;
        a = a.next;
    }
    while(b !== null) {
        lb++;
        b = b.next;
    }
    
    if (lb > la) {
        while (lb !== la){
            headB = headB.next;
            lb--;
        }
    } else {
        while (lb !== la) {
            headA = headA.next;
            la--;
        }
    }
    
    while(headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};
