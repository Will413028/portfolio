import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

// Tech icon mapping with proper SVG icons from original website
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, string> = {
    "Next.js": "https://ext.same-assets.com/4210891837/3713030905.svg",
    "React": "https://ext.same-assets.com/4210891837/1405948304.svg",
    "TypeScript": "https://ext.same-assets.com/4210891837/2528715604.svg",
    "Tailwind CSS": "https://ext.same-assets.com/4210891837/3016618163.svg",
    "Shadcn UI": "https://ext.same-assets.com/4210891837/1642891050.svg",
    "TanStack Query": "https://ext.same-assets.com/4210891837/4137464814.svg",
    "Zustand": "https://ext.same-assets.com/4210891837/4267146031.svg",
    "Motion.dev": "https://ext.same-assets.com/4210891837/3920898803.svg",
    "Node.js": "https://ext.same-assets.com/4210891837/4183917616.svg",
    "Express.js": "https://ext.same-assets.com/4210891837/2102192602.svg",
    "Bun": "https://ext.same-assets.com/4210891837/3695715617.svg",
    "MongoDB": "https://ext.same-assets.com/4210891837/2421081261.svg",
    "Zod": "https://ext.same-assets.com/4210891837/142762284.svg",
    "Razorpay": "https://ext.same-assets.com/4210891837/11295171.svg",
    "Turborepo": "https://ext.same-assets.com/4210891837/777266580.svg",
    "Docker": "https://ext.same-assets.com/4210891837/741527898.svg",
    "React-Native": "https://ext.same-assets.com/4210891837/1405948304.svg",
    "Expo": "https://ext.same-assets.com/4210891837/2946458762.svg",
    "Firebase": "https://ext.same-assets.com/4210891837/1880224428.svg",
    "Cloudinary": "https://ext.same-assets.com/4210891837/1880224428.svg",
    "Reanimated": "https://ext.same-assets.com/4210891837/3920898803.svg",
    "Gifted-Charts": "https://ext.same-assets.com/4210891837/3920898803.svg",
    "Sanity CMS": "https://ext.same-assets.com/4210891837/4208628319.svg",
    "Better Auth": "https://ext.same-assets.com/4210891837/2980670338.svg",
    "GROQ": "https://ext.same-assets.com/4210891837/1786905707.svg",
    "Sentry": "https://ext.same-assets.com/4210891837/1786905707.svg",
    "Markdown": "https://ext.same-assets.com/4210891837/1406879536.svg",
    "Parallax": "https://ext.same-assets.com/4210891837/3920898803.svg",
    "Vercel": "https://ext.same-assets.com/4210891837/2047475379.svg",
    "HighlightJS": "https://ext.same-assets.com/4210891837/3920898803.svg",
    "Hotkeys Hook": "https://ext.same-assets.com/4210891837/617334745.svg",
    "FFmpeg": "https://ext.same-assets.com/4210891837/2120376593.svg",
    "PostgreSQL": "https://ext.same-assets.com/4210891837/4074329355.svg",
    "Prisma ORM": "https://ext.same-assets.com/4210891837/3295269427.svg",
    "MDX": "https://ext.same-assets.com/4210891837/172607403.svg",
  };
  return iconMap[tech] || null;
};

// Decorative gradient arrow SVGs for each project from original website
const decorativeArrows = [
  "https://ext.same-assets.com/4210891837/1710691793.svg", // project 1
  "https://ext.same-assets.com/4210891837/1549852767.svg", // project 2
  "https://ext.same-assets.com/4210891837/2171624552.svg", // project 3
  "https://ext.same-assets.com/4210891837/2377463393.svg", // project 4
  "https://ext.same-assets.com/4210891837/783673468.svg",  // project 5
  "https://ext.same-assets.com/4210891837/2334167925.svg", // project 6
  "https://ext.same-assets.com/4210891837/1454374180.svg", // project 7
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const projectNumber = String(index + 1).padStart(2, '0');
  const decorativeArrow = decorativeArrows[index % decorativeArrows.length];

  return (
    <div className="w-full max-w-[460px]">
      {/* Header: Number --- TYPE and Date */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-zinc-500 font-light">{projectNumber}</span>
          <div className="h-px bg-zinc-700 w-10" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{project.type}</span>
        </div>
        <span className="text-[11px] text-zinc-500 tracking-wide">{project.quarter}</span>
      </div>

      {/* Title */}
      <Link href={`/work/${project.slug}`} className="group block mb-4">
        <h2 className="text-[26px] font-serif text-white group-hover:text-zinc-300 transition-colors leading-tight">
          {project.title}
          {project.subtitle && (
            <span className="text-zinc-500 ml-2 text-[20px] font-serif">{project.subtitle}</span>
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
            {/* Decorative gradient arrow SVG */}
            <div className="absolute top-4 right-4 w-8 h-8 opacity-90">
              <Image
                src={decorativeArrow}
                alt=""
                width={32}
                height={32}
                className="w-full h-full"
              />
            </div>

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
                  />
                </div>
              ) : (
                <div className="flex gap-2">
                  {project.screenshots.slice(0, 3).map((screenshot, i) => (
                    <div key={i} className="flex-1 rounded-xl overflow-hidden border border-zinc-800/50">
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${i + 1}`}
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
        {project.tags.map((tag) => {
          const icon = getTechIcon(tag);
          return (
            <span
              key={tag}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#161618] border border-zinc-800 rounded-full text-[11px] text-zinc-300 hover:border-zinc-600 transition-colors"
            >
              {icon && (
                <Image
                  src={icon}
                  alt={tag}
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5"
                />
              )}
              <span className="uppercase tracking-wider font-medium">{tag}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] relative">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/4210891837/2445232556.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-16 max-w-6xl mx-auto text-center relative z-10">
        <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-5">Case Studies</p>
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-tight">
          Curated <span className="gradient-text-pink font-serif italic">Work</span>
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

      <Footer />
    </main>
  );
}
