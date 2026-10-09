// biome-ignore-all lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires an inline script tag (Next.js documented pattern)
import { Noto_Sans_TC, Noto_Serif_TC, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Analytics from "@/components/analytics";
import { routing } from "@/i18n/routing";
import { getEducation, getExperience } from "@/lib/experience";
import { siteUrl } from "@/lib/site-url";

// CJK fonts are split into unicode-range chunks; preloading them all would
// block first paint, so only the Latin display face is preloaded.
const notoSans = Noto_Sans_TC({
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
  preload: false,
});
const notoSerif = Noto_Serif_TC({
  weight: ["700", "900"],
  variable: "--font-noto-serif",
  display: "swap",
  preload: false,
});
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// Generated from the same data the pages render, so they cannot drift.
const [currentRole] = getExperience("en");
const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    name: "Will Wu",
    jobTitle: "Senior Backend Engineer",
    url: siteUrl,
    email: "mailto:will413028@gmail.com",
    image: `${siteUrl}/opengraph-image`,
    worksFor: { "@type": "Organization", name: currentRole.company },
    alumniOf: getEducation("en").map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.school,
    })),
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
  },
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
    <html
      lang={locale}
      className={`${notoSans.variable} ${notoSerif.variable} ${sourceSerif.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
        <Analytics />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
