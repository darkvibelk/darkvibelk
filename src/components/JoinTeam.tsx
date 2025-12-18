"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function JoinTeam() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    // Removed unused file handler since we can't attach files to mailto

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('user_name') as string;
        const email = formData.get('user_email') as string;
        const role = formData.get('role') as string;

        // Construct standard mailto link
        const recipient = "darkvibelk@gmail.com";
        const subject = `Job Application - ${role || 'General'}`;
        const body = `Name: ${name}\nEmail: ${email}\nRole: ${role}\n\n[IMPORTANT: Please attach your CV/Resume to this email manually.]\n\n---\nApplied via Dark Vibe Empire.`;

        // Open standard mail client
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setStatus('success');
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-chrome/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-heading font-bold mb-6">JOIN THE LEGION</h2>
                        <p className="text-gray-400 mb-8">
                            We are always looking for the restless, the obsessed, and the visionary. If you have the skills to build empires, we have the throne.
                        </p>

                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-chrome"></div>
                                Remote-First Culture
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-chrome"></div>
                                High-Impact Projects
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-chrome"></div>
                                Competitive Compensation
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="user_name"
                                placeholder="FULL NAME"
                                required
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-chrome transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="user_email"
                                placeholder="EMAIL ADDRESS"
                                required
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-chrome transition-colors"
                            />
                        </div>
                        <div>
                            <select
                                name="role"
                                required
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-chrome transition-colors appearance-none"
                            >
                                <option value="">SELECT ROLE</option>
                                <option value="Developer">Developer</option>
                                <option value="Designer">Designer</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Content Creator">Content Creator</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Visual File Hint Only */}
                        <div className="relative p-4 border border-gray-700 border-dashed rounded-lg bg-black/30 text-center">
                            <Upload className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-400">
                                Please attach your CV/Resume directly in the email app that opens.
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'success' ? (
                                <>
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span>OPENING EMAIL...</span>
                                </>
                            ) : (
                                <>
                                    <span>APPLY NOW</span>
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>

                        {status === 'error' && (
                            <div className="text-red-500 text-xs flex items-center gap-2 mt-2">
                                <AlertCircle className="w-4 h-4" />
                                Transmission failed. Please try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
