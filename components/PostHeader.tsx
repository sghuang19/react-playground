// Adapted from Next.js blog-starter example
import React from 'react'
import CoverImage from './CoverImage'
import DateFormatter from './DateFormatter'
import { PostTitle } from './PostTitle'

type Props = {
    title: string
    coverImage?: string
    date: string
}

export function PostHeader({ title, coverImage, date }: Props) {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            {coverImage && (
                <div className="mb-8 md:mb-16 sm:mx-0">
                    <CoverImage title={title} src={coverImage} />
                </div>
            )}
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-lg">
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </>
    )
}
