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
 
 206. Reverse Linked List
 Given the head of a singly linked list, reverse the list, and return the reversed list.
 
 The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 */

const reverseList = (head) => {
 
    let prev = null;
    
    while(head !== null){
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
}





var reverseList1 = function(head, newNode = null) {
    if (head === null) {
        return newNode;
    }
    let temp = head.next;
    head.next = newNode;
    return reverseList(temp, head);
}
/*
var reverseList = function(head, newNode = null) {

    if (head === null){
        return newNode;
    }
    let temp = head.next;
    head.next = newNode;
    return reverseList(temp, head);
}
*/
/*
var reverseList = function(head) {
    
   let previous = null;
    while (head) {
       let temp = head.next;
        head.next = previous;
        previous = head;
        head = temp;
    }
    return previous;
};
*/
