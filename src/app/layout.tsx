import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'; // Simulating local font if we had it, but using CDN for Clash is safer if not provided. To adhere to Next.js best practices we'll try to use a class or load it.
// Since actual font files aren't here, I will use a CDN import in global.css for Clash Display or a class based on Inter for now, 
// BUT the user asked specifically, so I'll add the CDN link in the head or assume Inter.
// Let's stick to Inter for body and use a specific class for headings that might rely on a CDN I added in CSS.

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

// Using a CDN for Clash Display in layout for now since I can't download files easily without a URL.
// I will inject the link tag.

export const metadata: Metadata = {
    title: "Dark Vibe | All-In-One Platform",
    description: "Next-generation corporate solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap" rel="stylesheet" />
            </head>
            <body className={`${inter.variable} font-body bg-background text-white antialiased selection:bg-white/20 selection:text-black`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
