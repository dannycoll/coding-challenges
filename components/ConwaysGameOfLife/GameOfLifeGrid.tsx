import produce from "immer";
import React from "react";

interface GameOfLifeGridProps {
  width: number;
  height: number;
  grid: number[][];
  setGrid: (grid: number[][]) => void;
  aliveColor: string;
  deadColor: string;
}
const GameOfLifeGrid = (props: GameOfLifeGridProps) => {
  const onCell = (i: number, j: number) => {
    props.setGrid(
      produce(props.grid, (gridCopy) => {
        gridCopy[i][j] = props.grid[i][j] ? 0 : 1;
      })
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${props.width}, 20px)`,
      }}
    >
      {props.grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={`${i}-${k}`}
            onClick={() => onCell(i, k)}
            style={{
              width: 20,
              height: 20,
              backgroundColor: props.grid[i][k]
                ? props.aliveColor
                : props.deadColor,
              border: `solid 1px ${props.aliveColor}`,
            }}
          />
        ))
      )}
    </div>
  );
};

export default GameOfLifeGrid;
