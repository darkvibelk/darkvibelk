import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Professional Sans-Serif for Body
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

// Modern, Professional Heading Font
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dark Vibe | All-In-One Platform",
  description: "Next-generation digital and technical infrastructure solutions.",
  openGraph: {
    title: "Dark Vibe | All-In-One Platform",
    description: "Next-generation digital and technical infrastructure solutions.",
    url: "https://darkvibe.lk",
    siteName: "Dark Vibe Empire",
    images: [
      {
        url: "/icon.jpg",
        width: 800,
        height: 600,
        alt: "Dark Vibe Empire Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Vibe | All-In-One Platform",
    description: "Next-generation digital and technical infrastructure solutions.",
    images: ["/icon.jpg"],
  },
};

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-body bg-background text-white antialiased selection:bg-white/20 selection:text-black`}>
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
