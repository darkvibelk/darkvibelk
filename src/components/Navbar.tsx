"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'The Empire', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white">
            <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-900 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <img
                            src="/logo.jpg"
                            alt="Dark Vibe"
                            className="relative h-12 w-12 object-cover rounded-2xl border border-gray-700 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-widest hidden md:block group-hover:text-gray-300 transition-colors">
                        DARK VIBE <span className="text-xs text-chrome ml-2 px-2 py-1 bg-white/10 rounded">V2.0</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`relative text-sm font-bold tracking-widest hover:text-gray-300 transition-colors uppercase ${pathname === link.path ? 'text-gray-300' : 'text-gray-500'}`}
                        >
                            {link.name}
                            {pathname === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 top-full mt-1 w-full h-[1px] bg-white"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
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
