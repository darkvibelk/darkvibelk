'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealOnScrollProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

export default function RevealOnScroll({ children, width = 'fit-content', delay = 0.25 }: RevealOnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
