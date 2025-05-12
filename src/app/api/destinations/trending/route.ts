import { NextResponse } from 'next/server';
import { Content } from '@/lib/models/Content';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
    try {
        await connectToDatabase();

        // Get trending destinations based on views and bookings growth
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const previousThirtyDays = new Date(thirtyDaysAgo);
        previousThirtyDays.setDate(previousThirtyDays.getDate() - 30);

        const trendingDestinations = await Content.aggregate([
            {
                $match: {
                    updatedAt: { $gte: previousThirtyDays }
                }
            },
            {
                $group: {
                    _id: '$destination',
                    currentPeriodViews: {
                        $sum: {
                            $cond: [
                                { $gte: ['$updatedAt', thirtyDaysAgo] },
                                '$analytics.views',
                                0
                            ]
                        }
                    },
                    previousPeriodViews: {
                        $sum: {
                            $cond: [
                                {
                                    $and: [
                                        { $lt: ['$updatedAt', thirtyDaysAgo] },
                                        { $gte: ['$updatedAt', previousThirtyDays] }
                                    ]
                                },
                                '$analytics.views',
                                0
                            ]
                        }
                    },
                    currentPeriodBookings: {
                        $sum: {
                            $cond: [
                                { $gte: ['$updatedAt', thirtyDaysAgo] },
                                '$analytics.bookings',
                                0
                            ]
                        }
                    },
                    country: { $first: '$country' },
                    image: { $first: '$featuredImage' }
                }
            },
            {
                $project: {
                    _id: 0,
                    id: { $toString: '$_id' },
                    name: '$_id',
                    country: 1,
                    image: 1,
                    views: '$currentPeriodViews',
                    bookings: '$currentPeriodBookings',
                    trending: {
                        $multiply: [
                            {
                                $subtract: [
                                    { $divide: ['$currentPeriodViews', { $add: ['$previousPeriodViews', 1] }] },
                                    1
                                ]
                            },
                            100
                        ]
                    }
                }
            },
            {
                $sort: { trending: -1 }
            },
            {
                $limit: 6
            }
        ]);

        return NextResponse.json(trendingDestinations);
    } catch (error) {
        console.error('Error fetching trending destinations:', error);
        return NextResponse.json(
            { error: 'Failed to fetch trending destinations' },
            { status: 500 }
        );
    }
} 