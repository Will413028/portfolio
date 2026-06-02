// biome-ignore-all lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires an inline script tag (Next.js documented pattern)
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Analytics from "@/components/analytics";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://example.com";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Will Wu",
  jobTitle: "Senior Backend Engineer",
  url: siteUrl,
  email: "mailto:will413028@gmail.com",
  image: `${siteUrl}/opengraph-image`,
  sameAs: [
    "https://github.com/will413028",
    "https://www.linkedin.com/in/will4130/",
  ],
  knowsAbout: [
    "Python",
    "Go",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
    "Microservices",
    "Distributed Systems",
    "Backend Architecture",
  ],
  address: { "@type": "PostalAddress", addressCountry: "TW" },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Analytics />
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </>
  );
}
