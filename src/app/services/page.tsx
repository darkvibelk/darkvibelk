"use client";

import { motion } from 'framer-motion';
import { Network, ShieldCheck, Layout, PenTool, Database, Cloud, Lock, Cpu } from 'lucide-react';

const allServices = [
    {
        title: "Empire Networking",
        description: "Architecting the invisible backbone of your enterprise with military-grade stability.",
        icon: Network,
        details: ["Infrastructure Design", "Fiber Optic Solutions", "Enterprise WiFi", "Network Security"]
    },
    {
        title: "Cyber Defense & IT",
        description: "Proactive shielding and maintenance for your digital assets. 24/7 Surveillance.",
        icon: ShieldCheck,
        details: ["System Maintenance", "Data Recovery", "Hardware Repair", "Remote Support"]
    },
    {
        title: "Web Architecture",
        description: "Building immersive digital headquarters. Not just websites, but experiences.",
        icon: Layout,
        details: ["Next.js Applications", "3D Web Experiences", "E-commerce Empires", "CMS Solutions"]
    },
    {
        title: "Brand Sovereignty",
        description: "Visual identity that demands authority. Logos, motion graphics, and UI/UX.",
        icon: PenTool,
        details: ["Logo Design", "Brand Guidelines", "Social Media Kits", "Motion Graphics"]
    },
    {
        title: "Cloud Command",
        description: "Scalable cloud solutions for the modern empire.",
        icon: Cloud,
        details: ["AWS/Azure Migration", "Server Management", "Cloud Storage", "DevOps"]
    },
    {
        title: "Data Vaults",
        description: "Secure database architecture and management.",
        icon: Database,
        details: ["SQL/NoSQL", "Data Warehousing", "Optimization", "Backup Systems"]
    }
];

export default function ServicesPage() {
    return (
        <main className="pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center"
                >
                    <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 text-chrome">
                        ARSENAL
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A comprehensive suite of digital and technical weaponry to build and defend your empire.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card-bg/50 border border-gray-800 p-8 rounded-2xl hover:bg-card-bg hover:border-gray-600 transition-all group"
                        >
                            <div className="mb-6 p-4 bg-black rounded-xl w-fit border border-gray-800 group-hover:border-gray-500 transition-colors">
                                <service.icon className="w-8 h-8 text-gray-300" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.details.map((detail, i) => (
                                    <li key={i} className="flex items-center text-xs text-gray-500 font-mono">
                                        <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-2 group-hover:bg-white transition-colors"></span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
