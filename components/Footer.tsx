import React from 'react';
import {Box, Typography} from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" py={3} textAlign="center" bgcolor="primary.main" color="primary.contrastText">
            <Typography variant="body1">© 2024 My Portfolio</Typography>
        </Box>
    );
};

export default Footer;
