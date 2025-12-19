"use client";

import Link from 'next/link';
import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import './globals.css'; // Ensure styles are loaded if possible, otherwise inline minimal styles

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="en">
            <body className="bg-black text-white">
                <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
                    <div className="bg-red-900/20 border border-red-500/20 p-8 rounded-2xl max-w-lg">
                        <h2 className="text-3xl font-bold text-red-500 mb-4">
                            Critical System Failure
                        </h2>
                        <p className="text-gray-400 mb-8">
                            The application core has encountered an unrecoverable error.
                        </p>
                        <Link
                            href="https://darkvibelk.pages.dev/"
                            className="bg-white text-black font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            Return to Base
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    );
}
