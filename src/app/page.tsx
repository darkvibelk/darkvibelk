import Hero from '@/components/Hero';
import DivisionsGrid from '@/components/DivisionsGrid';
import Roadmap from '@/components/Roadmap';
import Preloader from '@/components/ui/Preloader';

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-white selection:bg-white/20">

            <Hero />
            <DivisionsGrid />
            <Roadmap />
        </main>
    );
}
