import { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { formatCurrency } from '@/lib/utils';

interface RevenueData {
    source: string;
    revenue: number;
    bookings: number;
}

export function RevenueChart() {
    const [data, setData] = useState<RevenueData[]>([]);

    useEffect(() => {
        async function fetchRevenueData() {
            try {
                const response = await fetch('/api/revenue/breakdown');
                const revenueData = await response.json();
                setData(revenueData);
            } catch (error) {
                console.error('Error fetching revenue data:', error);
            }
        }

        fetchRevenueData();
    }, []);

    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="source" />
                    <YAxis yAxisId="left" tickFormatter={formatCurrency} />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip
                        formatter={(value: number, name: string) => [
                            name === 'revenue' ? formatCurrency(value) : value,
                            name.charAt(0).toUpperCase() + name.slice(1),
                        ]}
                    />
                    <Legend />
                    <Bar
                        yAxisId="left"
                        dataKey="revenue"
                        fill="#8884d8"
                        name="Revenue"
                    />
                    <Bar
                        yAxisId="right"
                        dataKey="bookings"
                        fill="#82ca9d"
                        name="Bookings"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
} 