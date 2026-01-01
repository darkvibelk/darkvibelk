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
        role: "Founder",
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
        role: "Co-Founder",
        image: "/team-shakee.jpg",
        status: "Visionary",
        isCutout: false,
        socials: {
            globe: "",
            linkedin: "https://www.linkedin.com/in/fmohamedakmal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: "",
            email: "",
            whatsapp: "",
            facebookPage: "",
            facebookProfile: "https://www.facebook.com/share/1AQEDjppx1/",
            instagram: "https://www.instagram.com/fmohamedakmal?igsh=Z3h1eXNiczZ2YnI4",
            twitter: "",
            youtube: ""
        }
    },
    {
        name: "Shakee Affa",
        role: "Co-Founder",
        image: "/team-akmal.jpg", // Assuming file name based on convention
        status: "Visionary",
        isCutout: false,
        socials: {
            globe: "",
            linkedin: "https://www.linkedin.com/in/mt-shakee-affa-54b455279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            github: "",
            email: "",
            whatsapp: "",
            facebookPage: "",
            facebookProfile: "https://www.facebook.com/share/17hp8QsKFC/?mibextid=wwXIfr",
            instagram: "https://www.instagram.com/mt.shakee?igsh=eGp3d3V0ZDIzOWlm&utm_source=qr",
            twitter: "",
            youtube: ""
        }
    }
];

export default function TeamSection() {
    return (
        <section className="py-32 relative overflow-hidden bg-black">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight">THE ELITE SQUAD</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A collective of masterminds, engineers, and creatives forging the future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative h-[500px] w-full bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-chrome/50 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">

                                {/* Image Area */}
                                <div className="absolute inset-0 h-[70%] w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                </div>

                                {/* Content Area */}
                                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                    <div className="flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-y-4">
                                        <h3 className="font-heading text-2xl font-bold text-white mb-2">{member.name}</h3>
                                        <div className="text-chrome font-mono text-sm tracking-wider uppercase mb-6 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                                            {member.role}
                                        </div>

                                        {/* Socials - Revealed on Hover */}
                                        <div className="flex gap-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                            {member.socials?.linkedin && (
                                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white text-gray-400 hover:text-black transition-all">
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                            {member.socials?.globe && (
                                                <a href={member.socials.globe} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white text-gray-400 hover:text-black transition-all">
                                                    <Globe className="w-5 h-5" />
                                                </a>
                                            )}
                                            {(member.socials as any)?.email && (
                                                <a href={(member.socials as any).email} className="p-2 bg-white/5 rounded-full hover:bg-white text-gray-400 hover:text-black transition-all">
                                                    <Mail className="w-5 h-5" />
                                                </a>
                                            )}
                                            {(member.socials as any)?.facebookProfile && (
                                                <a href={(member.socials as any).facebookProfile} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white text-gray-400 hover:text-black transition-all">
                                                    <Facebook className="w-5 h-5" />
                                                </a>
                                            )}
                                            {(member.socials as any)?.instagram && (
                                                <a href={(member.socials as any).instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white text-gray-400 hover:text-black transition-all">
                                                    <Instagram className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
