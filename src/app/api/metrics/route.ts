import { NextResponse } from 'next/server';
import { Content } from '@/lib/models/Content';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
    try {
        await connectToDatabase();

        // Get total views
        const totalViews = await Content.aggregate([
            {
                $group: {
                    _id: null,
                    views: { $sum: '$analytics.views' }
                }
            }
        ]);

        // Get total revenue
        const totalRevenue = await Content.aggregate([
            {
                $unwind: '$monetization.affiliateLinks'
            },
            {
                $group: {
                    _id: null,
                    revenue: { $sum: '$monetization.affiliateLinks.revenue' }
                }
            }
        ]);

        // Get active affiliates (those with revenue in the last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const activeAffiliates = await Content.distinct('monetization.affiliateLinks.platform', {
            'monetization.affiliateLinks.revenue': { $gt: 0 },
            updatedAt: { $gte: thirtyDaysAgo }
        });

        // Calculate conversion rate
        const conversionData = await Content.aggregate([
            {
                $group: {
                    _id: null,
                    totalViews: { $sum: '$analytics.views' },
                    totalBookings: { $sum: '$analytics.bookings' }
                }
            }
        ]);

        const conversionRate = conversionData[0]
            ? (conversionData[0].totalBookings / conversionData[0].totalViews) * 100
            : 0;

        return NextResponse.json({
            totalViews: totalViews[0]?.views || 0,
            totalRevenue: totalRevenue[0]?.revenue || 0,
            activeAffiliates: activeAffiliates.length,
            conversionRate
        });
    } catch (error) {
        console.error('Error fetching metrics:', error);
        return NextResponse.json(
            { error: 'Failed to fetch metrics' },
            { status: 500 }
        );
    }
} 