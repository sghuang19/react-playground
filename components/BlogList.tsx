// src/components/BlogList.tsx
import React, { useState } from 'react'
import { Box, Typography, Grid, Button, MenuItem, Select } from '@mui/material'
import BlogPreview from './BlogPreview'

interface BlogPost {
    id: string
    title: string
    description: string
    thumbnail: string
    date: string
    stars: number
}

interface BlogListProps {
    posts: BlogPost[]
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    const [sortMethod, setSortMethod] = useState<'date' | 'stars'>('date')

    const sortedPosts = [...posts].sort((a, b) => {
        if (sortMethod === 'date') {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        } else {
            return b.stars - a.stars
        }
    })

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h4">Blog</Typography>
                <Select
                    value={sortMethod}
                    onChange={(e) =>
                        setSortMethod(e.target.value as 'date' | 'stars')
                    }
                >
                    <MenuItem value="date">Sort by Date</MenuItem>
                    <MenuItem value="stars">Sort by Stars</MenuItem>
                </Select>
            </Box>
            <Grid container spacing={2}>
                {sortedPosts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                        <BlogPreview post={post} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default BlogList
