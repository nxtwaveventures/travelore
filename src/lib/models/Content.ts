import { Schema, model, models, Document, CallbackWithoutResultAndOptionalError } from 'mongoose';

export interface IContent extends Document {
    title: string;
    slug: string;
    content: string;
    summary: string;
    author: string;
    destination: string;
    categories: string[];
    tags: string[];
    status: 'draft' | 'published' | 'archived';
    featuredImage: string;
    gallery: string[];
    seo: {
        title: string;
        description: string;
        keywords: string[];
        canonical: string;
        ogImage: string;
    };
    metadata: {
        wordCount: number;
        readingTime: number;
        aiGenerated: boolean;
        lastOptimized: Date;
    };
    analytics: {
        views: number;
        likes: number;
        shares: number;
        comments: number;
        averageTimeOnPage: number;
    };
    monetization: {
        affiliateLinks: Array<{
            platform: string;
            url: string;
            clicks: number;
            conversions: number;
            revenue: number;
        }>;
        sponsoredContent: boolean;
        sponsorName?: string;
    };
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
}

const contentSchema = new Schema<IContent>({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    summary: { type: String, required: true },
    author: { type: String, required: true },
    destination: { type: String, required: true },
    categories: [{ type: String }],
    tags: [{ type: String }],
    status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
        default: 'draft'
    },
    featuredImage: { type: String, required: true },
    gallery: [{ type: String }],
    seo: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        keywords: [{ type: String }],
        canonical: { type: String },
        ogImage: { type: String }
    },
    metadata: {
        wordCount: { type: Number, default: 0 },
        readingTime: { type: Number, default: 0 },
        aiGenerated: { type: Boolean, default: false },
        lastOptimized: { type: Date }
    },
    analytics: {
        views: { type: Number, default: 0 },
        likes: { type: Number, default: 0 },
        shares: { type: Number, default: 0 },
        comments: { type: Number, default: 0 },
        averageTimeOnPage: { type: Number, default: 0 }
    },
    monetization: {
        affiliateLinks: [{
            platform: { type: String },
            url: { type: String },
            clicks: { type: Number, default: 0 },
            conversions: { type: Number, default: 0 },
            revenue: { type: Number, default: 0 }
        }],
        sponsoredContent: { type: Boolean, default: false },
        sponsorName: { type: String }
    }
}, {
    timestamps: true
});

// Add text index for search
contentSchema.index({
    title: 'text',
    content: 'text',
    summary: 'text',
    destination: 'text',
    tags: 'text'
});

// Calculate reading time before saving
contentSchema.pre('save', function (this: IContent, next: CallbackWithoutResultAndOptionalError) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    this.metadata.wordCount = wordCount;
    this.metadata.readingTime = Math.ceil(wordCount / wordsPerMinute);
    next();
});

// Export model if it doesn't exist
export const Content = models.Content || model<IContent>('Content', contentSchema); 