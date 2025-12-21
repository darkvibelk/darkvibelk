"use client";

import { motion } from 'framer-motion';
import { Ruler, Hammer } from 'lucide-react';
import RevealOnScroll from './ui/RevealOnScroll';

const expansionModules = [
    {
        title: "Architectural Planning",
        description: "Structural design and blueprint development for physical spaces.",
        icon: Ruler
    },
    {
        title: "Civil Engineering",
        description: "Infrastructure development and construction management.",
        icon: Hammer
    }
];

export default function Roadmap() {
    return (
        <section className="py-24 px-4 bg-black/50 border-t border-gray-900">
            <div className="max-w-7xl mx-auto">
                <RevealOnScroll>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <h2 className="font-heading text-4xl font-bold mb-2 text-gray-500">Future Horizons</h2>
                            <p className="text-gray-600">Expanding the platform&apos;s capabilities.</p>
                        </div>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {expansionModules.map((item, index) => (
                        <RevealOnScroll key={index} delay={index * 0.1}>
                            <div className="relative p-6 border border-gray-800 border-dashed rounded-xl opacity-60 hover:opacity-100 transition-opacity">
                                <div className="absolute top-4 right-4 px-3 py-1 bg-gray-900 text-xs font-mono text-gray-400 rounded-full border border-gray-800">
                                    IN DEVELOPMENT
                                </div>
                                <div className="mb-4 text-gray-600">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="font-heading text-xl text-gray-300 font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
