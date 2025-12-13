"use client";

import { useEffect } from 'react';
import Lenis from 'lenis'
import Hero from '@/components/Hero';
import DivisionsGrid from '@/components/DivisionsGrid';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

export default function Home() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main className="min-h-screen bg-background text-white selection:bg-white/20">

            {/* Navigation Overlay (Simple) */}
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-4">
                    {/* Logo Image */}
                    <div className="relative group cursor-pointer">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-900 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src="/logo.jpg"
                            alt="Dark Vibe Logo"
                            className="relative h-14 w-14 object-cover rounded-full border-2 border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="hidden md:flex gap-6 pointer-events-auto">
                    <button className="text-sm font-bold tracking-widest hover:opacity-70">MENU</button>
                </div>
            </nav>

            <Hero />
            <DivisionsGrid />
            <Roadmap />
            <Footer />
        </main>
    );
}
