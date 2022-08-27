import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Paper,
  Slider,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TwitterPicker } from "react-color";
import InfoIcon from "@mui/icons-material/Info";

interface GameOfLifeSettingsProps {
  onRun: () => void;
  onClear: () => void;
  onRandomise: () => void;
  running: boolean;
  speed: number;
  setSpeed: (speed: number) => void;
  gridHeight: number;
  setGridHeight: (height: number) => void;
  gridWidth: number;
  setGridWidth: (width: number) => void;
  aliveColor: string;
  setAliveColor: (color: string) => void;
  deadColor: string;
  setDeadColor: (color: string) => void;
}
const GameOfLifeSettings = ({
  onRun,
  running,
  onRandomise,
  onClear,
  ...props
}: GameOfLifeSettingsProps) => {
  useEffect(() => {
    console.log("GameOfLifeSettings.useEffect");
    onClear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.gridHeight, props.gridWidth]);
  const handleWidthChange = (event: Event, newValue: number | number[]) => {
    props.setGridWidth(newValue as number);
  };
  const handleHeightChange = (event: Event, newValue: number | number[]) => {
    props.setGridHeight(newValue as number);
  };
  const handleSpeedChange = (event: Event, newValue: number | number[]) => {
    props.setSpeed(newValue as number);
  };
  const handleAliveColorChange = (color: any) => {
    props.setAliveColor(color.hex);
  };
  const handleDeadColorChange = (color: any) => {
    props.setDeadColor(color.hex);
  };
  const handleChange = () => {
    setIsOpen((prev) => !prev);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ padding: 3 }}>
      <Box alignItems="center" display="flex" flexDirection="column">
        <ButtonGroup variant="outlined">
          <Button onClick={() => onRun()}>{running ? "Stop" : "Start"}</Button>
          <Button onClick={() => onRandomise()}>Randomise</Button>
          <Button onClick={() => onClear()}>Clear</Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ width: "100%", maxWidth: "50vw", paddingTop: 3 }}>
        <Collapse
          orientation="vertical"
          in={isOpen}
          onClick={handleChange}
          collapsedSize={25}
          sx={{ width: "100%" }}
        >
          <InfoIcon />
          <Paper
            elevation={4}
            sx={{ padding: 0.5, backgroundColor: "lightGray" }}
          >
            <Box sx={{ width: "100%" }}>
              <p>
                Conway's Game of Life is a zero player game, entirely determined
                by its initial state. It is a cellular automaton devised by John
                Conway, a British mathematician, in 1970. It is Turing complete,
                able to simulate a universal constructor or any other Turing
                Machine.
              </p>
              <p>The rules are as follows:</p>
              <ul>
                <li>
                  Any live cell with fewer than two live neighbours dies, as if
                  caused by under-population.
                </li>
                <li>
                  Any live cell with two or three live neighbours lives on to
                  the next generation.
                </li>
                <li>
                  Any live cell with more than three live neighbours dies, as if
                  by overcrowding.
                </li>
                <li>
                  Any dead cell with exactly three live neighbours becomes a
                  live cell, as if by reproduction.
                </li>
              </ul>
            </Box>
          </Paper>
        </Collapse>
      </Box>
      <Box gap={0.5}>
        <Stack spacing={1} direction="row" alignItems="center" height={30}>
          <p style={{ width: 200 }}>Grid Width</p>
          <Slider
            aria-label="Width"
            value={props.gridWidth}
            defaultValue={20}
            min={5}
            max={100}
            onChange={handleWidthChange}
          />
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center" height={30}>
          <p style={{ width: 200 }}>Grid Height</p>
          <Slider
            aria-label="Height"
            value={props.gridHeight}
            defaultValue={20}
            min={5}
            max={100}
            onChange={handleHeightChange}
          />
        </Stack>
        <Stack spacing={1} direction="row" alignItems="center" height={30}>
          <p style={{ width: 200 }}>Speed</p>
          <Slider
            aria-label="Height"
            value={props.speed}
            defaultValue={500}
            min={50}
            max={1000}
            onChange={handleSpeedChange}
          />
        </Stack>
        <Stack spacing={0.5} direction="row" alignItems="center">
          <Box>
            <p>Dead Colour</p>
            <TwitterPicker
              color={props.deadColor}
              onChange={handleDeadColorChange}
            />
          </Box>
          <Box>
            <p>Alive Colour</p>
            <TwitterPicker
              color={props.aliveColor}
              onChange={handleAliveColorChange}
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default GameOfLifeSettings;
