import React from 'react';
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface DateRangeStepProps {
  formData: {
    startDate: Date | null;
    endDate: Date | null;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const DateRangeStep: React.FC<DateRangeStepProps> = ({ formData, setFormData }) => {
  const handleStartDateChange = (date: Date | null) => {
    setFormData((prev: any) => ({
      ...prev,
      startDate: date,
    }));
  };

  const handleEndDateChange = (date: Date | null) => {
    setFormData((prev: any) => ({
      ...prev,
      endDate: date,
    }));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ mb: 2 }}>
          <DatePicker
            label="Start Date"
            value={formData.startDate}
            onChange={handleStartDateChange}
            minDate={new Date()}
          />
        </Box>
        <Box>
          <DatePicker
            label="End Date"
            value={formData.endDate}
            onChange={handleEndDateChange}
            minDate={formData.startDate || new Date()}
          />
        </Box>
      </LocalizationProvider>
    </Box>
  );
};

export default DateRangeStep; 