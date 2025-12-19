"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface Option {
    value: string;
    label: string;
}

interface CyberSelectProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    name?: string;
    required?: boolean;
}

export default function CyberSelect({
    options,
    value,
    onChange,
    placeholder = "Select...",
    label,
    name,
    required
}: CyberSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className="relative group mb-6" ref={containerRef}>
            {label && (
                <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-white transition-colors">
                    {label}
                </label>
            )}

            {/* Hidden Input for Form Submission compliance if needed */}
            <select
                name={name}
                value={value}
                required={required}
                className="sr-only"
                onChange={() => { }}
                tabIndex={-1}
            >
                <option value="">{placeholder}</option>
                {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-left bg-black/50 border-b border-gray-700 p-3 flex items-center justify-between focus:outline-none focus:border-white transition-all duration-300 ${isOpen ? 'border-white bg-white/5' : ''}`}
            >
                <span className={`text-lg font-heading ${value ? 'text-white' : 'text-gray-500'}`}>
                    {selectedLabel}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-[#0a0a0a] border border-gray-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                        <div className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                            {options.map((option) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className="w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between group"
                                >
                                    <span className="font-mono text-sm tracking-wide">{option.label}</span>
                                    {value === option.value && (
                                        <Check className="w-4 h-4 text-green-500" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
