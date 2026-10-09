import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Closing from "@/components/shared/Closing";
import PageHeader from "@/components/shared/PageHeader";
import { getEducation, getExperience, getSkills } from "@/lib/experience";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("resume.title"), description: t("resume.description") };
}

export default function ResumePage() {
  const t = useTranslations("resumePage");
  const locale = useLocale();
  const experience = getExperience(locale);
  const education = getEducation(locale);
  const skills = getSkills(locale);

  return (
    <main>
      <PageHeader label={t("label")} title={t("title")} intro={t("intro")}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex h-12 items-center rounded-lg bg-bright px-6 font-bold text-navy hover:bg-peach transition-colors"
          >
            {t("downloadPdf")}
          </a>
          <a
            href="mailto:will413028@gmail.com"
            className="inline-flex h-12 items-center rounded-lg border border-navy-line px-6 font-medium text-on-navy hover:border-on-navy-muted transition-colors"
          >
            {t("email")}
          </a>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-serif font-black text-3xl">
          {t("experienceTitle")}
        </h2>
        <ol className="mt-8 space-y-12">
          {experience.map((exp) => (
            <li
              key={exp.slug}
              id={exp.slug}
              className="scroll-mt-24 border-t border-line pt-8"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-serif font-bold text-2xl">{exp.company}</h3>
                <p className="text-sm text-muted">{exp.period}</p>
              </div>
              <p className="mt-1 font-medium">
                {exp.role} · {exp.location}
              </p>
              <p className="mt-2 text-sm text-muted">{exp.techStack}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-body marker:text-accent">
                {exp.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-band">
        <div className="mx-auto grid max-w-4xl gap-16 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="font-serif font-black text-3xl">
              {t("skillsTitle")}
            </h2>
            <dl className="mt-8 space-y-5">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <dt className="font-bold">{skill.category}</dt>
                  <dd className="mt-1 text-base text-body">
                    {skill.items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="font-serif font-black text-3xl">
              {t("educationTitle")}
            </h2>
            <ul className="mt-8 space-y-5">
              {education.map((edu) => (
                <li key={edu.school}>
                  <p className="font-bold">{edu.school}</p>
                  <p className="mt-1 text-base text-body">
                    {edu.degree} · {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Closing />
    </main>
  );
}
