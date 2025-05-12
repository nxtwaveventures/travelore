import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy policy and data handling practices for Travelore',
}

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Account information (name, email, profile picture)</li>
                        <li>Travel preferences and interests</li>
                        <li>Content you create or share on our platform</li>
                        <li>Communications with us</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Provide and improve our services</li>
                        <li>Personalize your experience</li>
                        <li>Send you updates and marketing communications</li>
                        <li>Ensure platform security</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Access your personal data</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to processing of your data</li>
                        <li>Data portability</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <a href="mailto:privacy@travelore.com" className="text-purple-600 hover:text-purple-800">
                            privacy@travelore.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    )
} 