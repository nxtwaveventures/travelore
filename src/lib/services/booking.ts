export interface Hotel {
    id: string;
    name: string;
    price: number;
    rating: number;
    commission: number;
    affiliateLink: string;
    images: string[];
    description: string;
    amenities: string[];
    location: {
        latitude: number;
        longitude: number;
        address: string;
        city: string;
        country: string;
    };
}

export class BookingAPI {
    private apiKey: string;
    private baseUrl = 'https://distribution-xml.booking.com/2.0';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async searchHotels(destination: string): Promise<Hotel[]> {
        // In a real implementation, this would make API calls to Booking.com
        // For now, return mock data
        return [
            {
                id: 'hotel1',
                name: 'Luxury Resort & Spa',
                price: 299.99,
                rating: 4.8,
                commission: 0.15,
                affiliateLink: `https://booking.com/hotel1?aid=${this.apiKey}`,
                images: [
                    'https://example.com/hotel1-1.jpg',
                    'https://example.com/hotel1-2.jpg'
                ],
                description: 'A luxurious resort with stunning ocean views',
                amenities: ['Pool', 'Spa', 'Restaurant', 'Free WiFi'],
                location: {
                    latitude: 25.7617,
                    longitude: -80.1918,
                    address: '123 Beach Drive',
                    city: 'Miami',
                    country: 'USA'
                }
            },
            {
                id: 'hotel2',
                name: 'Boutique City Hotel',
                price: 199.99,
                rating: 4.5,
                commission: 0.12,
                affiliateLink: `https://booking.com/hotel2?aid=${this.apiKey}`,
                images: [
                    'https://example.com/hotel2-1.jpg',
                    'https://example.com/hotel2-2.jpg'
                ],
                description: 'Charming boutique hotel in the heart of the city',
                amenities: ['Restaurant', 'Bar', 'Free WiFi', 'Room Service'],
                location: {
                    latitude: 25.7616,
                    longitude: -80.1917,
                    address: '456 Downtown Street',
                    city: 'Miami',
                    country: 'USA'
                }
            }
        ];
    }

    async getHotelDetails(hotelId: string): Promise<Hotel | null> {
        const hotels = await this.searchHotels('');
        return hotels.find(h => h.id === hotelId) || null;
    }
} 