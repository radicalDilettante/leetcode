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
    let answer=[];
    
    
    let nextDigit = 0;
    while(l1p || l2p){
       let i = (l1p? l1p.val : 0) + (l2p ? l2p.val : 0);
        i += nextDigit
        let j;
        if(i >= 10){
            i -= 10;
            j = 1;
        }else{
            j = 0;
        }
      
        answer.push(i)
        nextDigit = j;
        l1p=l1p?.next;
        l2p=l2p?.next;
    }
    if(nextDigit){
        answer.push(nextDigit);
    }
    
    let result;
    
    for(let i = answer.length - 1; i >= 0; i--){
        result = new ListNode(answer[i], result);
    }
    
    return result;
};