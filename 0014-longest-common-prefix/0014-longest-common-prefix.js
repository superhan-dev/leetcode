/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    if(strs.length === 0) return "";
    strs = strs.sort();
    
    let tempStr = strs[0];
    let answer = "";
    
    for(let i=1;i<strs.length;i++){
        let str = strs[i];
        for(let j=0;j<str.length;j++){
            let subTempStr = tempStr.substring(0,j+1);
            let subStr = str.substring(0,j+1);
               
            if(subTempStr === subStr){
                answer = subStr;
            } else {
                if(subTempStr[0] === subStr[0]) {
                    continue;  
                } else {
                    return "";
                }
            }
        }
    }
    return answer;
};