import React from 'react'
import { Container, Box, Typography } from '@mui/material'

const Home = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    className="text-center"
                >
                    Welcome to My Portfolio
                </Typography>
                <Typography variant="body1" className="text-center">
                    Hi, I am Samuel Huang, a Master's student in CSE. Here you
                    can find information about me and my work.
                </Typography>
            </Box>
        </Container>
    )
}

export default Home
