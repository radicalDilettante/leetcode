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
var mergeTwoLists = function(l1, l2) {
  
    let p1 = l1;
    let p2 = l2;
    let result = new ListNode(-1);
    let ctx = result;
   
     while(p1 && p2){
        if(p1.val < p2.val){
            ctx.next = p1;
            p1 = p1.next;
        }else{
            ctx.next = p2;
            p2 = p2.next;
        }
        ctx = ctx.next;
    }
    
    if(!p1){
        ctx.next = p2;
    }
    if(!p2){
        ctx.next = p1;
    }
    
    return result.next;
};