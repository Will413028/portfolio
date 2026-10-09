import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getHomeProjects } from "@/lib/projects";
import SectionHeading from "./SectionHeading";

// One lead case study in a full-width navy card, the supporting ones below.
export default function Works() {
  const t = useTranslations("works");
  const locale = useLocale();
  const { lead, supporting } = getHomeProjects(locale);

  return (
    <section
      aria-labelledby="works-title"
      className="mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <SectionHeading
        id="works-title"
        label={t("label")}
        title={t("title")}
        intro={t("intro")}
      />

      <Link
        href={`/work/${lead.slug}`}
        className="group mt-12 grid overflow-hidden rounded-2xl bg-navy text-on-navy lg:grid-cols-[1.4fr_1fr]"
      >
        <div className="relative aspect-[16/10] bg-navy-raised">
          <Image
            src={lead.screenshots[0]}
            alt={lead.title}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="text-sm text-on-navy-muted">
            {lead.type} · {lead.quarter}
          </p>
          <h3 className="mt-3 font-serif font-black text-3xl md:text-4xl leading-tight">
            {lead.title}
          </h3>
          {lead.outcomes && (
            <ul className="mt-5 space-y-2 text-base leading-relaxed text-on-navy-muted">
              {lead.outcomes.slice(0, 3).map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          )}
          <span className="mt-7 inline-flex items-center gap-2 font-bold text-peach">
            {t("readCase")}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </div>
      </Link>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {supporting.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-line bg-card hover:border-muted transition-colors"
          >
            <div className="relative aspect-[2/1] bg-band">
              <Image
                src={p.screenshots[0]}
                alt={p.title}
                fill
                sizes="(min-width: 768px) 540px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-muted">
                {p.type} · {p.quarter}
              </p>
              <h3 className="mt-2 font-serif font-black text-xl leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {p.outcomes?.[0] ?? p.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-accent">
                {t("readCase")}
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-bold text-accent hover:underline underline-offset-4"
        >
          {t("seeAll")}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
