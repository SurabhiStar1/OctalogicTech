import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import axios from 'axios';

interface VehicleModelStepProps {
  formData: {
    vehicleType: string;
    vehicleId: number;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

interface Vehicle {
  id: number;
  name: string;
  type: string;
}

const VehicleModelStep: React.FC<VehicleModelStepProps> = ({ formData, setFormData }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/vehicles/by-type/${formData.vehicleType}`);
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    if (formData.vehicleType) {
      fetchVehicles();
    }
  }, [formData.vehicleType]);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedVehicle = vehicles.find(v => v.id === Number(event.target.value));
    setFormData((prev: any) => ({
      ...prev,
      vehicleId: selectedVehicle?.id || 0,
    }));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Vehicle Model</InputLabel>
        <Select
          value={formData.vehicleId.toString()}
          onChange={handleChange}
          label="Vehicle Model"
        >
          {vehicles.map((vehicle) => (
            <MenuItem key={vehicle.id} value={vehicle.id}>
              {vehicle.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default VehicleModelStep; 