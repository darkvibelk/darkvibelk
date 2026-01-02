"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    category: string;
    image: string;
    description?: string;
    longDescription?: string;
    techStack?: string[];
    challenge?: string;
    solution?: string;
    result?: string;
    type?: string;
}

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
                        >
                            {/* Image Header */}
                            <div className="relative h-64 md:h-80 w-full shrink-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 80vw"
                                    className={`object-cover ${project.type === 'stealth' ? 'blur-2xl' : ''}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-90" />

                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 bg-black/50 border border-white/10 rounded-full hover:bg-white/20 transition-colors z-20 backdrop-blur-md"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>

                                <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col items-start gap-3">
                                    <span className="text-blue-400 font-mono text-[10px] md:text-xs tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                                        {project.category}
                                    </span>
                                    <h2 className={`text-2xl md:text-5xl font-heading font-bold text-white leading-tight ${project.type === 'stealth' ? 'blur-md' : ''}`}>{project.title}</h2>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar flex-1 bg-[#0a0a0a]">
                                <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-10">
                                    {/* Main Content */}
                                    <div className="md:col-span-2 space-y-6 md:space-y-8">
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-white mb-3 flex items-center gap-2">
                                                <span className="w-1 h-6 bg-blue-500 rounded-full" /> The Mission
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                                                {project.longDescription || project.description || "A cutting-edge digital solution engineered for maximum impact."}
                                            </p>
                                        </div>

                                        {(project.challenge || project.solution) && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                                <div className="bg-white/5 p-5 md:p-6 rounded-xl border border-white/5">
                                                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Challenge</h4>
                                                    <p className="text-gray-300 text-sm">{project.challenge || "Overcoming complex technical barriers to deliver seamless performance."}</p>
                                                </div>
                                                <div className="bg-white/5 p-5 md:p-6 rounded-xl border border-white/5">
                                                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Solution</h4>
                                                    <p className="text-gray-300 text-sm">{project.solution || "Custom-engineered architecture utilizing next-gen frameworks."}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Sidebar */}
                                    <div className="space-y-6 md:space-y-8 pt-4 md:pt-0 border-t border-white/10 md:border-none">
                                        <div>
                                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack ? (
                                                    project.techStack.map((tech) => (
                                                        <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] md:text-xs text-gray-300 hover:border-white/30 transition-colors cursor-default">
                                                            {tech}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <>
                                                        <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] md:text-xs text-gray-300">Next.js</span>
                                                        <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] md:text-xs text-gray-300">Tailwind</span>
                                                        <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] md:text-xs text-gray-300">TypeScript</span>
                                                        <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] md:text-xs text-gray-300">Motion</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <button className="w-full py-3 md:py-4 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 group text-sm md:text-base">
                                            Live Demo <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
