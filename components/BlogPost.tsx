// src/components/BlogPost.tsx
import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { GetStaticProps } from 'next'
import { Box, Typography } from '@mui/material'

interface BlogPostProps {
    filePath: string
}

interface BlogPostData {
    title: string
    date: string
    contentHtml: string
}

const BlogPost: React.FC<BlogPostProps & BlogPostData> = ({
    title,
    date,
    contentHtml,
}) => {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                {date}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </Box>
    )
}

export async function getStaticPropsForBlogPost(filePath: string) {
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // Extract metadata and content from the Markdown file
    const { data, content } = matter(fileContents)

    // Use remark to convert Markdown into HTML string
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
        props: {
            title: data.title,
            date: data.date,
            contentHtml,
        },
    }
}

export default BlogPost
