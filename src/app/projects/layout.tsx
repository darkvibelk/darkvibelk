import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects | Dark Vibe | Our Digital Empire Portfolio",
    description: "View our portfolio of deployed systems and digital architectures: Zhatn, Rose Printers, IT Service Desk, and more. Witness the power of Dark Vibe engineering.",
    keywords: ["Portfolio", "Web Projects", "Case Studies", "Zhatn", "Rose Printers", "Dark Vibe Projects"],
    openGraph: {
        title: "Projects | Dark Vibe | Our Digital Empire Portfolio",
        description: "View our portfolio of deployed systems and digital architectures.",
        images: ["/opengraph-image.png"]
    }
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Dark Vibe Projects",
        "url": "https://darkvibelk.com/projects",
        "description": "Portfolio of deployed systems and digital architectures.",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Project ZolviQ" },
                { "@type": "ListItem", "position": 2, "name": "Zhatn" },
                { "@type": "ListItem", "position": 3, "name": "IT Service Desk" },
                { "@type": "ListItem", "position": 4, "name": "Rose Printers" },
                { "@type": "ListItem", "position": 5, "name": "Dark Vibe Empire" }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
