"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/projects";

// Decorative gradient arrow SVGs from original website
const decorativeArrows = [
  "https://ext.same-assets.com/4210891837/1710691793.svg", // project 1
  "https://ext.same-assets.com/4210891837/1549852767.svg", // project 2
  "https://ext.same-assets.com/4210891837/2171624552.svg", // project 3
  "https://ext.same-assets.com/4210891837/2377463393.svg", // project 4
];

export default function CaseStudies() {
  const displayProjects = projects.slice(0, 4);

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 mb-4">
          Case Studies
        </p>
        <h2 className="text-4xl md:text-5xl font-medium">
          Curated{" "}
          <span className="font-serif italic gradient-text-pink">work</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {displayProjects.map((project, index) => {
          const decorativeArrow =
            decorativeArrows[index % decorativeArrows.length];

          return (
            <div key={project.id} className="flex flex-col">
              {/* Header: Type and Date */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  {project.type}
                </span>
                <span className="text-[11px] text-zinc-500">
                  {project.quarter}
                </span>
              </div>

              {/* Title */}
              <Link href={`/work/${project.slug}`} className="group block mb-3">
                <h3 className="text-xl font-serif text-white group-hover:text-zinc-300 transition-colors">
                  {project.title}
                  {project.subtitle && (
                    <span className="text-zinc-500 ml-2 text-base font-serif">
                      {project.subtitle}
                    </span>
                  )}
                </h3>
              </Link>

              {/* Project Card with subtle gradient border */}
              <Link
                href={`/work/${project.slug}`}
                className="group block relative rounded-2xl overflow-hidden mb-4 flex-1"
              >
                {/* Subtle gradient border - thin line effect */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-cyan-500/25">
                  <div className="absolute inset-[1px] rounded-[15px] bg-[#111113]" />
                </div>

                {/* Card background */}
                <div className="relative bg-[#111113]/80 rounded-2xl overflow-hidden h-full flex flex-col backdrop-blur-sm">
                  {/* Description header with arrow */}
                  <div className="p-5 pb-4 relative">
                    {/* Decorative gradient arrow SVG */}
                    <div className="absolute top-4 right-4 w-7 h-7 opacity-90">
                      <Image
                        src={decorativeArrow}
                        alt=""
                        width={28}
                        height={28}
                        className="w-full h-full"
                      />
                    </div>

                    <p className="text-[13px] text-zinc-300 leading-relaxed pr-10 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Screenshot */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="px-5 pb-5 flex-1">
                      <div className="rounded-xl overflow-hidden border border-zinc-800/50 h-full">
                        <Image
                          src={project.screenshots[0]}
                          alt={project.title}
                          width={600}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/work"
          className="group inline-flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <span className="uppercase tracking-[0.2em]">See more projects</span>
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
}
