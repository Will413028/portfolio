import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getJudgments } from "@/lib/judgments";

const statusStyle = {
  open: "text-zinc-300 border-zinc-700",
  held: "text-emerald-300 border-emerald-800",
  missed: "text-rose-300 border-rose-800",
} as const;

export default function Judgments() {
  const t = useTranslations("judgments");
  const locale = useLocale();
  const judgments = getJudgments(locale);

  if (judgments.length === 0) return null;

  return (
    <section
      id="judgments"
      className="px-6 py-24 max-w-4xl mx-auto scroll-mt-20"
    >
      <div className="text-center mb-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-4">
          {t("label")}
        </p>
        <h2 className="text-4xl md:text-5xl font-medium leading-tight">
          {t("title")}{" "}
          <span className="font-serif italic gradient-text-pink">
            {t("titleHighlight")}
          </span>
        </h2>
      </div>
      <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-16">
        {t("intro")}
      </p>

      <ol className="space-y-12">
        {judgments.map((j, index) => (
          <li
            key={j.id}
            className="relative pl-14 md:pl-20 border-l border-zinc-800 ml-4"
          >
            <span
              className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-[#0a0a0b] border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 tabular-nums"
              aria-hidden="true"
            >
              {String(judgments.length - index).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <time dateTime={j.date} className="text-sm text-zinc-500">
                {j.date}
              </time>
              <span
                className={`text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full border ${statusStyle[j.status]}`}
              >
                {t(`status.${j.status}`)}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif text-white mb-3">
              {j.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-4">{j.claim}</p>
            <a
              href={j.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {t("source")}: {j.source.label}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            {j.resolution && (
              <a
                href={j.resolution.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-fit items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {t("resolved", { date: j.resolution.date })}:{" "}
                {j.resolution.source.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
