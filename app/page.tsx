import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import dynamic from 'next/dynamic'

import Section from '../components/Section'
import ProjectOverview from '../features/ProjectOverview'
// Dynamically import ProjectOverview to ensure proper rendering
// const ProjectOverview = dynamic(() => import('../features/ProjectOverview'), {
//     ssr: false,
// })

const Home = () => {
    const message =
        "Hi, I am Samuel Huang, a Master's student in CSE. Here you can find information about me and my work."
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
                    {message}
                </Typography>
            </Box>
            <Section title="Project Overview">
                <ProjectOverview></ProjectOverview>
            </Section>
        </Container>
    )
}

export default Home
