import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Services | Dark Vibe | Web Development & Network Engineering",
    description: "Explore our comprehensive suite of digital services: Web Architecture, Network Engineering, Cyber Defense, Brand Sovereignty, and Cloud Command. We build digital empires.",
    keywords: ["Web Development", "Network Engineering", "Cyber Security", "Branding", "Cloud Solutions", "Dark Vibe Services"],
    openGraph: {
        title: "Services | Dark Vibe | Web Development & Network Engineering",
        description: "Explore our comprehensive suite of digital services.",
        images: ["/opengraph-image.png"]
    }
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
