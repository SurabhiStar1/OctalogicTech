import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import axios from 'axios';

interface VehicleTypeStepProps {
  formData: {
    wheelCount: number;
    vehicleType: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

interface VehicleType {
  id: number;
  name: string;
  wheelCount: number;
}

const VehicleTypeStep: React.FC<VehicleTypeStepProps> = ({ formData, setFormData }) => {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/vehicle-types?wheelCount=${formData.wheelCount}`);
        setVehicleTypes(response.data);
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
      }
    };

    if (formData.wheelCount) {
      fetchVehicleTypes();
    }
  }, [formData.wheelCount]);

  const handleChange = (event: SelectChangeEvent) => {
    setFormData((prev: any) => ({
      ...prev,
      vehicleType: event.target.value,
    }));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Vehicle Type</InputLabel>
        <Select
          value={formData.vehicleType}
          onChange={handleChange}
          label="Vehicle Type"
        >
          {vehicleTypes.map((type) => (
            <MenuItem key={type.id} value={type.name}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default VehicleTypeStep; 