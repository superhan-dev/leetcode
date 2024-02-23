/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let prev = "";
    let sum = 0;
    for(let str of s){
        if(str === "I") sum += 1;
        else if(str === "V"){
            sum = prev === "I" ? sum + 3 : sum + 5;
        }
        else if(str === "X"){
            sum = prev === "I" ? sum + 8 : sum + 10;
        }
        else if(str === "L"){
            sum = prev === "X" ? sum + 30 : sum + 50;
        }
        else if(str === "C"){
            sum = prev === "X" ? sum + 80 : sum + 100;
        }
        else if(str === "D"){
            sum = prev === "C" ? sum + 300 : sum + 500;
        }
        else if(str === "M"){
            sum = prev === "C" ? sum + 800 : sum + 1000;
        };
        
        prev = str;
    }
    return sum;
};