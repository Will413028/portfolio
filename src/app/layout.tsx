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
    default: "Will Wu - Developer, Freelancer & Problem Solver",
    template: "%s | Will Wu",
  },
  description:
    "Full-Stack Developer specializing in Next.js, React, TypeScript, and Sanity CMS. I build fast, accessible web apps and help founders ship products that users love.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "Will Wu",
    title: "Will Wu - Developer, Freelancer & Problem Solver",
    description:
      "Full-Stack Developer specializing in Next.js, React, TypeScript, and Sanity CMS. I build fast, accessible web apps and help founders ship products that users love.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Wu - Developer, Freelancer & Problem Solver",
    description:
      "Full-Stack Developer specializing in Next.js, React, TypeScript, and Sanity CMS.",
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
