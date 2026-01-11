"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './ui/Magnetic';
import HackerText from './ui/HackerText';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });


export default function Hero() {
    return (
        <section className="relative h-[90vh] flex flex-col items-center justify-center md:pt-32 overflow-hidden">

            {/* Combined 3D Scene */}
            <HeroScene />

            {/* Content Container - Locked toCenter */}
            <div className="z-10 w-full max-w-7xl px-6 relative pointer-events-none flex flex-col items-center text-center">

                <div className="max-w-4xl pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-chrome">
                            <HackerText text="DARK VIBE" /> <span className="text-3xl text-green-500 animate-pulse block mt-4 md:mt-2">[SYSTEM ONLINE]</span>
                        </h1>
                        <p className="font-heading text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto tracking-wide">
                            NEXT-GENERATION SOLUTIONS FOR DIGITAL AND TECHNICAL INFRASTRUCTURE.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
                            <Link href="/services">
                                <Magnetic>
                                    {/* Glass Hover Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 overflow-hidden group"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">Explore Solutions <ArrowRight className="w-4 h-4" /></span>
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                                    </motion.button>
                                </Magnetic>
                            </Link>
                            <Link href="/contact">
                                <Magnetic>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 border border-gray-700 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-colors bg-black/50 backdrop-blur-sm"
                                    >
                                        <Mail className="w-4 h-4" /> Contact Team
                                    </motion.button>
                                </Magnetic>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
