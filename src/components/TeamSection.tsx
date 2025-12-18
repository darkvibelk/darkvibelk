"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter, Github, Globe, Mail, MessageCircle, Youtube, Facebook, Instagram, User } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const teamMembers = [
    {
        name: "Mohamed Zuhail",
        role: "Founder & CEO",
        image: "/team-zuhail.jpg",
        status: "Visionary",
        isCutout: false,
        socials: {
            globe: "https://armohamedzuhail.com/",
            linkedin: "https://www.linkedin.com/in/armohamedzuhail/",
            github: "https://github.com/armohamedzuhail",
            email: "mailto:armzuhail@outlook.com",
            whatsapp: "https://wa.me/94775756000",
            facebookPage: "https://www.facebook.com/armohamedzuhailpage",
            facebookProfile: "https://www.facebook.com/armohamedzuhail",
            instagram: "https://www.instagram.com/armohamedzuhail/",
            twitter: "https://twitter.com/armohamedzuhail",
            youtube: "https://www.youtube.com/@armohamedzuhail"
        }
    },
    {
        name: "Mohamed Akmal",
        role: "Team Member", // Position pending
        image: "/team-ref-1.png", // Image pending
        status: "Loading...",
        isCutout: true,
        socials: {}
    },
    {
        name: "Shakee Affa",
        role: "Team Member", // Position pending
        image: "/team-ref-1.png", // Image pending
        status: "Loading...",
        isCutout: true,
        socials: {}
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
                    className="mb-40 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">THE ELITE SQUAD</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collective of masterminds, engineers, and creatives forging the future.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-16 lg:gap-24 relative z-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative flex flex-col items-center">
                            {/* Floating Name Tag & Socials (3D Effect) */}
                            <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0 absolute -top-28 z-20 w-64 pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-[#0a0a0a]/90 backdrop-blur-xl border border-gray-800 p-4 rounded-2xl text-center shadow-2xl ring-1 ring-white/10">
                                    <div className="text-white font-bold text-lg leading-tight mb-1">{member.name}</div>
                                    <div className="text-sm text-gray-400 mb-3 font-medium">{member.role}</div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gray-800 mb-3"></div>

                                    {/* Social Icons */}
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {member.socials?.globe && (
                                            <a href={member.socials.globe} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <Globe className="w-4 h-4" />
                                            </a>
                                        )}
                                        {member.socials?.linkedin && (
                                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {member.socials?.github && (
                                            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(member.socials as any)?.email && (
                                            <a href={(member.socials as any).email} className="text-gray-500 hover:text-white transition-colors">
                                                <Mail className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(member.socials as any)?.whatsapp && (
                                            <a href={(member.socials as any).whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="WhatsApp">
                                                <WhatsAppIcon className="w-4 h-4" />
                                            </a>
                                        )}
                                        {((member.socials as any)?.facebookPage || (member.socials as any)?.facebookProfile) && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const page = (member.socials as any)?.facebookPage;
                                                    const profile = (member.socials as any)?.facebookProfile;
                                                    if (page) window.open(page, '_blank');
                                                    if (profile) window.open(profile, '_blank');
                                                }}
                                                className="text-gray-500 hover:text-white transition-colors cursor-pointer"
                                                title="Facebook"
                                            >
                                                <Facebook className="w-4 h-4" />
                                            </button>
                                        )}
                                        {(member.socials as any)?.instagram && (
                                            <a href={(member.socials as any).instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <Instagram className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(member.socials as any)?.twitter && (
                                            <a href={(member.socials as any).twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                        )}
                                        {(member.socials as any)?.youtube && (
                                            <a href={(member.socials as any).youtube} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                                <Youtube className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Image Container: Conditional Logic for Cutouts vs 1x1 Photos */}
                            <div className={`relative z-10 transition-transform duration-500 group-hover:-translate-y-2 ${member.isCutout ? 'h-64 w-full flex justify-center items-end' : 'h-48 w-48 mb-2 flex items-center justify-center'}`}>
                                <div className={`relative w-full h-full transition-all duration-500 ease-out ${member.isCutout ? 'grayscale group-hover:grayscale-0' : 'rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-chrome shadow-2xl scale-[0.85] group-hover:scale-100 ring-4 ring-black/50'}`}>
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
        </section >
    );
}
