import React from 'react';
import { TextField, Box } from '@mui/material';

interface NameStepProps {
  formData: {
    firstName: string;
    lastName: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const NameStep: React.FC<NameStepProps> = ({ formData, setFormData }) => {
  const handleChange = (field: 'firstName' | 'lastName') => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="First Name"
        value={formData.firstName}
        onChange={handleChange('firstName')}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Last Name"
        value={formData.lastName}
        onChange={handleChange('lastName')}
        required
        margin="normal"
      />
    </Box>
  );
};

export default NameStep; 