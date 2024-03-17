​# logic
In this question we need to understand a little bit of math.
Also, the key point of this question is understanding Array data structure, the shape of a matrix and indexing of an array.
It needs a formula, but remember, just remembering a formula does not help you to improve.

## Key points

- Array
  - indexing
  - initialization
- Math
  - division
  - mod
- Grid
  - Shape of a matrix
    - m \* n

## formula

get the current row index

- shifted_val = ((i \* grid_col_length + j) + k) % (grid_row_length \* grid_col_length)
- shifted_row = value / grid_col_length
- shifted_col = value % grid_col_length
- put the current value(`grid[i][j]`) to the new position(`arr[shifted_row][shifted_col]`).

### variables

- i
  - index of the current row value
- j
  - index of the current column value
- grid_row_length
- grid_col_length
- shifted_val
- shifted_row
- shifted_col
