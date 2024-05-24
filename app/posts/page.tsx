// src/pages/posts/index.tsx
import { GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import BlogList from '../../components/BlogList'

const postsDirectory = path.join(process.cwd(), 'public', 'posts')

interface BlogPost {
    id: string
    title: string
    description: string
    thumbnail: string
    date: string
    stars: number
}

interface PostsPageProps {
    posts: BlogPost[]
}

export default function PostsPage({ posts }: PostsPageProps) {
    return <BlogList posts={posts} />
}

export const getStaticProps: GetStaticProps = async () => {
    const fileNames = fs.readdirSync(postsDirectory)
    const posts: BlogPost[] = fileNames.map((fileName) => {
        const id = fileName.replace(/\.html$/, '')
        const filePath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(filePath, 'utf8')

        // Extract metadata from the HTML file
        const titleMatch = fileContents.match(/<title>(.*?)<\/title>/)
        const title = titleMatch ? titleMatch[1] : 'Untitled'
        const descriptionMatch = fileContents.match(
            /<meta name="description" content="(.*?)" \/>/
        )
        const description = descriptionMatch ? descriptionMatch[1] : ''
        const thumbnailMatch = fileContents.match(
            /<meta property="og:image" content="(.*?)" \/>/
        )
        const thumbnail = thumbnailMatch
            ? thumbnailMatch[1]
            : '/default-thumbnail.jpg'
        const dateMatch = fileContents.match(
            /<meta property="article:published_time" content="(.*?)" \/>/
        )
        const date = dateMatch ? dateMatch[1] : ''
        const starsMatch = fileContents.match(
            /<meta name="stars" content="(.*?)" \/>/
        )
        const stars = starsMatch ? parseInt(starsMatch[1], 10) : 0

        return {
            id,
            title,
            description,
            thumbnail,
            date,
            stars,
        }
    })

    return {
        props: {
            posts,
        },
    }
}
