/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp;
    let tail = s.length - 1;
    
    for(let i=0;i<s.length/2;i++){
        if(i === tail) return s;
        
        if(i !== tail){
           temp = s[tail];
           s[tail] = s[i];
           s[i] = temp;
        }
     
        tail--;
    }
    
    return s;
};