import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/portfolioData";
import { CustomCursor } from "@/components/common/CustomCursor";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0e0f14] text-[#f8fafc] antialiased selection:bg-[#ff2844] selection:text-white relative">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
