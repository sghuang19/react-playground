// src/features/Project/ProjectOverview.tsx
import React from 'react'
import dynamic from 'next/dynamic'
import { Box, Typography } from '@mui/material'
import CardOverview from '../components/CardOverview'

// const CardOverview = dynamic(() => import('../components/CardOverview'), {
//     ssr: false,
// })

const cards = [
    {
        id: 1,
        title: 'Project Card 1',
        content: 'This is the content of project card 1.',
        url: '/project/1',
    },
    {
        id: 2,
        title: 'Project Card 2',
        content: 'This is the content of project card 2.',
        url: '/project/2',
    },
    {
        id: 3,
        title: 'Project Card 3',
        content: 'This is the content of project card 3.',
        url: '/project/3',
    },
]

const ProjectOverview: React.FC = () => {
    return (
        <Box my={8}>
            <Typography variant="h4" component="h2" gutterBottom>
                Project Overview
            </Typography>
            <CardOverview cards={cards} />
        </Box>
    )
}

export default ProjectOverview
