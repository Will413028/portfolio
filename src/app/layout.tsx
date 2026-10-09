import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const description =
  "Will Wu is a senior backend engineer in Taipei working in Python, Go and TypeScript. Currently building an enterprise on-premises AI platform at APMIC.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Will Wu — Senior Backend Engineer",
    template: "%s | Will Wu",
  },
  description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "Will Wu",
    title: "Will Wu — Senior Backend Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Wu — Senior Backend Engineer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// The <html> element lives in app/[locale]/layout.tsx so its lang attribute
// follows the active locale (next-intl's recommended structure).
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
