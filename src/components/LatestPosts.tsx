'use client'

import { PostCard } from '@/components/PostCard'
import { placeholderPosts } from '@/lib/data/posts'

export function LatestPosts() {
    try {
        // For now, use placeholder data instead of fetching from MongoDB
        // const posts = await PostRepository.findAll()
        const posts = placeholderPosts;

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <PostCard key={post.id} post={post} priority={index < 3} />
                ))}
            </div>
        )
    } catch (error) {
        console.error('Error fetching posts:', error)
        return (
            <div className="text-center text-gray-600">
                <p>No posts available at the moment.</p>
                <p className="text-sm mt-2">Please make sure MongoDB is properly configured.</p>
            </div>
        )
    }
} 