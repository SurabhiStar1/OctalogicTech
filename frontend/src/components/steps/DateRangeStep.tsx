import React from 'react';
import { Box, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface DateRangeStepProps {
  formData: {
    startDate: Date | null;
    endDate: Date | null;
  };
  setFormData: (data: any) => void;
  onSubmit: () => void;
}

const DateRangeStep: React.FC<DateRangeStepProps> = ({ formData, setFormData, onSubmit }) => {
  const handleStartDateChange = (date: Date | null) => {
    setFormData({ ...formData, startDate: date });
  };

  const handleEndDateChange = (date: Date | null) => {
    setFormData({ ...formData, endDate: date });
  };

  const isValid = formData.startDate && formData.endDate && formData.startDate < formData.endDate;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h3>Select Booking Dates</h3>
        <DatePicker
          label="Start Date"
          value={formData.startDate}
          onChange={handleStartDateChange}
          minDate={new Date()}
        />
        <DatePicker
          label="End Date"
          value={formData.endDate}
          onChange={handleEndDateChange}
          minDate={formData.startDate || new Date()}
        />
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={!isValid}
          sx={{ mt: 2 }}
        >
          Submit Booking
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default DateRangeStep; 