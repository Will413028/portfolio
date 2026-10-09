import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Closing from "@/components/shared/Closing";
import PageHeader from "@/components/shared/PageHeader";
import { Link } from "@/i18n/navigation";
import { getProjects } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return { title: t("work.title"), description: t("work.description") };
}

export default function WorkPage() {
  const t = useTranslations("workPage");
  const locale = useLocale();
  const projects = getProjects(locale);

  return (
    <main>
      <PageHeader label={t("label")} title={t("title")} intro={t("intro")} />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-band">
                  <Image
                    src={project.screenshots[0]}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    priority={index < 2}
                  />
                </div>
                <p className="mt-5 text-sm text-muted">
                  {project.type} · {project.quarter}
                </p>
                <h2 className="mt-2 font-serif font-black text-2xl">
                  {project.title}
                  {project.subtitle && (
                    <span className="ml-2 font-sans font-normal text-lg text-muted">
                      {project.subtitle}
                    </span>
                  )}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-body">
                  {project.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent">
                  {t("readCase")}
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Closing />
    </main>
  );
}
