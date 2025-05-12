import { NextResponse } from 'next/server'
import { PostRepository } from '@/lib/db/repository'
import { PostSchema } from '@/lib/db/schema'
import { Orchestrator } from '@/lib/orchestrator'

const orchestrator = new Orchestrator({
    openaiApiKey: process.env.OPENAI_API_KEY || '',
    pexelsApiKey: process.env.PEXELS_API_KEY || '',
    stabilityApiKey: process.env.STABILITY_API_KEY,
})

export async function GET() {
    try {
        const posts = await PostRepository.findAll()
        return NextResponse.json(posts)
    } catch (error) {
        console.error('Error fetching posts:', error)
        return NextResponse.json(
            { error: 'Failed to fetch posts' },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        // Generate new content using the orchestrator
        const { post, media, optimizations, monetization } = await orchestrator.generateContent()

        // Create the post in the database
        const now = new Date()
        const createdPost = await PostRepository.create({
            ...post,
            media,
            metrics: {
                views: 0,
                likes: 0,
                shares: 0,
                clickthroughRate: 0,
            },
            monetization: {
                affiliateLinks: [],
                revenue: 0,
            },
            createdAt: now,
            updatedAt: now,
        })

        return NextResponse.json(createdPost)
    } catch (error) {
        console.error('Error creating post:', error)
        return NextResponse.json(
            { error: 'Failed to create post' },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json()
        const { id, ...updateData } = PostSchema.parse(body)

        const updatedPost = await PostRepository.update(id, updateData)
        if (!updatedPost) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(updatedPost)
    } catch (error) {
        console.error('Error updating post:', error)
        return NextResponse.json(
            { error: 'Failed to update post' },
            { status: 500 }
        )
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json()
        const success = await PostRepository.delete(id)

        if (!success) {
            return NextResponse.json(
                { error: 'Post not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting post:', error)
        return NextResponse.json(
            { error: 'Failed to delete post' },
            { status: 500 }
        )
    }
} 