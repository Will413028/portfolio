import type { Metadata } from "next";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getExperience, getSkills } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Will Wu's resume — Full-Stack Developer specializing in React, Next.js, TypeScript. View experience, skills, and education.",
};

export default function ResumePage() {
  const t = useTranslations("resumePage");
  const locale = useLocale();
  const experience = getExperience(locale);
  const skills = getSkills(locale);

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      {/* Hero */}
      <section className="px-6 pt-32 pb-16 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
          {t("label")}
        </p>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6">
          {t("titlePrefix")}{" "}
          <span className="gradient-text-pink font-serif italic">
            {t("titleHighlight")}
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mb-8">
          {t("subtitle")}
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-colors"
          >
            <Download size={18} />
            {t("downloadPdf")}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 rounded-full hover:border-zinc-500 hover:text-white transition-colors"
          >
            <Mail size={18} />
            {t("getInTouch")}
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-medium mb-8">{t("experienceTitle")}</h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="relative pl-8 border-l-2 border-zinc-800"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0a0b]" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-medium text-white">{exp.role}</h3>
                  <p className="text-cyan-400 text-sm">{exp.company}</p>
                </div>
                <span className="text-sm text-zinc-500 mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-400 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-medium mb-8">{t("skillsTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
            >
              <h3 className="text-lg font-medium text-white mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-medium mb-8">{t("educationTitle")}</h2>
        <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
          <h3 className="text-lg font-medium text-white">
            {t("degree")}
          </h3>
          <p className="text-cyan-400 text-sm">{t("university")}</p>
          <p className="text-sm text-zinc-500 mt-1">{t("educationPeriod")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-zinc-800 rounded-2xl text-center">
          <h2 className="text-2xl font-medium mb-4">{t("ctaTitle")}</h2>
          <p className="text-zinc-400 mb-6">{t("ctaText")}</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-100 transition-colors"
          >
            {t("ctaButton")}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
