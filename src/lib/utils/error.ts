export class AppError extends Error {
    constructor(
        message: string,
        public statusCode: number = 500,
        public code: string = 'INTERNAL_SERVER_ERROR'
    ) {
        super(message)
        this.name = 'AppError'
    }
}

export class ValidationError extends AppError {
    constructor(message: string) {
        super(message, 400, 'VALIDATION_ERROR')
        this.name = 'ValidationError'
    }
}

export class AuthenticationError extends AppError {
    constructor(message: string = 'Authentication required') {
        super(message, 401, 'AUTHENTICATION_ERROR')
        this.name = 'AuthenticationError'
    }
}

export class AuthorizationError extends AppError {
    constructor(message: string = 'Permission denied') {
        super(message, 403, 'AUTHORIZATION_ERROR')
        this.name = 'AuthorizationError'
    }
}

export class NotFoundError extends AppError {
    constructor(message: string = 'Resource not found') {
        super(message, 404, 'NOT_FOUND')
        this.name = 'NotFoundError'
    }
}

export class RateLimitError extends AppError {
    constructor(message: string = 'Too many requests') {
        super(message, 429, 'RATE_LIMIT_EXCEEDED')
        this.name = 'RateLimitError'
    }
}

export function handleError(error: unknown): AppError {
    if (error instanceof AppError) {
        return error
    }

    if (error instanceof Error) {
        return new AppError(error.message)
    }

    return new AppError('An unexpected error occurred')
}

export function isAppError(error: unknown): error is AppError {
    return error instanceof AppError
}

export function formatErrorResponse(error: AppError) {
    return {
        error: {
            message: error.message,
            code: error.code,
            statusCode: error.statusCode,
        },
    }
} 