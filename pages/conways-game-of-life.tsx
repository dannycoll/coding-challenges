import produce from "immer";
import type { NextPage } from "next";
import { useCallback, useRef, useState } from "react";
import GameOfLifeGrid from "../components/ConwaysGameOfLife/GameOfLifeGrid";
import GameOfLifeSettings from "../components/ConwaysGameOfLife/GameOfLifeSettings";
import { countNeighbours } from "../components/ConwaysGameOfLife/utils";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

const Conways: NextPage = () => {
  const [gridHeight, setGridHeight] = useState(20);
  const [gridWidth, setGridWidth] = useState(20);
  const [aliveColor, setAliveColor] = useState("#ffffff");
  const [deadColor, setDeadColor] = useState("#000000");
  const [running, setRunning] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [speed, setSpeed] = useState(500);

  const emptyGrid = () => {
    const rows = [];
    for (let row = 0; row < gridHeight; row++) {
      rows.push(Array.from(Array(gridWidth), () => 0));
    }
    return rows;
  };
  const [grid, setGrid] = useState(() => emptyGrid());
  const randomGrid = () => {
    const rows = [];
    for (let row = 0; row < gridHeight; row++) {
      rows.push(
        Array.from(Array(gridWidth), () => (Math.random() > 0.5 ? 1 : 0))
      );
    }
    return rows;
  };
  const runningRef = useRef(running);
  runningRef.current = running;

  const speedRef = useRef(speed);
  speedRef.current = speed;
  const runSimulation = useCallback(() => {
    if (!runningRef.current) return;

    // Update grid
    setGrid((grid) => {
      return produce(grid, (gridCopy: number[][]) =>
        grid.forEach((row, i) =>
          row.forEach((cell, j) => {
            if (cell > 0) gridCopy[i][j] += 1;

            const numNeighbours = countNeighbours(grid, i, j);
            if (numNeighbours < 2 || numNeighbours > 3) gridCopy[i][j] = 0;
            else if (cell === 0 && numNeighbours === 3) gridCopy[i][j] = 1;
          })
        )
      );
    });

    setGeneration((generation) => {
      return generation + 1;
    });

    setTimeout(runSimulation, 1050 - speedRef.current);
  }, []);

  const onRun = () => {
    // Toggle running
    setRunning(!running);

    if (!running) {
      // Run simulation
      runningRef.current = true; // Prevent race condition
      runSimulation();
    }
  };

  const onRandomise = () => {
    setGrid(randomGrid());
    onRun();
  };

  const onClear = () => {
    // Clear grid
    setGrid(emptyGrid);
    // Stop simulation
    setRunning(false);
    // Reset generation
    setGeneration(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Nav activePage={2} />
        <h1>Conway's Game of Life</h1>
        <GameOfLifeGrid
          width={gridWidth}
          height={gridHeight}
          grid={grid}
          setGrid={setGrid}
          aliveColor={aliveColor}
          deadColor={deadColor}
        />
        <GameOfLifeSettings
          setSpeed={setSpeed}
          speed={speed}
          onRun={onRun}
          running={running}
          onRandomise={onRandomise}
          onClear={onClear}
          gridHeight={gridHeight}
          setGridHeight={setGridHeight}
          gridWidth={gridWidth}
          setGridWidth={setGridWidth}
          aliveColor={aliveColor}
          setAliveColor={setAliveColor}
          deadColor={deadColor}
          setDeadColor={setDeadColor}
        />
        <p> Generation: {generation}</p>
      </div>
    </div>
  );
};

export default Conways;
