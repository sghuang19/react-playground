import React from 'react'
import { Box, Typography } from '@mui/material'

interface SectionProps {
    title: string
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <Box my={8}>
            <Typography variant="h4" component="h2" gutterBottom>
                {title}
            </Typography>
            {children}
        </Box>
    )
}

export default Section
