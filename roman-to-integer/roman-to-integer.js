/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let arr = s.split("");
    arr.map((e, index) =>{
        let next = arr[index+1];
        switch(e){
            case "I":
                if(next === "V" || next === "X"){
                result = result - 1;
                } else{
                result = result + 1;
                }
                break;
                
            case "V":
                result = result + 5;
                break;
            
            case "X":
                if(next === "L" || next === "C"){
                result = result - 10;
                } else{
                result = result + 10;
                }
                break;
                
            case "L":
                result = result + 50;
                break;
                
            case "C":
                if(next === "D" || next === "M"){
                result = result - 100;
                } else{
                result = result + 100;
                }
                break;
                
            case "D":
                result = result + 500;
                break;
                
            case "M":
                result = result + 1000;
                break;
            
            default:
                break;
        }
    });
    
    return result;
};