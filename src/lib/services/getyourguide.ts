export interface Activity {
    id: string;
    name: string;
    price: number;
    rating: number;
    commission: number;
    affiliateLink: string;
    images: string[];
    description: string;
    duration: string;
    included: string[];
    location: {
        latitude: number;
        longitude: number;
        address: string;
        city: string;
        country: string;
    };
    categories: string[];
}

export class GetYourGuideAPI {
    private apiKey: string;
    private baseUrl = 'https://api.getyourguide.com/1';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async searchActivities(destination: string): Promise<Activity[]> {
        // In a real implementation, this would make API calls to GetYourGuide
        // For now, return mock data
        return [
            {
                id: 'activity1',
                name: 'Guided City Walking Tour',
                price: 49.99,
                rating: 4.7,
                commission: 0.20,
                affiliateLink: `https://www.getyourguide.com/activity1?partner_id=${this.apiKey}`,
                images: [
                    'https://example.com/activity1-1.jpg',
                    'https://example.com/activity1-2.jpg'
                ],
                description: 'Explore the city with a knowledgeable local guide',
                duration: '3 hours',
                included: ['Professional guide', 'Map', 'Bottled water'],
                location: {
                    latitude: 25.7617,
                    longitude: -80.1918,
                    address: '789 Tourist Street',
                    city: 'Miami',
                    country: 'USA'
                },
                categories: ['Walking Tours', 'Cultural Tours', 'City Tours']
            },
            {
                id: 'activity2',
                name: 'Sunset Sailing Adventure',
                price: 89.99,
                rating: 4.9,
                commission: 0.18,
                affiliateLink: `https://www.getyourguide.com/activity2?partner_id=${this.apiKey}`,
                images: [
                    'https://example.com/activity2-1.jpg',
                    'https://example.com/activity2-2.jpg'
                ],
                description: 'Enjoy a beautiful sunset cruise along the coast',
                duration: '2.5 hours',
                included: ['Snacks', 'Drinks', 'Life jackets', 'Professional crew'],
                location: {
                    latitude: 25.7616,
                    longitude: -80.1917,
                    address: '101 Marina Drive',
                    city: 'Miami',
                    country: 'USA'
                },
                categories: ['Water Activities', 'Sunset Cruises', 'Romantic']
            }
        ];
    }

    async getActivityDetails(activityId: string): Promise<Activity | null> {
        const activities = await this.searchActivities('');
        return activities.find(a => a.id === activityId) || null;
    }
} 