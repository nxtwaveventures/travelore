export const config = {
    siteName: 'Travelore',
    description:
        'Experience travel through the lens of artificial intelligence. Discover stories, insights, and destinations curated just for you.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://travelore.vercel.app',
    api: {
        openai: {
            apiKey: process.env.OPENAI_API_KEY,
            model: 'gpt-4',
            temperature: 0.7,
        },
        pexels: {
            apiKey: process.env.PEXELS_API_KEY,
        },
        stability: {
            apiKey: process.env.STABILITY_API_KEY,
        },
    },
    db: {
        mongodb: {
            uri: process.env.MONGODB_URI,
            dbName: 'travelore',
        },
    },
    auth: {
        secret: process.env.NEXTAUTH_SECRET,
        url: process.env.NEXTAUTH_URL,
    },
    analytics: {
        vercelAnalyticsId: process.env.VERCEL_ANALYTICS_ID,
    },
    affiliates: {
        booking: {
            apiKey: process.env.BOOKING_API_KEY,
            commission: 4,
        },
        getYourGuide: {
            apiKey: process.env.GETYOURGUIDE_API_KEY,
            commission: 8,
        },
    },
    seo: {
        title: 'Travelore - AI-Powered Travel Experiences',
        description:
            'Discover the world through AI-generated travel content and immersive experiences.',
        keywords: [
            'travel',
            'AI',
            'artificial intelligence',
            'travel blog',
            'destinations',
            'travel planning',
            'automated content',
            'travel recommendations',
        ],
        ogImage: '/og-image.png',
    },
    features: {
        contentGeneration: true,
        mediaGeneration: true,
        performanceOptimization: true,
        monetization: true,
    },
    limits: {
        maxPostsPerPage: 12,
        maxTagsPerPost: 5,
        maxRelatedPosts: 3,
    },
} as const

export type Config = typeof config 