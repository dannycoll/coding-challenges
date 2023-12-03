import { TwitterPicker } from 'react-color';

import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import React from 'react';

interface StarFieldSettingsProps {
  canvasWidth: number;
  canvasHeight: number;
  numStars: number;
  starColor: string;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  setStarColor: (color: string) => void;
  setCanvasWidth: (value: number) => void;
  setCanvasHeight: (value: number) => void;
  setNumStars: (value: number) => void;
}

type Color = {
  hex: string;
};
function StarFieldSettings(props: StarFieldSettingsProps) {
  const handleWidthChange = (event: Event, newValue: number | number[]) => {
    const { setCanvasWidth } = props;
    setCanvasWidth(newValue as number);
  };
  const handleHeightChange = (event: Event, newValue: number | number[]) => {
    const { setCanvasHeight } = props;
    setCanvasHeight(newValue as number);
  };
  const handleNumStarsChange = (event: Event, newValue: number | number[]) => {
    const { setNumStars } = props;
    setNumStars(newValue as number);
  };
  const handleStarColorChange = (color: Color) => {
    const { setStarColor } = props;
    setStarColor(color.hex);
  };
  const handleBackgroundColorChange = (color: Color) => {
    const { setBackgroundColor } = props;
    setBackgroundColor(color.hex);
  };
  const {
    canvasHeight, canvasWidth, numStars, backgroundColor, starColor,
  } = props;
  return (
    <Box sx={{ width: '50vw' }} gap={0.5}>
      <Stack spacing={2} direction="row" alignItems="center">
        <p style={{ width: 200 }}>Canvas Width</p>
        <Slider
          aria-label="Width"
          value={canvasWidth}
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
          value={canvasHeight}
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
          value={numStars}
          defaultValue={100}
          min={10}
          max={1000}
          onChange={handleNumStarsChange}
        />
      </Stack>
      <Stack spacing={2} direction="row" alignItems="center">
        <Box>
          <p>Background Colour</p>
          <TwitterPicker
            color={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </Box>
        <Box>
          <p>Star Colour</p>
          <TwitterPicker
            color={starColor}
            onChange={handleStarColorChange}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default StarFieldSettings;
