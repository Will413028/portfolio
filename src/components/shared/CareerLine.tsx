import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getEducation, getExperience } from "@/lib/experience";

// One line, oldest to newest: education, then each role.
export default function CareerLine() {
  const t = useTranslations("career");
  const locale = useLocale();
  const education = getEducation(locale)[0];
  const roles = [...getExperience(locale)].reverse();

  const stops = [
    {
      key: "education",
      name: education.school,
      detail: education.degree,
      period: education.period,
      href: "/resume",
    },
    ...roles.map((exp) => ({
      key: exp.slug,
      name: exp.company,
      detail: exp.role,
      period: exp.period,
      href: `/resume#${exp.slug}`,
    })),
  ];

  return (
    <section id="career" className="px-6 py-24 max-w-6xl mx-auto scroll-mt-20">
      <div className="text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.3em] text-subtle mb-4">
          {t("label")}
        </p>
        <h2 className="text-4xl md:text-5xl font-medium">
          {t("title")}{" "}
          <span className="font-serif italic gradient-text-pink">
            {t("titleHighlight")}
          </span>
        </h2>
      </div>

      <ol className="relative flex flex-col md:flex-row gap-8 md:gap-4 md:before:absolute md:before:top-[7px] md:before:inset-x-0 md:before:h-px md:before:bg-gradient-to-r md:before:from-zinc-800 md:before:via-cyan-500/40 md:before:to-pink-500/50">
        {stops.map((stop, index) => {
          const isCurrent = index === stops.length - 1;
          return (
            <li
              key={stop.key}
              className="relative md:flex-1 pl-6 md:pl-0 border-l border-zinc-800 md:border-l-0"
            >
              <span
                className={`absolute -left-[7.5px] md:left-0 top-0 w-[15px] h-[15px] rounded-full border-4 border-[#0a0a0b] ${
                  isCurrent ? "bg-pink-400" : "bg-cyan-500"
                }`}
                aria-hidden="true"
              />
              <Link href={stop.href} className="group block md:pt-8">
                <p className="text-[11px] text-subtle mb-1">{stop.period}</p>
                <p className="text-lg text-white group-hover:text-zinc-300 transition-colors">
                  {stop.name}
                </p>
                <p className="text-sm text-zinc-400 leading-snug">
                  {stop.detail}
                </p>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
