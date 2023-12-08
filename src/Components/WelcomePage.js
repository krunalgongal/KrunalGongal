// WelcomePage.js

import React from 'react';
import { Typography, Button } from '@mui/material';

function WelcomePage({ onStart }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to My Portfolio!
      </Typography>
      <Typography variant="body1" paragraph>
        Explore my skills and experience.
      </Typography>
      <Button variant="contained" color="primary" onClick={onStart}>
        Get Started
      </Button>
    </div>
  );
}

export default WelcomePage;
