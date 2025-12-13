export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-gray-900 bg-[#020202]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo if image fails, or text */}
                    <span className="font-heading font-bold text-xl tracking-widest text-[#fff]">DARK VIBE</span>
                </div>

                <div className="flex gap-8 text-sm text-gray-500 font-medium">
                    <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
                    <a href="#" className="hover:text-white transition-colors">FACEBOOK</a>
                    <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
                </div>

                <div className="text-xs text-gray-600">
                    &copy; 2025 DARK VIBE. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}
