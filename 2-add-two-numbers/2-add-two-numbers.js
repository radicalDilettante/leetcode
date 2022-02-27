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
 */
var addTwoNumbers = function(l1, l2) {
        
    let l1p = l1;
    let l2p = l2;
    let prev = new ListNode();
    let curr = prev
    
    let carry = 0;
    while(l1p || l2p || carry){
       let sum = (l1p? l1p.val : 0) + (l2p ? l2p.val : 0) + carry;
        carry = Math.floor(sum / 10)
        
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        l1p=l1p?.next;
        l2p=l2p?.next;
        
    }
    return prev.next
};