/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let arr = [];
    let temp = "";
    for(let i=0;i<s.length;i++){
        
        if(s[i] !== " "){
            temp += s[i];
        } else if(s[i] === " " && temp !== ""){
            arr.push(temp);
            temp = "";
        } 
        
        if(i === s.length-1 && s[i] !== " "){
            arr.push(temp);
        }
    }
    
    return arr[arr.length-1].length;
    
};