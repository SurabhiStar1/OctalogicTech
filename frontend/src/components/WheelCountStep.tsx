import React from 'react';
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface WheelCountStepProps {
  formData: {
    wheelCount: number;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const WheelCountStep: React.FC<WheelCountStepProps> = ({ formData, setFormData }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      wheelCount: parseInt(event.target.value),
    }));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Number of Wheels</FormLabel>
        <RadioGroup
          value={formData.wheelCount}
          onChange={handleChange}
        >
          <FormControlLabel value={2} control={<Radio />} label="2 Wheels" />
          <FormControlLabel value={3} control={<Radio />} label="3 Wheels" />
          <FormControlLabel value={4} control={<Radio />} label="4 Wheels" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default WheelCountStep; 