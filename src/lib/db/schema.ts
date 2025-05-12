import { z } from 'zod'

export const MediaSchema = z.object({
    type: z.enum(['image', 'video']),
    url: z.string(),
    alt: z.string().optional(),
})

export const MetricsSchema = z.object({
    views: z.number(),
    likes: z.number(),
    shares: z.number(),
})

export const PostSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    destination: z.string(),
    media: z.array(MediaSchema),
    metrics: MetricsSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
})

export const UserSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    image: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export const DestinationSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    location: z.object({
        country: z.string(),
        city: z.string(),
        coordinates: z.object({
            latitude: z.number(),
            longitude: z.number(),
        }).optional(),
    }),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export type Media = z.infer<typeof MediaSchema>
export type Metrics = z.infer<typeof MetricsSchema>
export type Post = z.infer<typeof PostSchema>
export type User = z.infer<typeof UserSchema>
export type Destination = z.infer<typeof DestinationSchema> 