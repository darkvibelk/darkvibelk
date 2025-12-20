"use client";

import { useEffect } from "react";
import Lenis from "lenis";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5, // Slightly longer for more "weight"
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 1.5, // Balanced touch speed
            // Prevent scroll locking on mobile
            prevent: (node) => {
                return node.classList.contains('lenis-prevent') ||
                    node.id === 'headlessui-dialog-panel';
            }
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}

export default SmoothScrolling;
