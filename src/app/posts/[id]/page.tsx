import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Post } from '@/lib/db/schema'
import { placeholderPosts } from '@/lib/data/posts'
import type { Metadata, ResolvingMetadata } from 'next'

interface PostPageProps {
    params: {
        id: string
    }
}

export async function generateMetadata(
    { params }: PostPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const post = placeholderPosts.find((p: Post) => p.id === params.id)

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested post could not be found.'
        }
    }

    const mainImage = post.media.find((m: { type: string }) => m.type === 'image')

    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            images: mainImage ? [mainImage.url] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.summary,
            images: mainImage ? [mainImage.url] : [],
        }
    }
}

export default async function PostPage({ params }: PostPageProps) {
    // For now, use placeholder data instead of fetching from MongoDB
    // const post = await PostRepository.findById(params.id)
    const post = placeholderPosts.find((p: Post) => p.id === params.id)

    if (!post) {
        notFound()
    }

    const mainImage = post.media.find((m: { type: string }) => m.type === 'image')

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                {mainImage ? (
                    <Image
                        src={mainImage.url}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="h-full w-full bg-gray-200" />
                )}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-4xl text-center text-white px-4">
                        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
                        <p className="text-xl">{post.summary}</p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Tags */}
                <div className="mb-8 flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Destination */}
                <div className="mb-8 flex items-center gap-2 text-gray-500">
                    <span>📍</span>
                    <span>{post.destination}</span>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {post.content || (
                        <p className="text-gray-600">
                            This is a placeholder post. In a real application, this would contain the full article content.
                        </p>
                    )}
                </div>

                {/* Metrics */}
                <div className="mt-8 flex items-center gap-6 text-gray-500">
                    <div className="flex items-center gap-2">
                        <span>👁️</span>
                        <span>{post.metrics.views} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>❤️</span>
                        <span>{post.metrics.likes} likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>🔄</span>
                        <span>{post.metrics.shares} shares</span>
                    </div>
                </div>
            </div>
        </article>
    )
} 