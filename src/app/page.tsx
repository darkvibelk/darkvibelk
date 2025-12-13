"use client";

import { useEffect } from 'react';
import Lenis from 'lenis'
import Hero from '@/components/Hero';
import DivisionsGrid from '@/components/DivisionsGrid';
import Roadmap from '@/components/Roadmap';

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

            <Hero />
            <DivisionsGrid />
            <Roadmap />
        </main>
    );
}
