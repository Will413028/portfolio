import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Every number links to the work behind it, so a reader can check it.
export default function ImpactStats() {
  const t = useTranslations("stats");
  const stats = [
    { v: t("v1"), l: t("l1"), href: "/resume#vocus" },
    { v: t("v2"), l: t("l2"), href: "/resume#vocus" },
    { v: t("v3"), l: t("l3"), href: "/work/dailyfresh" },
    { v: t("v4"), l: t("l4"), href: "/#career" },
  ];

  return (
    <section className="px-6 pb-12 max-w-5xl mx-auto">
      <p className="text-center text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-6">
        {t("label")}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Link
            key={s.l}
            href={s.href}
            className="group relative text-center rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-6 hover:border-zinc-600 transition-colors"
          >
            <ArrowUpRight
              size={14}
              className="absolute top-3 right-3 text-zinc-600 group-hover:text-zinc-300 transition-colors"
              aria-hidden="true"
            />
            <div className="text-3xl md:text-4xl font-semibold gradient-text-pink">
              {s.v}
            </div>
            <div className="text-xs text-zinc-400 mt-2 leading-snug">{s.l}</div>
          </Link>
        ))}
      </div>
      <p className="text-center text-xs text-zinc-600 mt-4">{t("hint")}</p>
    </section>
  );
}
