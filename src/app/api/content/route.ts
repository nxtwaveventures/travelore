import { NextResponse } from 'next/server'
import { Orchestrator } from '@/lib/orchestrator'

const orchestrator = new Orchestrator({
    openaiApiKey: process.env.OPENAI_API_KEY || '',
    pexelsApiKey: process.env.PEXELS_API_KEY || '',
    stabilityApiKey: process.env.STABILITY_API_KEY,
})

export async function GET() {
    try {
        const content = await orchestrator.generateContent()
        return NextResponse.json(content)
    } catch (error) {
        console.error('Error generating content:', error)
        return NextResponse.json(
            { error: 'Failed to generate content' },
            { status: 500 }
        )
    }
}

export async function POST() {
    try {
        await orchestrator.optimizeInfrastructure()
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error optimizing infrastructure:', error)
        return NextResponse.json(
            { error: 'Failed to optimize infrastructure' },
            { status: 500 }
        )
    }
} 