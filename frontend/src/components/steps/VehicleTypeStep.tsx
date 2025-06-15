import React, { useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import axios from 'axios';

interface VehicleType {
  id: number;
  name: string;
  wheelCount: number;
}

interface VehicleTypeStepProps {
  formData: {
    wheelCount: number;
    vehicleTypeId: number;
  };
  setFormData: (data: any) => void;
  onNext: () => void;
}

const VehicleTypeStep: React.FC<VehicleTypeStepProps> = ({ formData, setFormData, onNext }) => {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/vehicle-types/${formData.wheelCount}`);
        setVehicleTypes(response.data);
      } catch (error) {
        console.error('Failed to fetch vehicle types:', error);
      }
    };

    fetchVehicleTypes();
  }, [formData.wheelCount]);

  const handleTypeSelect = (typeId: number) => {
    setFormData({ ...formData, vehicleTypeId: typeId });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <h3>Select Vehicle Type</h3>
      <List>
        {vehicleTypes.map((type) => (
          <ListItem key={type.id} disablePadding>
            <ListItemButton
              selected={formData.vehicleTypeId === type.id}
              onClick={() => handleTypeSelect(type.id)}
            >
              <ListItemText primary={type.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={onNext}
        disabled={formData.vehicleTypeId === 0}
        sx={{ mt: 2 }}
      >
        Next
      </Button>
    </Box>
  );
};

export default VehicleTypeStep; 