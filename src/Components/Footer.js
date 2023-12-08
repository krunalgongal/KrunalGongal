import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#DEBA9D',
                padding: '20px',
                textAlign: 'center',
                mt: 'auto', // Push the footer to the bottom of the page
            }}
        >
            <Typography variant="body2" color="textSecondary">
                &copy; 2023 Krunal Gongal. All rights reserved.
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Connect with me: {' '}
                <Link href="https://linkedin.com/in/krunal-gongal" target="_blank" rel="noopener">
                    LinkedIn
                </Link>{' '}
                |{' '}
                <Link href="https://github.com/your-github-profile" target="_blank" rel="noopener">
                    GitHub
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
