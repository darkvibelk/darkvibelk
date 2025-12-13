"use client";

import { motion } from 'framer-motion';

const projects = [
    {
        title: "Project Alpha",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Cyber Nexus",
        category: "Network Infrastructure",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
        year: "2024"
    },
    {
        title: "Obsidian Brand",
        category: "Visual Identity",
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2670&auto=format&fit=crop",
        year: "2023"
    },
    {
        title: "Quantum Dashboard",
        category: "SaaS Platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        year: "2023"
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
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-right text-gray-500 font-mono mt-8 md:mt-0"
                    >
                        SELECTED WORKS <br /> 2023 — 2025
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700"
                                />
                            </div>
                            <div className="flex justify-between items-end border-b border-gray-800 pb-4 group-hover:border-white transition-colors">
                                <div>
                                    <h3 className="font-heading text-2xl font-bold">{project.title}</h3>
                                    <p className="text-gray-500 text-sm">{project.category}</p>
                                </div>
                                <span className="font-mono text-xs text-gray-600 group-hover:text-white">{project.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
