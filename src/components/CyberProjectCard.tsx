"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';

interface ProjectProps {
    project: {
        title: string;
        category: string;
        type: string;
        image: string;
        year: string;
        url: string;
        status: string;
    };
}

export default function CyberProjectCard({ project }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative w-full aspect-[4/3] md:aspect-[16/10] rounded-3xl bg-gray-900 border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl overflow-visible perspective-1000"
        >
            <Link href={project.url} target={project.url !== '#' ? "_blank" : undefined} className={`block h-full w-full ${project.url === '#' ? 'pointer-events-none' : 'cursor-none'}`}>

                {/* Card Content Container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-black">

                    {/* Background Image with Parallax-like scale */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        {/* Vignette & Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Status Pill (Top Left) */}
                    <div className="absolute top-6 left-6 z-20 transform translate-z-20">
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 text-white/80 text-[10px] uppercase font-mono tracking-widest px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
                            <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'ARCHIVED' ? 'bg-gray-500' : 'bg-green-500 animate-pulse'}`} />
                            {project.status}
                        </div>
                    </div>

                    {/* Year (Top Right) */}
                    <div className="absolute top-6 right-6 z-20 transform translate-z-20">
                        <span className="text-white/60 font-mono text-xs tracking-wider">{project.year}</span>
                    </div>

                    {/* Content (Bottom) */}
                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end transform translate-z-30">
                        <motion.div
                            className="transform transition-transform duration-500 group-hover:-translate-y-2"
                        >
                            <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2 leading-none tracking-tight">
                                {project.title}
                            </h3>

                            <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                                <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">{project.category}</p>
                                {project.url !== '#' && (
                                    <div className="flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
                                        Visit Site <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay z-10" />
                </div>

                {/* "Vote Now" / Action Button Style Cursor Follower (Optional - Simplified to center for now) */}
                {/* "Vote Now" / Action Button Style Cursor Follower */}
                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <span className="text-white font-mono text-[10px] uppercase text-center leading-tight tracking-widest">
                            View<br />System
                        </span>
                    </div>
                </div>

            </Link>
        </motion.div>
    );
}
