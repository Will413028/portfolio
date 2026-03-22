import type { Metadata } from "next";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import CTASection from "@/components/shared/CTASection";
import { Link } from "@/i18n/navigation";
import { getProjects, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore my curated collection of web and mobile projects — from learning platforms to developer tools, built with modern technologies.",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="w-full max-w-[460px]">
      {/* Header: Number --- TYPE and Date */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-zinc-500 font-light">
            {projectNumber}
          </span>
          <div className="h-px bg-zinc-700 w-10" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            {project.type}
          </span>
        </div>
        <span className="text-[11px] text-zinc-500 tracking-wide">
          {project.quarter}
        </span>
      </div>

      {/* Title */}
      <Link href={`/work/${project.slug}`} className="group block mb-4">
        <h2 className="text-[26px] font-serif text-white group-hover:text-zinc-300 transition-colors leading-tight">
          {project.title}
          {project.subtitle && (
            <span className="text-zinc-500 ml-2 text-[20px] font-serif">
              {project.subtitle}
            </span>
          )}
        </h2>
      </Link>

      {/* Project Card with subtle gradient border */}
      <Link
        href={`/work/${project.slug}`}
        className="group block relative rounded-2xl overflow-hidden mb-5 hover:scale-[1.01] transition-transform duration-300"
      >
        {/* Subtle gradient border - thin line effect */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-cyan-500/25">
          <div className="absolute inset-[1px] rounded-[15px] bg-[#111114]" />
        </div>

        {/* Card background */}
        <div className="relative bg-[#111114]/80 rounded-2xl overflow-hidden backdrop-blur-sm">
          {/* Description header with arrow */}
          <div className="p-5 pb-4 relative">
            <p className="text-[14px] text-zinc-300 leading-relaxed pr-12 font-light">
              {project.description}
            </p>
          </div>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="px-5 pb-5">
              {project.screenshots.length === 1 ? (
                <div className="rounded-xl overflow-hidden border border-zinc-800/50">
                  <Image
                    src={project.screenshots[0]}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover"
                    priority={index === 0}
                  />
                </div>
              ) : (
                <div className="flex gap-2">
                  {project.screenshots.slice(0, 3).map((screenshot) => (
                    <div
                      key={screenshot}
                      className="flex-1 rounded-xl overflow-hidden border border-zinc-800/50"
                    >
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot`}
                        width={160}
                        height={280}
                        className="w-full h-44 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Link>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#161618] border border-zinc-800 rounded-full text-[11px] text-zinc-300 hover:border-zinc-600 transition-colors"
          >
            <span className="uppercase tracking-wider font-medium">{tag}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const t = useTranslations("workPage");
  const locale = useLocale();
  const projects = getProjects(locale);

  return (
    <main className="min-h-screen bg-[#0a0a0b] relative">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "none",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 max-w-6xl mx-auto text-center relative z-10">
        <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-5">
          {t("label")}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-tight">
          {t("curated")}{" "}
          <span className="gradient-text-pink font-serif italic">
            {t("work")}
          </span>
        </h1>
      </section>

      {/* Projects Timeline */}
      <section className="px-6 py-12 max-w-7xl mx-auto relative z-10">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700/60 to-transparent hidden lg:block" />

        {/* Projects - only show left column items on mobile to avoid duplication */}
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10 hidden lg:flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 ring-4 ring-[#0a0a0b]" />
              </div>

              {/* Desktop: Two columns */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-0">
                {/* Left column */}
                <div className="flex justify-end pr-20">
                  {index % 2 === 0 ? (
                    <ProjectCard project={project} index={index} />
                  ) : (
                    <div />
                  )}
                </div>

                {/* Right column */}
                <div className="flex justify-start pl-20">
                  {index % 2 !== 0 ? (
                    <ProjectCard project={project} index={index} />
                  ) : (
                    <div />
                  )}
                </div>
              </div>

              {/* Mobile: Single column centered */}
              <div className="lg:hidden flex justify-center">
                <ProjectCard project={project} index={index} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
