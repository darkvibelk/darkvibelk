"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ArrowUpRight } from 'lucide-react';
import CyberSelect from '@/components/CyberSelect';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceChange = (value: string) => {
        setFormData({ ...formData, service: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Format the service name for the email (Make it look professional)
        const serviceLabels: { [key: string]: string } = {
            "networking": "Empire Networking",
            "cyber-defense": "Cyber Defense & IT",
            "web-architecture": "Web Architecture",
            "brand-sovereignty": "Brand Sovereignty",
            "cloud-command": "Cloud Command",
            "data-vaults": "Data Vaults",
            "zhatn": "Zhatn App Suggestion",
            "other": "General Inquiry"
        };
        const formattedService = serviceLabels[formData.service] || formData.service;

        try {
            // 1. Send Notification to Admin (Web3Forms)
            const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "5a2ae542-6fb9-4e35-8b49-cd4857cecc8c",
                    subject: `New Dark Vibe Inquiry: ${formattedService}`,
                    name: formData.name,
                    email: formData.email,
                    service: formattedService,
                    message: formData.message,
                }),
            });

            const web3Result = await web3FormsResponse.json();

            if (web3Result.success) {
                // 2. Send Auto-Reply to User (EmailJS) - Non-blocking
                emailjs.send(
                    'service_2wrhkym',
                    'template_rpx136v',
                    {
                        to_name: formData.name,
                        to_email: formData.email,
                        service_name: formattedService, // Sending the clean name
                        message: formData.message
                    },
                    'gHLtmcC-PAgztaLd0'
                ).then(
                    (result) => {
                        console.log('Auto-reply sent:', result.text);
                    },
                    (error) => {
                        console.error('Auto-reply failed:', error.text);
                    }
                );

                setStatus('success');
                setFormData({ name: '', email: '', service: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error('Web3Forms error:', web3Result);
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const serviceOptions = [
        { value: "networking", label: "Empire Networking" },
        { value: "cyber-defense", label: "Cyber Defense & IT" },
        { value: "web-architecture", label: "Web Architecture" },
        { value: "brand-sovereignty", label: "Brand Sovereignty (Design)" },
        { value: "cloud-command", label: "Cloud Command" },
        { value: "data-vaults", label: "Data Vaults" },
        { value: "zhatn", label: "Zhatn App Suggestion" },
        { value: "other", label: "Other Inquiry" }
    ];

    return (
        <main className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="font-heading text-6xl font-bold mb-8">INITIATE<br />PROTOCOL.</h1>
                    <p className="text-gray-400 mb-12">
                        Ready to build your empire? Secure lines are open.
                        Fill out the form to transmit your requirements to our command center.
                    </p>

                    <div className="space-y-6 text-sm font-mono text-gray-300">
                        <div className="grid grid-cols-1 gap-4">
                            <a href="mailto:darkvibelk@gmail.com" className="block p-4 border border-gray-800 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                                <label className="block text-xs text-gray-600 mb-1 group-hover:text-white transition-colors">DIRECT UPLINK</label>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">EMAIL</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                                </div>
                            </a>
                            <a href="https://wa.me/94717221225" target="_blank" className="block p-4 border border-gray-800 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                                <label className="block text-xs text-gray-600 mb-1 group-hover:text-white transition-colors">INSTANT RELAY</label>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">WHATSAPP</span>
                                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                                </div>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card-bg p-8 rounded-3xl border border-gray-800"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border-b border-gray-700 p-3 focus:outline-none focus:border-white transition-colors text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border-b border-gray-700 p-3 focus:outline-none focus:border-white transition-colors text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <CyberSelect
                                label="System / Inquiry"
                                placeholder="Select Protocol..."
                                options={serviceOptions}
                                value={formData.service}
                                onChange={handleServiceChange}
                                name="service"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Transmission</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-black/50 border-b border-gray-700 p-3 focus:outline-none focus:border-white transition-colors text-white"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className={`w-full font-bold py-4 rounded-xl transition-all active:scale-95 uppercase tracking-widest text-sm
                                ${status === 'success' ? 'bg-green-500 text-black' : 'bg-white text-black hover:bg-gray-200'}
                                ${status === 'sending' ? 'opacity-70 cursor-wait' : ''}
                            `}
                        >
                            {status === 'idle' && "SEND TRANSMISSION"}
                            {status === 'sending' && "TRANSMITTING..."}
                            {status === 'success' && "TRANSMISSION SENT"}
                        </button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center text-green-500 text-sm font-mono mt-4"
                            >
                                Protocol Initiated. Stand by for contact.
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>

            {/* COMMAND STAFF UPLINK */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto mt-12 border-t border-gray-900 pt-20"
            >
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-1 w-12 bg-chrome shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
                    <h2 className="text-3xl font-heading font-bold text-white tracking-tight">COMMAND STAFF UPLINK</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Zuhail */}
                    <div className="group relative bg-[#050505] border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-chrome/50 transition-colors duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
                                    <img src="/team-zuhail.jpg" alt="Zuhail" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Zuhail</h3>
                                <p className="text-[10px] font-mono text-chrome tracking-widest uppercase">FOUNDER</p>
                            </div>
                        </div>
                        <div className="space-y-3 font-mono text-sm text-gray-400">
                            <a href="tel:+94775756000" className="flex items-center gap-3 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-chrome/10 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                +94 77 575 6000
                            </a>
                            <a href="mailto:zuhail.darkvibe@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-chrome/10 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                zuhail.darkvibe@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Akmal */}
                    <div className="group relative bg-[#050505] border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-chrome/50 transition-colors duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
                                    <img src="/team-shakee.jpg" alt="Akmal" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Akmal</h3>
                                <p className="text-[10px] font-mono text-chrome tracking-widest uppercase">CO-FOUNDER</p>
                            </div>
                        </div>
                        <div className="space-y-3 font-mono text-sm text-gray-400">
                            <a href="tel:+94711822585" className="flex items-center gap-3 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-chrome/10 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                +94 71 182 2585
                            </a>
                            <a href="mailto:akmal.darkvibe@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-chrome/10 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                akmal.darkvibe@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Shakee */}
                    <div className="group relative bg-[#050505] border border-gray-800 rounded-2xl p-6 overflow-hidden hover:border-chrome/50 transition-colors duration-500">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
                                    <img src="/team-akmal.jpg" alt="Shakee" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Shakee</h3>
                                <p className="text-[10px] font-mono text-chrome tracking-widest uppercase">CO-FOUNDER</p>
                            </div>
                        </div>
                        <div className="space-y-3 font-mono text-sm text-gray-400">
                            <a href="tel:+94770041291" className="flex items-center gap-3 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-chrome/10 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                +94 77 004 1291
                            </a>
                            <a href="mailto:shakee.darkvibe@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-chrome/10 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                shakee.darkvibe@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
