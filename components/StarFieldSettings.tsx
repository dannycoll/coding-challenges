import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface StarFieldSettingsProps {
  canvasWidth: number;
  canvasHeight: number;
  numStars: number;
  setCanvasWidth: (value: number) => void;
  setCanvasHeight: (value: number) => void;
  setNumStars: (value: number) => void;
}
const StarFieldSettings = (props: StarFieldSettingsProps) => {
  const handleWidthChange = (event: Event, newValue: number | number[]) => {
    props.setCanvasWidth(newValue as number);
  };
  const handleHeightChange = (event: Event, newValue: number | number[]) => {
    props.setCanvasHeight(newValue as number);
  };
  const handleNumStarsChange = (event: Event, newValue: number | number[]) => {
    props.setNumStars(newValue as number);
  };
  return (
    <Box sx={{ width: "50vw" }} gap={0.5}>
      <Stack spacing={2} direction="row" alignItems="center">
        <p style={{ width: 200 }}>Canvas Width</p>
        <Slider
          aria-label="Width"
          value={props.canvasWidth}
          defaultValue={400}
          min={100}
          max={1000}
          onChange={handleWidthChange}
        />
      </Stack>
      <Stack spacing={2} direction="row" alignItems="center">
        <p style={{ width: 200 }}>Canvas Height</p>
        <Slider
          aria-label="Height"
          value={props.canvasHeight}
          defaultValue={400}
          min={100}
          max={500}
          onChange={handleHeightChange}
        />
      </Stack>
      <Stack spacing={2} direction="row" alignItems="center">
        <p style={{ width: 200 }}>Number of Stars</p>
        <Slider
          aria-label="Num Stars"
          value={props.numStars}
          defaultValue={100}
          min={10}
          max={1000}
          onChange={handleNumStarsChange}
        />
      </Stack>
    </Box>
  );
};

export default StarFieldSettings;
