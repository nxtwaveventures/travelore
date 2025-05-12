'use client';

import { motion, domAnimation, LazyMotion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type MotionDivProps = HTMLMotionProps<'div'>;

const AnimatedDiv = ({ children, ...props }: MotionDivProps) => (
    <motion.div {...props}>{children}</motion.div>
);

export function HeroSection() {
    return (
        <LazyMotion features={domAnimation}>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 text-center px-4"
                >
                    <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        Travelore
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                        Experience travel through the lens of artificial intelligence.
                        Discover stories, insights, and destinations curated just for you.
                    </p>
                    <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors">
                        Start Exploring
                    </button>
                </motion.div>

                {/* Background Pattern */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white" />
                    <div className="absolute inset-0 opacity-30">
                        {/* Add subtle pattern or animation here */}
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
} 