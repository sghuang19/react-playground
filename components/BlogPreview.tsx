// src/components/BlogPreview.tsx
import React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from '@mui/material'
import Link from 'next/link'

interface BlogPost {
    id: string
    title: string
    description: string
    thumbnail: string
    date: string
    stars: number
}

interface BlogPreviewProps {
    post: BlogPost
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ post }) => {
    return (
        <Link href={`/blog/${post.id}`} passHref>
            <Card sx={{ cursor: 'pointer' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={post.thumbnail}
                        alt={post.title}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {post.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default BlogPreview
