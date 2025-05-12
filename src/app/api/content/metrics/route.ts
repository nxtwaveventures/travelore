import { NextResponse } from 'next/server';
import { Content } from '@/lib/models/Content';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
    try {
        await connectToDatabase();

        // Get daily metrics for the last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const metrics = await Content.aggregate([
            {
                $match: {
                    updatedAt: { $gte: thirtyDaysAgo }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: '%Y-%m-%d', date: '$updatedAt' }
                    },
                    views: { $sum: '$analytics.views' },
                    engagement: { $sum: '$analytics.likes' },
                    shares: { $sum: '$analytics.shares' }
                }
            },
            {
                $project: {
                    _id: 0,
                    date: '$_id',
                    views: 1,
                    engagement: 1,
                    shares: 1
                }
            },
            {
                $sort: { date: 1 }
            }
        ]);

        return NextResponse.json(metrics);
    } catch (error) {
        console.error('Error fetching content metrics:', error);
        return NextResponse.json(
            { error: 'Failed to fetch content metrics' },
            { status: 500 }
        );
    }
} 