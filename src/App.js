import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import { Divider, ThemeProvider, createTheme } from '@mui/material';
import { grey, purple } from '@mui/material/colors';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: { main: grey[900] }
    },

  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Divider sx={{ backgroundColor: 'black', mx: 5 }} />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

