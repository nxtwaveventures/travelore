export interface PerformanceMetrics {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    timeToInteractive: number;
    cumulativeLayoutShift: number;
    speedIndex: number;
    totalBlockingTime: number;
    serverResponseTime: number;
}

export interface ResourceMetrics {
    totalResources: number;
    totalBytes: number;
    resourcesByType: {
        [key: string]: {
            count: number;
            bytes: number;
        };
    };
    slowestResources: Array<{
        url: string;
        loadTime: number;
        type: string;
        size: number;
    }>;
}

export interface PerformanceRecommendation {
    type: 'image' | 'script' | 'style' | 'font' | 'api' | 'cache' | 'general';
    priority: 'high' | 'medium' | 'low';
    impact: number; // 0-100
    description: string;
    solution: string;
    estimatedImprovement: {
        loadTime?: number;
        score?: number;
    };
}

export interface PerformanceAnalysis {
    metrics: PerformanceMetrics;
    resources: ResourceMetrics;
    recommendations: PerformanceRecommendation[];
    score: number;
}

export async function analyzePerformance(url: string): Promise<PerformanceAnalysis> {
    // In a real implementation, this would use Lighthouse or similar tools
    // For now, return mock data
    return {
        metrics: {
            loadTime: 2.5,
            firstContentfulPaint: 1.2,
            largestContentfulPaint: 2.1,
            timeToInteractive: 3.0,
            cumulativeLayoutShift: 0.1,
            speedIndex: 2.8,
            totalBlockingTime: 350,
            serverResponseTime: 250
        },
        resources: {
            totalResources: 45,
            totalBytes: 2500000,
            resourcesByType: {
                image: {
                    count: 15,
                    bytes: 1500000
                },
                script: {
                    count: 12,
                    bytes: 500000
                },
                style: {
                    count: 5,
                    bytes: 150000
                },
                font: {
                    count: 3,
                    bytes: 250000
                }
            },
            slowestResources: [
                {
                    url: 'https://example.com/large-hero-image.jpg',
                    loadTime: 1.5,
                    type: 'image',
                    size: 800000
                },
                {
                    url: 'https://example.com/analytics.js',
                    loadTime: 0.8,
                    type: 'script',
                    size: 150000
                }
            ]
        },
        recommendations: [
            {
                type: 'image',
                priority: 'high',
                impact: 80,
                description: 'Large hero image is significantly impacting load time',
                solution: 'Optimize hero image using WebP format and implement responsive images',
                estimatedImprovement: {
                    loadTime: 0.8,
                    score: 15
                }
            },
            {
                type: 'script',
                priority: 'medium',
                impact: 60,
                description: 'Render-blocking scripts detected',
                solution: 'Defer non-critical JavaScript and use async where appropriate',
                estimatedImprovement: {
                    loadTime: 0.5,
                    score: 10
                }
            },
            {
                type: 'cache',
                priority: 'medium',
                impact: 50,
                description: 'Missing cache headers for static assets',
                solution: 'Implement proper cache-control headers for static resources',
                estimatedImprovement: {
                    loadTime: 0.3,
                    score: 8
                }
            }
        ],
        score: 75
    };
} 