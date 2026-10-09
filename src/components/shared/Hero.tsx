import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getEducation, getExperience } from "@/lib/experience";

// The name is the visual anchor (no photo); the career line sits directly
// under it in a deeper band, oldest stop first.
export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const education = getEducation(locale)[0];
  const roles = [...getExperience(locale)].reverse();

  const stops = [
    {
      key: "education",
      name: education.school,
      detail: education.degree,
      href: "/resume",
    },
    ...roles.map((exp) => ({
      key: exp.slug,
      name: exp.company,
      detail: exp.role,
      href: `/resume#${exp.slug}`,
    })),
  ];

  return (
    <section className="bg-navy text-on-navy" aria-labelledby="hero-name">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="text-sm font-bold tracking-wide text-peach">
          {t("role")}
        </p>
        <h1
          id="hero-name"
          className="mt-5 font-display font-bold text-7xl sm:text-8xl md:text-9xl leading-none tracking-tight"
        >
          Will Wu
        </h1>
        <p className="mt-10 max-w-2xl text-lg md:text-xl leading-relaxed text-on-navy-muted">
          {t("intro")}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:will413028@gmail.com"
            className="inline-flex h-12 items-center rounded-lg bg-bright px-6 font-bold text-navy hover:bg-peach transition-colors"
          >
            {t("ctaEmail")}
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex h-12 items-center rounded-lg border border-navy-line px-6 font-medium text-on-navy hover:border-on-navy-muted transition-colors"
          >
            {t("ctaResume")}
          </a>
        </div>
      </div>

      <div id="career" className="bg-navy-deep scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm">
            <span className="font-bold text-peach">{t("careerLabel")}</span>
            <span className="ml-3 text-on-navy-muted">{t("careerNote")}</span>
          </p>
          <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-x-6 gap-y-8 border-t border-navy-line pt-6">
            {stops.map((stop, index) => {
              const current = index === stops.length - 1;
              return (
                <li key={stop.key} className="lg:flex-1">
                  <Link href={stop.href} className="group block">
                    <span
                      className={`block font-serif font-bold text-xl group-hover:underline underline-offset-4 ${current ? "text-peach" : ""}`}
                    >
                      {stop.name}
                    </span>
                    <span className="mt-1 block text-sm text-on-navy-muted">
                      {stop.detail}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
