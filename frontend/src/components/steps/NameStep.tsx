import React from 'react';
import { Box, TextField, Button } from '@mui/material';

interface NameStepProps {
  formData: {
    firstName: string;
    lastName: string;
  };
  setFormData: (data: any) => void;
  onNext: () => void;
}

const NameStep: React.FC<NameStepProps> = ({ formData, setFormData, onNext }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValid = formData.firstName.trim() !== '' && formData.lastName.trim() !== '';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        required
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        required
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={onNext}
        disabled={!isValid}
        sx={{ mt: 2 }}
      >
        Next
      </Button>
    </Box>
  );
};

export default NameStep; 