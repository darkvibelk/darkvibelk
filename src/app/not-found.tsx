import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-white px-4 text-center">
            <h1 className="text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
                404
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-2">
                Sector Not Found
            </h2>
            <p className="text-gray-400 max-w-md mb-8">
                The coordinates you entered do not correspond to any known sector in the Dark Vibe Empire.
            </p>
            <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full hover:bg-white/10 transition-colors"
            >
                <MoveLeft className="w-4 h-4" /> Return to Base
            </Link>
        </div>
    );
}
