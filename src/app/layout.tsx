import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://travelore.vercel.app'),
  title: {
    default: 'Travelore - AI-Powered Travel Stories',
    template: '%s | Travelore'
  },
  description: "Experience travel through the lens of artificial intelligence. Discover stories, insights, and destinations curated just for you.",
  keywords: ["travel", "AI", "stories", "destinations", "recommendations"],
  authors: [{ name: 'Travelore Team' }],
  openGraph: {
    title: "Travelore - AI-Powered Travel Stories",
    description: "Experience travel through the lens of artificial intelligence. Discover stories, insights, and destinations curated just for you.",
    url: "https://travelore.vercel.app",
    siteName: "Travelore",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travelore - AI-Powered Travel Stories",
    description: "Experience travel through the lens of artificial intelligence. Discover stories, insights, and destinations curated just for you.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  verification: {
    google: 'your-google-site-verification',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        <Providers>
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
