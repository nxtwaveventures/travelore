'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { subscribeToNewsletter } from '@/app/actions'

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="px-8 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition-colors disabled:opacity-50"
        >
            {pending ? 'Subscribing...' : 'Subscribe'}
        </button>
    )
}

export function NewsletterForm() {
    const [message, formAction] = useFormState(subscribeToNewsletter, null)
    const isSuccess = message === 'Thank you for subscribing!'

    return (
        <form action={formAction} className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex gap-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <SubmitButton />
            </div>
            {message && (
                <p
                    className={`text-sm mt-2 ${isSuccess ? 'text-green-600' : 'text-red-500'
                        }`}
                >
                    {message}
                </p>
            )}
        </form>
    )
} 