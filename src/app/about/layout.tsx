import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Dark Vibe | The Architects of Digital Empires",
    description: "Learn about the architects behind Dark Vibe. We are not just builders; we are empire makers. Precision, durability, and aesthetic power define us.",
    keywords: ["About Dark Vibe", "Mohamed Zuhail", "Mohamed Akmal", "Digital Architects", "Web Agency Team"],
    openGraph: {
        title: "About Us | Dark Vibe | The Architects of Digital Empires",
        description: "Learn about the architects behind Dark Vibe.",
        images: ["/opengraph-image.png"]
    }
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
