import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getHighlights } from "@/lib/highlights";

export default function Highlights() {
  const t = useTranslations("highlights");
  const locale = useLocale();
  const highlights = getHighlights(locale);

  return (
    <section
      aria-labelledby="highlights-label"
      className="mx-auto max-w-6xl px-6 py-16 md:py-20"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="highlights-label"
          className="text-sm font-bold tracking-wide text-accent"
        >
          {t("label")}
        </h2>
        <p className="text-sm text-muted">{t("hint")}</p>
      </div>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-line">
        {highlights.map((h) => (
          <li
            key={h.id}
            className="border-b border-line lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
          >
            <Link href={h.href} className="group flex h-full flex-col py-8">
              <span className="font-display font-bold text-4xl tracking-tight">
                {h.value}
              </span>
              <span className="mt-3 text-base leading-snug text-body">
                {h.label}
              </span>
              <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                {h.context}
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
