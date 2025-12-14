"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Zhatn - CyberNoir Chat",
        category: "Mobile Application",
        image: "/project_zhatn.png",
        year: "2025",
        url: "#"
    },
    {
        title: "IT Service Desk Portal",
        category: "Maytech Technologies",
        image: "/project_itsm.png",
        year: "2024",
        url: "https://maytech-servicedesk.vercel.app/login"
    },
    {
        title: "Rose Printers",
        category: "Family Business",
        image: "/project_rose.png",
        year: "2024",
        url: "#"
    },
    {
        title: "Dark Vibe (Concept)",
        category: "Boutique Startup Idea",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        year: "2025",
        url: "https://darkvibelk.vercel.app/"
    },
    {
        title: "Professional Portfolio V2",
        category: "Personal Project",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        year: "2024",
        url: "https://armohamedzuhail.com"
    },
    {
        title: "Dual ISP Failover with HSRP",
        category: "University of Greenwich",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
        year: "2023",
        url: "#"
    },
    {
        title: "Personal Website (Legacy)",
        category: "Personal Project",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop",
        year: "2023",
        url: "https://armohamedzuhail.netlify.app"
    },
    {
        title: "LAN, WAN, BGP & ISP Topologies",
        category: "ATN Campus",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
        year: "2023",
        url: "#"
    },
    {
        title: "Campus Area Network Design",
        category: "Network Architecture",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
        year: "2022",
        url: "#"
    },
    {
        title: "Secure Remote Access Setup",
        category: "Security & VPN",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        year: "2022",
        url: "#"
    },
    {
        title: "Microsoft 365 Migration",
        category: "Cloud Administration",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        year: "2023",
        url: "#"
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
                            <Link href={project.url} target={project.url.startsWith('http') ? '_blank' : undefined} className="block">
                                <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />

                                    {/* Link Icon Overlay */}
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>

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
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
