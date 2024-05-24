import React from 'react'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import { notFound } from 'next/navigation'
import markdownToHtml from '@/lib/md2html'
import { Container } from '@mui/material'
import { Metadata } from 'next'
import markdownStyles from '@/styles/md.module.css'

export type PostProps = {
    params: {
        slug: string
    }
}

export async function Post({ params }: PostProps) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return notFound()
    }

    const content = await markdownToHtml(post.content || '')

    return (
        <Container>
            <article
                className={markdownStyles['markdown']}
                // className="markdown-body"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Container>
    )
}

export function generateMetadata({ params }: PostProps): Metadata {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return notFound()
    }

    const title = post.title
    return {
        title,
        openGraph: {
            title,
            images: [post.ogImage || 'https://http.cat/status/102'],
            // TODO: Add default ogImage
        },
    }
}

export async function generateStaticParams() {
    const posts = getAllPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}
