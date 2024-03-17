/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let rowLength = grid.length;
    let colLength = grid[0].length;
    
    const arr = new Array(rowLength)
                        .fill()
                        .map(() => new Array(colLength).fill(0));
    
    for(let i=0;i<rowLength;i++){
        for(let j=0;j<colLength;j++){
            let val = ((i * colLength + j) + k) % (rowLength * colLength);
            let nextRow = Math.floor(val / colLength);
            let nextCol = val % colLength;
            
            arr[nextRow][nextCol] = grid[i][j];
        }
    }
    
    return arr;
};