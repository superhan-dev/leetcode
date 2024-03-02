/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(t === "") return s === t;
    
    let i=0;
    for(let c of t){
        if(c === s[i]) i++;
        if(i === s.length) return true;
    }
    return false;
};