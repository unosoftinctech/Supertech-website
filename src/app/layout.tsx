import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Manrope } from "next/font/google";

import FloatingButtons from "@/components/layout/FloatingButtons";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import TopBar from "@/components/layout/TopBar";
import { company } from "@/data/site";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const siteName = company.name;
const siteDescription =
  "SuperTech Engineering Corporation, Yamuna Nagar, Haryana: 50+ years manufacturing precision components, hydraulic press components, heavy pressure components and custom engineering parts.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || `https://${company.website}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `Precision Engineering Components Manufacturer | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "precision engineering",
    "precision components manufacturer",
    "hydraulic press components",
    "custom machining",
    "Yamuna Nagar",
    "Haryana",
    "India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a2a5e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${manrope.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
