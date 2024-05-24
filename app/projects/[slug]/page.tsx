// Adapted from Next.js blog-starter example
import React from 'react'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/md2html'
import { Alert, Container } from '@mui/material'
import Header from '@/components/Header'
import { PostBody } from '@/components/PostBody'
import { PostHeader } from '@/components/PostHeader'

export default async function Post({ params }: Params) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return notFound()
    }

    const content = await markdownToHtml(post.content || '')

    return (
        <main>
            <Container>
                <article className="mb-32">
                    <PostHeader
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                    />
                    <PostBody content={content} />
                </article>
            </Container>
        </main>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export function generateMetadata({ params }: Params): Metadata {
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
