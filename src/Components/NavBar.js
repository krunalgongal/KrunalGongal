import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';

function NavBar() {
  const navItems = [
    { text: 'About', to: 'about' },
    { text: 'Experience', to: 'experience' },
    { text: 'Project', to: 'project' },
    { text: 'Contact', to: 'contact' },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const scrollToSection = (sectionId, index) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleDrawerClose();
      setActiveNavItem(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleDownloadResume = () => {
    const resumeUrl = './assets/resume/KRUNALResume.pdf';
    const downloadLink = document.createElement('a');

    downloadLink.href = resumeUrl;
    downloadLink.download = 'resume.pdf';

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return (
    <React.Fragment>
      <AppBar
        style={{
          background: '#DEBA9D',
          boxShadow: scrolled ? '0 2px 5px rgba(0, 0, 0, 1)' : 'none',
          height: scrolled ? '80px' : '120px',
          transition: 'height 0.3s, box-shadow 0.3s',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block', color: red['700'] },
            }}
          >
            <img src='./assets/img/logo2.png' alt="Your Gif" style={{ width: '150px' }} />
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button
                sx={{ mr: 5, textDecoration: activeNavItem === index ? 'underline' : 'none' }}
                onClick={() => scrollToSection(item.to, index)}
                key={item.text}
              >
                {item.text}
              </Button>
            ))}
          </Box>
          <Button variant="outlined" onClick={handleDownloadResume}>
            resume
          </Button>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ marginLeft: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerClose}>
        <List>
          {navItems.map((item, index) => (
            <ListItem button key={item.text} onClick={() => scrollToSection(item.to, index)}>
              {item.text}
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: '16px',
            transform: 'translateY(-50%)',
          }}
        >
          <img src='./assets/img/logo.gif' alt="Your Gif" style={{ height: '100px' }} />
        </Box>
      </Drawer>
    </React.Fragment>
  );
}

export default NavBar;