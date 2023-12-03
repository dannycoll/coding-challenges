import { operations } from './const';

function countNeighbours(grid: number[][], row: number, col: number) {
  let count = 0;
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;
  operations.forEach(([r, c]) => {
    const newRow = row + r;
    const newCol = col + c;
    if (
      newRow >= 0
        && newRow < gridHeight
        && newCol >= 0
        && newCol < gridWidth
    ) {
      count += grid[newRow][newCol] ? 1 : 0;
    }
  });
  return count;
}

export default countNeighbours;
