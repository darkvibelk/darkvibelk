"use client";

import RevealOnScroll from './ui/RevealOnScroll';
import { motion } from 'framer-motion';
import { Network, ShieldCheck, Layout, PenTool, Cloud, Database } from 'lucide-react';

const divisions = [
    {
        title: "Comprehensive Networking",
        description: "Enterprise-grade connectivity and infrastructure solutions designed for stability and speed.",
        icon: Network,
        gradient: "from-blue-900/20 to-transparent"
    },
    {
        title: "IT Support & Maintenance",
        description: "24/7 Technical assistance and proactive system maintenance for uninterrupted operations.",
        icon: ShieldCheck,
        gradient: "from-green-900/20 to-transparent"
    },
    {
        title: "Digital Experience Design",
        description: "Modern, high-performance web applications tailored to your corporate identity.",
        icon: Layout,
        gradient: "from-purple-900/20 to-transparent"
    },
    {
        title: "Visual Identity & Branding",
        description: "Premium graphic design services to elevate your brand's visual presence.",
        icon: PenTool,
        gradient: "from-pink-900/20 to-transparent"
    },
    {
        title: "Cloud Command Infrastructure",
        description: "Scalable cloud solutions and migration for the modern digital empire.",
        icon: Cloud,
        gradient: "from-sky-900/20 to-transparent"
    },
    {
        title: "Secure Data Vaults",
        description: "Advanced database architecture and security for your most critical assets.",
        icon: Database,
        gradient: "from-indigo-900/20 to-transparent"
    }
];

export default function DivisionsGrid() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <RevealOnScroll>
                <div className="mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Divisions</h2>
                    <div className="h-1 w-20 bg-gray-500"></div>
                </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {divisions.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative p-8 rounded-2xl bg-card-bg border border-gray-800 overflow-hidden hover:border-gray-600 transition-colors`}
                    >
                        {/* Subtle Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="mb-6">
                                <div className="p-3 bg-black/50 w-fit rounded-lg border border-gray-700 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-8 h-8 text-gray-200" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-body">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                                <span>LEARN MORE</span>
                                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
