import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getProjects,
} from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = getProjectBySlug(slug, locale);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectPage" });
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    notFound();
  }

  const projects = getProjects(locale);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <main>
      <section className="bg-navy text-on-navy">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-on-navy-muted hover:text-on-navy"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t("back")}
          </Link>
          <p className="mt-10 text-sm font-bold text-peach">
            {project.type} · {project.quarter}
          </p>
          <h1 className="mt-4 font-serif font-black text-4xl md:text-6xl leading-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="mt-3 text-xl text-on-navy-muted">
              {project.subtitle}
            </p>
          )}
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-on-navy-muted">
            {project.description}
          </p>
          {(project.links.live || project.links.github) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-bright px-6 font-bold text-navy hover:bg-peach transition-colors"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  {t("viewLive")}
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center rounded-lg border border-navy-line px-6 font-medium hover:border-on-navy-muted transition-colors"
                >
                  {t("sourceCode")}
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl bg-band">
          <Image
            src={project.screenshots[0]}
            alt={project.title}
            fill
            sizes="(min-width: 1152px) 1104px, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          {project.outcomes && project.outcomes.length > 0 && (
            <>
              <h2 className="font-serif font-black text-3xl">{t("impact")}</h2>
              <ul className="mt-6 list-disc space-y-3 pl-5 text-lg leading-relaxed text-body marker:text-accent">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </>
          )}

          <h2 className="mt-14 font-serif font-black text-3xl">{t("about")}</h2>
          <p className="mt-6 text-lg leading-relaxed text-body">
            {project.longDescription}
          </p>

          <h2 className="mt-14 font-serif font-black text-3xl">
            {t("features")}
          </h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-relaxed text-body marker:text-accent">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h2 className="mt-14 font-serif font-black text-3xl">
            {t("challenges")}
          </h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-relaxed text-body marker:text-accent">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <dl className="space-y-5 rounded-2xl bg-card p-6 border border-line">
            <div>
              <dt className="text-sm text-muted">{t("type")}</dt>
              <dd className="mt-1 font-medium">{project.type}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{t("timeline")}</dt>
              <dd className="mt-1 font-medium">{project.quarter}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{t("stack")}</dt>
              <dd className="mt-1 text-base text-body">
                {project.tags.join(" · ")}
              </dd>
            </div>
          </dl>
          <div className="mt-6 rounded-2xl bg-navy p-6 text-on-navy">
            <p className="font-bold">{t("contactTitle")}</p>
            <p className="mt-2 text-sm text-on-navy-muted">
              {t("contactText")}
            </p>
            <a
              href="mailto:will413028@gmail.com"
              className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-bright font-bold text-navy hover:bg-peach transition-colors"
            >
              {t("contactCta")}
            </a>
          </div>
        </aside>
      </section>

      <nav
        aria-label={t("otherProjects")}
        className="border-t border-line bg-band"
      >
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-2">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="group rounded-2xl bg-card p-6 hover:shadow-sm"
            >
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                <ArrowLeft size={14} aria-hidden="true" />
                {t("previous")}
              </span>
              <span className="mt-2 block font-serif font-black text-xl group-hover:text-accent">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="group rounded-2xl bg-card p-6 text-right hover:shadow-sm"
            >
              <span className="inline-flex items-center gap-2 text-sm text-muted">
                {t("next")}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
              <span className="mt-2 block font-serif font-black text-xl group-hover:text-accent">
                {nextProject.title}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
}
