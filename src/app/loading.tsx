export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-700 rounded-full opacity-25"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-white rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-400 font-mono animate-pulse">
                    LOADING
                </div>
            </div>
        </div>
    );
}
