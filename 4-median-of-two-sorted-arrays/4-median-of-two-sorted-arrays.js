/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    const length = nums1.length + nums2.length;
    const numbers = [];
    
    let l = 0;
    let r = 0;
    
    while(numbers.length < length){
        if(nums1[l] < nums2[r] || r >= nums2.length){
            numbers.push(nums1[l++])
        }else if(nums1[l] >= nums2[r] || l >= nums1.length){
            numbers.push(nums2[r++])
        }
    }
    01234
    if(length % 2){
        return numbers[parseInt(length / 2)] 
    }else{
        return (numbers[length * 0.5] + numbers[length * 0.5 - 1]) / 2;
    }
};