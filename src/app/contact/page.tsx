"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

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
                    subject: `New Dark Vibe Inquiry: ${formData.service}`,
                    name: formData.name,
                    email: formData.email,
                    service: formData.service,
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
                        service_name: formData.service,
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

    return (
        <main className="pt-32 pb-20 px-6 min-h-screen flex items-center">
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
                        <div className="p-4 border border-gray-800 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                            <label className="block text-xs text-gray-600 mb-1">EMAIL FREQUENCY</label>
                            hello@darkvibelk.com
                        </div>
                        <div className="p-4 border border-gray-800 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                            <label className="block text-xs text-gray-600 mb-1">HQ COORDINATES</label>
                            Colombo, Sri Lanka
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
                            <label className="text-xs uppercase tracking-widest text-gray-500">System / Inquiry</label>
                            <select
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-black/50 border-b border-gray-700 p-3 focus:outline-none focus:border-white transition-colors text-white appearance-none cursor-pointer"
                            >
                                <option value="" className="bg-black text-gray-500">Select Protocol...</option>
                                <option value="networking" className="bg-black">Empire Networking</option>
                                <option value="cyber-defense" className="bg-black">Cyber Defense & IT</option>
                                <option value="web-architecture" className="bg-black">Web Architecture</option>
                                <option value="brand-sovereignty" className="bg-black">Brand Sovereignty (Design)</option>
                                <option value="cloud-command" className="bg-black">Cloud Command</option>
                                <option value="data-vaults" className="bg-black">Data Vaults</option>
                                <option value="other" className="bg-black">Other Inquiry</option>
                            </select>
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
        </main>
    );
}
