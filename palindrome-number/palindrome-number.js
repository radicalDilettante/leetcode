/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    if(x < 0){
        return false;
    }
    
    let arr = str.split("");
    
    let mid = parseInt(arr.length / 2);
   
    let target1 = [];
    let target2 = [];
    
    for (let i = 0; i < mid; i++){
        target1.push(arr[i]);
    }
    
    if(str.length % 2 === 1){
        mid++;
    }
    
    for (let i = mid; i < arr.length; i++){
        target2.push(arr[i]);
    }
    
    if(target1.join() === target2.reverse().join()){
        return true;
    } else{
        return false;
    }
};