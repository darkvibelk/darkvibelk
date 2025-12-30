import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact | Dark Vibe | Initiate Protocol",
    description: "Ready to build your empire? Contact Dark Vibe for web development, network solutions, and specialist IT consultancy. Secure lines are open.",
    keywords: ["Contact Dark Vibe", "Hire Web Developer", "IT Consultancy", "Sri Lanka Web Agency"],
    openGraph: {
        title: "Contact | Dark Vibe | Initiate Protocol",
        description: "Ready to build your empire? Contact Dark Vibe today.",
        images: ["/opengraph-image.png"]
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
