import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Feedback | Dark Vibe | System Optimization",
    description: "Provide feedback to help us optimize the Dark Vibe empire. Report anomalies or suggest new protocols. Your input drives our evolution.",
    keywords: ["Feedback", "Dark Vibe Support", "Report Bug", "Suggestion Box"],
    openGraph: {
        title: "Feedback | Dark Vibe | System Optimization",
        description: "Provide feedback to help us optimize the Dark Vibe empire.",
        images: ["/opengraph-image.png"]
    }
};

export default function FeedbackLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
