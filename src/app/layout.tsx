import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.refracoat.com"), // Use the production URL
  title: {
    default: "Refracoat | Specialized Refractory & Surface Protection Solutions",
    template: "%s | Refracoat",
  },
  description:
    "Leading provider of specialized refractory and surface protection solutions for industrial applications. Expertise in thermal control, corrosion resistance, and durability enhancement.",
  keywords: [
    "Refractory Solutions",
    "Surface Protection",
    "Industrial Coating",
    "Thermal Control",
    "Corrosion Resistance",
    "Refracoat",
    "Industrial Services",
  ],
  authors: [{ name: "Refracoat" }],
  creator: "Refracoat",
  publisher: "Refracoat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      default: "Refracoat | Specialized Refractory & Surface Protection Solutions",
      template: "%s | Refracoat",
    },
    description:
      "Leading provider of specialized refractory and surface protection solutions for industrial applications. Expertise in thermal control, corrosion resistance, and durability enhancement.",
    url: "https://www.refracoat.com",
    siteName: "Refracoat",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // We should ensure this exists or use a default one
        width: 1200,
        height: 630,
        alt: "Refracoat Industrial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Refracoat | Specialized Refractory & Surface Protection Solutions",
      template: "%s | Refracoat",
    },
    description:
      "Leading provider of specialized refractory and surface protection solutions for industrial applications.",
    images: ["/og-image.jpg"], // Same as OG
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
  icons: {
    icon: "/logo-2.svg",
    shortcut: "/logo-2.svg",
    apple: "/logo-2.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${montserrat.variable} antialiased font-sans bg-white text-gray-900`}
      >
        <JsonLd />
        {/* Skip Navigation Link for Keyboard Users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
