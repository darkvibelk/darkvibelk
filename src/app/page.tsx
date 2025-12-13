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
                <div className="pointer-events-auto">
                    {/* Logo Image */}
                    <img src="/logo.jpg" alt="Dark Vibe Logo" className="h-12 w-auto object-contain" />
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
