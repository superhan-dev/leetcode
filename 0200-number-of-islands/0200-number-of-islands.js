/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Set();
    let count = 0;
    
    for(let row=0;row<grid.length;row++){
        for(let col=0;col<grid[0].length;col++){
            if(isIsland(grid,row,col,visited)){
                count++;
            }
        }
    }
    
    return count++;
};

const isIsland = (grid,row,col,visited) => {
    const position = `${row},${col}`;
    const isInRow = row < grid.length && 0 <= row;
    const isInCol = col < grid[0].length && 0 <= col;
    
    if(!isInRow ||
       !isInCol || 
       !grid[row][col] ||
       grid[row][col] === "0" || 
       visited.has(position)
      ) return false;
  
    visited.add(position);
    
    isIsland(grid,row+1,col,visited);
    isIsland(grid,row-1,col,visited);
    isIsland(grid,row,col+1,visited);
    isIsland(grid,row,col-1,visited);
    
    return true;
    
}
