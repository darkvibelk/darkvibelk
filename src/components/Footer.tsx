import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-gray-900 bg-[#020202]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo if image fails, or text */}
                    <span className="font-heading font-bold text-xl tracking-widest text-[#fff]">DARK VIBE</span>
                </div>

                {/* Socials */}
                <div className="flex gap-6">
                    <a href="https://www.facebook.com/dakvibelk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="https://www.instagram.com/dakvibelk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href="https://www.x.com/dakvibelk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                    {/* Direct Call Link */}
                    <a href="tel:+94775756000" className="hover:text-green-500 transition-colors"><Phone className="w-5 h-5" /></a>
                </div>

                <div className="text-xs text-gray-600">
                    &copy; 2025 DARK VIBE. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}
