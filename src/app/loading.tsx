export default function Loading() {
    return (
        <div className="min-h-screen bg-black pt-32 px-6">
            <div className="max-w-[1600px] mx-auto">
                {/* Terminal Header Skeleton */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32 border-b border-gray-900 pb-10">
                    <div className="space-y-4">
                        {/* Glitchy/Terminal Text Placeholder */}
                        <div className="h-20 w-64 md:w-96 bg-gray-900/50 rounded animate-pulse" />
                        <div className="h-20 w-32 bg-gray-900/30 rounded animate-pulse delay-75" />
                    </div>

                    <div className="text-right mt-8 md:mt-0 flex flex-col items-end gap-3">
                        <div className="h-4 w-32 bg-green-900/20 rounded animate-pulse" />
                        <div className="h-12 w-64 bg-gray-900/30 rounded animate-pulse delay-100" />
                    </div>
                </div>

                {/* Filter Tabs Skeleton */}
                <div className="flex gap-4 mb-12 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-10 w-32 bg-gray-900/40 rounded-full border border-white/5 animate-pulse" />
                    ))}
                </div>

                {/* Projects Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-24">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-3xl bg-gray-900/20 border border-white/5 overflow-hidden">
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                            {/* Inner Skeleton Structure */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="space-y-4">
                                    {/* Title */}
                                    <div className="h-12 w-3/4 bg-gray-800/50 rounded animate-pulse" />

                                    {/* Meta Line */}
                                    <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                        <div className="h-4 w-24 bg-gray-800/30 rounded" />
                                        <div className="h-4 w-24 bg-gray-800/30 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* Corner Status Pill */}
                            <div className="absolute top-6 left-6 h-8 w-32 bg-gray-800/50 rounded-full animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
