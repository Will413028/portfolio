import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getJudgments } from "@/lib/judgments";
import SectionHeading from "./SectionHeading";

export default function Judgments() {
  const t = useTranslations("judgments");
  const locale = useLocale();
  const judgments = getJudgments(locale);

  if (judgments.length === 0) return null;

  return (
    <section
      id="judgments"
      aria-labelledby="judgments-title"
      className="bg-band scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="judgments-title"
          label={t("label")}
          title={t("title")}
          intro={t("intro")}
        />
        <ol className="mt-12 space-y-4">
          {judgments.map((j, index) => (
            <li
              key={j.id}
              className={`grid gap-6 p-6 md:grid-cols-[150px_minmax(0,1fr)_220px] md:gap-10 md:p-10 ${index === 0 ? "rounded-2xl bg-card" : "border-t border-line"}`}
            >
              <div>
                <time
                  dateTime={j.date}
                  className="font-display font-bold text-2xl"
                >
                  {j.date.slice(0, 7).replace("-", ".")}
                </time>
                <p className="mt-3 inline-block rounded-md bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
                  {t(`status.${j.status}`)}
                </p>
              </div>
              <div>
                <h3 className="font-serif font-black text-2xl leading-snug">
                  {j.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-body">
                  {j.claim}
                </p>
              </div>
              <div className="text-sm">
                <p className="text-muted">{t("source")}</p>
                <a
                  href={j.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-start gap-1 font-medium text-accent hover:underline underline-offset-4"
                >
                  {j.source.label}
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  />
                </a>
                {j.resolution && (
                  <a
                    href={j.resolution.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-start gap-1 font-medium text-accent hover:underline underline-offset-4"
                  >
                    {t("resolved", { date: j.resolution.date })}:{" "}
                    {j.resolution.source.label}
                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
