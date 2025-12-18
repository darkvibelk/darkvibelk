"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Github, Globe } from 'lucide-react';

const teamMembers = [
    {
        name: "Mohamed Zuhail",
        role: "Founder & CEO",
        image: "/team-zuhail.jpg",
        status: "Visionary",
        isCutout: false,
        socials: {
            linkedin: "https://linkedin.com/in/zuhail",
            twitter: "https://x.com/zuhail",
            github: "https://github.com/zuhail"
        }
    },
    {
        name: "Sarah Jenkins",
        role: "Head of Operations",
        image: "/team-ref-1.png",
        status: "Strategist",
        isCutout: true,
        socials: {
            linkedin: "#"
        }
    },
    {
        name: "David Chen",
        role: "Tech Lead",
        image: "/team-ref-1.png",
        status: "Architect",
        isCutout: true,
        socials: {
            github: "#",
            twitter: "#"
        }
    },
    {
        name: "Elena Rodriguez",
        role: "Creative Director",
        image: "/team-ref-1.png",
        status: "Artist",
        isCutout: true,
        socials: {
            linkedin: "#",
            globe: "#"
        }
    }
];

export default function TeamSection() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">THE ELITE SQUAD</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collective of masterminds, engineers, and creatives forging the future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative flex flex-col items-center">
                            {/* Floating Name Tag & Socials (3D Effect) */}
                            <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0 absolute -top-20 z-20 w-48 pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-black/80 backdrop-blur-md border border-gray-700 px-4 py-3 rounded-xl text-center shadow-xl">
                                    <div className="text-white font-bold text-sm mb-0.5">{member.name}</div>
                                    <div className="text-xs text-chrome mb-3">{member.role}</div>

                                    {/* Social Icons */}
                                    <div className="flex justify-center gap-3 border-t border-gray-700 pt-2">
                                        {member.socials?.linkedin && (
                                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {member.socials?.twitter && (
                                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                        )}
                                        {member.socials?.github && (
                                            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(member.socials as any)?.globe && (
                                            <a href={(member.socials as any).globe} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                                                <Globe className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Image Container: Conditional Logic for Cutouts vs 1x1 Photos */}
                            <div className={`relative z-10 transition-transform duration-500 group-hover:-translate-y-2 ${member.isCutout ? 'h-64 w-full flex justify-center items-end' : 'h-48 w-48 mb-8 flex items-center justify-center'}`}>
                                <div className={`relative w-full h-full transition-all duration-500 ease-out ${member.isCutout ? 'grayscale group-hover:grayscale-0' : 'rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-chrome shadow-2xl scale-[0.85] group-hover:scale-100'}`}>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className={member.isCutout ? "object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" : "object-cover grayscale group-hover:grayscale-0"}
                                    />
                                    {/* Additional Glow for non-cutouts */}
                                    {!member.isCutout && (
                                        <div className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-chrome/50 transition-all duration-500"></div>
                                    )}
                                </div>
                            </div>

                            {/* The Pedestal (CSS 3D Cylinder Effect) */}
                            <div className="relative w-40 h-10 mt-[-10px]">
                                {/* Top Surface */}
                                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-gray-700 to-gray-800 rounded-[50%] z-0 border-t border-gray-600 group-hover:from-chrome group-hover:to-gray-800 transition-colors duration-500"></div>
                                {/* Side Surface (Pseudo cylinder) */}
                                <div className="absolute inset-x-0 top-5 h-8 bg-gradient-to-b from-gray-900 to-black w-[98%] mx-auto rounded-b-[50%] z-[-1] shadow-[0_20px_40px_rgba(0,0,0,0.8)]"></div>
                                {/* Base Logo/Icon */}
                                <div className="absolute inset-0 flex items-center justify-center pt-2 z-10 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="w-4 h-4 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-chrome animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile only text (since hover is tricky) */}
                            <div className="mt-6 text-center lg:hidden">
                                <h3 className="text-white font-bold">{member.name}</h3>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
