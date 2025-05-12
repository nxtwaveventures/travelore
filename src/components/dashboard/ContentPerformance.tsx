import { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { formatNumber } from '@/lib/utils';

interface ContentMetrics {
    date: string;
    views: number;
    engagement: number;
    shares: number;
}

export function ContentPerformance() {
    const [data, setData] = useState<ContentMetrics[]>([]);

    useEffect(() => {
        async function fetchContentMetrics() {
            try {
                const response = await fetch('/api/content/metrics');
                const metrics = await response.json();
                setData(metrics);
            } catch (error) {
                console.error('Error fetching content metrics:', error);
            }
        }

        fetchContentMetrics();
    }, []);

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis tickFormatter={formatNumber} />
                    <Tooltip
                        formatter={(value: number) => [formatNumber(value)]}
                        labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="views"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="engagement"
                        stroke="#82ca9d"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="shares"
                        stroke="#ffc658"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
} 