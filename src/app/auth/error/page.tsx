'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function AuthError() {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Authentication Error
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        {error === 'AccessDenied'
                            ? 'You do not have permission to sign in.'
                            : error === 'Configuration'
                                ? 'There is a problem with the server configuration.'
                                : error === 'Verification'
                                    ? 'The verification link is no longer valid.'
                                    : 'An error occurred during authentication.'}
                    </p>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="font-medium text-purple-600 hover:text-purple-500"
                    >
                        Return to Home
                    </Link>
                    <span className="mx-2 text-gray-400">|</span>
                    <Link
                        href="/auth/signin"
                        className="font-medium text-purple-600 hover:text-purple-500"
                    >
                        Try Again
                    </Link>
                </div>
            </div>
        </div>
    )
} 