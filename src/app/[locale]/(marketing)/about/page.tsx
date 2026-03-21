import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getExperience, getSkills } from "@/lib/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Will Wu — a full-stack developer specializing in React, Next.js, and TypeScript. My story, skills, and work experience.",
};

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const locale = useLocale();
  const skills = getSkills(locale);
  const experience = getExperience(locale);

  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
          {t("label")}
        </p>
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-8">
          {t("titlePrefix")}
          <br />
          <span className="gradient-text-pink font-serif italic">
            {t("titleHighlight")}
          </span>
        </h1>
      </section>

      {/* Bio Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-medium mb-6">{t("storyTitle")}</h2>
            <div className="space-y-4 text-zinc-400">
              <p>{t("story1")}</p>
              <p>{t("story2")}</p>
              <p>{t("story3")}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-6">{t("valuesTitle")}</h2>
            <div className="space-y-4">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-medium text-white mb-2">
                  {t("cleanCode")}
                </h3>
                <p className="text-sm text-zinc-400">{t("cleanCodeDesc")}</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-medium text-white mb-2">
                  {t("userExperience")}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t("userExperienceDesc")}
                </p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="font-medium text-white mb-2">
                  {t("continuousLearning")}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t("continuousLearningDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
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

      {/* Experience Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto" id="experience">
        <h2 className="text-2xl font-medium mb-8">{t("experienceTitle")}</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white">{exp.role}</h3>
                  <p className="text-cyan-400">{exp.company}</p>
                </div>
                <span className="text-sm text-zinc-500 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
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
