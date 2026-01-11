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
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Dark Vibe Services",
        "url": "https://darkvibelk.com/services",
        "description": "Comprehensive suite of digital services including Web Architecture, Network Engineering, and Cyber Defense.",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Digital Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Empire Networking" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cyber Defense & IT" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Architecture" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Sovereignty" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Command" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Vaults" } }
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
