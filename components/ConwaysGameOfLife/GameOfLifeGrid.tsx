import React from 'react';
import produce from 'immer';

interface GameOfLifeGridProps {
  width: number;
  grid: number[][];
  setGrid: (grid: number[][]) => void;
  aliveColor: string;
  deadColor: string;
}

function GameOfLifeGrid(props: GameOfLifeGridProps) {
  const {
    grid, setGrid, width, aliveColor, deadColor,
  } = props;
  const onCell = (i: number, j: number) => {
    setGrid(
      produce(grid, (gridCopy) => {
        // eslint-disable-next-line no-param-reassign
        gridCopy[i][j] = grid[i][j] ? 0 : 1;
      }),
    );
  };

  const getKey = (i: number, j: number) => `${i}-${j}`;
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${width}, 20px)` }}>
      {grid.map((rows, i) => rows.map((_, k) => (
        <div
          key={getKey(i, k)}
          onClick={() => onCell(i, k)}
          onKeyDown={() => {}}
          style={{
            width: 20,
            height: 20,
            backgroundColor: grid[i][k]
              ? aliveColor
              : deadColor,
            border: `solid 1px ${aliveColor}`,
          }}
          role="presentation"
        />
      )))}
    </div>
  );
}

export default GameOfLifeGrid;
