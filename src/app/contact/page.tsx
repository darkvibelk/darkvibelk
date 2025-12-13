"use client";

import { motion } from 'framer-motion';

export default function ContactPage() {
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
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">First Name</label>
                                <input type="text" className="w-full bg-black/50 border-b border-gray-700 p-3 focus:outline-none focus:border-white transition-colors text-white" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Last Name</label>
                                <input type="text" className="w-full bg-black/50 border-b border-gray-700 p-3 focus:outline-none focus:border-white transition-colors text-white" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">System / Inquiry</label>
                            <input type="text" className="w-full bg-black/50 border-b border-gray-700 p-3 focus:outline-none focus:border-white transition-colors text-white" placeholder="e.g. Web Development, Networking..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Transmission</label>
                            <textarea rows={4} className="w-full bg-black/50 border-b border-gray-700 p-3 focus:outline-none focus:border-white transition-colors text-white"></textarea>
                        </div>

                        <button className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-transform active:scale-95 uppercase tracking-widest text-sm">
                            Send Transmission
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
