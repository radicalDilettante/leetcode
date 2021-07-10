/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix="";
    
    for (let n = 0; n < strs[0].length; n++){
        if(strs.every((element)=>(element[n] === strs[0][n]))){
            prefix += strs[0][n];
        } else{
            return prefix;
        }
    }
    
    return prefix;
};