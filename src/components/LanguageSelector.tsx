"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "si", name: "Sinhala", flag: "🇱🇰" },
    { code: "ta", name: "Tamil", flag: "🇱🇰" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
];

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0]);

    return (
        <div className="relative z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs text-gray-300"
            >
                <Globe className="w-3 h-3" />
                <span className="uppercase">{selectedLang.code}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-32 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setSelectedLang(lang);
                                    setIsOpen(false);
                                    // In a real app, you would trigger i18n change here
                                    console.log(`Language changed to ${lang.name}`);
                                }}
                                className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-white/5 transition-colors ${selectedLang.code === lang.code ? "text-white bg-white/5 font-medium" : "text-gray-400"
                                    }`}
                            >
                                <span>{lang.name}</span>
                                <span>{lang.flag}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
