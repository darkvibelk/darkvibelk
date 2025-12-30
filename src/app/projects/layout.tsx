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
    return <>{children}</>;
}
