import { useTranslations } from "next-intl";

export default function ImpactStats() {
  const t = useTranslations("stats");
  const stats = [
    { v: t("v1"), l: t("l1") },
    { v: t("v2"), l: t("l2") },
    { v: t("v3"), l: t("l3") },
    { v: t("v4"), l: t("l4") },
  ];

  return (
    <section className="px-6 pb-12 max-w-5xl mx-auto">
      <p className="text-center text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-6">
        {t("label")}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.l}
            className="text-center rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-6"
          >
            <div className="text-3xl md:text-4xl font-semibold gradient-text-pink">
              {s.v}
            </div>
            <div className="text-xs text-zinc-400 mt-2 leading-snug">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
