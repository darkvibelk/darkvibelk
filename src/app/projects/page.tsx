"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe, Radio, Layers, Code, Wifi, Palette } from 'lucide-react';

const projects = [
    {
        title: "Zhatn - CyberNoir Chat",
        category: "Mobile Application",
        type: "web",
        image: "/project_zhatn.png",
        year: "2025",
        url: "https://zhatn.pages.dev/",
        status: "LIVE SYSTEM"
    },
    {
        title: "IT Service Desk Portal",
        category: "Web Application",
        type: "web",
        image: "/project_itsm.png",
        year: "2024",
        url: "https://maytech-sd.pages.dev/",
        status: "OPERATIONAL"
    },
    {
        title: "Rose Printers",
        category: "Branding & Design",
        type: "design",
        image: "/project_rose.png",
        year: "2024",
        url: "https://armohamedzuhail.github.io/RosePrinters/",
        status: "PUBLISHED"
    },
    {
        title: "Dark Vibe (Concept)",
        category: "Boutique Startup Idea",
        type: "web",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        year: "2025",
        url: "https://darkvibelk.pages.dev/",
        status: "ONLINE"
    },
    {
        title: "Professional Portfolio V2",
        category: "Personal Project",
        type: "web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        year: "2024",
        url: "https://armohamedzuhail.com",
        status: "DEPLOYED"
    },
    // Networking Projects
    {
        title: "Dual ISP Failover with HSRP",
        category: "Network Engineering",
        type: "network",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
        year: "2023",
        url: "#",
        status: "ARCHIVED"
    },
    {
        title: "LAN, WAN, BGP & ISP Topologies",
        category: "Network Architecture",
        type: "network",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
        year: "2023",
        url: "#",
        status: "ARCHIVED"
    },
    {
        title: "Campus Area Network Design",
        category: "Network Architecture",
        type: "network",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
        year: "2022",
        url: "#",
        status: "ARCHIVED"
    },
    {
        title: "Secure Remote Access Setup",
        category: "Security & VPN",
        type: "network",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        year: "2022",
        url: "#",
        status: "ARCHIVED"
    }
];

const tabs = [
    { id: 'all', label: 'ALL SYSTEMS', icon: Layers },
    { id: 'web', label: 'WEB / APP', icon: Code },
    { id: 'network', label: 'NETWORKING', icon: Wifi },
    { id: 'design', label: 'GRAPHIC DESIGN', icon: Palette },
];

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState('all');

    const filteredProjects = activeTab === 'all'
        ? projects
        : projects.filter(p => p.type === activeTab);

    return (
        <main className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
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

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-16 border-b border-gray-800 pb-8">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-mono text-sm
                                    ${activeTab === tab.id
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-600 hover:text-white'
                                    }
                                `}
                            >
                                <Icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group"
                            >
                                <Link href={project.url} target={project.url !== '#' ? "_blank" : undefined} className="block relative cursor-pointer">
                                    <div className="relative overflow-hidden rounded-lg aspect-video mb-4 border border-gray-800 group-hover:border-white/50 transition-colors">

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <div className="bg-black/80 backdrop-blur border border-green-900/50 text-green-500 text-xs font-mono px-3 py-1 rounded flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${project.status === 'ARCHIVED' ? 'bg-gray-500' : 'bg-green-500 animate-pulse'}`} />
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
                                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700"
                                        />

                                        {/* Dark overlay */}
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
                                            {project.url !== '#' && (
                                                <span className="font-mono text-xs text-gray-600 group-hover:text-white flex items-center gap-1">
                                                    <Globe className="w-3 h-3" /> VISIT SITE
                                                </span>
                                            )}
                                            <span className="font-mono text-xs text-gray-600">{project.year}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
