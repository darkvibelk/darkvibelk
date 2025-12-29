"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    // Lock scroll when preloader is visible
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isVisible]);

    const handleVideoEnd = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                >
                    <video
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-contain"
                    >
                        <source src="/dv-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Optional Skip Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute bottom-10 right-10 text-white/50 hover:text-white text-sm uppercase tracking-widest transition-colors"
                    >
                        Skip Intro
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
