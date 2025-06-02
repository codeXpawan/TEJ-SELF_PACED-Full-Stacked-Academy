// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
    const grid = [];
    
    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numColumns; j++) {
            row.push(j + 1);
        }
        grid.push(row);
    }
    
    return grid;
}