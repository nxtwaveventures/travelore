export interface BaseAgent {
    id: string;
    name: string;
    description: string;
    status: 'idle' | 'working' | 'error';
    lastActive: Date;
    type: AgentType;
    execute: (task: AgentTask) => Promise<AgentResult>;
}

export type AgentType = 'content' | 'media' | 'tech' | 'monetization';

export interface AgentTask {
    id: string;
    type: AgentType;
    priority: number;
    data: Record<string, any>;
    createdAt: Date;
    status: 'pending' | 'processing' | 'completed' | 'failed';
}

export interface AgentResult {
    success: boolean;
    data: Record<string, any>;
    error?: string;
    metrics?: {
        executionTime: number;
        tokensUsed?: number;
        cost?: number;
    };
}

export interface ContentGeneratorAgent extends BaseAgent {
    type: 'content';
    capabilities: {
        trendDetection: boolean;
        contentGeneration: boolean;
        seoOptimization: boolean;
    };
}

export interface MediaCreatorAgent extends BaseAgent {
    type: 'media';
    capabilities: {
        imageGeneration: boolean;
        videoCreation: boolean;
        audioProcessing: boolean;
    };
}

export interface TechArchitectAgent extends BaseAgent {
    type: 'tech';
    capabilities: {
        performanceOptimization: boolean;
        infrastructureManagement: boolean;
        uxInnovation: boolean;
    };
}

export interface MonetizationAgent extends BaseAgent {
    type: 'monetization';
    capabilities: {
        affiliateManagement: boolean;
        revenueOptimization: boolean;
        marketAnalysis: boolean;
    };
}

export interface AgentMetrics {
    totalTasks: number;
    successRate: number;
    averageExecutionTime: number;
    totalTokensUsed: number;
    totalCost: number;
    lastUpdated: Date;
} 