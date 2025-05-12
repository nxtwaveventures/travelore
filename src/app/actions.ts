'use server'

export async function subscribeToNewsletter(prevState: string | null, formData: FormData) {
    const email = formData.get('email')

    if (!email || typeof email !== 'string') {
        return 'Please provide a valid email address'
    }

    try {
        // TODO: Integrate with your email service provider
        // For now, we'll just simulate a successful subscription
        console.log('New subscription:', email)
        return 'Thank you for subscribing!'
    } catch (error) {
        console.error('Newsletter subscription error:', error)
        return 'Something went wrong. Please try again later.'
    }
} 