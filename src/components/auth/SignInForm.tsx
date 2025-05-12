'use client'

import { signIn } from 'next-auth/react'
import { motion } from 'framer-motion'

interface SignInFormProps {
    providers: Record<string, any>
}

export function SignInForm({ providers }: SignInFormProps) {
    return (
        <div className="mt-8 space-y-6">
            <div className="space-y-4">
                {Object.values(providers).map((provider: any) => (
                    <motion.div
                        key={provider.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <button
                            onClick={() => signIn(provider.id)}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {provider.id === 'google' && (
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.367,1.332-1.459,2.424-2.791,2.791v1.909h1.909c2.108,0,3.818-1.71,3.818-3.818c0-2.108-1.71-3.818-3.818-3.818h-3.536C13.4,10.242,12.545,11.097,12.545,12.151z M12,7.636c-2.108,0-3.818,1.71-3.818,3.818s1.71,3.818,3.818,3.818s3.818-1.71,3.818-3.818S14.108,7.636,12,7.636z M12,14.182c-1.054,0-1.909-0.855-1.909-1.909s0.855-1.909,1.909-1.909s1.909,0.855,1.909,1.909S13.054,14.182,12,14.182z"></path>
                                    </svg>
                                )}
                            </span>
                            Sign in with {provider.name}
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                    By signing in, you agree to our{' '}
                    <a href="/terms" className="font-medium text-purple-600 hover:text-purple-500">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="font-medium text-purple-600 hover:text-purple-500">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    )
} 