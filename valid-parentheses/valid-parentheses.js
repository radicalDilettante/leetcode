/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 === 1){
        return false;
    }
    
    let arr = ["()", "[]", "{}"];
    let str = s;
    let progress = true;
    
    while(progress){
        let newStr = str;
        
        arr.map((n)=>{
        str = str.replace(n, "");  
        })
        
        if (newStr === str){
            progress = false;
        }
    }
    
    if(str.length === 0){
        return true;
    } else if(str.length !== 0){
        return false;
    }
};