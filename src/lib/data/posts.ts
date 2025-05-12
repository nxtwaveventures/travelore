import { Post } from '@/lib/db/schema'

export const placeholderPosts: Post[] = [
    {
        id: '1',
        title: 'Hidden Gems of Kyoto: A Journey Through Time',
        summary: 'Discover the lesser-known temples, gardens, and traditional experiences in Japan\'s cultural heart.',
        content: 'Experience the magic of Kyoto beyond the tourist trails...',
        destination: 'Kyoto, Japan',
        tags: ['Japan', 'Culture', 'History', 'Hidden Gems'],
        media: [
            {
                type: 'image',
                url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
                alt: 'Traditional Japanese temple in Kyoto'
            }
        ],
        metrics: {
            views: 1200,
            likes: 450,
            shares: 120
        },
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
    },
    {
        id: '2',
        title: 'The Ultimate Guide to Santorini Sunsets',
        summary: 'Find the best spots to witness the legendary Santorini sunset and create unforgettable memories.',
        content: 'The Greek islands are known for their stunning sunsets...',
        destination: 'Santorini, Greece',
        tags: ['Greece', 'Islands', 'Sunset', 'Photography'],
        media: [
            {
                type: 'image',
                url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
                alt: 'Stunning sunset view in Santorini'
            }
        ],
        metrics: {
            views: 980,
            likes: 320,
            shares: 95
        },
        createdAt: new Date('2024-01-20'),
        updatedAt: new Date('2024-01-20')
    },
    {
        id: '3',
        title: 'Adventure in the Swiss Alps: A Winter Guide',
        summary: 'Your complete guide to skiing, snowboarding, and winter activities in the Swiss Alps.',
        content: 'The Swiss Alps offer some of the world\'s best winter sports experiences...',
        destination: 'Swiss Alps, Switzerland',
        tags: ['Switzerland', 'Winter Sports', 'Adventure', 'Mountains'],
        media: [
            {
                type: 'image',
                url: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
                alt: 'Scenic view of the Swiss Alps'
            }
        ],
        metrics: {
            views: 850,
            likes: 280,
            shares: 75
        },
        createdAt: new Date('2024-01-25'),
        updatedAt: new Date('2024-01-25')
    }
] 