import { Box, Button, ButtonGroup, Slider, Stack } from "@mui/material";
import { useEffect } from "react";
import { TwitterPicker } from "react-color";

interface GameOfLifeSettingsProps {
  onRun: () => void;
  onClear: () => void;
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
  return (
    <div style={{ padding: 3 }}>
      <Box alignItems="center" display="flex" flexDirection="column">
        <ButtonGroup variant="outlined">
          <Button onClick={() => onRun()}>{running ? "Stop" : "Start"}</Button>
          {/* <Button onClick={() => onClear()}>Randomise</Button> */}
          <Button onClick={() => onClear()}>Clear</Button>
        </ButtonGroup>
      </Box>
      <Box gap={0.5}>
        <Stack spacing={1} direction="row" alignItems="center">
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
        <Stack spacing={1} direction="row" alignItems="center">
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
        <Stack spacing={1} direction="row" alignItems="center">
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
