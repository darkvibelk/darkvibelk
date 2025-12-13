"use client";

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center">
            <div className="max-w-5xl mx-auto relative">

                {/* Background Decor */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative z-10"
                >
                    <h4 className="text-sm font-bold tracking-[0.5em] text-gray-500 mb-8 uppercase">The Architects</h4>

                    <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-12">
                        WE ARE NOT JUST BUILDERS.<br />
                        WE ARE <span className="text-chrome">EMPIRE MAKERS.</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-400 leading-relaxed text-lg">
                        <p>
                            Dark Vibe was born from the shadows of necessity. In a world flooded with mediocrity, we chose to forge a different path—one of precision, durability, and undeniable aesthetic power.
                        </p>
                        <p>
                            Our mission is to arm businesses with the digital and physical infrastructure they need to dominate their sectors. From the code that runs your servers to the brand that defines your legacy.
                        </p>
                    </div>

                    <div className="mt-24 border-t border-gray-900 pt-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Founded", value: "2020" },
                                { label: "Clients", value: "50+" },
                                { label: "Projects", value: "120+" },
                                { label: "Global Reach", value: "5 Countries" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl font-heading font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-xs font-mono text-gray-600 uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
