/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let idx = 0;
    
    if(haystack.length === 1) return idx;
    
    let temp = haystack;
    while(haystack.length !== idx){
        temp = haystack.substring(idx,haystack.length);
        
        let t = "";
        for(let i=0;i<needle.length;i++){
            if(temp[i] === needle[i]) t = t + temp[i];
        }
     
        if(t === needle) return idx;
        idx++;
    }
    
    return -1;
};
