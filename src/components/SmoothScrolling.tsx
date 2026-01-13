"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        // Initialize Lenis ONLY ONCE
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 2,
            wheelMultiplier: 1.1,
            prevent: (node) => {
                return node.classList.contains('lenis-prevent') ||
                    node.id === 'headlessui-dialog-panel';
            }
        });

        // Loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Expose lenis instance globally for the route change effect to access if needed, 
        // OR better: we can't easily share state between effects without useRef or Context.
        // But since we are inside the same component, we need to handle the route change 
        // logic HERE, inside this effect, or attach it to the instance.

        // ACTUALLY: The best way in React is to use a ref to store the lenis instance,
        // or just rely on the standard behavior where the single effect handles the lifecycle.
        // However, to respond to 'pathname' changes without re-creating lenis, we need
        // to put the 'scrollTo' logic in a separate effect that depends on 'pathname'.
        // To do that, we need access to the 'lenis' object.

        // So let's attach it to the window (hacky) or use a Context. 
        // For simplicity and robustness here, let's use a useRef to keep the instance.

        // Wait, standard pattern:
        // Use a ref for the instance.
        (window as any).lenis = lenis;

        return () => {
            lenis.destroy();
            (window as any).lenis = null;
        };
    }, []); // Run only once on mount

    // Handle Route Changes separately
    useEffect(() => {
        const lenis = (window as any).lenis;
        if (lenis) {
            // Instant scroll to top on route change
            lenis.scrollTo(0, { immediate: true });

            // Recalculate dimensions
            lenis.resize();
        }
    }, [pathname]);

    return <>{children}</>;
}

export default SmoothScrolling;
