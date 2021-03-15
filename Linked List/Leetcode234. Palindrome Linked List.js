/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 
 234. Palindrome Linked List
 Given the head of a singly linked list, return true if it is a palindrome.
 Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9

Follow up: Could you do it in O(n) time and O(1) space?

 */

const isPalindrome = head => {
    if(head === null || head.next === null) return true;
    
    let s = head;
    let f = head;    
    let prev = null; 
    
    while(f !== null && f.next !== null) {
        f = f.next.next;
        let temp = s.next;
        s.next = prev;
        prev = s;
        s = temp;  
    }
    if(f !== null){
        s = s.next;
    }
    
    while (prev !== null && s !== null) {
        if (prev.val !== s.val){
            return false;
        }
        prev= prev.next;
        s = s.next;
    }
    return true;    
}

var isPalindrome1 = function(head) {
   // if (head === null || head.next === null) return true;
    let slow = head;
    let fast = head;
    let pre = null;
   
    while ( fast !== null && fast.next !== null ) {
        fast = fast.next.next;
        
        let temp = slow.next;
        slow.next = pre;
        pre = slow;
        slow = temp;

    };
    
    if (fast !== null){   // when slow is middle of the list (when list's length is odd)
        slow = slow.next;
    }
   // console.log(pre,slow);
    while( pre !== null ) {
        if (pre.val !== slow.val){
            return false;
        }
        pre = pre.next;
        slow = slow.next;
    }
    return true;  
};

/*
var isPalindrome = function(head) {
    if (!head || head.next === null) return true; 
    let count = 0;
    let arr = [];
    
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
        count++;
    }
    
    let i=0;
    while(Math.trunc(count/2) >= i) {
        if (arr[i] !== arr[count-1-i]){
            return false;
        }
        i++;
    }
    return true;
}
*/

/*
var isPalindrome = function (head) {
    
    let slow = head;
    let fast = head;
    while ( fast !== null && fast.next !== null ) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if ( fast !== null) {
        slow = slow.next;
    }
     
    let pre = null;
    while (slow !== null){
        let temp = slow.next;
        slow.next = pre;
        pre = slow;
        slow = temp;
    }
    
    while(pre !== null) {
        if (head.val !== pre.val){
            return false;
        }
        head = head.next;
        pre = pre.next;
    }
    return true;
    
}
*/



/*
var isPalindrome = function(head) {
   // if (head === null || head.next === null) return true;
    let slow = head;
    let fast = head;
    let pre = null;
    
    while ( fast !== null && fast.next !== null ) {
        fast = fast.next.next;
        let temp = slow.next;
        slow.next = pre;
        pre = slow;
        slow = temp;
     //   console.log(pre,slow, fast);
    };
    
    if (fast !== null){   // when slow is middle of the list (when list's length is odd)
        slow = slow.next;
    }
   // console.log(pre,slow);
    while( pre !== null && slow !== null ) {
        if (pre.val !== slow.val){
            return false;
        }
        pre = pre.next;
        slow = slow.next;
    }
    return true;  
};
// Time Complexity O(n), Space Complexity O(1) 
*/