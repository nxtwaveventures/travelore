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
          {/* New Advertisement Button */}
          <a
            href="#special-offers"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2v5m-2-7h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Special Offers
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

function SpecialOffersSection() {
  return (
    <section id="special-offers" className="py-24 px-4 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Premium Package */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Premium Package</h3>
                <p className="text-sm text-gray-500">Best for luxury travelers</p>
              </div>
              <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">-20%</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-4">$1,599 <span className="text-sm text-gray-500">/ person</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                5-star accommodations
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Private guided tours
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                All meals included
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
          </div>

          {/* Adventure Package */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Adventure Package</h3>
                <p className="text-sm text-gray-500">Perfect for thrill-seekers</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Popular</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-4">$899 <span className="text-sm text-gray-500">/ person</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Guided adventures
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Equipment included
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Professional photos
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
          </div>

          {/* Budget Package */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Budget Package</h3>
                <p className="text-sm text-gray-500">Great for backpackers</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Best Value</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-4">$499 <span className="text-sm text-gray-500">/ person</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Hostel accommodations
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Group activities
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Local experiences
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </button>
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
        <SpecialOffersSection />
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
