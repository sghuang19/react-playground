import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return (
        <>
            <Header />
            <Container>
                <Box my={4}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="body1">
                        [Your bio goes here. Talk about your background, skills,
                        experience, and interests.]
                    </Typography>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default About
