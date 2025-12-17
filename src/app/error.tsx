"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function Error({
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-white px-4 text-center">
            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl max-w-lg">
                <h2 className="text-2xl font-bold text-red-500 mb-2">
                    System Critical Failure
                </h2>
                <p className="text-gray-400 mb-6">
                    An unexpected error has occurred within the mainframe. Diagnostic report logged.
                </p>
                <button
                    onClick={() => reset()}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-bold"
                >
                    <RotateCcw className="w-4 h-4" /> Reboot System
                </button>
            </div>
        </div>
    );
}
