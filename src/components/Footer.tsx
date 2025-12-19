"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, Phone, Home, Layers, Briefcase, Mail, Info, MessageSquare } from 'lucide-react';

export default function Footer() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [hoveredNavIndex, setHoveredNavIndex] = useState<number | null>(null);

    const socials = [
        { icon: Facebook, href: "https://www.facebook.com/darkvibelk/", color: "hover:text-blue-500" },
        { icon: Instagram, href: "https://www.instagram.com/darkvibelk/", color: "hover:text-pink-500" },
        { icon: Twitter, href: "https://www.x.com/darkvibelk/", color: "hover:text-sky-500" },
        { icon: Phone, href: "tel:+94717221225", color: "hover:text-green-500" },
    ];

    return (
        <footer className="py-6 px-4 bg-black border-t border-gray-900">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-4 text-xs font-bold tracking-widest text-gray-500 uppercase">

                {/* Left: Copyright */}
                <div className="flex justify-center md:justify-start order-3 md:order-1">
                    &copy; 2025 DARK VIBE.
                </div>

                {/* Center: Icon Nav */}
                <div className="flex justify-center gap-2 order-1 md:order-2" onMouseLeave={() => setHoveredNavIndex(null)}>
                    {[
                        { icon: Home, href: "/", title: "The Empire" },
                        { icon: Layers, href: "/services", title: "Services" },
                        { icon: Briefcase, href: "/projects", title: "Projects" },
                        { icon: Info, href: "/about", title: "About" },
                        { icon: MessageSquare, href: "/feedback", title: "Feedback" },
                        { icon: Mail, href: "/contact", title: "Contact" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            title={item.title}
                            className={`relative px-3 py-2 rounded-full transition-colors z-10 ${hoveredNavIndex === index ? 'text-white' : 'text-gray-400'}`}
                            onMouseEnter={() => setHoveredNavIndex(index)}
                        >
                            {hoveredNavIndex === index && (
                                <motion.div
                                    layoutId="glass-pill-nav"
                                    className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <item.icon className="w-5 h-5 relative z-20" />
                        </a>
                    ))}
                </div>

                {/* Right: Socials (iOS Glass Switch Effect) */}
                <div className="flex justify-center md:justify-end order-2 md:order-3">
                    <div
                        className="flex bg-gray-900 rounded-full p-1.5 gap-2 relative"
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative px-3 py-2 rounded-full transition-colors z-10 ${hoveredIndex === index ? 'text-white' : 'text-gray-400'}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="glass-pill"
                                        className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <social.icon className="w-5 h-5 relative z-20" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
