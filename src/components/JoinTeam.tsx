"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Upload, Send, CheckCircle, AlertCircle, X, FileText } from 'lucide-react';
import CyberSelect from './CyberSelect';

export default function JoinTeam() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [fileName, setFileName] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRoleChange = (value: string) => {
        setFormData({ ...formData, role: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName(null);
        }
    };

    const convertFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Google Apps Script Web App URL
        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw7OA_yNqeIo5tq_Q7o0Bx6QpjEoOj77LoOJdA_yWN9XYL8MkEK7UoWY0_np7rSU1_r/exec";

        setStatus('submitting');

        try {
            let fileData = null;
            if (fileInputRef.current?.files?.[0]) {
                fileData = await convertFileToBase64(fileInputRef.current.files[0]);
            }

            // 1. Send Data to Google Sheets (Backend)
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    role: formData.role,
                    fileName: fileName,
                    fileData: fileData
                })
            });

            const result = await response.json();

            if (result.status === 'success') {
                // 2. Send Auto-Reply (EmailJS)
                // Using the same credentials as Contact Page
                emailjs.send(
                    'service_2wrhkym',
                    'template_rpx136v',
                    {
                        to_name: formData.name,
                        to_email: formData.email,
                        service_name: `Job Application (${formData.role})`,
                        message: "Your application has been received. Our command center is reviewing your dossier."
                    },
                    'gHLtmcC-PAgztaLd0'
                ).catch((err) => console.error("Auto-reply failed:", err));

                setStatus('success');
                setFormData({ name: '', email: '', role: '' });
                setFileName(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
            } else {
                console.error("Google Script Error:", JSON.stringify(result));
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus('error');
        }
    };

    const roleOptions = [
        { value: "Developer", label: "Developer" },
        { value: "Designer", label: "Designer" },
        { value: "Marketing", label: "Marketing" },
        { value: "Project Manager", label: "Project Manager" },
        { value: "Content Creator", label: "Content Creator" },
        { value: "Other", label: "Other" }
    ];

    return (
        <section className="py-24 px-6 relative bg-black overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full filter blur-[128px] opacity-40 animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full filter blur-[128px] opacity-30 pointer-events-none" />

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white tracking-tighter">
                            JOIN THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">LEGION.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                            We are the restless, the obsessed, and the visionary. If you have the skills to build empires, we have the throne waiting for you.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Remote-First Culture",
                                "High-Impact Projects",
                                "Competitive Compensation"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-12 h-[1px] bg-gray-800 group-hover:bg-chrome transition-colors duration-500"></div>
                                    <span className="text-gray-500 group-hover:text-white transition-colors uppercase tracking-wider text-sm font-mono">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Cyber Form Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-3xl transform rotate-3 scale-[1.02] opacity-50 blur-sm"></div>

                    <div className="relative bg-[#050505] border border-gray-800 hover:border-gray-700 p-8 md:p-10 rounded-3xl shadow-2xl transition-colors duration-500">
                        {status === 'success' ? (
                            <div className="h-[450px] flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Transmission Received</h3>
                                <p className="text-gray-400">Our team will inspect your dossier shortly.</p>
                                <button onClick={() => setStatus('idle')} className="mt-8 text-sm text-gray-500 hover:text-white underline">Send another application</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-6">
                                    <div className="group">
                                        <label className="text-xs font-mono text-gray-500 uppercase mb-2 block group-focus-within:text-chrome transition-colors">Operative Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border-b border-gray-700 px-0 py-3 text-white focus:outline-none focus:border-chrome focus:bg-white/10 transition-all placeholder-transparent font-heading text-xl"
                                            placeholder="FULL NAME"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="text-xs font-mono text-gray-500 uppercase mb-2 block group-focus-within:text-chrome transition-colors">EMAIL</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-white/5 border-b border-gray-700 px-0 py-3 text-white focus:outline-none focus:border-chrome focus:bg-white/10 transition-all placeholder-transparent font-heading text-xl"
                                            placeholder="EMAIL ADDRESS"
                                        />
                                    </div>

                                    <CyberSelect
                                        label="Specialization"
                                        placeholder="SELECT ROLE"
                                        options={roleOptions}
                                        value={formData.role}
                                        onChange={handleRoleChange}
                                        name="role"
                                        required
                                    />

                                    {/* CV Upload */}
                                    <div className="pt-4">
                                        <div className={`relative border border-dashed rounded-xl p-6 text-center transition-all group cursor-pointer ${fileName ? 'border-chrome bg-chrome/10' : 'border-gray-700 hover:border-chrome/50 bg-black/20'}`}>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                name="attachment"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            />
                                            {fileName ? (
                                                <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                                                    <FileText className="w-8 h-8 text-chrome mx-auto mb-2" />
                                                    <p className="text-sm text-white font-bold truncate max-w-[200px]">{fileName}</p>
                                                    <p className="text-xs text-chrome/70 mt-1">Ready to transmit</p>
                                                </div>
                                            ) : (
                                                <>
                                                    <Upload className="w-8 h-8 text-gray-600 group-hover:text-chrome mx-auto mb-3 transition-colors" />
                                                    <p className="text-sm text-gray-300 font-medium">Upload Dossier (CV/Resume)</p>
                                                    <p className="text-xs text-gray-600 mt-1">PDF, DOC up to 5MB</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-white text-black font-bold py-5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <span className="animate-pulse">TRANSMITTING...</span>
                                    ) : (
                                        <>
                                            INITIATE APPLICATION <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <div className="text-red-500 text-sm text-center flex items-center justify-center gap-2">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>Connection Failed. Check network/extensions.</span>
                                    </div>
                                )}
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
