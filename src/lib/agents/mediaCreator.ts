import axios from 'axios'

export interface MediaCreatorConfig {
    stabilityApiKey?: string
    pexelsApiKey?: string
}

export interface VideoGenerationParams {
    prompt: string
    duration: number
    style: string
}

export interface ImageGenerationParams {
    prompt: string
    width: number
    height: number
    style: string
}

export interface GeneratedMedia {
    url: string
    type: 'video' | 'image'
    metadata: {
        prompt: string
        style: string
        dimensions?: {
            width: number
            height: number
        }
        duration?: number
    }
}

export class MediaCreator {
    private config: MediaCreatorConfig

    constructor(config: MediaCreatorConfig) {
        this.config = config
    }

    async generateImage(params: ImageGenerationParams): Promise<GeneratedMedia> {
        // For now, we'll use Pexels API to fetch relevant images
        // Later can be upgraded to Stable Diffusion or other AI image generation
        try {
            const response = await axios.get('https://api.pexels.com/v1/search', {
                headers: {
                    Authorization: this.config.pexelsApiKey,
                },
                params: {
                    query: params.prompt,
                    per_page: 1,
                },
            })

            const image = response.data.photos[0]

            return {
                url: image.src.original,
                type: 'image',
                metadata: {
                    prompt: params.prompt,
                    style: params.style,
                    dimensions: {
                        width: image.width,
                        height: image.height,
                    },
                },
            }
        } catch (error) {
            console.error('Error generating image:', error)
            throw error
        }
    }

    async generateVideo(params: VideoGenerationParams): Promise<GeneratedMedia> {
        // For MVP, we'll create a slideshow from images
        // Later can be upgraded to actual AI video generation
        try {
            const images = await Promise.all([
                this.generateImage({
                    prompt: params.prompt,
                    width: 1920,
                    height: 1080,
                    style: params.style,
                }),
                this.generateImage({
                    prompt: params.prompt + ' different perspective',
                    width: 1920,
                    height: 1080,
                    style: params.style,
                }),
            ])

            // Here we would normally use FFMPEG to create a video
            // For now, return the first image as a placeholder
            return {
                url: images[0].url,
                type: 'video',
                metadata: {
                    prompt: params.prompt,
                    style: params.style,
                    duration: params.duration,
                },
            }
        } catch (error) {
            console.error('Error generating video:', error)
            throw error
        }
    }

    async optimizeMedia(media: GeneratedMedia): Promise<GeneratedMedia> {
        // Implement media optimization logic here
        // This could involve compression, format conversion, etc.
        return media
    }
} 