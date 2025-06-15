import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Typography, Paper } from '@mui/material';
import NameStep from './NameStep';
import WheelCountStep from './WheelCountStep';
import VehicleTypeStep from './VehicleTypeStep';
import VehicleModelStep from './VehicleModelStep';
import DateRangeStep from './DateRangeStep';

const steps = ['Name', 'Wheel Count', 'Vehicle Type', 'Vehicle Model', 'Date Range'];

const BookingForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    wheelCount: 0,
    vehicleType: '',
    vehicleId: 0,
    startDate: null as Date | null,
    endDate: null as Date | null,
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    try {
      if (!formData.startDate || !formData.endDate) {
        alert('Please select both start and end dates');
        return;
      }

      const response = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          vehicleId: formData.vehicleId,
          startDate: formData.startDate,
          endDate: formData.endDate,
        }),
      });

      if (response.ok) {
        alert('Booking created successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          wheelCount: 0,
          vehicleType: '',
          vehicleId: 0,
          startDate: null,
          endDate: null,
        });
        setActiveStep(0);
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to create booking');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Error creating booking');
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <NameStep formData={formData} setFormData={setFormData} />;
      case 1:
        return <WheelCountStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <VehicleTypeStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <VehicleModelStep formData={formData} setFormData={setFormData} />;
      case 4:
        return <DateRangeStep formData={formData} setFormData={setFormData} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Vehicle Rental Booking
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          {getStepContent(activeStep)}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default BookingForm; 