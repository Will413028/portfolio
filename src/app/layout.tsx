import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Will Wu — Senior Backend Engineer",
    template: "%s | Will Wu",
  },
  description:
    "Senior Backend Engineer with 4+ years building production systems at scale — Python, Go, TypeScript. 2M+ MAU platforms, zero-downtime migrations, 80% latency cuts, SAML/RBAC security. Available for full-time roles and freelance backend / infrastructure projects. Based in Taiwan, working globally.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "Will Wu",
    title: "Will Wu — Senior Backend Engineer",
    description:
      "Senior Backend Engineer — Python, Go, TypeScript. 2M+ MAU systems, zero-downtime migrations, 80% latency cuts. Open to full-time roles and freelance backend projects. Based in Taiwan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Wu — Senior Backend Engineer",
    description:
      "Senior Backend Engineer — Python, Go, TypeScript. 2M+ MAU systems, zero-downtime migrations, 80% latency cuts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
