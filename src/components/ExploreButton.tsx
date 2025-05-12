'use client'

export function ExploreButton() {
    const scrollToStories = () => {
        const storiesSection = document.querySelector('#latest-stories')
        if (storiesSection) {
            storiesSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <button
            onClick={scrollToStories}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
        >
            Start Exploring
        </button>
    )
} 