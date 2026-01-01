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

// Handwritten Font for accent
import { Caveat } from "next/font/google";
const caveat = Caveat({
  subsets: ["latin"],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://darkvibelk.com'),
  title: {
    default: "Dark Vibe | #1 Leading Digital Infrastructure Platform",
    template: "%s | Dark Vibe Empire"
  },
  manifest: '/manifest.json',
  description: "The global leader in next-generation digital infrastructure, web development, and technical branding. We build digital empires with precision, speed, and unmatched aesthetic power.",
  keywords: [
    "Dark Vibe", "Dark Vibe LK", "Mohamed Zuhail", "Mohamed Akmal",
    "Web Development Sri Lanka", "Best Web Design Agency",
    "Software Engineering", "Digital Empire", "Cyber Aesthetics",
    "NextJS Developers", "Premium Branding", "Technical Infrastructure",
    "IT Solutions", "Network Engineering", "Graphic Design",
    "Global Digital Agency", "Enterprise Web Development", "Worldwide IT Support",
    "Artificial Intelligence", "Cloud Computing", "Cyber Security", "UI/UX Design",
    "Mobile App Development", "E-commerce Solutions", "SEO Optimization"
  ],
  authors: [{ name: "Mohamed Zuhail" }, { name: "Mohamed Akmal" }],
  creator: "Dark Vibe Empire",
  publisher: "Dark Vibe Empire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
      'en-CA': '/en-CA',
      'x-default': '/',
    },
  },
  openGraph: {
    title: "Dark Vibe | #1 Leading Digital Infrastructure Platform",
    description: "The global leader in next-generation digital infrastructure. We forge digital empires.",
    url: "https://darkvibelk.com",
    siteName: "Dark Vibe Empire",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dark Vibe Empire - Leading Digital Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Vibe | #1 Leading Digital Infrastructure Platform",
    description: "The global leader in next-generation digital infrastructure.",
    images: ["/opengraph-image.png"],
    creator: "@darkvibe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'technology',
};

import SmoothScrolling from "@/components/SmoothScrolling";
import Script from "next/script";

import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://darkvibelk.com/#organization",
        "name": "Dark Vibe Empire",
        "url": "https://darkvibelk.com",
        "logo": "https://darkvibelk.com/home-logo.png",
        "image": "https://darkvibelk.com/opengraph-image.png",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "LK",
          "addressLocality": "Colombo"
        },
        "founders": [
          {
            "@type": "Person",
            "name": "Mohamed Zuhail"
          },
          {
            "@type": "Person",
            "name": "Mohamed Akmal"
          }
        ],
        "sameAs": [
          "https://twitter.com/darkvibe",
          "https://linkedin.com/company/darkvibe",
          "https://instagram.com/darkvibelk"
        ],
        "areaServed": "Global",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "areaServed": "Global",
          "availableLanguage": ["English", "Sinhala", "Tamil"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://darkvibelk.com/#website",
        "url": "https://darkvibelk.com",
        "name": "Dark Vibe Empire",
        "publisher": {
          "@id": "https://darkvibelk.com/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${caveat.variable} font-body bg-background text-white antialiased selection:bg-white/20 selection:text-black`}>
        <CustomCursor />
        <SmoothScrolling>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

// Deployment Trace: 2026-01-01-T16:51:00
