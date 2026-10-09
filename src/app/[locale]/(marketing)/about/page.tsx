import type { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Closing from "@/components/shared/Closing";
import PageHeader from "@/components/shared/PageHeader";
import { getSkills } from "@/lib/experience";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("about.title"), description: t("about.description") };
}

const principles = ["measure", "verify", "writeDown"] as const;

export default function AboutPage() {
  const t = useTranslations("aboutPage");
  const locale = useLocale();
  const skills = getSkills(locale);

  return (
    <main>
      <PageHeader label={t("label")} title={t("title")} />

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-5 text-lg leading-relaxed text-body">
          <p>{t("story1")}</p>
          <p>{t("story2")}</p>
          <p>{t("story3")}</p>
        </div>
        <div>
          <h2 className="font-serif font-black text-2xl">{t("howTitle")}</h2>
          <dl className="mt-6 space-y-6">
            {principles.map((key) => (
              <div key={key} className="border-t border-line pt-5">
                <dt className="font-bold">{t(`how.${key}.title`)}</dt>
                <dd className="mt-2 text-base leading-relaxed text-body">
                  {t(`how.${key}.text`)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-band">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif font-black text-3xl">{t("skillsTitle")}</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.category} className="rounded-2xl bg-card p-6">
                <dt className="font-bold">{skill.category}</dt>
                <dd className="mt-3 text-base leading-relaxed text-body">
                  {skill.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Closing />
    </main>
  );
}
