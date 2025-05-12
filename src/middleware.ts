import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { logger } from '@/lib/utils/logger'
import { handleError, isAppError, formatErrorResponse } from '@/lib/utils/error'

export async function middleware(request: NextRequest) {
    // Skip middleware for non-API routes
    if (!request.nextUrl.pathname.startsWith('/api')) {
        return NextResponse.next()
    }

    try {
        // Log the incoming request
        logger.logRequest(request)

        // Add CORS headers
        const response = NextResponse.next()
        response.headers.set('Access-Control-Allow-Origin', '*')
        response.headers.set(
            'Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE, OPTIONS'
        )
        response.headers.set(
            'Access-Control-Allow-Headers',
            'Content-Type, Authorization'
        )

        // Handle preflight requests
        if (request.method === 'OPTIONS') {
            return response
        }

        // Add basic security headers
        response.headers.set('X-Frame-Options', 'DENY')
        response.headers.set('X-Content-Type-Options', 'nosniff')
        response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
        response.headers.set(
            'Strict-Transport-Security',
            'max-age=31536000; includeSubDomains'
        )

        // Add timing header
        const startTime = Date.now()
        response.headers.set('Server-Timing', `total;dur=${Date.now() - startTime}`)

        return response
    } catch (error) {
        // Handle and log errors
        const appError = handleError(error)
        logger.error('Middleware Error', appError)

        // Return error response
        return new NextResponse(
            JSON.stringify(formatErrorResponse(appError)),
            {
                status: appError.statusCode,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }
}

export const config = {
    matcher: '/api/:path*',
} 