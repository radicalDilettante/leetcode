/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//     var map = {};
//     for (var i = 0; i < nums.length; i++){
//         var complement = target - nums[i];
//         if (map[complement] != null) {
//             return [map[complement],i]
//         };
//         map[nums[i]] = i;
//     }
// };


const twoSum = function (nums, target) {
    const map = new Map;
    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement),i]
        };
        map.set(nums[i], i);
    }
};


// const twoSum = function (nums, target) {
   
//     for(let i = 0; i < nums.length; i++){
//         const complement = target - nums[i];
        
//         for(let j = i + 1; j < nums.length; j++){
            
//             if(nums[j] === complement){
//                 return [i,j]
//             }
//         }
//     }
// }