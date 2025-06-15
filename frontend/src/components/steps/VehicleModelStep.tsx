import React, { useEffect, useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import axios from 'axios';

interface Vehicle {
  id: number;
  model: string;
  vehicleTypeId: number;
}

interface VehicleModelStepProps {
  formData: {
    vehicleTypeId: number;
    vehicleId: number;
  };
  setFormData: (data: any) => void;
  onNext: () => void;
}

const VehicleModelStep: React.FC<VehicleModelStepProps> = ({ formData, setFormData, onNext }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/vehicles/${formData.vehicleTypeId}`);
        setVehicles(response.data);
      } catch (error) {
        console.error('Failed to fetch vehicles:', error);
      }
    };

    fetchVehicles();
  }, [formData.vehicleTypeId]);

  const handleVehicleSelect = (vehicleId: number) => {
    setFormData({ ...formData, vehicleId });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <h3>Select Vehicle Model</h3>
      <List>
        {vehicles.map((vehicle) => (
          <ListItem key={vehicle.id} disablePadding>
            <ListItemButton
              selected={formData.vehicleId === vehicle.id}
              onClick={() => handleVehicleSelect(vehicle.id)}
            >
              <ListItemText primary={vehicle.model} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={onNext}
        disabled={formData.vehicleId === 0}
        sx={{ mt: 2 }}
      >
        Next
      </Button>
    </Box>
  );
};

export default VehicleModelStep; 