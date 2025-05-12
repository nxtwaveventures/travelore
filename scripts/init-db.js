db = db.getSiblingDB('travelore');

// Create collections
db.createCollection('posts');
db.createCollection('users');
db.createCollection('destinations');

// Insert sample posts
db.posts.insertMany([
    {
        title: 'Exploring the Hidden Gems of Kyoto',
        summary: 'Discover the lesser-known temples and gardens of Japan\'s cultural capital.',
        content: 'Experience the tranquility of Kyoto\'s hidden temples...',
        destination: 'Kyoto, Japan',
        tags: ['Japan', 'Culture', 'History'],
        media: [
            {
                type: 'image',
                url: 'https://picsum.photos/800/600',
                alt: 'Kyoto Temple'
            }
        ],
        metrics: {
            views: 1200,
            likes: 45,
            shares: 12
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'A Weekend in Barcelona',
        summary: 'Your ultimate guide to experiencing Barcelona\'s art and architecture.',
        content: 'From Gaudi\'s masterpieces to local tapas bars...',
        destination: 'Barcelona, Spain',
        tags: ['Spain', 'Architecture', 'Food'],
        media: [
            {
                type: 'image',
                url: 'https://picsum.photos/800/600',
                alt: 'Sagrada Familia'
            }
        ],
        metrics: {
            views: 980,
            likes: 38,
            shares: 15
        },
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: 'The Magic of Santorini Sunsets',
        summary: 'Experience the most beautiful sunsets in the Greek Islands.',
        content: 'The white-washed buildings of Oia provide the perfect backdrop...',
        destination: 'Santorini, Greece',
        tags: ['Greece', 'Islands', 'Sunset'],
        media: [
            {
                type: 'image',
                url: 'https://picsum.photos/800/600',
                alt: 'Santorini Sunset'
            }
        ],
        metrics: {
            views: 1500,
            likes: 67,
            shares: 23
        },
        createdAt: new Date(),
        updatedAt: new Date()
    }
]); 