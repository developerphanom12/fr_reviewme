import * as React from 'react';
import Box from '@mui/material/Box';
import { Slider } from '@mui/material';


export default function Percentage() {
    function valuetext(value) {
      return `${value}°C`;
    }
  return (
    <div>
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Percentage"
        defaultValue = {30}
        getAriaValueText = {valuetext}
        valueLabelDisplay = "auto"
        step={10}
        marks
        min={0}
        max={100}
      />
     
    </Box>
    </div>
  );
}
