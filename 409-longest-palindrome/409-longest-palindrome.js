/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = new Map()
    for(let i = 0; i < s.length; i++){
        const letter = s[i];
        if(map.has(letter)){
            let n = map.get(letter) + 1
            map.set(letter, n)
        } else{
            map.set(letter,1)
        }
    }

    let hasCenter = false;
    let count = 0;
    
    for(const [letter, number] of map){
        count += parseInt(number / 2) * 2;
        if(number % 2 != 0){
            hasCenter = true
        }
    }
    if(hasCenter){
        count++
    }
    
    return count
};