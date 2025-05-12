import { Configuration, OpenAIApi } from 'openai'
import { z } from 'zod'

export interface ContentGeneratorConfig {
    apiKey: string
    model: string
    temperature: number
}

export interface TrendingTopic {
    destination: string
    topic: string
    keywords: string[]
    sentiment: number
}

export interface BlogPost {
    title: string
    content: string
    summary: string
    tags: string[]
    seoMetadata: {
        title: string
        description: string
        keywords: string[]
    }
    destination: string
    createdAt: Date
}

export class ContentGenerator {
    private openai: OpenAIApi
    private config: ContentGeneratorConfig

    constructor(config: ContentGeneratorConfig) {
        this.config = config
        this.openai = new OpenAIApi(
            new Configuration({
                apiKey: config.apiKey,
            })
        )
    }

    async generateBlogPost(topic: TrendingTopic): Promise<BlogPost> {
        const prompt = `Write a detailed, engaging blog post about ${topic.destination} focusing on ${topic.topic}.
    Include local insights, cultural nuances, and practical tips.
    Make it SEO-optimized and engaging for travel enthusiasts.`

        try {
            const completion = await this.openai.createCompletion({
                model: this.config.model,
                prompt,
                temperature: this.config.temperature,
                max_tokens: 2000,
            })

            const content = completion.data.choices[0]?.text || ''

            return {
                title: `${topic.destination}: ${topic.topic}`,
                content,
                summary: content.substring(0, 200) + '...',
                tags: topic.keywords,
                seoMetadata: {
                    title: `${topic.destination} Travel Guide: ${topic.topic}`,
                    description: content.substring(0, 160),
                    keywords: topic.keywords,
                },
                destination: topic.destination,
                createdAt: new Date(),
            }
        } catch (error) {
            console.error('Error generating blog post:', error)
            throw error
        }
    }

    async analyzeTrends(): Promise<TrendingTopic[]> {
        // Implement trend analysis logic here
        // This could involve scraping travel websites, social media, or using APIs
        return []
    }
} 