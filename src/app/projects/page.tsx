"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Layers, Code, Wifi, Palette, ArrowUpRight } from 'lucide-react';
import CyberProjectCard from '@/components/CyberProjectCard';

const projects = [
    {
        title: "Project ZolviQ",
        category: "Stealth Mode 🕵️",
        type: "stealth",
        image: "/project_zolviq.png",
        year: "2026",
        url: "#",
        status: "COMING SOON",
        isHidden: false,
        longDescription: "Something revolutionary is currently cooking in the lab. A platform that will redefine how resolution works. (Shhh... it's a secret)",
        techStack: ["Neural Networks", "TensorFlow", "Node.js", "Holographic UI"],
        challenge: "Developing a non-intrusive intelligence layer that can autonomously manage large-scale enterprise systems without human latency.",
        solution: "Implemented a custom transformer architecture optimized for real-time diagnostics and predictive healing protocols."
    },
    {
        title: "Zhatn",
        category: "Mobile Application",
        type: "web",
        image: "/screenshot_zhatn.png?v=2",
        year: "2025",
        url: "https://zhatn.pages.dev/",
        status: "LIVE SYSTEM"
    },
    {
        title: "IT Service Desk",
        category: "Internal Portal",
        type: "web",
        image: "/screenshot_itsm.png?v=2",
        year: "2025",
        url: "#",
        status: "RESTRICTED"
    },
    {
        title: "Rose Printers",
        category: "Branding & Design",
        type: "design",
        image: "/screenshot_rose.png?v=2",
        year: "2025",
        url: "https://roseprinters.pages.dev/",
        status: "PUBLISHED"
    },
    {
        title: "Dark Vibe",
        category: "Boutique Startup",
        type: "web",
        image: "/screenshot_darkvibe.png?v=2",
        year: "2025",
        url: "https://darkvibelk.pages.dev/",
        status: "ONLINE"
    },
    {
        title: "Portfolio V2",
        category: "Personal Brand",
        type: "web",
        image: "/screenshot_portfolio.png?v=2",
        year: "2025",
        url: "https://armohamedzuhail.com",
        status: "DEPLOYED"
    },
    // Networking Projects
    {
        title: "ISP Failover",
        category: "Network Engineering",
        type: "network",
        image: "/project_network_isp.png",
        year: "2024",
        url: "#",
        status: "ARCHIVED"
    },
    {
        title: "WAN Topology",
        category: "Network Architecture",
        type: "network",
        image: "/project_network_lan.png",
        year: "2023",
        url: "#",
        status: "ARCHIVED"
    }
];

const tabs = [
    { id: 'all', label: 'All Systems', icon: Layers },
    { id: 'web', label: 'Dev / Web', icon: Code },
    { id: 'network', label: 'Network', icon: Wifi },
    { id: 'design', label: 'Design', icon: Palette },
];

import ProjectModal from '@/components/ui/ProjectModal';

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const filteredProjects = projects.filter(p => {
        if (p.isHidden) return false;
        if (activeTab === 'all') return true;
        return p.type === activeTab || (activeTab === 'web' && p.type === 'stealth');
    });

    return (
        <main className="pt-32 pb-20 px-6 min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 border-b border-gray-800 pb-10">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-heading text-[12vw] md:text-[8vw] font-bold leading-[0.8] tracking-tighter cursor-none select-none"
                    >
                        THE<br />ARCHIVE.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-right mt-8 md:mt-0"
                    >
                        <div className="flex items-center justify-end gap-2 text-green-500 font-mono text-xs uppercase tracking-widest mb-4">
                            <Radio className="w-3 h-3 animate-pulse" />
                            <span>Systems Online</span>
                        </div>
                        <p className="text-gray-400 font-mono text-sm max-w-xs leading-relaxed mb-4">
                            A curated collection of digital experiences, network architectures, and brand identities engineered for impact.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/armohamedzuhail/details/projects/"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5"
                        >
                            View All on LinkedIn <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </motion.div>
                </div>

                {/* Filter Tabs - Minimal Pill Style */}
                <div className="sticky top-24 z-40 bg-black/80 backdrop-blur-xl py-4 mb-12 -mx-6 px-6 md:mx-0 md:px-0 border-b border-white/10 md:border-none">
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 font-mono text-xs uppercase tracking-wider whitespace-nowrap
                                        ${activeTab === tab.id
                                            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                                            : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-white'
                                        }
                                    `}
                                >
                                    <Icon className="w-3 h-3" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-24">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedProject(project)}
                                className="cursor-pointer group"
                            >
                                <CyberProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <ProjectModal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    project={selectedProject}
                />
            </div>
        </main>
    );
}
