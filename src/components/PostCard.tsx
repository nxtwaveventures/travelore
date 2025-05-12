'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Post } from '@/lib/db/schema'

interface PostCardProps {
    post: Post
    priority?: boolean
}

export function PostCard({ post, priority = false }: PostCardProps) {
    const mainImage = post.media.find((m) => m.type === 'image')

    return (
        <Link href={`/posts/${post.id}`} className="block">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow"
            >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                    {mainImage ? (
                        <Image
                            src={mainImage.url}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            priority={priority}
                        />
                    ) : (
                        <div className="h-full w-full bg-gray-200" />
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h2 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {post.title}
                    </h2>

                    {/* Summary */}
                    <p className="mb-4 text-gray-600 line-clamp-3">{post.summary}</p>

                    {/* Metrics */}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <span>👁️</span>
                            <span>{post.metrics.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>❤️</span>
                            <span>{post.metrics.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span>🔄</span>
                            <span>{post.metrics.shares}</span>
                        </div>
                    </div>

                    {/* Destination */}
                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                        <span>📍</span>
                        <span>{post.destination}</span>
                    </div>
                </div>

                {/* Hover overlay with CTA */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105">
                        Read More
                    </span>
                </div>
            </motion.div>
        </Link>
    )
} 