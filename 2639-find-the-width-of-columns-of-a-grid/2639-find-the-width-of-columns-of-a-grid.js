/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    let col=grid[0].length;
    let row=grid.length;

    const res = [];
    
    for(let j=0;j<col;j++){
        let max_length = (grid[0][j]+"").length;
        for(let i=0;i<row;i++){
            max_length = Math.max(max_length,(grid[i][j]+"").length);
            res[j] = max_length;
        }
    }
    
    return res;
    
};
