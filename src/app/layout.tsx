import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/Common/SmoothScroll";
import NoiseOverlay from "@/components/Common/NoiseOverlay";
import JsonLd from "@/components/SEO/JsonLd";
import FAQSchema from "@/components/SEO/FAQSchema";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alekgir.com"),
  title: {
    default: "Aleksejs Giruckis | Full-Stack Developer | Python, Django, React",
    template: "%s | AlekGir"
  },
  description: "Full-Stack Developer in UK specializing in Python, Django, and React. European-certified (94/100) with 3+ years production experience. Available for full-time opportunities.",
  keywords: ["Full-Stack Developer", "Python Developer", "Django Developer", "React Developer", "UK Developer", "Cambridgeshire Developer", "Django REST Framework", "Next.js Developer", "PostgreSQL Developer", "TypeScript Developer", "Telegram Bot Development", "Web Application Development", "API Development", "AI Automation", "Aleksejs Giruckis", "AlekGir", "European Certified Developer"],
  authors: [{ name: "Aleksejs Giruckis", url: "https://alekgir.com" }],
  creator: "Aleksejs Giruckis",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://alekgir.com",
    title: "Aleksejs Giruckis - Full-Stack Developer",
    description: "Full-Stack Developer specializing in Python, Django, React. UK-based with European certification (94/100).",
    siteName: "AlekGir",
    images: [
      {
        url: "/images/alekgir_logo.JPG",
        width: 1200,
        height: 630,
        alt: "Aleksejs Giruckis - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleksejs Giruckis - Full-Stack Developer",
    description: "Python, Django, React developer. European-certified (94/100). UK-based.",
    images: ["/images/alekgir_logo.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} antialiased`}>
        <JsonLd />
        <FAQSchema />
        <NoiseOverlay />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
