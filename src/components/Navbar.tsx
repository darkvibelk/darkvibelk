"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useSeasonalLogo } from '@/hooks/useSeasonalLogo';

const navLinks = [
    { name: 'The Empire', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const logoSrc = useSeasonalLogo();

    return (
        <header className="fixed top-0 left-0 w-full !z-[9999] bg-[#050505]/80 backdrop-blur-md border-b border-white/5 text-white transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

                <Link href="/" className="flex items-center gap-4 group cursor-pointer relative z-10">
                    <div className="relative w-12 h-12">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 pointer-events-none"></div>
                        <Image
                            src={logoSrc}
                            alt="Dark Vibe"
                            width={48}
                            height={48}
                            className="relative object-cover rounded-2xl border border-gray-700 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-widest hidden md:block group-hover:text-gray-300 transition-colors">
                        DARK VIBE <span className="text-xs text-chrome ml-2 px-2 py-1 bg-white/10 rounded">V2.0</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-2 items-center" onMouseLeave={() => setHoveredIndex(null)}>
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.path;
                        const isHovered = hoveredIndex === index;
                        // The pill should be visible if this is the hovered item, OR if no item is hovered and this is the active item.
                        const showPill = hoveredIndex !== null ? isHovered : isActive;

                        return (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`relative px-4 py-2 text-sm font-bold tracking-widest uppercase transition-colors z-10 group [perspective:1000px] ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                <span className="block relative z-20 transition-transform duration-700 ease-in-out group-hover:[transform:rotateX(360deg)] [transform-style:preserve-3d]">
                                    {link.name}
                                </span>
                                {showPill && (
                                    <motion.div
                                        layoutId="glass-pill-navbar"
                                        className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] border border-white/10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white relative z-[10000] bg-black/50 p-2 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-gray-800 p-8 flex flex-col gap-6 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-heading font-bold text-gray-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </header>
    );
}
