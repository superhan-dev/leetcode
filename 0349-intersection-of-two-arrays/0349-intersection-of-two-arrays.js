/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set();
    
    for(let n1 of nums1){
        for(let n2 of nums2){
            if(n1 === n2) set.add(n1);
        }
    }
    
    return [...set];
};