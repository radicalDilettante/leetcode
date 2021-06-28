/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    
    if(x < 0){
        return false;
    }

    if(str === str.split("").reverse().join("")){
        return true;
    } else{
        return false;
    }
};
