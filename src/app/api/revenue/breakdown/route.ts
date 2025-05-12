import { NextResponse } from 'next/server';
import { Content } from '@/lib/models/Content';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
    try {
        await connectToDatabase();

        // Get revenue breakdown by platform for the last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const revenueData = await Content.aggregate([
            {
                $match: {
                    updatedAt: { $gte: thirtyDaysAgo }
                }
            },
            {
                $unwind: '$monetization.affiliateLinks'
            },
            {
                $group: {
                    _id: '$monetization.affiliateLinks.platform',
                    revenue: { $sum: '$monetization.affiliateLinks.revenue' },
                    bookings: { $sum: '$monetization.affiliateLinks.conversions' }
                }
            },
            {
                $project: {
                    _id: 0,
                    source: '$_id',
                    revenue: 1,
                    bookings: 1
                }
            },
            {
                $sort: { revenue: -1 }
            },
            {
                $limit: 5
            }
        ]);

        return NextResponse.json(revenueData);
    } catch (error) {
        console.error('Error fetching revenue breakdown:', error);
        return NextResponse.json(
            { error: 'Failed to fetch revenue breakdown' },
            { status: 500 }
        );
    }
} 