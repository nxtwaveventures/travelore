import { Suspense } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MetricsGrid } from '@/components/dashboard/MetricsGrid';
import { ContentPerformance } from '@/components/dashboard/ContentPerformance';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { TrendingDestinations } from '@/components/dashboard/TrendingDestinations';

export const metadata = {
    title: 'Travelore Dashboard',
    description: 'Analytics and performance metrics for your travel content platform',
};

export default async function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

            <Suspense fallback={<Skeleton className="h-[100px] w-full" />}>
                <MetricsGrid />
            </Suspense>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <Card className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Content Performance</h2>
                    <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                        <ContentPerformance />
                    </Suspense>
                </Card>

                <Card className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Revenue Analytics</h2>
                    <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                        <RevenueChart />
                    </Suspense>
                </Card>
            </div>

            <Card className="mt-8 p-6">
                <h2 className="text-2xl font-semibold mb-4">Trending Destinations</h2>
                <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                    <TrendingDestinations />
                </Suspense>
            </Card>
        </div>
    );
} 