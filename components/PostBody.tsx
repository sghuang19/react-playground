// Adapted from Next.js blog-starter example
import React from 'react'
import markdownStyles from './md.module.css'

type Props = {
    content: string
}

export function PostBody({ content }: Props) {
    return (
        <div className="max-w-2xl mx-auto">
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}
