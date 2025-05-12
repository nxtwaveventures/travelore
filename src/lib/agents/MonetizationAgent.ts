import { MonetizationAgent, AgentTask, AgentResult } from './types';
import { logger } from '@/lib/utils/logger';
import { BookingAPI } from '@/lib/services/booking';
import { GetYourGuideAPI } from '@/lib/services/getyourguide';
import { analyzeRevenue } from '@/lib/utils/revenue';

export class Monetization implements MonetizationAgent {
    id: string;
    name: string;
    description: string;
    status: 'idle' | 'working' | 'error';
    lastActive: Date;
    type: 'monetization';
    capabilities: {
        affiliateManagement: boolean;
        revenueOptimization: boolean;
        marketAnalysis: boolean;
    };
    private bookingApi: BookingAPI;
    private gygApi: GetYourGuideAPI;

    constructor() {
        this.id = 'monetization-1';
        this.name = 'Monetization Engine';
        this.description = 'Optimizes revenue through affiliate marketing and analytics';
        this.status = 'idle';
        this.lastActive = new Date();
        this.type = 'monetization';
        this.capabilities = {
            affiliateManagement: true,
            revenueOptimization: true,
            marketAnalysis: true
        };
        this.bookingApi = new BookingAPI(process.env.BOOKING_API_KEY);
        this.gygApi = new GetYourGuideAPI(process.env.GETYOURGUIDE_API_KEY);
    }

    async execute(task: AgentTask): Promise<AgentResult> {
        const startTime = Date.now();
        this.status = 'working';
        this.lastActive = new Date();

        try {
            let result: AgentResult;

            switch (task.data.action) {
                case 'get_affiliate_offers':
                    result = await this.getAffiliateOffers(task.data.destination);
                    break;
                case 'analyze_revenue':
                    result = await this.analyzeRevenueMetrics(task.data.timeframe);
                    break;
                case 'optimize_placement':
                    result = await this.optimizePlacement(task.data.contentId);
                    break;
                default:
                    throw new Error('Unknown action type');
            }

            const executionTime = Date.now() - startTime;
            this.status = 'idle';

            return {
                ...result,
                metrics: {
                    ...result.metrics,
                    executionTime
                }
            };
        } catch (error) {
            this.status = 'error';
            logger.error('Monetization Engine execution failed', {
                error: error instanceof Error ? error.message : 'Unknown error',
                taskId: task.id
            });

            return {
                success: false,
                data: {},
                error: error instanceof Error ? error.message : 'Unknown error',
                metrics: {
                    executionTime: Date.now() - startTime
                }
            };
        }
    }

    private async getAffiliateOffers(destination: string): Promise<AgentResult> {
        const [hotels, activities] = await Promise.all([
            this.bookingApi.searchHotels(destination),
            this.gygApi.searchActivities(destination)
        ]);

        const offers = {
            hotels: hotels.map(hotel => ({
                id: hotel.id,
                name: hotel.name,
                price: hotel.price,
                rating: hotel.rating,
                commission: hotel.commission,
                link: hotel.affiliateLink
            })),
            activities: activities.map(activity => ({
                id: activity.id,
                name: activity.name,
                price: activity.price,
                rating: activity.rating,
                commission: activity.commission,
                link: activity.affiliateLink
            }))
        };

        return {
            success: true,
            data: { offers },
            metrics: {
                executionTime: 0,
                cost: 0 // API calls are free
            }
        };
    }

    private async analyzeRevenueMetrics(timeframe: string): Promise<AgentResult> {
        const analysis = await analyzeRevenue(timeframe);
        return {
            success: true,
            data: {
                metrics: analysis.metrics,
                trends: analysis.trends,
                recommendations: analysis.recommendations
            },
            metrics: {
                executionTime: 0
            }
        };
    }

    private async optimizePlacement(contentId: string): Promise<AgentResult> {
        // Analyze current placement performance
        const currentPerformance = await this.analyzeRevenueMetrics('last_30_days');

        // Generate placement recommendations
        const recommendations = {
            inlineOffers: [
                {
                    type: 'hotel',
                    position: 'after_introduction',
                    style: 'card_grid'
                },
                {
                    type: 'activity',
                    position: 'end_of_article',
                    style: 'featured_list'
                }
            ],
            sidebarOffers: [
                {
                    type: 'hotel',
                    style: 'sticky_card'
                }
            ],
            callToAction: {
                text: 'Plan Your Trip',
                position: 'floating_bottom'
            }
        };

        return {
            success: true,
            data: {
                currentPerformance: currentPerformance.data.metrics,
                recommendations,
                estimatedImpact: {
                    clickThroughRate: '+15%',
                    conversionRate: '+10%',
                    revenue: '+25%'
                }
            },
            metrics: {
                executionTime: 0
            }
        };
    }
} 