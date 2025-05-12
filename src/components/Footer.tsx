import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            Travelore
                        </h3>
                        <p className="mt-4 text-gray-600">
                            Experience travel through the lens of artificial intelligence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                            Explore
                        </h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/destinations" className="text-gray-600 hover:text-gray-900">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link href="/stories" className="text-gray-600 hover:text-gray-900">
                                    Stories
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                            Legal
                        </h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/legal/privacy-policy" className="text-gray-600 hover:text-gray-900">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/terms" className="text-gray-600 hover:text-gray-900">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/cookie-policy" className="text-gray-600 hover:text-gray-900">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                            Connect
                        </h4>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="https://twitter.com/travelore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/travelore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/company/travelore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-center text-gray-500">
                        © {new Date().getFullYear()} Travelore. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
} 