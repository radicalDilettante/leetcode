/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > Math.pow(2,31)){
        return 0;
    };
    let result = 0;
    while(x != 0){
        result = x.toString().split("").reverse().join("");
        if(result[result.length-1] == "-"){
            result = "-" + result.split("-")[0];
        };
        result = parseInt(result);
        if(result > Math.pow(2,31) - 1 || result < Math.pow(-2,31)){
            return 0;
        } else{
            return result;
        }
    };
    return result;
};