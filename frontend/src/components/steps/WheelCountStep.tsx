import React from 'react';
import { Box, Button, ButtonGroup } from '@mui/material';

interface WheelCountStepProps {
  formData: {
    wheelCount: number;
  };
  setFormData: (data: any) => void;
  onNext: () => void;
}

const WheelCountStep: React.FC<WheelCountStepProps> = ({ formData, setFormData, onNext }) => {
  const handleWheelCountChange = (count: number) => {
    setFormData({ ...formData, wheelCount: count });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <h3>Select Number of Wheels</h3>
      <ButtonGroup variant="contained" aria-label="wheel count selection">
        <Button
          onClick={() => handleWheelCountChange(2)}
          color={formData.wheelCount === 2 ? 'primary' : 'inherit'}
        >
          2 Wheels
        </Button>
        <Button
          onClick={() => handleWheelCountChange(4)}
          color={formData.wheelCount === 4 ? 'primary' : 'inherit'}
        >
          4 Wheels
        </Button>
      </ButtonGroup>
      <Button
        variant="contained"
        onClick={onNext}
        disabled={formData.wheelCount === 0}
        sx={{ mt: 2 }}
      >
        Next
      </Button>
    </Box>
  );
};

export default WheelCountStep; 