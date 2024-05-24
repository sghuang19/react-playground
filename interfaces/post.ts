// Adapted from Next.js blog-starter example
export type Post = {
    slug: string
    title: string
    date: string
    coverImage: string
    excerpt: string
    ogImage: string
    content: string
    preview?: boolean
}
