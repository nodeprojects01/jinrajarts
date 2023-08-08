import React, { useState } from 'react';
import { Drawer, TextField, Button, Typography } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './MyComponent.css'; // Import custom CSS file for styling

const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleApply = () => {
    // Perform actions with the filter values
    console.log({
      startDate,
      endDate,
      userId,
      userName,
    });

    handleDrawerClose();
  };

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setUserId('');
    setUserName('');
  };

  return (
    <div>
      {/* Render the icon */}
      <span onClick={handleDrawerOpen}>Open Drawer</span>

      {/* Render the drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <div className="drawer-content">
          <Typography variant="h6" className="drawer-title">
            Filters
          </Typography>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
            className="date-picker"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
            className="date-picker"
          />
          <TextField
            label="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            fullWidth
            className="text-field"
          />
          <TextField
            label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            className="text-field"
          />
          <div className="button-container">
            <Button variant="contained" color="primary" onClick={handleApply}>
              Apply
            </Button>
            <Button variant="contained" color="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MyComponent;


.drawer-content {
  width: 300px;
  padding: 20px;
}

.drawer-title {
  margin-bottom: 20px;
}

.date-picker {
  margin-bottom: 10px;
}

.text-field {
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
