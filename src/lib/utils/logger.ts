type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogMessage {
    level: LogLevel
    message: string
    timestamp: string
    data?: Record<string, any>
}

interface LogExtra {
    [key: string]: unknown
}

class Logger {
    private static instance: Logger
    private isDevelopment = process.env.NODE_ENV === 'development'

    private constructor() { }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger()
        }
        return Logger.instance
    }

    private formatMessage(level: LogLevel, message: string, data?: Record<string, any>): LogMessage {
        return {
            level,
            message,
            timestamp: new Date().toISOString(),
            data
        }
    }

    private log(level: LogLevel, message: string, data?: Record<string, any>) {
        const logMessage = this.formatMessage(level, message, data)

        if (this.isDevelopment) {
            const color = {
                debug: '\x1b[36m', // cyan
                info: '\x1b[32m',  // green
                warn: '\x1b[33m',  // yellow
                error: '\x1b[31m'  // red
            }[level]

            console.log(
                `${color}[${logMessage.level.toUpperCase()}]\x1b[0m`,
                `[${logMessage.timestamp}]`,
                message,
                data ? '\n' + JSON.stringify(data, null, 2) : ''
            )
        } else {
            // In production, we would typically send logs to a service like Vercel Logs
            // or another logging service. For now, just use console.log
            console.log(JSON.stringify(logMessage))
        }
    }

    debug(message: string, data?: Record<string, any>) {
        if (this.isDevelopment) {
            this.log('debug', message, data)
        }
    }

    info(message: string, data?: Record<string, any>) {
        this.log('info', message, data)
    }

    warn(message: string, data?: Record<string, any>) {
        this.log('warn', message, data)
    }

    error(message: string, data?: Record<string, any>) {
        this.log('error', message, data)
    }

    // Helper method for logging API requests
    logRequest(req: Request, extra: LogExtra = {}): void {
        this.info('API Request', {
            method: req.method,
            url: req.url,
            headers: Object.fromEntries(req.headers),
            ...extra,
        })
    }

    // Helper method for logging API responses
    logResponse(status: number, body: unknown, extra: LogExtra = {}): void {
        this.info('API Response', {
            status,
            body,
            ...extra,
        })
    }

    // Helper method for logging performance metrics
    logPerformance(operation: string, durationMs: number, extra: LogExtra = {}): void {
        this.info('Performance Metric', {
            operation,
            durationMs,
            ...extra,
        })
    }
}

export const logger = Logger.getInstance() 