"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Layers, Code, Wifi, Palette, ArrowUpRight } from 'lucide-react';
import CyberProjectCard from '@/components/CyberProjectCard';

import { projects } from '@/lib/cms';

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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 border-b border-white/10 pb-10 gap-8">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-heading text-[15vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter cursor-none select-none"
                    >
                        THE<br />ARCHIVE.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-left md:text-right"
                    >
                        <div className="flex items-center md:justify-end gap-2 text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4">
                            <Radio className="w-3 h-3 animate-pulse" />
                            <span>Systems Online</span>
                        </div>
                        <p className="text-gray-400 font-mono text-xs md:text-sm max-w-xs leading-relaxed mb-6">
                            A curated collection of digital experiences, network architectures, and brand identities engineered for impact.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/armohamedzuhail/details/projects/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5"
                        >
                            View All on LinkedIn <ArrowUpRight className="w-3 h-3" />
                        </a>
                    </motion.div>
                </div>

                {/* Filter Tabs - Minimal Pill Style */}
                <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl py-6 mb-12 -mx-6 px-6 md:mx-0 md:px-0 border-b border-white/5 md:border-none">
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-mono text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap
                                        ${activeTab === tab.id
                                            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                        }
                                    `}
                                >
                                    <Icon className="w-3 h-3 md:w-4 md:h-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-24">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.article
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
                            </motion.article>
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
