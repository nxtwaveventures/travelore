import { ContentGenerator, TrendingTopic, BlogPost } from './agents/contentGenerator'
import { MediaCreator, GeneratedMedia } from './agents/mediaCreator'
import { TechArchitect, OptimizationSuggestion } from './agents/techArchitect'
import { MonetizationEngine, MonetizationStrategy } from './agents/monetizationEngine'

export interface OrchestrationConfig {
    openaiApiKey: string
    pexelsApiKey: string
    stabilityApiKey?: string
}

export class Orchestrator {
    private contentGenerator: ContentGenerator
    private mediaCreator: MediaCreator
    private techArchitect: TechArchitect
    private monetizationEngine: MonetizationEngine

    constructor(config: OrchestrationConfig) {
        this.contentGenerator = new ContentGenerator({
            apiKey: config.openaiApiKey,
            model: 'gpt-4',
            temperature: 0.7,
        })

        this.mediaCreator = new MediaCreator({
            pexelsApiKey: config.pexelsApiKey,
            stabilityApiKey: config.stabilityApiKey,
        })

        this.techArchitect = new TechArchitect()
        this.monetizationEngine = new MonetizationEngine()
    }

    async generateContent(): Promise<{
        post: BlogPost
        media: GeneratedMedia[]
        optimizations: OptimizationSuggestion[]
        monetization: MonetizationStrategy[]
    }> {
        // 1. Analyze trends and generate content
        const trends = await this.contentGenerator.analyzeTrends()
        const trend = trends[0] // Pick the most relevant trend
        const post = await this.contentGenerator.generateBlogPost(trend)

        // 2. Generate media content
        const media = await Promise.all([
            this.mediaCreator.generateImage({
                prompt: `${trend.destination} ${trend.topic}`,
                width: 1920,
                height: 1080,
                style: 'photorealistic',
            }),
            this.mediaCreator.generateVideo({
                prompt: `${trend.destination} highlights`,
                duration: 30,
                style: 'cinematic',
            }),
        ])

        // 3. Analyze performance and suggest optimizations
        const metrics = await this.techArchitect.analyzePerformance()
        const usage = await this.techArchitect.monitorResourceUsage()
        const optimizations = await this.techArchitect.suggestOptimizations(
            metrics,
            usage
        )

        // 4. Optimize for monetization
        const revenueMetrics = await this.monetizationEngine.analyzeRevenue()
        const monetization = await this.monetizationEngine.suggestMonetizationStrategies(
            revenueMetrics
        )

        // 5. Optimize content with affiliate links
        post.content = await this.monetizationEngine.optimizeAffiliateLinks(
            post.content
        )

        return {
            post,
            media,
            optimizations,
            monetization,
        }
    }

    async optimizeInfrastructure(): Promise<void> {
        const metrics = await this.techArchitect.analyzePerformance()
        const usage = await this.techArchitect.monitorResourceUsage()
        const optimizations = await this.techArchitect.suggestOptimizations(
            metrics,
            usage
        )
        await this.techArchitect.optimizeInfrastructure(optimizations)
    }

    async trackEngagement(
        source: string,
        type: 'affiliate' | 'ad' | 'subscription'
    ): Promise<void> {
        await this.monetizationEngine.trackConversions(source, type)
    }
} 