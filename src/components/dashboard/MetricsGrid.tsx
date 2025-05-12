import { Card } from '@/components/ui/card';
import { formatNumber, formatCurrency } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface Metrics {
    totalViews: number;
    totalRevenue: number;
    activeAffiliates: number;
    conversionRate: number;
}

export function MetricsGrid() {
    const [metrics, setMetrics] = useState<Metrics>({
        totalViews: 0,
        totalRevenue: 0,
        activeAffiliates: 0,
        conversionRate: 0,
    });

    useEffect(() => {
        async function fetchMetrics() {
            try {
                const response = await fetch('/api/metrics');
                const data = await response.json();
                setMetrics(data);
            } catch (error) {
                console.error('Error fetching metrics:', error);
            }
        }

        fetchMetrics();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Total Views</h3>
                <p className="text-2xl font-bold mt-2">{formatNumber(metrics.totalViews)}</p>
                <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
            </Card>

            <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
                <p className="text-2xl font-bold mt-2">{formatCurrency(metrics.totalRevenue)}</p>
                <p className="text-xs text-muted-foreground mt-1">+8% from last month</p>
            </Card>

            <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Active Affiliates</h3>
                <p className="text-2xl font-bold mt-2">{metrics.activeAffiliates}</p>
                <p className="text-xs text-muted-foreground mt-1">+3 new this month</p>
            </Card>

            <Card className="p-6">
                <h3 className="text-sm font-medium text-muted-foreground">Conversion Rate</h3>
                <p className="text-2xl font-bold mt-2">{metrics.conversionRate.toFixed(2)}%</p>
                <p className="text-xs text-muted-foreground mt-1">+2.1% from last month</p>
            </Card>
        </div>
    );
} 