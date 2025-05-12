export interface StabilityConfig {
    apiKey: string;
    baseUrl?: string;
    version?: string;
}

export interface GenerationParams {
    prompt: string;
    negativePrompt?: string;
    width?: number;
    height?: number;
    steps?: number;
    cfgScale?: number;
    samples?: number;
    style?: string;
    seed?: number;
}

export interface GeneratedImage {
    imageUrl: string;
    seed: number;
    prompt: string;
    metadata: {
        width: number;
        height: number;
        steps: number;
        cfgScale: number;
        style?: string;
    };
}

export class Stability {
    private apiKey: string;
    private baseUrl: string;
    private version: string;

    constructor(
        apiKey: string,
        baseUrl = 'https://api.stability.ai',
        version = 'v1'
    ) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.version = version;
    }

    async generateImage(
        prompt: string,
        params: Partial<GenerationParams> = {}
    ): Promise<GeneratedImage> {
        // In a real implementation, this would make API calls to Stability AI
        // For now, return mock data
        const defaultParams: GenerationParams = {
            prompt,
            width: 1024,
            height: 1024,
            steps: 30,
            cfgScale: 7,
            samples: 1,
            style: 'photographic',
            seed: Math.floor(Math.random() * 1000000)
        };

        const mergedParams = { ...defaultParams, ...params };

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        return {
            imageUrl: 'https://storage.travelore.com/images/generated-image.jpg',
            seed: mergedParams.seed!,
            prompt: mergedParams.prompt,
            metadata: {
                width: mergedParams.width!,
                height: mergedParams.height!,
                steps: mergedParams.steps!,
                cfgScale: mergedParams.cfgScale!,
                style: mergedParams.style
            }
        };
    }

    async upscaleImage(
        imageUrl: string,
        width: number,
        height: number
    ): Promise<GeneratedImage> {
        // In a real implementation, this would make API calls to Stability AI
        // For now, return mock data
        await new Promise(resolve => setTimeout(resolve, 1500));

        return {
            imageUrl: 'https://storage.travelore.com/images/upscaled-image.jpg',
            seed: 0,
            prompt: '',
            metadata: {
                width,
                height,
                steps: 0,
                cfgScale: 0
            }
        };
    }

    async imageToImage(
        imageUrl: string,
        prompt: string,
        params: Partial<GenerationParams> = {}
    ): Promise<GeneratedImage> {
        // In a real implementation, this would make API calls to Stability AI
        // For now, return mock data
        const defaultParams: GenerationParams = {
            prompt,
            steps: 30,
            cfgScale: 7,
            samples: 1,
            style: 'photographic',
            seed: Math.floor(Math.random() * 1000000)
        };

        const mergedParams = { ...defaultParams, ...params };

        await new Promise(resolve => setTimeout(resolve, 2500));

        return {
            imageUrl: 'https://storage.travelore.com/images/modified-image.jpg',
            seed: mergedParams.seed!,
            prompt: mergedParams.prompt,
            metadata: {
                width: 1024,
                height: 1024,
                steps: mergedParams.steps!,
                cfgScale: mergedParams.cfgScale!,
                style: mergedParams.style
            }
        };
    }

    async getBalance(): Promise<number> {
        // In a real implementation, this would check the API credit balance
        // For now, return mock data
        return 1000;
    }
} 