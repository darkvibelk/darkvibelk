"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Radio } from 'lucide-react';

const projects = [
    {
        title: "Zhatn - CyberNoir Chat",
        category: "Mobile Application",
        image: "/preview_zhatn.webp",
        year: "2025",
        url: "https://zhatn.pages.dev/",
        status: "LIVE SYSTEM"
    },
    {
        title: "IT Service Desk Portal",
        category: "Maytech Technologies",
        image: "/preview_maytech.webp",
        year: "2024",
        url: "https://maytech-sd.pages.dev/",
        status: "OPERATIONAL"
    },
    {
        title: "Rose Printers",
        category: "Family Business",
        image: "/preview_rose.webp",
        year: "2024",
        url: "https://armohamedzuhail.github.io/RosePrinters/",
        status: "PUBLISHED"
    },
    {
        title: "Dark Vibe (Concept)",
        category: "Boutique Startup Idea",
        image: "/preview_darkvibe.webp",
        year: "2025",
        url: "https://darkvibelk.pages.dev/",
        status: "ONLINE"
    },
    {
        title: "Professional Portfolio V2",
        category: "Personal Project",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        year: "2024",
        url: "https://armohamedzuhail.com",
        status: "DEPLOYED"
    }
];

export default function ProjectsPage() {
    return (
        <main className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <motion.h1
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="font-heading text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800"
                    >
                        THE<br />ARCHIVE
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-right mt-8 md:mt-0"
                    >
                        <div className="flex items-center justify-end gap-2 text-green-500 font-mono text-sm mb-2">
                            <Radio className="w-4 h-4 animate-pulse" />
                            <span>SYSTEMS ONLINE</span>
                        </div>
                        <p className="text-gray-500 font-mono">
                            SELECTED WORKS <br /> 2023 — 2025
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group"
                        >
                            <Link href={project.url} target="_blank" className="block relative">
                                <div className="relative overflow-hidden rounded-lg aspect-video mb-4 border border-gray-800 group-hover:border-white/50 transition-colors">

                                    {/* Simulating "Live Video" feel with a scanline overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-20 animate-scan pointer-events-none z-20" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="bg-black/80 backdrop-blur border border-green-900/50 text-green-500 text-xs font-mono px-3 py-1 rounded flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            {project.status}
                                        </div>
                                    </div>

                                    {/* Link Icon Overlay */}
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700"
                                    />

                                    {/* Dark overlay for text readability if needed, fading on hover */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                </div>

                                <div className="flex justify-between items-end border-b border-gray-800 pb-4 group-hover:border-white transition-colors">
                                    <div>
                                        <h3 className="font-heading text-2xl font-bold flex items-center gap-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mt-1">{project.category}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="font-mono text-xs text-gray-600 group-hover:text-white flex items-center gap-1">
                                            <Globe className="w-3 h-3" /> VISIT SITE
                                        </span>
                                        <span className="font-mono text-xs text-gray-600">{project.year}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
