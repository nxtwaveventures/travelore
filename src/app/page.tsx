import { Suspense } from 'react'
import { NewsletterForm } from '@/components/NewsletterForm'
import { ExploreButton } from '@/components/ExploreButton'
import { LatestPosts } from '@/components/LatestPosts'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let Travelore guide you to extraordinary destinations and unforgettable experiences. Your perfect journey begins here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ExploreButton />
          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-purple-200 text-purple-700 hover:border-purple-300 hover:bg-purple-50 transition-all"
          >
            Learn More
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          <a
            href="https://web.telegram.org/k/#@hoteldropbot"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0088cc] text-white hover:bg-[#0077b5] transition-all"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.411-.168.56-.314 1.045-.434 1.446-.12.4-.236.785-.346 1.153-.209.706-.39 1.314-.39 1.314s-.087.27-.262.332c-.174.062-.412-.011-.412-.011l-2.436-1.525c0-.001-.358-.22-.499-.361-.142-.142-.496-.524-.496-.524s-.359-.299-.499-.442l-2.773-1.838s-.566-.394-.625-.629c-.059-.235.289-.454.289-.454l11.245-4.258s.295-.118.472-.099c.177.019.295.177.295.177s.236.235.118.412z" />
            </svg>
            Telegram Bot
          </a>
        </div>
      </div>

      {/* Travel Psychology Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          98% Satisfaction
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full" />
          10k+ Travelers
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full" />
          50+ Countries
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Your AI Travel Companion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Personalization */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Personalization</h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI learns your preferences and crafts personalized recommendations that match your travel style.
            </p>
          </div>

          {/* Visual Stories */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-12 w-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Immersive Stories</h3>
            <p className="text-gray-600 leading-relaxed">
              Experience destinations through stunning visuals and AI-generated narratives that bring places to life.
            </p>
          </div>

          {/* Community */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-12 w-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Travel Community</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with fellow travelers, share experiences, and discover hidden gems from our global community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">
          Join the Future of Travel
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Subscribe to receive AI-curated travel stories and personalized recommendations.
          Be the first to explore new destinations and experiences.
        </p>
        <NewsletterForm />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <HeroSection />
        <FeaturesSection />

        {/* Latest Stories Section */}
        <section id="latest-stories" className="py-24 px-4 bg-gradient-to-br from-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Latest Stories
            </h2>
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-64 bg-gray-200 rounded-2xl mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                  </div>
                ))}
              </div>
            }>
              <LatestPosts />
            </Suspense>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
