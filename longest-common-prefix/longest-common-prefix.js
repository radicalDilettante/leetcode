/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1){
        return strs[0];
    }
    if(strs[0].length === 0){
        return "";
    }
    
    let first = strs[0];
    let arr = strs.slice(1, strs.length);
    
    for (a=0; a <= first.length; a++){
        for(b=0; b < arr.length; b++){
            if(arr[b].length === 0){
                return "";
            }
            if(arr[b].slice(0, a) != first.slice(0, a)){
                return first.slice(0, a-1);
            }
        }
    }
    
    return first;
};